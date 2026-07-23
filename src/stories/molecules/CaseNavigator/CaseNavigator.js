import css from './case-navigator.css?inline';
import '../../atoms/Button/Button.js';
import '../../atoms/Divider/Divider.js';
import '../../molecules/Tooltip/Tooltip.js';

export class CaseNavigator extends HTMLElement {
  static get observedAttributes() {
    return [
      'current-index',
      'total-cases',
      'search-expanded',
      'placeholder',
      'disabled',
      'value',
      'label-prev',
      'label-next',
      'tooltip-search',
      'tooltip-close-search',
      'tooltip-prev',
      'tooltip-next',
      'kbd-search-label',
      'kbd-search-key',
      'kbd-search-show-plus',
      'kbd-close-search-label',
      'kbd-close-search-key',
      'kbd-close-search-show-plus',
      'kbd-prev-label',
      'kbd-prev-key',
      'kbd-prev-show-plus',
      'kbd-next-label',
      'kbd-next-key',
      'kbd-next-show-plus',
      'aria-label',
      'search-aria-label',
      'prev-aria-label',
      'next-aria-label'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._results = [];
    this._highlightIndex = -1;
    
    // Single-line compressed template string eliminating whitespace text nodes around slots and icons
    this.shadowRoot.innerHTML = `<style>${css}</style><div id="autocomplete-menu" class="autocomplete-menu"></div><div class="case-navigator-container"><div class="search-wrapper"><div class="tooltip-wrapper"><ds-button tabindex="0" class="btn-case-search" variant="icon" icon="search"></ds-button><ds-tooltip class="tooltip-search" position="top"></ds-tooltip></div><input type="text" class="case-search-input" role="combobox" aria-autocomplete="list" aria-haspopup="listbox" aria-controls="autocomplete-menu" aria-expanded="false" autocomplete="off" tabindex="-1"></div><div class="nav-content-wrapper"><ds-divider class="nav-divider" orientation="vertical"></ds-divider><div class="nav-buttons-wrapper"><div class="tooltip-wrapper"><ds-button tabindex="0" class="btn-prev-case" variant="text" icon="arrow-left" icon-variant="fill" icon-position="left"><span class="label-prev-text">Previous</span></ds-button><ds-tooltip class="tooltip-prev" position="top"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button tabindex="0" class="btn-next-case" variant="text" icon="arrow-right" icon-variant="fill" icon-position="right"><span class="label-next-text">Next</span></ds-button><ds-tooltip class="tooltip-next" position="top"></ds-tooltip></div></div></div></div>`;

    this.searchBtn = this.shadowRoot.querySelector('.btn-case-search');
    this.searchInput = this.shadowRoot.querySelector('.case-search-input');
    this.tooltipSearchEl = this.shadowRoot.querySelector('.tooltip-search');
    
    this.btnPrev = this.shadowRoot.querySelector('.btn-prev-case');
    this.labelPrevEl = this.shadowRoot.querySelector('.label-prev-text');
    this.tooltipPrevEl = this.shadowRoot.querySelector('.tooltip-prev');

    this.btnNext = this.shadowRoot.querySelector('.btn-next-case');
    this.labelNextEl = this.shadowRoot.querySelector('.label-next-text');
    this.tooltipNextEl = this.shadowRoot.querySelector('.tooltip-next');

    this.menuEl = this.shadowRoot.querySelector('.autocomplete-menu');

    this._bindEvents();
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this._attachGlobalKeydown();
    this.updateAttributes();
  }

  disconnectedCallback() {
    if (this._themeObserver) this._themeObserver.disconnect();
    this._detachGlobalKeydown();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'value') {
        if (this.searchInput && this.searchInput.value !== newValue) {
          this.searchInput.value = newValue || '';
          this.renderAutocomplete();
        }
      } else {
        this.updateAttributes();
      }
    }
  }

  set results(val) {
    this._results = Array.isArray(val) ? val : [];
    this.renderAutocomplete();
  }

  get results() {
    return this._results;
  }

  set value(val) {
    this.setAttribute('value', val || '');
  }

  get value() {
    return this.searchInput ? this.searchInput.value : '';
  }

  _bindEvents() {
    // Enable Keyboard Navigation (Space & Enter Execution) on all Buttons
    [this.searchBtn, this.btnPrev, this.btnNext].forEach((btn) => {
      if (!btn) return;
      btn.addEventListener('keydown', (e) => {
        const isSpace = e.key === ' ' || e.key === 'Space' || e.key === 'Spacebar' || e.code === 'Space';
        const isEnter = e.key === 'Enter';
        if (isSpace || isEnter) {
          e.preventDefault();
          btn.click();
        }
      });
    });

    // Search Button Toggle
    this.searchBtn.addEventListener('click', () => {
      if (this.hasAttribute('disabled')) return;
      const isExpanded = this.getAttribute('search-expanded') === 'true';
      const nextState = !isExpanded;

      this.setAttribute('search-expanded', nextState.toString());

      if (nextState) {
        setTimeout(() => this.searchInput.focus(), 50);
        if (this.searchInput.value) {
          this.renderAutocomplete();
        }
      } else {
        this.closeSearch();
      }
    });

    // Navigation Buttons Triggers
    this.btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.btnPrev.hasAttribute('disabled') || this.hasAttribute('disabled')) return;
      
      const currentIndex = parseInt(this.getAttribute('current-index') || '0', 10);
      const nextIndex = Math.max(0, currentIndex - 1);
      
      this.setAttribute('current-index', nextIndex.toString());
      this.dispatchEvent(new CustomEvent('ds-case-prev', {
        detail: { index: nextIndex },
        bubbles: true,
        composed: true,
      }));
      this.dispatchEvent(new CustomEvent('ds-case-select', {
        detail: { index: nextIndex },
        bubbles: true,
        composed: true,
      }));
    });

    this.btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.btnNext.hasAttribute('disabled') || this.hasAttribute('disabled')) return;

      const currentIndex = parseInt(this.getAttribute('current-index') || '0', 10);
      const totalCases = parseInt(this.getAttribute('total-cases') || '1', 10);
      const nextIndex = Math.min(totalCases - 1, currentIndex + 1);

      this.setAttribute('current-index', nextIndex.toString());
      this.dispatchEvent(new CustomEvent('ds-case-next', {
        detail: { index: nextIndex },
        bubbles: true,
        composed: true,
      }));
      this.dispatchEvent(new CustomEvent('ds-case-select', {
        detail: { index: nextIndex },
        bubbles: true,
        composed: true,
      }));
    });

    // Input Typing & Keyboard Autocomplete Navigation
    this.searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      this._highlightIndex = -1;
      
      this.dispatchEvent(new CustomEvent('ds-search-input', {
        detail: { value: query },
        bubbles: true,
        composed: true,
      }));

      this.renderAutocomplete();
    });

    this.searchInput.addEventListener('keydown', (e) => {
      const items = Array.from(this.menuEl.querySelectorAll('.autocomplete-item'));

      if (e.key === 'ArrowDown' && items.length > 0) {
        e.preventDefault();
        this._highlightIndex = Math.min(this._highlightIndex + 1, items.length - 1);
        this._updateHighlight(items);
      } else if (e.key === 'ArrowUp' && items.length > 0) {
        e.preventDefault();
        this._highlightIndex = Math.max(this._highlightIndex - 1, 0);
        this._updateHighlight(items);
      } else if (e.key === 'Enter') {
        if (items.length > 0) {
          e.preventDefault();
          const targetIndex = this._highlightIndex >= 0 ? this._highlightIndex : 0;
          items[targetIndex]?.click();
        }
      }
    });

    // Close Autocomplete on Click Outside
    document.addEventListener('click', (e) => {
      if (!e.composedPath().includes(this)) {
        this.hideAutocomplete();
      }
    });
  }

  closeSearch() {
    this.searchInput.value = '';
    this.removeAttribute('value');
    this.hideAutocomplete();
    this.setAttribute('search-expanded', 'false');
    this.dispatchEvent(new CustomEvent('ds-search-input', {
      detail: { value: '' },
      bubbles: true,
      composed: true,
    }));
  }

  _updateHighlight(items) {
    items.forEach((item, idx) => {
      if (idx === this._highlightIndex) {
        item.classList.add('selected');
        item.setAttribute('aria-selected', 'true');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
        item.setAttribute('aria-selected', 'false');
      }
    });
  }

  _attachGlobalKeydown() {
    this._keydownHandler = (e) => {
      const isInputFocused = this.shadowRoot.activeElement === this.searchInput;
      const isAnyOtherInputFocused = !isInputFocused && (
        ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) ||
        ['INPUT', 'TEXTAREA'].includes(document.activeElement?.shadowRoot?.activeElement?.tagName)
      );
      if (isAnyOtherInputFocused) return;

      const isExpanded = this.getAttribute('search-expanded') === 'true';
      const kbdSearchLabel = (this.getAttribute('kbd-search-label') || 'S').toLowerCase();
      const kbdCloseSearchLabel = (this.getAttribute('kbd-close-search-label') || 'X').toLowerCase();
      const kbdPrevLabel = this.getAttribute('kbd-prev-label') || '←';
      const kbdNextLabel = this.getAttribute('kbd-next-label') || '→';

      const keyLower = e.key.toLowerCase();

      if (isExpanded) {
        if (!isInputFocused && keyLower === kbdCloseSearchLabel) {
          e.preventDefault();
          this.closeSearch();
          this.searchBtn.focus();
        }
      } else {
        if (!isInputFocused && keyLower === kbdSearchLabel) {
          e.preventDefault();
          this.setAttribute('search-expanded', 'true');
          setTimeout(() => this.searchInput.focus(), 50);
        } else if (!isInputFocused && (e.key === kbdPrevLabel || e.key === 'ArrowLeft')) {
          if (!this.btnPrev.hasAttribute('disabled') && !this.hasAttribute('disabled')) {
            e.preventDefault();
            this.btnPrev.click();
          }
        } else if (!isInputFocused && (e.key === kbdNextLabel || e.key === 'ArrowRight')) {
          if (!this.btnNext.hasAttribute('disabled') && !this.hasAttribute('disabled')) {
            e.preventDefault();
            this.btnNext.click();
          }
        }
      }
    };
    window.addEventListener('keydown', this._keydownHandler);
  }

  _detachGlobalKeydown() {
    if (this._keydownHandler) {
      window.removeEventListener('keydown', this._keydownHandler);
    }
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
      this.toggleAttribute('a11y-focus-mode', root.classList.contains('a11y-focus-mode'));
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
  }

  updateAttributes() {
    const isExpanded = this.getAttribute('search-expanded') === 'true';
    const isDisabled = this.hasAttribute('disabled');
    
    const currentIndex = parseInt(this.getAttribute('current-index') || '0', 10);
    const totalCases = parseInt(this.getAttribute('total-cases') || '1', 10);

    // Host ARIA Scrubbing Pattern
    const hostAriaLabel = this.getAttribute('aria-label');

    // Localization Strings & Valid Attribute Fallbacks
    const placeholder = this.getAttribute('placeholder') || 'Search cases...';
    const labelPrev = this.getAttribute('label-prev') || 'Previous';
    const labelNext = this.getAttribute('label-next') || 'Next';

    const tooltipSearch = this.getAttribute('tooltip-search') || 'Search';
    const tooltipCloseSearch = this.getAttribute('tooltip-close-search') || 'Close search';
    const tooltipPrev = this.getAttribute('tooltip-prev') || 'Previous case';
    const tooltipNext = this.getAttribute('tooltip-next') || 'Next case';

    // Tooltip Keyboard Shortcut Attributes
    const kbdSearchLabel = this.getAttribute('kbd-search-label') || 'S';
    const kbdSearchKey = this.getAttribute('kbd-search-key');
    const kbdSearchShowPlus = this.hasAttribute('kbd-search-show-plus');

    const kbdCloseSearchLabel = this.getAttribute('kbd-close-search-label') || 'X';
    const kbdCloseSearchKey = this.getAttribute('kbd-close-search-key');
    const kbdCloseSearchShowPlus = this.hasAttribute('kbd-close-search-show-plus');

    const kbdPrevLabel = this.getAttribute('kbd-prev-label') || '←';
    const kbdPrevKey = this.getAttribute('kbd-prev-key');
    const kbdPrevShowPlus = this.hasAttribute('kbd-prev-show-plus');

    const kbdNextLabel = this.getAttribute('kbd-next-label') || '→';
    const kbdNextKey = this.getAttribute('kbd-next-key');
    const kbdNextShowPlus = this.hasAttribute('kbd-next-show-plus');

    const ariaLabelSearch = hostAriaLabel || this.getAttribute('search-aria-label') || 'Search cases';
    const ariaLabelPrev = this.getAttribute('prev-aria-label') || 'Previous case';
    const ariaLabelNext = this.getAttribute('next-aria-label') || 'Next case';

    if (hostAriaLabel) {
      this.removeAttribute('aria-label');
    }

    const attrVal = this.getAttribute('value');

    // Previous & Next Disabled Bounds Handling
    const isPrevDisabled = isDisabled || currentIndex <= 0;
    const isNextDisabled = isDisabled || currentIndex >= totalCases - 1;

    // Input Control & Accessibility Attributes Setup
    this.searchBtn.disabled = isDisabled;
    this.searchInput.disabled = isDisabled;
    this.searchInput.setAttribute('placeholder', placeholder);
    this.searchInput.setAttribute('aria-label', ariaLabelSearch);
    this.searchInput.setAttribute('aria-expanded', isExpanded.toString());

    if (attrVal !== null && this.searchInput.value !== attrVal) {
      this.searchInput.value = attrVal;
    }

    // Tab Index Management for Tab Key Navigation Flow
    if (isExpanded) {
      this.searchBtn.setAttribute('tabindex', '0');
      this.searchInput.setAttribute('tabindex', '0');
      this.btnPrev.setAttribute('tabindex', '-1');
      this.btnNext.setAttribute('tabindex', '-1');
    } else {
      this.searchBtn.setAttribute('tabindex', '0');
      this.searchInput.setAttribute('tabindex', '-1');
      this.btnPrev.setAttribute('tabindex', isPrevDisabled ? '-1' : '0');
      this.btnNext.setAttribute('tabindex', isNextDisabled ? '-1' : '0');
    }

    if (isPrevDisabled) {
      this.btnPrev.setAttribute('disabled', 'true');
    } else {
      this.btnPrev.removeAttribute('disabled');
    }

    if (isNextDisabled) {
      this.btnNext.setAttribute('disabled', 'true');
    } else {
      this.btnNext.removeAttribute('disabled');
    }

    // Assign Labels & ARIA Attributes
    this.labelPrevEl.textContent = labelPrev;
    this.labelNextEl.textContent = labelNext;

    this.searchBtn.setAttribute('aria-label', isExpanded ? tooltipCloseSearch : ariaLabelSearch);
    this.btnPrev.setAttribute('aria-label', ariaLabelPrev);
    this.btnNext.setAttribute('aria-label', ariaLabelNext);

    // Helper to configure tooltips with proper kbd-label mapping
    const setTooltipProps = (tooltipEl, text, kbdLabel, kbdKey, showPlus) => {
      if (!tooltipEl) return;
      tooltipEl.setAttribute('text', text);
      tooltipEl.setAttribute('position', 'top');

      if (kbdLabel) {
        tooltipEl.setAttribute('show-kbd', '');
        tooltipEl.setAttribute('kbd-label', kbdLabel);
      } else {
        tooltipEl.removeAttribute('show-kbd');
        tooltipEl.removeAttribute('kbd-label');
      }

      if (kbdKey) {
        tooltipEl.setAttribute('kbd-key', kbdKey);
      } else {
        tooltipEl.removeAttribute('kbd-key');
      }

      if (showPlus) {
        tooltipEl.setAttribute('kbd-show-plus', '');
      } else {
        tooltipEl.removeAttribute('kbd-show-plus');
      }
    };

    // Search Mode Button & Tooltip Sync
    if (isExpanded) {
      this.searchBtn.setAttribute('icon', 'close');
      setTooltipProps(this.tooltipSearchEl, tooltipCloseSearch, kbdCloseSearchLabel, kbdCloseSearchKey, kbdCloseSearchShowPlus);
      if (this.searchInput.value) {
        this.renderAutocomplete();
      }
    } else {
      this.searchBtn.setAttribute('icon', 'search');
      setTooltipProps(this.tooltipSearchEl, tooltipSearch, kbdSearchLabel, kbdSearchKey, kbdSearchShowPlus);
    }

    // Previous & Next Tooltips Sync
    setTooltipProps(this.tooltipPrevEl, tooltipPrev, kbdPrevLabel, kbdPrevKey, kbdPrevShowPlus);
    setTooltipProps(this.tooltipNextEl, tooltipNext, kbdNextLabel, kbdNextKey, kbdNextShowPlus);
  }

  renderAutocomplete() {
    const query = this.searchInput.value.trim().toLowerCase();

    if (!query || this._results.length === 0) {
      this.hideAutocomplete();
      return;
    }

    const matches = this._results.filter(item => 
      item.title.toLowerCase().includes(query) || 
      (item.snippet && item.snippet.toLowerCase().includes(query))
    );

    if (matches.length === 0) {
      this.hideAutocomplete();
      return;
    }

    this.menuEl.innerHTML = '';
    
    // Dynamically assign role="listbox" and aria-label ONLY when options are rendered
    this.menuEl.setAttribute('role', 'listbox');
    this.menuEl.setAttribute('aria-label', 'Search suggestions');

    matches.forEach((item, idx) => {
      const option = document.createElement('div');
      option.id = `autocomplete-option-${idx}`;
      option.className = `autocomplete-item${idx === this._highlightIndex ? ' selected' : ''}`;
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', idx === this._highlightIndex ? 'true' : 'false');

      const titleEl = document.createElement('div');
      titleEl.className = 'autocomplete-item-title';
      titleEl.textContent = item.title;

      const snippetEl = document.createElement('div');
      snippetEl.className = 'autocomplete-item-snippet';
      
      if (item.snippet) {
        const regex = new RegExp(`(${query})`, 'gi');
        snippetEl.innerHTML = item.snippet.replace(regex, '<mark>$1</mark>');
      }

      option.appendChild(titleEl);
      option.appendChild(snippetEl);

      option.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('ds-search-select', {
          detail: { item, id: item.id },
          bubbles: true,
          composed: true,
        }));
        this.closeSearch();
      });

      this.menuEl.appendChild(option);
    });

    this.menuEl.classList.add('visible');
  }

  hideAutocomplete() {
    this._highlightIndex = -1;
    this.menuEl.classList.remove('visible');
    
    // Remove both role and aria-label when menu is hidden to prevent aria-prohibited-attr and aria-required-children errors
    this.menuEl.removeAttribute('role');
    this.menuEl.removeAttribute('aria-label');
  }
}

if (!customElements.get('ds-case-navigator')) {
  customElements.define('ds-case-navigator', CaseNavigator);
}
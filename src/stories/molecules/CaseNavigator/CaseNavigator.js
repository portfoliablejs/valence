import css from './case-navigator.css?inline';
import '../../atoms/Button/Button.js';
import '../../atoms/Divider/Divider.js';
import '../../molecules/Tooltip/Tooltip.js';

const MAX_AUTOCOMPLETE_RESULTS = 12;

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
      'next-aria-label',
      'mirror-nav-order-in-rtl',
      'dir'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._results = [];
    this._searchIndex = [];
    this._highlightIndex = -1;
    this._visibleMatches = [];
    this._lastAutocompleteSignature = '';
    this._lastSearchQuery = '';
    this._lastMatchPool = [];
    this._autocompleteFrame = 0;
    
    // Single-line compressed template string eliminating whitespace text nodes around slots and icons
    this.shadowRoot.innerHTML = `<style>${css}</style><div id="autocomplete-menu" class="autocomplete-menu"></div><div class="case-navigator-container"><div class="search-wrapper"><div class="tooltip-wrapper"><ds-button tabindex="0" class="btn-case-search" variant="tertiary" has-text="false" has-icon icon="search"></ds-button><ds-tooltip class="tooltip-search" position="top"></ds-tooltip></div><input type="text" class="case-search-input" role="combobox" aria-autocomplete="list" aria-haspopup="listbox" aria-controls="autocomplete-menu" aria-expanded="false" autocomplete="off" tabindex="-1"></div><div class="nav-content-wrapper"><ds-divider class="nav-divider" orientation="vertical"></ds-divider><div class="nav-buttons-wrapper"><div class="tooltip-wrapper"><ds-button tabindex="0" class="btn-prev-case" variant="tertiary" has-icon icon="arrow-left" icon-variant="fill" icon-position="left"><span class="label-prev-text"></span></ds-button><ds-tooltip class="tooltip-prev" position="top"></ds-tooltip></div><div class="tooltip-wrapper"><ds-button tabindex="0" class="btn-next-case" variant="tertiary" has-icon icon="arrow-right" icon-variant="fill" icon-position="right"><span class="label-next-text"></span></ds-button><ds-tooltip class="tooltip-next" position="top"></ds-tooltip></div></div></div></div>`;

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
    if (this._autocompleteFrame) {
      cancelAnimationFrame(this._autocompleteFrame);
      this._autocompleteFrame = 0;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'value') {
        if (this.searchInput && this.searchInput.value !== newValue) {
          this.searchInput.value = newValue || '';
          this._scheduleAutocompleteRender();
        }
      } else {
        this.updateAttributes();
      }
    }
  }

  set results(val) {
    const nextResults = Array.isArray(val) ? val : [];
    if (nextResults === this._results) return;

    this._results = nextResults;
    this._searchIndex = nextResults.map((item) => ({
      ...item,
      _searchTitleEnabled: Boolean(item?.searchInTitle),
      _searchTitle: item?.searchInTitle ? String(item?.title || '').toLowerCase() : '',
      _searchSnippet: String(item?.snippet || '').toLowerCase(),
      _searchableText: String(item?.searchableText || item?.snippet || ''),
      _searchableTextLower: String(item?.searchableText || item?.snippet || '').toLowerCase()
    }));
    this._lastAutocompleteSignature = '';
    this._lastSearchQuery = '';
    this._lastMatchPool = this._searchIndex;
    this._scheduleAutocompleteRender();
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
          this._scheduleAutocompleteRender();
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
      const matchesCloseSearch = this._matchesShortcut(e, {
        labelAttr: 'kbd-close-search-label',
        keyAttr: 'kbd-close-search-key',
        showPlusAttr: 'kbd-close-search-show-plus',
        fallbackLabel: 'X'
      });

      if (matchesCloseSearch) {
        e.stopPropagation();
        e.preventDefault();
        this.closeSearch();
        this.searchBtn.focus();
        return;
      }

      if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
        e.stopPropagation();
      }

      if (e.key === 'ArrowDown' && items.length > 0) {
        e.stopPropagation();
        e.preventDefault();
        this._highlightIndex = Math.min(this._highlightIndex + 1, items.length - 1);
        this._updateHighlight(items);
      } else if (e.key === 'ArrowUp' && items.length > 0) {
        e.stopPropagation();
        e.preventDefault();
        this._highlightIndex = Math.max(this._highlightIndex - 1, 0);
        this._updateHighlight(items);
      } else if (e.key === 'Enter') {
        if (items.length > 0) {
          e.stopPropagation();
          e.preventDefault();
          const targetIndex = this._highlightIndex >= 0 ? this._highlightIndex : 0;
          items[targetIndex]?.click();
        }
      }
    });

    this.menuEl.addEventListener('click', (e) => {
      const option = e.target instanceof Element ? e.target.closest('.autocomplete-item') : null;
      if (!(option instanceof HTMLElement)) return;

      const matchIndex = Number.parseInt(option.dataset.matchIndex || '', 10);
      const item = Number.isInteger(matchIndex) ? this._visibleMatches[matchIndex] : null;
      if (!item) return;

      this.dispatchEvent(new CustomEvent('ds-search-select', {
        detail: { item, id: item.id },
        bubbles: true,
        composed: true,
      }));
      this.closeSearch();
    });

    // Close Autocomplete on Click Outside
    document.addEventListener('click', (e) => {
      if (!e.composedPath().includes(this)) {
        this.hideAutocomplete();
      }
    });
  }

  _normalizeSearchQuery(value) {
    return String(value || '').trim().toLowerCase();
  }

  _getAutocompleteMatches(query) {
    const sourcePool = query.startsWith(this._lastSearchQuery)
      ? this._lastMatchPool
      : this._searchIndex;
    const allMatches = [];
    const visibleMatches = [];

    for (const item of sourcePool) {
      if ((item._searchTitleEnabled && item._searchTitle.includes(query)) || item._searchSnippet.includes(query) || item._searchableTextLower.includes(query)) {
        allMatches.push(item);
        if (visibleMatches.length < MAX_AUTOCOMPLETE_RESULTS) {
          visibleMatches.push(item);
        }
      }
    }

    this._lastSearchQuery = query;
    this._lastMatchPool = allMatches;

    return visibleMatches;
  }

  _resolveMatchSnippet(item, query) {
    const baseSnippet = String(item?.snippet || '').trim();
    if (baseSnippet && baseSnippet.toLowerCase().includes(query)) {
      return baseSnippet;
    }

    const searchableText = String(item?._searchableText || item?.searchableText || '').replace(/\s+/g, ' ').trim();
    if (!searchableText) return baseSnippet;

    const lowerText = searchableText.toLowerCase();
    const matchIndex = lowerText.indexOf(query);
    if (matchIndex < 0) return baseSnippet || searchableText.slice(0, 160);

    const contextRadius = 72;
    const start = Math.max(0, matchIndex - contextRadius);
    const end = Math.min(searchableText.length, matchIndex + query.length + contextRadius);
    const prefix = start > 0 ? '...' : '';
    const suffix = end < searchableText.length ? '...' : '';
    return `${prefix}${searchableText.slice(start, end).trim()}${suffix}`;
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

  _matchesShortcut(event, {
    labelAttr,
    keyAttr,
    showPlusAttr,
    fallbackLabel,
    fallbackKey = ''
  }) {
    if (!event) return false;

    const modifierLabel = String(this.getAttribute(labelAttr) || fallbackLabel || '').trim().toLowerCase();
    const keyValue = String(this.getAttribute(keyAttr) || fallbackKey || fallbackLabel || '').trim().toLowerCase();
    const requiresModifier = this.hasAttribute(showPlusAttr);

    if (!keyValue) return false;

    const keyMatches = event.key.toLowerCase() === keyValue;
    if (!keyMatches) return false;

    if (!requiresModifier) {
      return !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey;
    }

    const expectedModifiers = {
      ctrlKey: /(ctrl|control|ctl|⌃)/.test(modifierLabel),
      metaKey: /(cmd|command|meta|⌘)/.test(modifierLabel),
      altKey: /(alt|option|⌥)/.test(modifierLabel),
      shiftKey: /(shift|⇧)/.test(modifierLabel)
    };

    return Object.entries(expectedModifiers).every(([modifierName, expected]) => Boolean(event[modifierName]) === expected);
  }

  _attachGlobalKeydown() {
    this._keydownHandler = (e) => {
      const isRtl = (this.getAttribute('dir') || 'ltr') === 'rtl';
      const fallbackPrevKbdLabel = isRtl ? '→' : '←';
      const fallbackNextKbdLabel = isRtl ? '←' : '→';
      const isInputFocused = this.shadowRoot.activeElement === this.searchInput;
      const isAnyOtherInputFocused = !isInputFocused && (
        ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) ||
        ['INPUT', 'TEXTAREA'].includes(document.activeElement?.shadowRoot?.activeElement?.tagName)
      );
      if (isAnyOtherInputFocused) return;

      const isExpanded = this.getAttribute('search-expanded') === 'true';
      const kbdPrevLabel = this.getAttribute('kbd-prev-label') || fallbackPrevKbdLabel;
      const kbdNextLabel = this.getAttribute('kbd-next-label') || fallbackNextKbdLabel;
      const matchesOpenSearch = this._matchesShortcut(e, {
        labelAttr: 'kbd-search-label',
        keyAttr: 'kbd-search-key',
        showPlusAttr: 'kbd-search-show-plus',
        fallbackLabel: 'S'
      });
      const matchesCloseSearch = this._matchesShortcut(e, {
        labelAttr: 'kbd-close-search-label',
        keyAttr: 'kbd-close-search-key',
        showPlusAttr: 'kbd-close-search-show-plus',
        fallbackLabel: 'X'
      });

      if (isExpanded) {
        if (matchesCloseSearch) {
          e.preventDefault();
          this.closeSearch();
          this.searchBtn.focus();
        }
      } else {
        if (!isInputFocused && matchesOpenSearch) {
          e.preventDefault();
          this.setAttribute('search-expanded', 'true');
          setTimeout(() => this.searchInput.focus(), 50);
        } else if (!isInputFocused && (e.key === kbdPrevLabel || (!isRtl && e.key === 'ArrowLeft') || (isRtl && e.key === 'ArrowRight'))) {
          if (!this.btnPrev.hasAttribute('disabled') && !this.hasAttribute('disabled')) {
            e.preventDefault();
            this.btnPrev.click();
          }
        } else if (!isInputFocused && (e.key === kbdNextLabel || (!isRtl && e.key === 'ArrowRight') || (isRtl && e.key === 'ArrowLeft'))) {
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
      const currentDir = root.getAttribute('dir') || 'ltr';
      this.setAttribute('dir', currentDir);
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
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class', 'dir'] });
  }

  _shouldMirrorNavOrderInRtl() {
    return this.getAttribute('mirror-nav-order-in-rtl') !== 'false';
  }

  updateAttributes() {
    const isRtl = (this.getAttribute('dir') || 'ltr') === 'rtl';
    const shouldMirrorRtlNavOrder = isRtl && this._shouldMirrorNavOrderInRtl();
    this.toggleAttribute('data-rtl-nav-mirrored', shouldMirrorRtlNavOrder);
    const fallbackPrevKbdLabel = isRtl ? '→' : '←';
    const fallbackNextKbdLabel = isRtl ? '←' : '→';
    const isExpanded = this.getAttribute('search-expanded') === 'true';
    const isDisabled = this.hasAttribute('disabled');
    
    const currentIndex = parseInt(this.getAttribute('current-index') || '0', 10);
    const totalCases = parseInt(this.getAttribute('total-cases') || '1', 10);

    // Host ARIA Scrubbing Pattern
    const hostAriaLabel = this.getAttribute('aria-label');

    // Localization Strings & Valid Attribute Fallbacks
    const placeholder = this.getAttribute('placeholder') || '';
    const labelPrev = this.getAttribute('label-prev') || '';
    const labelNext = this.getAttribute('label-next') || '';

    const tooltipSearch = this.getAttribute('tooltip-search') || '';
    const tooltipCloseSearch = this.getAttribute('tooltip-close-search') || '';
    const tooltipPrev = this.getAttribute('tooltip-prev') || '';
    const tooltipNext = this.getAttribute('tooltip-next') || '';

    // Tooltip Keyboard Shortcut Attributes
    const kbdSearchLabel = this.getAttribute('kbd-search-label') || 'S';
    const kbdSearchKey = this.getAttribute('kbd-search-key');
    const kbdSearchShowPlus = this.hasAttribute('kbd-search-show-plus');

    const kbdCloseSearchLabel = this.getAttribute('kbd-close-search-label') || 'X';
    const kbdCloseSearchKey = this.getAttribute('kbd-close-search-key');
    const kbdCloseSearchShowPlus = this.hasAttribute('kbd-close-search-show-plus');

    const kbdPrevLabel = this.getAttribute('kbd-prev-label') || fallbackPrevKbdLabel;
    const kbdPrevKey = this.getAttribute('kbd-prev-key');
    const kbdPrevShowPlus = this.hasAttribute('kbd-prev-show-plus');

    const kbdNextLabel = this.getAttribute('kbd-next-label') || fallbackNextKbdLabel;
    const kbdNextKey = this.getAttribute('kbd-next-key');
    const kbdNextShowPlus = this.hasAttribute('kbd-next-show-plus');

    const ariaLabelSearch = hostAriaLabel || this.getAttribute('search-aria-label') || tooltipSearch || placeholder || '';
    const ariaLabelPrev = this.getAttribute('prev-aria-label') || tooltipPrev || labelPrev || '';
    const ariaLabelNext = this.getAttribute('next-aria-label') || tooltipNext || labelNext || '';

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
    this.btnPrev.setAttribute('icon', isRtl ? 'arrow-right' : 'arrow-left');
    this.btnNext.setAttribute('icon', isRtl ? 'arrow-left' : 'arrow-right');
    this.btnPrev.setAttribute('icon-position', isRtl ? 'right' : 'left');
    this.btnNext.setAttribute('icon-position', isRtl ? 'left' : 'right');

    // Helper to configure tooltips with proper kbd-label mapping
    const setTooltipProps = (tooltipEl, text, kbdLabel, kbdKey, showPlus, kbdFirst = false) => {
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

      if (kbdFirst) {
        tooltipEl.setAttribute('kbd-first', '');
      } else {
        tooltipEl.removeAttribute('kbd-first');
      }
    };

    // Search Mode Button & Tooltip Sync
    if (isExpanded) {
      this.searchBtn.setAttribute('icon', 'close');
      setTooltipProps(this.tooltipSearchEl, tooltipCloseSearch, kbdCloseSearchLabel, kbdCloseSearchKey, kbdCloseSearchShowPlus, isRtl);
      if (this.searchInput.value) {
        this.renderAutocomplete();
      }
    } else {
      this.searchBtn.setAttribute('icon', 'search');
      setTooltipProps(this.tooltipSearchEl, tooltipSearch, kbdSearchLabel, kbdSearchKey, kbdSearchShowPlus, isRtl);
    }

    // Previous & Next Tooltips Sync
    setTooltipProps(this.tooltipPrevEl, tooltipPrev, kbdPrevLabel, kbdPrevKey, kbdPrevShowPlus, isRtl);
    setTooltipProps(this.tooltipNextEl, tooltipNext, kbdNextLabel, kbdNextKey, kbdNextShowPlus, isRtl);
  }

  renderAutocomplete() {
    const query = this._normalizeSearchQuery(this.searchInput.value);

    if (!query || this._searchIndex.length === 0) {
      this.hideAutocomplete();
      return;
    }

    const matches = this._getAutocompleteMatches(query);

    if (matches.length === 0) {
      this.hideAutocomplete();
      return;
    }

    const signature = `${query}::${this._highlightIndex}::${matches.map((item) => item.id).join('|')}`;
    if (signature === this._lastAutocompleteSignature && this.menuEl.classList.contains('visible')) {
      return;
    }

    this._visibleMatches = matches;
    this._lastAutocompleteSignature = signature;
    const fragment = document.createDocumentFragment();
    
    // Dynamically assign role="listbox" and aria-label ONLY when options are rendered
    this.menuEl.setAttribute('role', 'listbox');
    this.menuEl.setAttribute('aria-label', 'Search suggestions');

    matches.forEach((item, idx) => {
      const option = document.createElement('div');
      option.id = `autocomplete-option-${idx}`;
      option.className = `autocomplete-item${idx === this._highlightIndex ? ' selected' : ''}`;
      option.dataset.matchIndex = String(idx);
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', idx === this._highlightIndex ? 'true' : 'false');

      const titleEl = document.createElement('div');
      titleEl.className = 'autocomplete-item-title';
      titleEl.textContent = item.title;

      const snippetEl = document.createElement('div');
      snippetEl.className = 'autocomplete-item-snippet';
      const snippetText = this._resolveMatchSnippet(item, query);
      
      if (snippetText) {
        const regex = new RegExp(`(${query})`, 'gi');
        snippetEl.innerHTML = snippetText.replace(regex, '<mark>$1</mark>');
      }

      option.appendChild(titleEl);
      option.appendChild(snippetEl);

      fragment.appendChild(option);
    });

    this.menuEl.replaceChildren(fragment);

    this.menuEl.classList.add('visible');
  }

  hideAutocomplete() {
    this._highlightIndex = -1;
    this._visibleMatches = [];
    this._lastAutocompleteSignature = '';
    this._lastSearchQuery = '';
    this._lastMatchPool = this._searchIndex;
    this.menuEl.classList.remove('visible');
    // Remove both role and aria-label when menu is hidden to prevent aria-prohibited-attr and aria-required-children errors
    this.menuEl.removeAttribute('role');
    this.menuEl.removeAttribute('aria-label');
  }

  _scheduleAutocompleteRender() {
    if (this._autocompleteFrame) return;

    this._autocompleteFrame = requestAnimationFrame(() => {
      this._autocompleteFrame = 0;
      this.renderAutocomplete();
    });
  }
}

if (!customElements.get('ds-case-navigator')) {
  customElements.define('ds-case-navigator', CaseNavigator);
}
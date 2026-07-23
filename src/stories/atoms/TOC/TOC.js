import css from './toc.css?inline';
import '../../organisms/ContextualMenu/ContextualMenu';

export class DsToc extends HTMLElement {
  static get observedAttributes() {
    return [
      'opened',
      'target-selector',
      'title-text',
      'aria-label',
      'max-height'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._items = [];
    this._activeId = null;
    this._boundHandleMenuSelect = this._handleMenuSelect.bind(this);
    this._boundHandleMenuClose = this._handleMenuClose.bind(this);
    this._boundHandleWindowScroll = this._handleWindowScroll.bind(this);

    // Single compressed line Shadow DOM string preventing whitespace text node bugs
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="toc-wrapper"><div class="minimap-strip" part="minimap" aria-hidden="true"></div><ds-contextual-menu class="toc-menu" part="menu" open hide-close></ds-contextual-menu></div>`;

    this.wrapperEl = this.shadowRoot.querySelector('.toc-wrapper');
    this.minimapEl = this.shadowRoot.querySelector('.minimap-strip');
    this.menuEl = this.shadowRoot.querySelector('.toc-menu');
  }

  get items() {
    return this._items;
  }

  set items(value) {
    if (Array.isArray(value)) {
      this._items = value;
      this._updateMenuAndMinimap();
      this._setupIntersectionObserver();
    }
  }

  get opened() {
    return this.hasAttribute('opened');
  }

  set opened(value) {
    this.toggleAttribute('opened', Boolean(value));
  }

  connectedCallback() {
    if (this.menuEl) {
      this.menuEl.addEventListener('ds-select', this._boundHandleMenuSelect);
      this.menuEl.addEventListener('ds-close', this._boundHandleMenuClose);
    }

    window.addEventListener('scroll', this._boundHandleWindowScroll, { passive: true });

    if (this._items.length === 0) {
      this.scanHeadings();
    } else {
      this._updateMenuAndMinimap();
      this._setupIntersectionObserver();
    }

    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }
    window.removeEventListener('scroll', this._boundHandleWindowScroll);
    if (this.menuEl) {
      this.menuEl.removeEventListener('ds-select', this._boundHandleMenuSelect);
      this.menuEl.removeEventListener('ds-close', this._boundHandleMenuClose);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'target-selector') {
        this.scanHeadings();
      } else {
        this.updateAttributes();
        
        // Force WebKit to re-composite nested ds-contextual-menu scrollbar when TOC expands
        if (name === 'opened' && this.opened && this.menuEl && this.menuEl.scrollViewport) {
          void this.menuEl.scrollViewport.offsetHeight;
        }
      }
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
    this._themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  updateAttributes() {
    const ariaLabel = this.getAttribute('aria-label') || 'Table of Contents';
    const titleText = this.getAttribute('title-text') ?? 'CONTENTS';
    const maxHeight = this.getAttribute('max-height') || 'min(380px, 70vh)';

    this.style.setProperty('--ds-toc-max-height', maxHeight);

    if (this.menuEl) {
      // Pass max-height attribute down into ds-contextual-menu
      this.menuEl.setAttribute('max-height', maxHeight);

      if (titleText) {
        this.menuEl.setAttribute('header-text', titleText);
        this.menuEl.removeAttribute('hide-header');
      } else {
        this.menuEl.setAttribute('hide-header', '');
      }

      this.menuEl.setAttribute('aria-label', ariaLabel);
    }

    if (ariaLabel) {
      this.removeAttribute('aria-label');
    }
  }

  scanHeadings() {
    const selector = this.getAttribute('target-selector') || 'main, article, body';
    const rootTarget = document.querySelector(selector) || document.body;
    const headings = Array.from(rootTarget.querySelectorAll('h1, h2, h3, h4'));

    this._items = headings.map((heading, index) => {
      if (!heading.id) {
        heading.id = `ds-toc-heading-${index}-${heading.textContent.toLowerCase().replace(/[^\w]+/g, '-')}`;
      }
      const labelStr = heading.textContent.trim();
      return {
        id: heading.id,
        label: labelStr,
        text: labelStr,
        level: parseInt(heading.tagName.substring(1), 10)
      };
    });

    this._updateMenuAndMinimap();
    this._setupIntersectionObserver();
  }

  /* Bottom-of-page check: forces last heading active when scrolled to the end */
  _handleWindowScroll() {
    if (!this._items || this._items.length === 0) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= totalHeight - 30) {
      const lastItem = this._items[this._items.length - 1];
      this._setActiveHeading(lastItem.id);
    }
  }

  _setupIntersectionObserver() {
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }

    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        // Skip normal observer logic if user is at bottom of page
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 30);
        if (isAtBottom) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this._setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-5% 0px -50% 0px', threshold: 0 }
    );

    this._items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) this._intersectionObserver.observe(el);
    });
  }

  _setActiveHeading(id) {
    if (this._activeId === id) return;
    this._activeId = id;

    const minimapBars = this.minimapEl.querySelectorAll('.minimap-line');
    minimapBars.forEach((bar) => {
      bar.classList.toggle('active', bar.dataset.id === id);
    });

    if (this.menuEl && Array.isArray(this.menuEl.items)) {
      const updatedMenu = this.menuEl.items.map((opt) => ({
        ...opt,
        active: opt.id === id,
        selected: opt.id === id
      }));
      this.menuEl.items = updatedMenu;
    }
  }

  _updateMenuAndMinimap() {
    if (!this.minimapEl || !this.menuEl) return;

    // 1. Render Thin Apple-style Minimap Lines
    this.minimapEl.innerHTML = this._items.map((item) => {
      const labelText = item.label || item.text || '';
      const isSelected = item.id === this._activeId || item.active === true || item.selected === true;
      return `
        <div 
          class="minimap-line ${isSelected ? 'active' : ''}" 
          data-level="${item.level || 1}" 
          data-id="${item.id}"
          title="${labelText}">
        </div>
      `;
    }).join('');

    // 2. Map Headings to ds-contextual-menu Format using ds-item-row with selected: true
    const menuOptions = [
      {
        id: 'scroll-top',
        label: 'Scroll to top',
        showIcon: false,
        showKbd: false,
        control: 'none',
        category: 'main'
      },
      ...this._items.map((item) => {
        const headingText = item.label || item.text || '';
        const indentLevel = Math.max(0, (item.level || 1) - 1);
        const indentSpace = '\u00A0\u00A0'.repeat(indentLevel);
        const isSelected = item.id === this._activeId || item.active === true || item.selected === true;
        return {
          id: item.id,
          label: `${indentSpace}${headingText}`,
          showIcon: false,
          showKbd: false,
          control: 'none',
          active: isSelected,
          selected: isSelected,
          category: 'main'
        };
      })
    ];

    this.menuEl.items = menuOptions;
  }

  _handleMenuSelect(e) {
    const selectedDetail = e.detail;
    if (!selectedDetail || !selectedDetail.id) return;

    if (selectedDetail.id === 'scroll-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.dispatchEvent(
        new CustomEvent('ds-toc-scroll-top', {
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    const targetEl = document.getElementById(selectedDetail.id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      this._setActiveHeading(selectedDetail.id);
      this.dispatchEvent(
        new CustomEvent('ds-toc-select', {
          bubbles: true,
          composed: true,
          detail: { id: selectedDetail.id, label: selectedDetail.label }
        })
      );
    }
  }

  _handleMenuClose() {
    this.opened = false;
  }
}

if (!customElements.get('ds-toc')) {
  customElements.define('ds-toc', DsToc);
}
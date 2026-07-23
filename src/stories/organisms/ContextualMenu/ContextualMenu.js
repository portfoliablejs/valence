import css from './contextual-menu.css?inline';
import '../../sub-atomic/Iconography/Iconography';
import '../../atoms/Button/Button';
import '../../atoms/Divider/Divider';
import '../../molecules/ItemRow/ItemRow';

export class DsContextualMenu extends HTMLElement {
  static get observedAttributes() {
    return [
      'title',
      'header-text',
      'open',
      'aria-label',
      'semantic-role',
      'hide-close',
      'hide-header',
      'show-subcategory',
      'subcategory-title',
      'max-height',
      'show-scrollbar'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._boundHandleClose = this._handleClose.bind(this);
    this._boundHandleVisibilityChange = this._handleVisibilityChange.bind(this);

    this._items = [
      { id: 'autoscroll', label: 'Auto-scroll from here', icon: 'autoscroll', showIcon: true, showKbd: true, kbd: '⌥', kbdShowPlus: true, kbdKey: 'A', control: 'none', category: 'main' },
      { id: 'copy-link', label: 'Copy link', icon: 'link', showIcon: true, showKbd: true, kbd: '⌘', kbdShowPlus: true, kbdKey: 'C', control: 'none', category: 'main' },
      { id: 'email-lio', label: 'Email Lio', icon: 'email', showIcon: true, control: 'none', category: 'main' },
      { id: 'dark-mode', label: 'Dark Theme', icon: 'moon', showIcon: true, control: 'toggle', active: false, category: 'subcategory' },
      { id: 'notifications', label: 'Enable Alerts', icon: 'flag-shield', showIcon: true, control: 'check', selected: true, checkHasBackground: true, category: 'subcategory' }
    ];

    this.shadowRoot.innerHTML = `<style>${css}</style><div class="menu-card" role="group"><div class="menu-header" role="presentation"><span class="menu-title">ACTIONS</span><ds-button class="close-btn" variant="icon" icon="close" aria-label="Close menu"></ds-button></div><div class="menu-scroll-viewport" data-lenis-prevent><div class="menu-content" role="presentation"></div></div></div>`;
  }

  get items() {
    return this._items;
  }

  set items(value) {
    if (Array.isArray(value)) {
      this._items = value;
      this.renderMenu();
    }
  }

  get showScrollbar() {
    if (!this.hasAttribute('show-scrollbar')) return undefined;
    return this.getAttribute('show-scrollbar') !== 'false';
  }

  set showScrollbar(value) {
    if (value === undefined || value === null) {
      this.removeAttribute('show-scrollbar');
    } else {
      this.setAttribute('show-scrollbar', String(Boolean(value)));
    }
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(value) {
    this.toggleAttribute('open', Boolean(value));
  }

  get hideClose() {
    return this.hasAttribute('hide-close');
  }

  set hideClose(value) {
    this.toggleAttribute('hide-close', Boolean(value));
  }

  get hideHeader() {
    return this.hasAttribute('hide-header');
  }

  set hideHeader(value) {
    this.toggleAttribute('hide-header', Boolean(value));
  }

  get showSubcategory() {
    return this.hasAttribute('show-subcategory');
  }

  set showSubcategory(value) {
    this.toggleAttribute('show-subcategory', Boolean(value));
    this.renderMenu();
  }

  get subcategoryTitle() {
    return this.getAttribute('subcategory-title') || 'PREFERENCES';
  }

  set subcategoryTitle(value) {
    if (value) {
      this.setAttribute('subcategory-title', value);
    } else {
      this.removeAttribute('subcategory-title');
    }
    this.renderMenu();
  }

  get maxHeight() {
    return this.getAttribute('max-height');
  }

  set maxHeight(value) {
    if (value) {
      this.setAttribute('max-height', value);
    } else {
      this.removeAttribute('max-height');
    }
  }

  connectedCallback() {
    this.setAttribute('data-lenis-prevent', '');

    this.menuCard = this.shadowRoot.querySelector('.menu-card');
    this.headerEl = this.shadowRoot.querySelector('.menu-header');
    this.titleEl = this.shadowRoot.querySelector('.menu-title');
    this.closeBtn = this.shadowRoot.querySelector('.close-btn');
    this.scrollViewport = this.shadowRoot.querySelector('.menu-scroll-viewport');
    this.contentEl = this.shadowRoot.querySelector('.menu-content');

    if (this.scrollViewport) {
      this.scrollViewport.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this._boundHandleClose);
    }

    document.addEventListener('visibilitychange', this._boundHandleVisibilityChange);

    this.renderMenu();
    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    if (this.closeBtn) {
      this.closeBtn.removeEventListener('click', this._boundHandleClose);
    }
    document.removeEventListener('visibilitychange', this._boundHandleVisibilityChange);
  }

  /**
   * Safely rebuilds the WebKit scroll engine without triggering GPU layer ghosting.
   * Toggling `overflowY` avoids `display: none` layout destruction caches.
   */
  _forceScrollbarRebind() {
    if (!this.scrollViewport || !this.scrollViewport.classList.contains('is-scrollable')) return;
    
    // Switch to hidden to destroy the native macOS phantom overlay
    this.scrollViewport.style.overflowY = 'hidden';
    
    // Micro layout flush 
    void this.scrollViewport.offsetHeight;
    
    // Clear inline style to let .is-scrollable class restore overflow-y: auto
    this.scrollViewport.style.overflowY = '';
  }

  _handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
      this._forceScrollbarRebind();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'show-subcategory' || name === 'subcategory-title') {
        this.renderMenu();
      } else if (name === 'show-scrollbar') {
        this._updateScrollState();
      } else if (name === 'open') {
        this.updateAttributes();
        if (this.open) {
          // Re-bind when the host element becomes visible again
          this._forceScrollbarRebind();
        }
      } else {
        this.updateAttributes();
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

  _updateScrollState() {
    if (!this.scrollViewport) return;

    let shouldScroll = false;

    if (this.hasAttribute('show-scrollbar')) {
      shouldScroll = this.getAttribute('show-scrollbar') !== 'false';
    } else {
      const itemCount = Array.isArray(this._items) ? this._items.length : 0;
      shouldScroll = itemCount > 10;
    }

    this.scrollViewport.classList.toggle('is-scrollable', shouldScroll);
  }

  updateAttributes() {
    const headerTextAttr = this.getAttribute('header-text') || this.getAttribute('title');
    const ariaLabel = this.getAttribute('aria-label');
    const maxHeight = this.getAttribute('max-height');
    const semanticRole = this.getAttribute('semantic-role') || 'group';

    if (maxHeight) {
      this.style.setProperty('--ds-contextual-menu-max-height', maxHeight);
    } else {
      this.style.removeProperty('--ds-contextual-menu-max-height');
    }

    if (headerTextAttr !== null && this.titleEl) {
      this.titleEl.textContent = headerTextAttr || 'ACTIONS';
      this.removeAttribute('title');
    }

    const isHeaderHidden = this.hasAttribute('hide-header');
    if (this.headerEl) {
      this.headerEl.style.display = isHeaderHidden ? 'none' : '';
    }

    if (ariaLabel && this.menuCard) {
      this.menuCard.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }

    if (this.menuCard) {
      this.menuCard.setAttribute('role', semanticRole);
      if (semanticRole === 'menu') {
        this.menuCard.setAttribute('aria-orientation', 'vertical');
      } else {
        this.menuCard.removeAttribute('aria-orientation');
      }
    }

    if (this.closeBtn) {
      this.closeBtn.style.display = this.hasAttribute('hide-close') ? 'none' : '';
    }

    this._updateScrollState();
  }

  _handleClose(e) {
    if (e) e.stopPropagation();
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('ds-close', {
        bubbles: true,
        composed: true,
      })
    );
  }

  _handleOptionClick(detail) {
    this.dispatchEvent(
      new CustomEvent('ds-select', {
        bubbles: true,
        composed: true,
        detail,
      })
    );
  }

  _createItemRow(opt, index) {
    const itemRow = document.createElement('ds-item-row');

    // Rows that contain interactive controls should not expose menuitem* roles on the host.
    // This avoids invalid nested interactive semantics and aria-checked requirements.
    if (!opt.control || opt.control === 'none') {
      itemRow.setAttribute('role', 'menuitem');
    } else {
      itemRow.setAttribute('role', 'presentation');
    }

    if (opt.label) itemRow.setAttribute('label', opt.label);
    if (opt.icon) itemRow.setAttribute('icon', opt.icon);
    if (opt.showIcon !== false && opt.icon) itemRow.setAttribute('show-icon', '');
    if (opt.iconVariant) itemRow.setAttribute('icon-variant', opt.iconVariant);

    if (opt.kbd) itemRow.setAttribute('kbd', opt.kbd);
    if (opt.showKbd) itemRow.setAttribute('show-kbd', '');
    if (opt.kbdVariant) itemRow.setAttribute('kbd-variant', opt.kbdVariant);
    if (opt.kbdShowPlus) itemRow.setAttribute('kbd-show-plus', '');
    if (opt.kbdKey) itemRow.setAttribute('kbd-key', opt.kbdKey);

    if (opt.control) itemRow.setAttribute('control', opt.control);
    if (opt.active) itemRow.setAttribute('active', '');
    if (opt.selected) itemRow.setAttribute('selected', '');
    if (opt.disabled) itemRow.setAttribute('disabled', '');

    if (opt.toggleTextOn) itemRow.setAttribute('toggle-text-on', opt.toggleTextOn);
    if (opt.toggleTextOff) itemRow.setAttribute('toggle-text-off', opt.toggleTextOff);
    if (opt.checkHasBackground) itemRow.setAttribute('check-has-background', '');
    if (opt.ariaLabel) itemRow.setAttribute('aria-label', opt.ariaLabel);

    itemRow.addEventListener('ds-row-click', (e) => {
      this._handleOptionClick({ id: opt.id || `item-${index}`, ...e.detail });
    });

    return itemRow;
  }

  renderMenu() {
    if (!this.contentEl) return;
    this.contentEl.innerHTML = '';

    if (!Array.isArray(this._items) || this._items.length === 0) {
      this._updateScrollState();
      return;
    }

    const isSubcategoryEnabled = this.showSubcategory;

    const mainItems = [];
    const subcategoryItems = [];

    this._items.forEach((opt) => {
      if (isSubcategoryEnabled && opt.category === 'subcategory') {
        subcategoryItems.push(opt);
      } else {
        mainItems.push(opt);
      }
    });

    mainItems.forEach((opt, idx) => {
      this.contentEl.appendChild(this._createItemRow(opt, idx));
    });

    if (isSubcategoryEnabled && subcategoryItems.length > 0) {
      if (mainItems.length > 0) {
        const divider = document.createElement('ds-divider');
        divider.setAttribute('orientation', 'horizontal');
        divider.setAttribute('role', 'presentation');
        this.contentEl.appendChild(divider);
      }

      const subHeader = document.createElement('div');
      subHeader.className = 'subcategory-header';
      subHeader.setAttribute('role', 'presentation');
      const subTitle = document.createElement('span');
      subTitle.className = 'subcategory-title';
      subTitle.textContent = this.subcategoryTitle;
      subHeader.appendChild(subTitle);
      this.contentEl.appendChild(subHeader);

      subcategoryItems.forEach((opt, idx) => {
        this.contentEl.appendChild(
          this._createItemRow(opt, mainItems.length + idx)
        );
      });
    }

    this._updateScrollState();
  }
}

if (!customElements.get('ds-contextual-menu')) {
  customElements.define('ds-contextual-menu', DsContextualMenu);
}
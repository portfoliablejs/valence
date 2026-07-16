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
      'hide-close',
      'hide-header',
      'show-subcategory',
      'subcategory-title',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this._boundHandleClose = this._handleClose.bind(this);

    this._items = [
      { 
        id: 'autoscroll', 
        label: 'Auto-scroll from here', 
        icon: 'autoscroll', 
        showIcon: true,
        showKbd: true, 
        kbd: '⌥', 
        kbdShowPlus: true, 
        kbdKey: 'A',
        control: 'none',
        category: 'main'
      },
      { 
        id: 'copy-link', 
        label: 'Copy link', 
        icon: 'link', 
        showIcon: true,
        showKbd: true, 
        kbd: '⌘', 
        kbdShowPlus: true, 
        kbdKey: 'C',
        control: 'none',
        category: 'main'
      },
      { 
        id: 'email-lio', 
        label: 'Email Lio', 
        icon: 'email', 
        showIcon: true,
        control: 'none',
        category: 'main'
      },
      { 
        id: 'dark-mode', 
        label: 'Dark Theme', 
        icon: 'moon', 
        showIcon: true,
        control: 'toggle', 
        active: false,
        category: 'subcategory'
      },
      { 
        id: 'notifications', 
        label: 'Enable Alerts', 
        icon: 'flag-shield', 
        showIcon: true,
        control: 'check', 
        selected: true, 
        checkHasBackground: true,
        category: 'subcategory'
      }
    ];

    // Added role="presentation" to non-menuitem wrappers to comply with WCAG role="menu" standards
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="menu-card" role="menu" aria-orientation="vertical"><div class="menu-header" role="presentation"><span class="menu-title">ACTIONS</span><ds-button class="close-btn" variant="icon" icon="close" aria-label="Close menu"></ds-button></div><div class="menu-content" role="presentation"></div></div>`;
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

  connectedCallback() {
    this.menuCard = this.shadowRoot.querySelector('.menu-card');
    this.headerEl = this.shadowRoot.querySelector('.menu-header');
    this.titleEl = this.shadowRoot.querySelector('.menu-title');
    this.closeBtn = this.shadowRoot.querySelector('.close-btn');
    this.contentEl = this.shadowRoot.querySelector('.menu-content');

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this._boundHandleClose);
    }

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
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'show-subcategory' || name === 'subcategory-title') {
        this.renderMenu();
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

  updateAttributes() {
    const headerTextAttr = this.getAttribute('header-text') || this.getAttribute('title');
    const ariaLabel = this.getAttribute('aria-label');

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

    if (this.closeBtn) {
      this.closeBtn.style.display = this.hasAttribute('hide-close') ? 'none' : '';
    }
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

    // Assign specific ARIA roles to satisfy role="menu" child requirements
    if (opt.control === 'check' || opt.control === 'toggle') {
      itemRow.setAttribute('role', 'menuitemcheckbox');
    } else if (opt.control === 'radio') {
      itemRow.setAttribute('role', 'menuitemradio');
    } else {
      itemRow.setAttribute('role', 'menuitem');
    }

    if (opt.label) itemRow.setAttribute('label', opt.label);
    if (opt.icon) itemRow.setAttribute('icon', opt.icon);
    if (opt.showIcon !== false && opt.icon) itemRow.setAttribute('show-icon', '');
    
    // Add this line to map the prop into the shadow DOM correctly
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

    if (!Array.isArray(this._items) || this._items.length === 0) return;

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
  }
}

if (!customElements.get('ds-contextual-menu')) {
  customElements.define('ds-contextual-menu', DsContextualMenu);
}
import css from './header.css?inline';
import '../../molecules/Breadcrumb/Breadcrumb.js';
import '../../molecules/NavigationMenu/NavigationMenu.js';

const NAVIGATION_MENU_ATTRIBUTES = [
  'language-tooltip',
  'language-kbd-label',
  'language-kbd-key',
  'language-kbd-show-plus',
  'language-aria-label',
  'accessibility-tooltip',
  'accessibility-kbd-label',
  'accessibility-kbd-key',
  'accessibility-kbd-show-plus',
  'accessibility-aria-label',
  'about-tooltip',
  'about-kbd-label',
  'about-kbd-key',
  'about-kbd-show-plus',
  'about-aria-label',
  'avatar-src',
  'avatar-alt',
  'disabled'
];

export class Header extends HTMLElement {
  static get observedAttributes() {
    return ['aria-label', 'show-breadcrumb', 'show-language-menu', ...NAVIGATION_MENU_ATTRIBUTES];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._breadcrumbItems = null;
    this._breadcrumbMenuItems = null;

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <header class="header-shell" aria-label="Header">
        <div class="header-content">
          <div class="breadcrumb-region">
            <ds-breadcrumb></ds-breadcrumb>
          </div>
          <div class="navigation-region">
            <ds-navigation-menu></ds-navigation-menu>
          </div>
        </div>
      </header>
    `;
  }

  connectedCallback() {
    this.headerEl = this.shadowRoot.querySelector('.header-shell');
    this.breadcrumbRegion = this.shadowRoot.querySelector('.breadcrumb-region');
    this.navigationRegion = this.shadowRoot.querySelector('.navigation-region');
    this.breadcrumbEl = this.shadowRoot.querySelector('ds-breadcrumb');
    this.navigationEl = this.shadowRoot.querySelector('ds-navigation-menu');
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (this.headerEl) {
      this.render();
    }
  }

  get breadcrumbItems() {
    return this._breadcrumbItems;
  }

  set breadcrumbItems(items) {
    this._breadcrumbItems = Array.isArray(items) ? items : null;
    this.render();
  }

  get breadcrumbMenuItems() {
    return this._breadcrumbMenuItems;
  }

  set breadcrumbMenuItems(items) {
    this._breadcrumbMenuItems = Array.isArray(items) ? items : null;
    this.render();
  }

  get showBreadcrumb() {
    return this.getAttribute('show-breadcrumb') !== 'false';
  }

  set showBreadcrumb(value) {
    this.setAttribute('show-breadcrumb', value ? 'true' : 'false');
  }

  get showLanguageMenu() {
    return this.getAttribute('show-language-menu') !== 'false';
  }

  set showLanguageMenu(value) {
    this.setAttribute('show-language-menu', value ? 'true' : 'false');
  }

  _forwardNavigationAttributes() {
    NAVIGATION_MENU_ATTRIBUTES.forEach((attributeName) => {
      if (this.hasAttribute(attributeName)) {
        this.navigationEl.setAttribute(attributeName, this.getAttribute(attributeName) || '');
      } else {
        this.navigationEl.removeAttribute(attributeName);
      }
    });
  }

  _syncLanguageVisibility() {
    const showLanguageMenu = this.showLanguageMenu;
    const navigationShadow = this.navigationEl.shadowRoot;

    if (!navigationShadow) return;

    const languageItem = navigationShadow.querySelector('.menu-item-language');
    const languageMenu = navigationShadow.querySelector('.language-menu');

    if (languageItem) {
      languageItem.style.display = showLanguageMenu ? '' : 'none';
    }

    if (!showLanguageMenu && languageMenu) {
      languageMenu.removeAttribute('open');
    }
  }

  render() {
    if (!this.headerEl) return;

    this.headerEl.setAttribute('aria-label', this.getAttribute('aria-label') || 'Header');

    this.breadcrumbRegion.hidden = !this.showBreadcrumb;
    this.breadcrumbEl.visible = this.showBreadcrumb;

    if (Array.isArray(this._breadcrumbItems)) {
      this.breadcrumbEl.items = this._breadcrumbItems;
    }

    this.breadcrumbEl.menuItems = this._breadcrumbMenuItems;

    this._forwardNavigationAttributes();
    this._syncLanguageVisibility();
  }
}

if (!customElements.get('ds-header')) {
  customElements.define('ds-header', Header);
}
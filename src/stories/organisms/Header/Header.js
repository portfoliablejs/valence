import css from './header.css?inline';
import '../../molecules/Breadcrumb/Breadcrumb.js';
import '../../molecules/NavigationMenu/NavigationMenu.js';

function serializeBreadcrumbPayload(value) {
  return JSON.stringify(value ?? null);
}

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
  'language-menu-header',
  'accessibility-menu-header',
  'accessibility-menu-subcategory-title',
  'a11y-label-text-size',
  'a11y-label-dyslexia-font',
  'a11y-label-dark-mode',
  'a11y-label-high-contrast',
  'a11y-label-reduce-motion',
  'a11y-label-tab-navigation',
  'avatar-src',
  'avatar-alt',
  'disabled'
];

export class Header extends HTMLElement {
  static get observedAttributes() {
    return ['aria-label', 'show-breadcrumb', 'show-language-menu', 'show-navigation-region', 'show-about', 'data-mobile-breakpoint', ...NAVIGATION_MENU_ATTRIBUTES];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._breadcrumbItems = null;
    this._breadcrumbMenuItems = null;
    this._breadcrumbItemsSignature = serializeBreadcrumbPayload(null);
    this._breadcrumbMenuItemsSignature = serializeBreadcrumbPayload(null);

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
    const normalizedItems = Array.isArray(items) ? items : null;
    const nextSignature = serializeBreadcrumbPayload(normalizedItems);
    if (nextSignature === this._breadcrumbItemsSignature) {
      return;
    }

    this._breadcrumbItems = normalizedItems;
    this._breadcrumbItemsSignature = nextSignature;
    this.render();
  }

  get breadcrumbMenuItems() {
    return this._breadcrumbMenuItems;
  }

  set breadcrumbMenuItems(items) {
    const normalizedItems = Array.isArray(items) ? items : null;
    const nextSignature = serializeBreadcrumbPayload(normalizedItems);
    if (nextSignature === this._breadcrumbMenuItemsSignature) {
      return;
    }

    this._breadcrumbMenuItems = normalizedItems;
    this._breadcrumbMenuItemsSignature = nextSignature;
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

  get showNavigationRegion() {
    return this.getAttribute('show-navigation-region') !== 'false';
  }

  set showNavigationRegion(value) {
    this.setAttribute('show-navigation-region', value ? 'true' : 'false');
  }

  get showAbout() {
    return this.getAttribute('show-about') !== 'false';
  }

  set showAbout(value) {
    this.setAttribute('show-about', value ? 'true' : 'false');
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

  _syncAboutVisibility() {
    const showAbout = this.showAbout;
    const navigationShadow = this.navigationEl.shadowRoot;

    if (!navigationShadow) return;

    const aboutItem = navigationShadow.querySelector('.menu-profile .menu-item');
    const divider = navigationShadow.querySelector('.menu-divider');

    if (aboutItem) {
      aboutItem.style.display = showAbout ? '' : 'none';
      aboutItem.setAttribute('aria-hidden', showAbout ? 'false' : 'true');
    }

    if (divider) {
      divider.style.display = showAbout ? '' : 'none';
      divider.setAttribute('aria-hidden', showAbout ? 'false' : 'true');
    }
  }

  _applyReturnOnlyMode(isEnabled) {
    const breadcrumbRoot = this.breadcrumbEl?.shadowRoot;
    if (!breadcrumbRoot) return;

    const returnWrapper = breadcrumbRoot.querySelector('.crumb-return-wrapper');
    const nonReturnNodes = breadcrumbRoot.querySelectorAll('.crumb-home-btn, .crumb-item-wrapper, .crumb-separator');

    if (returnWrapper instanceof HTMLElement) {
      returnWrapper.style.display = '';
      returnWrapper.style.opacity = '1';
      returnWrapper.style.visibility = 'visible';
      returnWrapper.style.pointerEvents = 'auto';
    }

    nonReturnNodes.forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      if (isEnabled) {
        node.style.display = 'none';
        node.style.opacity = '0';
        node.style.visibility = 'hidden';
        node.style.pointerEvents = 'none';
      } else {
        node.style.display = '';
        node.style.opacity = '';
        node.style.visibility = '';
        node.style.pointerEvents = '';
      }
    });
  }

  render() {
    if (!this.headerEl) return;

    this.headerEl.setAttribute('aria-label', this.getAttribute('aria-label') || 'Header');
    if (this.getAttribute('data-mobile-breakpoint') === 'true') {
      this.breadcrumbEl.setAttribute('data-mobile-breakpoint', 'true');
      this.navigationEl.setAttribute('data-mobile-breakpoint', 'true');
    } else {
      this.breadcrumbEl.removeAttribute('data-mobile-breakpoint');
      this.navigationEl.removeAttribute('data-mobile-breakpoint');
    }

    const isBreadcrumbVisible = this.showBreadcrumb;
    const isMobileBreakpoint = this.getAttribute('data-mobile-breakpoint') === 'true';
    this.breadcrumbRegion.classList.toggle('is-hidden', !isBreadcrumbVisible);
    this.breadcrumbRegion.setAttribute('aria-hidden', isBreadcrumbVisible ? 'false' : 'true');
    this.navigationRegion.hidden = !this.showNavigationRegion;
    this.breadcrumbEl.visible = true;

    if (Array.isArray(this._breadcrumbItems)) {
      this.breadcrumbEl.items = this._breadcrumbItems;
    }

    this.breadcrumbEl.menuItems = this._breadcrumbMenuItems;

    this._forwardNavigationAttributes();
    this._syncLanguageVisibility();
    this._syncAboutVisibility();
    this._applyReturnOnlyMode(isMobileBreakpoint);
  }
}

if (!customElements.get('ds-header')) {
  customElements.define('ds-header', Header);
}
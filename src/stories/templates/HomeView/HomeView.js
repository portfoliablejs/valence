import css from './homeview.css?inline';
import typographyCss from '../../sub-atomic/Typography/typography.css?inline';
import '../../organisms/Header/Header.js';
import '../../organisms/Gallery/Gallery.js';

const DEFAULT_TITLE_TEXT = "Lio Schimanko's Portfolio";
const DEFAULT_FOOTER_TEXT = '(c)2026 All trademarks are property of their owners.';
const DEFAULT_GALLERY_COUNT = 4;

const DEFAULT_BREADCRUMB_ITEMS = [
  { id: 'home', label: 'Home', hasMenu: false },
  { id: 'portfolio', label: 'Portfolio', hasMenu: false },
  { id: 'homeview', label: 'Home View', hasMenu: false }
];

export class HomeView extends HTMLElement {
  static get observedAttributes() {
    return ['aria-label', 'title-text', 'footer-text', 'item-count', 'engine', 'show-breadcrumb', 'show-language-menu', 'data-mobile-breakpoint', 'dir'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._breadcrumbItems = DEFAULT_BREADCRUMB_ITEMS;

    this.shadowRoot.innerHTML = `
      <style>${typographyCss}</style>
      <style>${css}</style>
      <section class="homeview-layout" aria-label="Home view template">
        <div class="header-wrap">
          <ds-header></ds-header>
        </div>
        <div class="homeview-shell">
          <div class="title-wrap">
            <h1 class="homeview-title"></h1>
          </div>
          <div class="gallery-wrap">
            <div class="gallery-scale-shell">
              <ds-gallery></ds-gallery>
            </div>
          </div>
          <footer class="footer-wrap">
            <p class="homeview-footer p3-footer"></p>
          </footer>
        </div>
      </section>
    `;
  }

  connectedCallback() {
    this.layoutEl = this.shadowRoot.querySelector('.homeview-layout');
    this.shellEl = this.shadowRoot.querySelector('.homeview-shell');
    this.headerEl = this.shadowRoot.querySelector('ds-header');
    this.titleEl = this.shadowRoot.querySelector('.homeview-title');
    this.galleryEl = this.shadowRoot.querySelector('ds-gallery');
    this.footerEl = this.shadowRoot.querySelector('.homeview-footer');
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (this.layoutEl) {
      this.render();
    }
  }

  get titleText() {
    return this.getAttribute('title-text') || DEFAULT_TITLE_TEXT;
  }

  set titleText(value) {
    if (value === null || value === undefined || value === '') {
      this.removeAttribute('title-text');
      return;
    }

    this.setAttribute('title-text', String(value));
  }

  get footerText() {
    return this.getAttribute('footer-text') || DEFAULT_FOOTER_TEXT;
  }

  set footerText(value) {
    if (value === null || value === undefined || value === '') {
      this.removeAttribute('footer-text');
      return;
    }

    this.setAttribute('footer-text', String(value));
  }

  get itemCount() {
    const parsed = Number.parseInt(this.getAttribute('item-count') || '', 10);
    if (Number.isNaN(parsed)) return DEFAULT_GALLERY_COUNT;
    return Math.max(1, Math.min(parsed, 8));
  }

  set itemCount(value) {
    if (value === null || value === undefined || value === '') {
      this.removeAttribute('item-count');
      return;
    }

    this.setAttribute('item-count', String(value));
  }

  get engine() {
    return this.getAttribute('engine') || 'minimal';
  }

  set engine(value) {
    if (value === null || value === undefined || value === '') {
      this.removeAttribute('engine');
      return;
    }

    this.setAttribute('engine', String(value));
  }

  get showBreadcrumb() {
    return this.getAttribute('show-breadcrumb') === 'true';
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

  get breadcrumbItems() {
    return this._breadcrumbItems;
  }

  set breadcrumbItems(items) {
    this._breadcrumbItems = Array.isArray(items) ? items : DEFAULT_BREADCRUMB_ITEMS;
    this.render();
  }

  render() {
    if (!this.layoutEl) return;

    const effectiveDirection = String(this.getAttribute('dir') || getComputedStyle(this).direction || 'ltr').trim().toLowerCase();
    const normalizedDirection = effectiveDirection === 'rtl' ? 'rtl' : 'ltr';

    this.layoutEl.setAttribute('aria-label', this.getAttribute('aria-label') || 'Home view template');
    if (this.getAttribute('data-mobile-breakpoint') === 'true') {
      this.headerEl.setAttribute('data-mobile-breakpoint', 'true');
    } else {
      this.headerEl.removeAttribute('data-mobile-breakpoint');
    }
    this.titleEl.textContent = this.titleText;
    this.footerEl.textContent = this.footerText;

    this.headerEl.showBreadcrumb = this.showBreadcrumb;
    this.headerEl.showLanguageMenu = this.showLanguageMenu;
    this.headerEl.breadcrumbItems = this._breadcrumbItems;

    this.galleryEl.setAttribute('dir', normalizedDirection);
    this.galleryEl.itemCount = this.itemCount;
    this.galleryEl.engine = this.engine;
  }
}

if (!customElements.get('ds-home-view')) {
  customElements.define('ds-home-view', HomeView);
}
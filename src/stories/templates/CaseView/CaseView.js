import css from './caseview.css?inline';
import typographyCss from '../../sub-atomic/Typography/typography.css?inline';
import Lenis from 'lenis';
import '../../organisms/Header/Header.js';
import '../../organisms/Article/Article.js';

const HEADER_NAVIGATION_ATTRIBUTES = [
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

const ARTICLE_ATTRIBUTES = [
  'kicker',
  'title-text',
  'subtitle-text',
  'primary-label',
  'primary-icon',
  'secondary1-label',
  'secondary2-label',
  'show-kicker',
  'show-title',
  'show-social-share',
  'show-social-linkedin',
  'show-social-x',
  'show-social-facebook',
  'show-action-primary',
  'show-action-secondary1',
  'show-action-secondary2',
  'show-summary',
  'show-player',
  'show-toc',
  'show-navigator'
];

const DEFAULT_BREADCRUMB_ITEMS = [
  { id: 'back', label: 'Back', hasMenu: false },
  { id: 'home', label: 'Home', hasMenu: false },
  { id: 'case', label: 'Case', hasMenu: false }
];

export class CaseView extends HTMLElement {
  static get observedAttributes() {
    return [
      'dir',
      'aria-label',
      'show-breadcrumb',
      'show-language-menu',
      'data-mobile-breakpoint',
      ...HEADER_NAVIGATION_ATTRIBUTES,
      ...ARTICLE_ATTRIBUTES
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._breadcrumbItems = DEFAULT_BREADCRUMB_ITEMS;
    this._breadcrumbMenuItems = null;
    this._articleLenis = null;
    this._articleLenisFrame = 0;

    this.shadowRoot.innerHTML = `
      <style>${typographyCss}</style>
      <style>${css}</style>
      <section class="caseview-layout" aria-label="Case view template">
        <div class="header-wrap">
          <ds-header></ds-header>
        </div>
        <div class="article-scroll" data-lenis-prevent>
          <div class="article-wrap">
            <ds-article>
              <slot name="cover" slot="cover"></slot>
              <slot name="summary" slot="summary"></slot>
              <slot name="player" slot="player"></slot>
              <slot slot="navigator" name="navigator"></slot>
              <slot></slot>
            </ds-article>
          </div>
        </div>
      </section>
    `;
  }

  connectedCallback() {
    this.layoutEl = this.shadowRoot.querySelector('.caseview-layout');
    this.headerEl = this.shadowRoot.querySelector('ds-header');
    this.articleEl = this.shadowRoot.querySelector('ds-article');
    this.articleWrapEl = this.shadowRoot.querySelector('.article-wrap');
    this.articleScrollEl = this.shadowRoot.querySelector('.article-scroll');

    // Keep wheel/touch scrolling local to the reader when global Lenis is active.
    if (this.articleScrollEl && this.articleScrollEl.dataset.caseviewScrollBound !== 'true') {
      this.articleScrollEl.addEventListener('wheel', (event) => event.stopPropagation(), { passive: true });
      this.articleScrollEl.addEventListener('touchmove', (event) => event.stopPropagation(), { passive: true });
      this.articleScrollEl.dataset.caseviewScrollBound = 'true';
    }

    this._installSmoothArticleScrolling();

    this.render();
  }

  disconnectedCallback() {
    this._destroySmoothArticleScrolling();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (this.layoutEl) {
      this.render();
    }
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

  get breadcrumbItems() {
    return this._breadcrumbItems;
  }

  set breadcrumbItems(items) {
    this._breadcrumbItems = Array.isArray(items) && items.length > 0
      ? items
      : DEFAULT_BREADCRUMB_ITEMS;
    this.render();
  }

  get breadcrumbMenuItems() {
    return this._breadcrumbMenuItems;
  }

  set breadcrumbMenuItems(items) {
    this._breadcrumbMenuItems = Array.isArray(items) ? items : null;
    this.render();
  }

  _forwardAttributes(target, attributes) {
    attributes.forEach((attributeName) => {
      if (this.hasAttribute(attributeName)) {
        target.setAttribute(attributeName, this.getAttribute(attributeName) || '');
      } else {
        target.removeAttribute(attributeName);
      }
    });
  }

  _resolveDirection() {
    let node = this;

    while (node) {
      if (node instanceof HTMLElement) {
        const dir = node.getAttribute('dir');
        if (dir === 'rtl' || dir === 'ltr') return dir;
      }

      if (node.parentElement) {
        node = node.parentElement;
        continue;
      }

      const rootNode = node.getRootNode?.();
      if (rootNode && rootNode.host instanceof HTMLElement) {
        node = rootNode.host;
        continue;
      }

      break;
    }

    return this.ownerDocument.documentElement.getAttribute('dir') || 'ltr';
  }

  _installSmoothArticleScrolling() {
    if (!this.articleScrollEl || !this.articleWrapEl || this._articleLenis) return;

    this._articleLenis = new Lenis({
      wrapper: this.articleScrollEl,
      content: this.articleWrapEl,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    const raf = (time) => {
      if (!this._articleLenis) return;
      this._articleLenis.raf(time);
      this._articleLenisFrame = requestAnimationFrame(raf);
    };

    this._articleLenisFrame = requestAnimationFrame(raf);
  }

  _destroySmoothArticleScrolling() {
    if (this._articleLenis) {
      this._articleLenis.destroy();
    }

    if (this._articleLenisFrame) {
      cancelAnimationFrame(this._articleLenisFrame);
      this._articleLenisFrame = 0;
    }

    this._articleLenis = null;
  }

  render() {
    if (!this.layoutEl || !this.headerEl || !this.articleEl) return;
    const currentDir = this._resolveDirection();

    this.layoutEl.setAttribute('aria-label', this.getAttribute('aria-label') || 'Case view template');
    this.layoutEl.setAttribute('dir', currentDir);
    this.layoutEl.setAttribute('data-dir', currentDir);
    this.headerEl.setAttribute('dir', currentDir);
    this.articleEl.setAttribute('dir', currentDir);

    if (this.getAttribute('data-mobile-breakpoint') === 'true') {
      this.headerEl.setAttribute('data-mobile-breakpoint', 'true');
      this.articleEl.setAttribute('data-mobile-breakpoint', 'true');
    } else {
      this.headerEl.removeAttribute('data-mobile-breakpoint');
      this.articleEl.removeAttribute('data-mobile-breakpoint');
    }

    this.headerEl.showBreadcrumb = this.showBreadcrumb;
    this.headerEl.showLanguageMenu = this.showLanguageMenu;
    this.headerEl.breadcrumbItems = this._breadcrumbItems;
    this.headerEl.breadcrumbMenuItems = this._breadcrumbMenuItems;

    this._forwardAttributes(this.headerEl, HEADER_NAVIGATION_ATTRIBUTES);
    this._forwardAttributes(this.articleEl, ARTICLE_ATTRIBUTES);
  }
}

if (!customElements.get('ds-case-view')) {
  customElements.define('ds-case-view', CaseView);
}

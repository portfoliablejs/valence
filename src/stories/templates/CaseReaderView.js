import css from './case-reader-view.css?inline';
import articleCss from '../organisms/Article/article.css?inline';
import '../atoms/Thumbnail/Thumbnail.js';
import '../organisms/Article/Article.js';

export class CaseReaderView extends HTMLElement {
  static get observedAttributes() {
    return [
      'aria-label',
      'case-id',
      'scroll-threshold',
      // ds-thumbnail attributes
      'category',
      'brand',
      'model',
      'color',
      'screen-image',
      'device-src',
      'custom-only',
      // ds-article attributes
      'kicker',
      'title-text',
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
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Injected both stylesheets so slotted typography rules match CaseReaderView's light children
    this.shadowRoot.innerHTML = `
      <style>
        ${css}
        ${articleCss}
      </style>
      <main class="case-reader-container" role="main">
        <aside class="hero-column">
          <ds-thumbnail class="hero-thumbnail"></ds-thumbnail>
        </aside>
        <section class="article-column">
          <ds-article class="main-article">
            <slot name="summary" slot="summary"></slot>
            <slot name="player" slot="player"></slot>
            <slot></slot>
            <slot name="navigator" slot="navigator"></slot>
          </ds-article>
        </section>
      </main>
    `;

    this.container = this.shadowRoot.querySelector('.case-reader-container');
    this.thumbnailEl = this.shadowRoot.querySelector('.hero-thumbnail');
    this.articleEl = this.shadowRoot.querySelector('.main-article');

    this._onScroll = this._onScroll.bind(this);
    this._ticking = false;
  }

  connectedCallback() {
    this._observeRootAccessibility();
    window.addEventListener('scroll', this._onScroll, { passive: true });
    this.render();
  }

  disconnectedCallback() {
    if (this._themeObserver) this._themeObserver.disconnect();
    window.removeEventListener('scroll', this._onScroll);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
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

  _onScroll() {
    if (!this._ticking) {
      window.requestAnimationFrame(() => {
        const threshold = parseInt(this.getAttribute('scroll-threshold') || '100', 10);
        const shouldBeScrolled = window.scrollY > threshold;
        
        if (this.hasAttribute('scrolled') !== shouldBeScrolled) {
          this.toggleAttribute('scrolled', shouldBeScrolled);
        }
        this._ticking = false;
      });
      this._ticking = true;
    }
  }

  _delegateAriaLabel() {
    const ariaLabel = this.getAttribute('aria-label');
    if (ariaLabel) {
      this.container.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }
  }

  _syncThumbnailProps() {
    const caseId = this.getAttribute('case-id') || 'default';
    this.thumbnailEl.style.setProperty('view-transition-name', `case-thumb-${caseId}`);

    const thumbAttrs = ['category', 'brand', 'model', 'color', 'screen-image', 'device-src'];
    thumbAttrs.forEach((attr) => {
      if (this.hasAttribute(attr)) {
        this.thumbnailEl.setAttribute(attr, this.getAttribute(attr));
      } else {
        this.thumbnailEl.removeAttribute(attr);
      }
    });

    if (this.hasAttribute('custom-only')) {
      this.thumbnailEl.setAttribute('custom-only', '');
    } else {
      this.thumbnailEl.removeAttribute('custom-only');
    }
  }

  _syncArticleProps() {
    const articleAttrs = [
      'kicker',
      'title-text',
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

    articleAttrs.forEach((attr) => {
      if (this.hasAttribute(attr)) {
        this.articleEl.setAttribute(attr, this.getAttribute(attr));
      } else {
        this.articleEl.removeAttribute(attr);
      }
    });
  }

  render() {
    this._delegateAriaLabel();
    this._syncThumbnailProps();
    this._syncArticleProps();
  }
}

if (!customElements.get('ds-case-reader-view')) {
  customElements.define('ds-case-reader-view', CaseReaderView);
}
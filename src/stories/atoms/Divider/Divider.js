import css from './divider.css?inline';

export class DsDivider extends HTMLElement {
  static get observedAttributes() {
    return ['orientation', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Single-line compression eliminates anonymous whitespace rendering text-nodes.
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="divider-root" role="separator"></div>`;
  }

  connectedCallback() {
    this.rootEl = this.shadowRoot.querySelector('.divider-root');
    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // GUARD: Prevents infinite loop reflection when internal scrubbing occurs.
    if (name === 'aria-label' && newValue === null) return;

    if (this.rootEl && oldValue !== newValue) {
      this.updateAttributes();
    }
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
      this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
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
    const orientation = this.getAttribute('orientation') || 'horizontal';
    const ariaLabel = this.getAttribute('aria-label');

    this.rootEl.classList.toggle('orientation-vertical', orientation === 'vertical');
    this.rootEl.setAttribute('aria-orientation', orientation);

    // ARIA DELEGATION & HOST MARKUP SCRUBBING
    if (ariaLabel) {
      this.rootEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }
  }
}

if (!customElements.get('ds-divider')) {
  customElements.define('ds-divider', DsDivider);
}
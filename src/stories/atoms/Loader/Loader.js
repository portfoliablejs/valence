import css from './loader.css?inline';

export class Loader extends HTMLElement {
  static get observedAttributes() {
    return ['visible', 'aria-label', 'size'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Single line compression eliminates anonymous whitespace rendering text-nodes
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="video-loader" role="status" aria-live="polite"><svg viewBox="0 0 50 50" class="spinner" aria-hidden="true"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"></circle></svg><span class="sr-only" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;"></span></div>`;
  }

  connectedCallback() {
    this.loaderEl = this.shadowRoot.querySelector('.video-loader');
    this.srOnlyEl = this.shadowRoot.querySelector('.sr-only');
    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // GUARD: Prevents infinite loop reflection when internal scrubbing occurs
    if (name === 'aria-label' && newValue === null) return;

    if (this.loaderEl && oldValue !== newValue) {
      this.updateAttributes();
    }
  }

  /**
   * Tracks root <html> modifications to circumvent cross-browser Safari :host-context() bugs
   */
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

    sync(); // Initial execution
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  updateAttributes() {
    const visible = this.getAttribute('visible') !== 'false';
    const ariaLabel = this.getAttribute('aria-label') || 'Loading';
    const size = this.getAttribute('size');

    if (visible) {
      this.loaderEl.removeAttribute('aria-hidden');
    } else {
      this.loaderEl.setAttribute('aria-hidden', 'true');
    }

    if (size) {
      this.style.setProperty('--loader-size', size.endsWith('px') ? size : `${size}px`);
    }

    // --- ARIA DELEGATION & HOST MARKUP SCRUBBING ---
    if (this.srOnlyEl) {
      this.srOnlyEl.textContent = ariaLabel;
    }
    if (ariaLabel) {
      this.loaderEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label'); // Keeps outer light DOM tree validation compliant
    }
  }
}

if (!customElements.get('ds-loader')) {
  customElements.define('ds-loader', Loader);
}
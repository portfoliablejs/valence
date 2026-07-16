import css from './slider-dot.css?inline';

export class SliderDot extends HTMLElement {
  static get observedAttributes() {
    return ['active', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // CRITICAL: Single line compression to eliminate anonymous whitespace rendering text-nodes
    this.shadowRoot.innerHTML = `<style>${css}</style><button class="slider-dot" type="button"></button>`;
  }

  connectedCallback() {
    this.buttonEl = this.shadowRoot.querySelector('.slider-dot');
    this._handleClick = this._handleClick.bind(this);
    
    if (this.buttonEl) {
      this.buttonEl.addEventListener('click', this._handleClick);
    }

    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this.buttonEl) {
      this.buttonEl.removeEventListener('click', this._handleClick);
    }
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // GUARD: Prevents infinite loop reflection when internal scrubbing occurs
    if (name === 'aria-label' && newValue === null) return;

    if (this.buttonEl && oldValue !== newValue) {
      this.updateAttributes();
    }
  }

  /**
   * Dispatches unified cross-boundary event when interactive dot trigger fires
   */
  _handleClick(e) {
    this.dispatchEvent(new CustomEvent('ds-dot-click', {
      bubbles: true,
      composed: true,
      detail: {
        active: this.hasAttribute('active') && this.getAttribute('active') !== 'false'
      }
    }));
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
    const isActive = this.hasAttribute('active') && this.getAttribute('active') !== 'false';
    const ariaLabel = this.getAttribute('aria-label') || 'Go to slide';

    // Structural class management
    this.buttonEl.className = `slider-dot${isActive ? ' active' : ''}`;
    this.buttonEl.setAttribute('aria-current', isActive ? 'true' : 'false');

    // --- ARIA DELEGATION & HOST MARKUP SCRUBBING ---
    if (ariaLabel) {
      this.buttonEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label'); // Keeps outer light DOM tree validation compliant
    }
  }
}

if (!customElements.get('ds-slider-dot')) {
  customElements.define('ds-slider-dot', SliderDot);
}
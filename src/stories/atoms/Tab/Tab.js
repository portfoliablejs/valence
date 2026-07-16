import css from './tab.css?inline';

export class Tab extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'active', 'aria-label', 'disabled'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // CRITICAL: Single line compression to eliminate anonymous whitespace rendering text-nodes
    this.shadowRoot.innerHTML = `<style>${css}</style><button class="combo-tab" role="tab" type="button"><slot></slot></button>`;
  }

  connectedCallback() {
    this.btnEl = this.shadowRoot.querySelector('button');
    this._handleClick = this._handleClick.bind(this);

    if (this.btnEl) {
      this.btnEl.addEventListener('click', this._handleClick);
    }

    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this.btnEl) {
      this.btnEl.removeEventListener('click', this._handleClick);
    }
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // GUARD: Prevents infinite loop reflection when internal scrubbing occurs
    if (name === 'aria-label' && newValue === null) return;

    if (this.btnEl && oldValue !== newValue) {
      this.updateAttributes();
    }
  }

  /**
   * Dispatches unified cross-boundary event when tab button trigger fires
   */
  _handleClick(e) {
    if (this.hasAttribute('disabled')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.dispatchEvent(new CustomEvent('ds-tab-click', {
      bubbles: true,
      composed: true,
      detail: {
        active: this.hasAttribute('active') && this.getAttribute('active') !== 'false',
        label: this.getAttribute('label') || ''
      }
    }));
  }

  /**
   * Public method to programmatically set keyboard focus to the internal tab trigger
   */
  focusTab() {
    if (this.btnEl) {
      this.btnEl.focus();
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
    const label = this.getAttribute('label');
    const disabled = this.hasAttribute('disabled');
    const ariaLabel = this.getAttribute('aria-label');

    // Structural class management & ARIA tab semantics
    this.btnEl.className = `combo-tab${isActive ? ' active' : ''}`;
    this.btnEl.setAttribute('aria-selected', isActive ? 'true' : 'false');
    this.btnEl.setAttribute('tabindex', isActive ? '0' : '-1');

    if (disabled) {
      this.btnEl.setAttribute('disabled', '');
      this.btnEl.setAttribute('aria-disabled', 'true');
    } else {
      this.btnEl.removeAttribute('disabled');
      this.btnEl.removeAttribute('aria-disabled');
    }

    // Direct label attribute fallback if slotted light DOM content isn't passed
    if (label) {
      this.btnEl.textContent = label;
    }

    // --- ARIA DELEGATION & HOST MARKUP SCRUBBING ---
    if (ariaLabel) {
      this.btnEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label'); // Keeps outer light DOM tree validation compliant
    }
  }
}

if (!customElements.get('ds-tab')) {
  customElements.define('ds-tab', Tab);
}
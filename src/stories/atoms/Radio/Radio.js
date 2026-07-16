import css from './radio.css?inline';

export class DsRadio extends HTMLElement {
  static get observedAttributes() {
    return ['selected', 'disabled', 'invalid', 'aria-label', 'aria-invalid'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Compressed template string prevents ghost text nodes inside Shadow DOM layouts
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="radio-root"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" class="radio-outer"></circle><circle cx="12" cy="12" r="5" class="radio-inner" fill="currentColor"></circle></svg></div>`;

    this._toggleSelected = this._toggleSelected.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(value) {
    this.toggleAttribute('disabled', Boolean(value));
  }

  get selected() {
    return this.hasAttribute('selected');
  }

  set selected(value) {
    this.toggleAttribute('selected', Boolean(value));
  }

  get invalid() {
    return this.hasAttribute('invalid') || this.getAttribute('aria-invalid') === 'true';
  }

  set invalid(value) {
    this.toggleAttribute('invalid', Boolean(value));
  }

  connectedCallback() {
    this.updateAttributes();
    this._observeRootAccessibility();

    this.addEventListener('click', this._toggleSelected);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._toggleSelected);
    this.removeEventListener('keydown', this._handleKeyDown);

    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'selected') {
        this.setAttribute('aria-checked', this.hasAttribute('selected').toString());
      } else if (name === 'disabled') {
        this.setAttribute('aria-disabled', this.hasAttribute('disabled').toString());
        this.setAttribute('tabindex', this.hasAttribute('disabled') ? '-1' : '0');
      } else if (name === 'invalid') {
        this.setAttribute('aria-invalid', this.hasAttribute('invalid').toString());
      } else if (name === 'aria-label') {
        if (newValue) {
          this.setAttribute('aria-label', newValue);
        }
      }
    }
  }

  _handleKeyDown(e) {
    if (this.disabled) return;

    if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
      e.preventDefault();
      this._toggleSelected();
    }
  }

  _toggleSelected() {
    if (this.disabled) return;

    this.toggleAttribute('selected');
    const isSelected = this.hasAttribute('selected');
    this.setAttribute('aria-checked', isSelected.toString());
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
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', this.disabled ? '-1' : '0');
    this.setAttribute('aria-checked', this.hasAttribute('selected').toString());
    this.setAttribute('aria-disabled', this.disabled.toString());
    this.setAttribute('aria-invalid', this.invalid.toString());
  }
}

if (!customElements.get('ds-radio')) {
  customElements.define('ds-radio', DsRadio);
}
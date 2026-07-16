import css from './check.css?inline';

export class DsCheck extends HTMLElement {
  static get observedAttributes() {
    return ['selected', 'disabled', 'has-background', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Compressed template string prevents ghost text nodes inside Shadow DOM layouts
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="check-root"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>`;

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

  get hasBackground() {
    return this.hasAttribute('has-background');
  }

  set hasBackground(value) {
    this.toggleAttribute('has-background', Boolean(value));
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
    this.setAttribute('role', 'checkbox');
    this.setAttribute('tabindex', this.disabled ? '-1' : '0');
    this.setAttribute('aria-checked', this.hasAttribute('selected').toString());
    this.setAttribute('aria-disabled', this.disabled.toString());
  }
}

if (!customElements.get('ds-check')) {
  customElements.define('ds-check', DsCheck);
}
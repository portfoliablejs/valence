import css from './kbd.css?inline';

export class DsKbd extends HTMLElement {
  static get observedAttributes() { 
    return ['variant', 'key', 'show-plus']; 
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<style>${css}</style><kbd><slot></slot><span id="combo-container"></span></kbd>`;
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this.render();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const comboContainer = this.shadowRoot.getElementById('combo-container');
    if (!comboContainer) return;

    const showPlus = this.hasAttribute('show-plus');
    const key = this.getAttribute('key');

    if (showPlus && key) {
      comboContainer.innerHTML = `
        <span class="plus" aria-hidden="true">+</span>
        <span class="key">${key}</span>
      `;
    } else {
      comboContainer.innerHTML = '';
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
}

if (!customElements.get('ds-kbd')) {
  customElements.define('ds-kbd', DsKbd);
}
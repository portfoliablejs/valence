import css from './button.css?inline';
import '../../sub-atomic/Iconography/Iconography'; 

export class Button extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'aria-label', 'disabled', 'icon', 'icon-variant', 'icon-position'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<style>${css}</style><button type="button"><ds-icon class="btn-icon" style="display: none;"></ds-icon><slot></slot></button>`;
  }

  connectedCallback() {
    this.buttonEl = this.shadowRoot.querySelector('button');
    this.iconEl = this.shadowRoot.querySelector('.btn-icon');
    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'aria-label' && newValue === null) return;

    if (this.buttonEl && oldValue !== newValue) {
      this.updateAttributes();
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
    this._themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  updateAttributes() {
    const variant = this.getAttribute('variant') || 'primary';
    const ariaLabel = this.getAttribute('aria-label');
    const disabled = this.hasAttribute('disabled');
    const iconName = this.getAttribute('icon');
    const iconPosition = this.getAttribute('icon-position') || 'left';

    this.buttonEl.className = `variant-${variant}`;
    this.buttonEl.disabled = disabled;

    if (ariaLabel) {
      this.buttonEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }

    if (iconName) {
      this.iconEl.setAttribute('name', iconName);
      
      // Strict mapping
      const iconVariant = this.getAttribute('icon-variant');
      if (iconVariant === 'fill') {
        this.iconEl.setAttribute('variant', 'fill');
      } else {
        this.iconEl.removeAttribute('variant');
      }

      const iconSize = (variant === 'icon' || variant === 'floating') ? '20' : '14';
      this.iconEl.setAttribute('size', iconSize);
      this.iconEl.style.display = 'inline-flex';
      this.buttonEl.classList.add('has-icon');
    } else {
      this.iconEl.style.display = 'none';
      this.buttonEl.classList.remove('has-icon');
    }

    if (iconPosition === 'right') {
      this.setAttribute('icon-position', 'right');
    } else if (this.hasAttribute('icon-position')) {
      this.removeAttribute('icon-position');
    }
  }
}

if (!customElements.get('ds-button')) {
  customElements.define('ds-button', Button);
}
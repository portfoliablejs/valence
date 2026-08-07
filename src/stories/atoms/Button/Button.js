import css from './button.css?inline';
import '../../sub-atomic/Iconography/Iconography'; 

const DEFAULT_IMAGE_SRC = 'https://thispersondoesnotexist.com/random-person.jpeg';
const DEFAULT_IMAGE_ALT = 'Profile image';
const DEFAULT_IMAGE_CONTENT_SIZE_PX = '22';

export class Button extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'aria-label', 'disabled', 'has-text', 'has-icon', 'icon', 'icon-variant', 'icon-position', 'has-image', 'image-src', 'image-alt', 'image-position'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<style>${css}</style><button type="button"><img class="btn-image" alt="" loading="lazy" referrerpolicy="no-referrer" style="display: none;"><ds-icon class="btn-icon" style="display: none;"></ds-icon><span class="btn-label"><slot></slot></span></button>`;
  }

  connectedCallback() {
    this.buttonEl = this.shadowRoot.querySelector('button');
    this.imageEl = this.shadowRoot.querySelector('.btn-image');
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
    const requestedVariant = this.getAttribute('variant') || 'primary';
    const normalizedVariant = requestedVariant === 'text' ? 'tertiary' : requestedVariant;
    const variant = ['primary', 'secondary', 'tertiary', 'floating'].includes(normalizedVariant)
      ? normalizedVariant
      : 'primary';
    const ariaLabel = this.getAttribute('aria-label');
    const disabled = this.hasAttribute('disabled');
    const hasTextAttr = this.getAttribute('has-text');
    const hasText = hasTextAttr === null ? true : hasTextAttr !== 'false';
    const hasIcon = this.hasAttribute('has-icon');
    const hasImage = this.hasAttribute('has-image');
    const iconName = this.getAttribute('icon');
    const iconPosition = this.getAttribute('icon-position') || 'left';
    const imagePosition = this.getAttribute('image-position') || 'left';
    const activePosition = hasImage ? imagePosition : iconPosition;

    this.buttonEl.className = `variant-${variant}`;
    this.buttonEl.disabled = disabled;

    if (ariaLabel) {
      this.buttonEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }

    if (hasImage) {
      this.imageEl.setAttribute('src', this.getAttribute('image-src') || DEFAULT_IMAGE_SRC);
      this.imageEl.setAttribute('alt', this.getAttribute('image-alt') || DEFAULT_IMAGE_ALT);
      this.imageEl.style.setProperty('--ds-button-image-content-size', `${DEFAULT_IMAGE_CONTENT_SIZE_PX}px`);
      this.imageEl.style.display = 'block';
      this.buttonEl.classList.add('has-image');
    } else {
      this.imageEl.style.display = 'none';
      this.buttonEl.classList.remove('has-image');
      this.imageEl.style.removeProperty('--ds-button-image-content-size');
      this.imageEl.removeAttribute('src');
      this.imageEl.setAttribute('alt', '');
    }

    if (hasIcon && iconName && !hasImage) {
      this.iconEl.setAttribute('name', iconName);
      
      // Strict mapping
      const iconVariant = this.getAttribute('icon-variant');
      if (iconVariant === 'fill') {
        this.iconEl.setAttribute('variant', 'fill');
      } else {
        this.iconEl.removeAttribute('variant');
      }

      this.iconEl.removeAttribute('size');
      this.iconEl.style.setProperty('--icon-size', 'var(--ds-button-icon-size, 22px)');
      this.iconEl.style.display = 'inline-flex';
      this.buttonEl.classList.add('has-icon');
    } else {
      this.iconEl.style.display = 'none';
      this.iconEl.style.removeProperty('--icon-size');
      this.buttonEl.classList.remove('has-icon');
    }

    this.buttonEl.classList.toggle('no-text', !hasText);

    if (activePosition === 'right') {
      this.setAttribute('content-position', 'right');
    } else {
      this.removeAttribute('content-position');
    }
  }
}

if (!customElements.get('ds-button')) {
  customElements.define('ds-button', Button);
}
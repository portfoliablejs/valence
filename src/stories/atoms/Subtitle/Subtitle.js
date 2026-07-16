import css from './subtitle.css?inline';

export class Subtitle extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'visible', 'aria-label'];
  }

  constructor() {
  super();
  this.attachShadow({ mode: 'open' });
  // Single continuous line compression prevents anonymous whitespace nodes
  this.shadowRoot.innerHTML = `<style>${css}</style><div class="custom-subtitle" aria-live="polite" draggable="true"><slot></slot></div>`;

  // Free drag tracking state
  this._isDragging = false;
  this._currentX = 0;
  this._currentY = 0;
  this._initialX = 0;
  this._initialY = 0;
  this._xOffset = 0;
  this._yOffset = 0;
}

  connectedCallback() {
    this.subtitleEl = this.shadowRoot.querySelector('.custom-subtitle');
    this.updateAttributes();
    this._observeRootAccessibility();
    this._initFreeDrag();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    this._removeFreeDrag();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'aria-label' && newValue === null) return;

    if (this.subtitleEl && oldValue !== newValue) {
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
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  _initFreeDrag() {
    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);

    if (this.subtitleEl) {
      this.subtitleEl.addEventListener('pointerdown', this._onPointerDown);
    }
  }

  _removeFreeDrag() {
    if (this.subtitleEl) {
      this.subtitleEl.removeEventListener('pointerdown', this._onPointerDown);
    }
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
  }

  _onPointerDown(e) {
    if (e.button !== 0) return;

    this._isDragging = true;
    this._initialX = e.clientX - this._xOffset;
    this._initialY = e.clientY - this._yOffset;

    this.subtitleEl.classList.add('dragging');

    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);

    this.dispatchEvent(new CustomEvent('ds-subtitle-dragstart', {
      bubbles: true,
      composed: true,
      detail: { x: this._xOffset, y: this._yOffset }
    }));
  }

  _onPointerMove(e) {
    if (!this._isDragging) return;

    e.preventDefault();
    this._currentX = e.clientX - this._initialX;
    this._currentY = e.clientY - this._initialY;

    this._xOffset = this._currentX;
    this._yOffset = this._currentY;

    this.subtitleEl.style.transform = `translate3d(${this._currentX}px, ${this._currentY}px, 0)`;
  }

  _onPointerUp() {
    if (!this._isDragging) return;

    this._initialX = this._currentX;
    this._initialY = this._currentY;
    this._isDragging = false;

    this.subtitleEl.classList.remove('dragging');

    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);

    this.dispatchEvent(new CustomEvent('ds-subtitle-dragend', {
      bubbles: true,
      composed: true,
      detail: { x: this._xOffset, y: this._yOffset }
    }));
  }

  updateAttributes() {
    const text = this.getAttribute('text');
    const isVisible = this.hasAttribute('visible') && this.getAttribute('visible') !== 'false';
    const ariaLabel = this.getAttribute('aria-label');

    if (isVisible) {
      this.subtitleEl.classList.add('visible');
      this.subtitleEl.removeAttribute('aria-hidden');
    } else {
      this.subtitleEl.classList.remove('visible');
      this.subtitleEl.setAttribute('aria-hidden', 'true');
    }

    if (text) {
      this.subtitleEl.textContent = text;
    }

    if (ariaLabel) {
      this.subtitleEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }
  }
}

if (!customElements.get('ds-subtitle')) {
  customElements.define('ds-subtitle', Subtitle);
}
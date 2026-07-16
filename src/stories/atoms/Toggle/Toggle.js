import css from './toggle.css?inline';

/**
 * ds-toggle
 * 
 * A resilient universal toggle switch. Features fully hardware-accelerated 
 * pointer drag tracking that dynamically cross-fades background colors, 
 * typography, and icon layers 1:1 with user interaction.
 */
export class DsToggle extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'disabled', 'aria-label', 'show-icon', 'text-on', 'text-off'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // CRITICAL: Single continuous line template to prevent anonymous whitespace layout bugs
    this.shadowRoot.innerHTML = `<style>${css}</style><label class="component-root"><input type="checkbox" role="switch"><div class="track"><span class="track-label label-on" aria-hidden="true"></span><span class="track-label label-off" aria-hidden="true"></span></div><div class="knob"><div class="icon-container"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><line x1="12" y1="7" x2="12" y2="17"></line></svg></div></div></label>`;

    this.isDragging = false;
    this.hasDragged = false;
    this.startX = 0;
    this.currentX = 0;
    this.maxTranslate = 0;

    this._handleChange = this._handleChange.bind(this);
    this._handlePointerDown = this._handlePointerDown.bind(this);
    this._handlePointerMove = this._handlePointerMove.bind(this);
    this._handlePointerUp = this._handlePointerUp.bind(this);
    this.calculateWidths = this.calculateWidths.bind(this);
  }

  connectedCallback() {
    this.rootEl = this.shadowRoot.querySelector('.component-root');
    this.inputEl = this.shadowRoot.querySelector('input');
    this.labelOn = this.shadowRoot.querySelector('.label-on');
    this.labelOff = this.shadowRoot.querySelector('.label-off');
    this.knobEl = this.shadowRoot.querySelector('.knob');
    
    this.inputEl.addEventListener('change', this._handleChange);
    this.rootEl.addEventListener('pointerdown', this._handlePointerDown);

    // Interceptor ensures that releasing a drag doesn't accidentally trigger a standard click
    this._clickInterceptor = (e) => { if (this.hasDragged) e.preventDefault(); };
    this.rootEl.addEventListener('click', this._clickInterceptor);

    this.resizeObserver = new ResizeObserver(() => this.calculateWidths());
    this.resizeObserver.observe(this.rootEl);

    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener('change', this._handleChange);
    this.rootEl.removeEventListener('pointerdown', this._handlePointerDown);
    this.rootEl.removeEventListener('click', this._clickInterceptor);
    this.rootEl.removeEventListener('pointermove', this._handlePointerMove);
    this.rootEl.removeEventListener('pointerup', this._handlePointerUp);
    this.rootEl.removeEventListener('pointercancel', this._handlePointerUp);
    if (this._themeObserver) this._themeObserver.disconnect();
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'aria-label' && newValue === null) return;
    if (this.inputEl && oldValue !== newValue) {
      this.updateAttributes();
    }
  }

  _handleChange(event) {
    event.stopPropagation();
    const isChecked = event.target.checked;
    this.toggleAttribute('checked', isChecked);
    this.dispatchEvent(new CustomEvent('ds-toggle-change', { detail: { checked: isChecked }, bubbles: true, composed: true }));
  }

  _handlePointerDown(event) {
    if (this.hasAttribute('disabled') || this.hasAttribute('a11y-reduce-motion')) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return; // Enforce primary touch/click only
    event.preventDefault(); 
    
    this.isDragging = true;
    this.hasDragged = false;
    this.startX = event.clientX;
    this.initialCheckedState = this.inputEl.checked;
    
    const trackWidth = this.rootEl.clientWidth;
    const knobWidth = this.knobEl.clientWidth;
    this.maxTranslate = trackWidth - knobWidth - 6; 
    this.currentX = this.initialCheckedState ? this.maxTranslate : 0;
    
    this.rootEl.setPointerCapture(event.pointerId); 
    this.rootEl.addEventListener('pointermove', this._handlePointerMove);
    this.rootEl.addEventListener('pointerup', this._handlePointerUp);
    this.rootEl.addEventListener('pointercancel', this._handlePointerUp);
  }

  _handlePointerMove(event) {
    if (!this.isDragging) return;
    
    // Minor 3px deadzone ensures simple taps aren't flagged as mathematical drags
    if (Math.abs(event.clientX - this.startX) > 3) {
      if (!this.hasDragged) {
        this.hasDragged = true;
        this.rootEl.classList.add('is-dragging');
      }
    }
    if (!this.hasDragged) return;
    
    const deltaX = event.clientX - this.startX;
    const initialTranslate = this.initialCheckedState ? this.maxTranslate : 0;
    this.currentX = Math.max(0, Math.min(initialTranslate + deltaX, this.maxTranslate));
    
    // Pipe pure math directly to CSS for 1:1 hardware cross-fading
    const progress = this.currentX / this.maxTranslate;
    this.rootEl.style.setProperty('--drag-progress', progress.toString());
    this.knobEl.style.transform = `translateY(-50%) translateX(${this.currentX}px)`;
  }

  _handlePointerUp(event) {
    if (!this.isDragging) return;
    this.isDragging = false;
    
    this.rootEl.releasePointerCapture(event.pointerId);
    this.rootEl.removeEventListener('pointermove', this._handlePointerMove);
    this.rootEl.removeEventListener('pointerup', this._handlePointerUp);
    this.rootEl.removeEventListener('pointercancel', this._handlePointerUp);
    
    if (this.hasDragged) {
      const threshold = this.maxTranslate / 2;
      const newCheckedState = this.currentX > threshold;
      
      if (newCheckedState !== this.initialCheckedState) {
        this.inputEl.checked = newCheckedState;
        this.toggleAttribute('checked', newCheckedState);
        this.dispatchEvent(new CustomEvent('ds-toggle-change', { detail: { checked: newCheckedState }, bubbles: true, composed: true }));
      }
      setTimeout(() => { this.hasDragged = false; }, 50);
    }
    
    // Yield layout control entirely back to the CSS engine for the final state snap
    requestAnimationFrame(() => {
      // Force layout reflow so the browser registers the exact drag release coordinates before transitioning
      void this.rootEl.offsetHeight;

      this.rootEl.classList.remove('is-dragging');
      this.rootEl.style.removeProperty('--drag-progress');
      this.knobEl.style.transform = '';
    });
  }

  calculateWidths() {
    const textOn = this.getAttribute('text-on') || '';
    const textOff = this.getAttribute('text-off') || '';

    this.labelOn.textContent = textOn;
    this.labelOff.textContent = textOff;

    if (!textOn && !textOff) {
      this.style.removeProperty('--dynamic-width');
      this.style.removeProperty('--knob-travel');
      this.rootEl.classList.remove('has-text');
      return;
    }

    this.rootEl.classList.add('has-text');

    this.labelOn.style.display = 'inline-block';
    this.labelOn.style.width = 'auto';
    this.labelOn.style.position = 'static';
    
    this.labelOff.style.display = 'inline-block';
    this.labelOff.style.width = 'auto';
    this.labelOff.style.position = 'static';

    const maxTextW = Math.max(this.labelOn.scrollWidth, this.labelOff.scrollWidth);

    this.labelOn.style.cssText = '';
    this.labelOff.style.cssText = '';

    const knobSize = parseInt(getComputedStyle(this).getPropertyValue('--custom-knob-size') || '26', 10);
    const paddingBuffer = 20; 
    const totalW = knobSize + maxTextW + paddingBuffer;

    this.style.setProperty('--dynamic-width', `${totalW}px`);
    this.style.setProperty('--knob-travel', `${totalW - knobSize - 6}px`); 
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
      
      const wasLargeText = this.hasAttribute('a11y-large-text');
      const isLargeText = root.classList.contains('a11y-large-text');
      this.toggleAttribute('a11y-large-text', isLargeText);
      
      if (wasLargeText !== isLargeText) this.calculateWidths();
    };
    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
  }

  updateAttributes() {
    const isChecked = this.hasAttribute('checked');
    const isDisabled = this.hasAttribute('disabled');
    const ariaLabel = this.getAttribute('aria-label');

    if (this.inputEl.checked !== isChecked) this.inputEl.checked = isChecked;
    this.inputEl.disabled = isDisabled;

    this.calculateWidths();

    if (ariaLabel) {
      this.inputEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }
  }
}

if (!customElements.get('ds-toggle')) {
  customElements.define('ds-toggle', DsToggle);
}
import css from './item-row.css?inline';
import '../../sub-atomic/Iconography/Iconography';
import '../../atoms/Toggle/Toggle';
import '../../atoms/Check/Check';
import '../../atoms/Radio/Radio';
import '../../atoms/Kbd/Kbd';

export class DsItemRow extends HTMLElement {
  static get observedAttributes() {
    return [
      'icon', 'show-icon', 'icon-variant', 'label', 
      'kbd', 'show-kbd', 'kbd-variant', 'kbd-show-plus', 'kbd-key',
      'control', 'active', 'selected', 'disabled', 'aria-label',
      'toggle-text-on', 'toggle-text-off', 'check-has-background'
    ];
  }

  get iconVariant() {
    return this.getAttribute('icon-variant');
  }

  set iconVariant(val) {
    if (val) {
      this.setAttribute('icon-variant', val);
    } else {
      this.removeAttribute('icon-variant');
    }
  }

  get icon() {
    return this.getAttribute('icon');
  }
  set icon(val) {
    if (val) this.setAttribute('icon', val);
    else this.removeAttribute('icon');
  }

  get showIcon() {
    return this.hasAttribute('show-icon');
  }
  set showIcon(val) {
    if (val) this.setAttribute('show-icon', '');
    else this.removeAttribute('show-icon');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `<style>${css}</style><div class="a11y-row"><div class="row-left"><ds-icon class="row-icon"></ds-icon><span class="row-label"></span></div><div class="row-right"><ds-kbd class="kbd-shortcut"></ds-kbd><div class="control-container"></div></div></div>`;

    this._boundHandleClick = this._handleClick.bind(this);
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
  }

  connectedCallback() {
    this.rowBtn = this.shadowRoot.querySelector('.a11y-row');
    this.iconEl = this.shadowRoot.querySelector('.row-icon');
    this.labelEl = this.shadowRoot.querySelector('.row-label');
    this.kbdEl = this.shadowRoot.querySelector('.kbd-shortcut');
    this.controlContainer = this.shadowRoot.querySelector('.control-container');

    if (this.rowBtn) {
      this.rowBtn.addEventListener('click', this._boundHandleClick);
      this.rowBtn.addEventListener('keydown', this._boundHandleKeyDown);
    }

    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    if (this.rowBtn) {
      this.rowBtn.removeEventListener('click', this._boundHandleClick);
      this.rowBtn.removeEventListener('keydown', this._boundHandleKeyDown);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'aria-label' && newValue === null) return;
    if (oldValue !== newValue) {
      this.updateAttributes();
    }
  }

  _handleKeyDown(e) {
    if (this.hasAttribute('disabled')) return;
    const controlType = this.getAttribute('control') || 'none';

    if (controlType === 'none' && (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter')) {
      e.preventDefault();
      this._handleClick(e);
    }
  }

  _handleClick(e) {
    if (this.hasAttribute('disabled')) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    const controlType = this.getAttribute('control') || 'none';
    const isDirectControlClick = e.target.closest && e.target.closest('.control-container');

    if (controlType === 'toggle') {
      if (!isDirectControlClick) {
        const newActive = !this.hasAttribute('active');
        this.toggleAttribute('active', newActive);

        this.dispatchEvent(new CustomEvent('ds-row-click', {
          bubbles: true,
          composed: true,
          detail: { control: 'toggle', active: newActive, selected: this.hasAttribute('selected'), label: this.getAttribute('label') }
        }));
      }
    } else if (controlType === 'check') {
      let newSelected;
      if (!isDirectControlClick) {
        newSelected = !this.hasAttribute('selected');
        this.toggleAttribute('selected', newSelected);
      } else {
        const checkEl = this.shadowRoot.querySelector('ds-check');
        newSelected = checkEl ? checkEl.hasAttribute('selected') : !this.hasAttribute('selected');
        this.toggleAttribute('selected', newSelected);
      }

      this.dispatchEvent(new CustomEvent('ds-row-click', {
        bubbles: true,
        composed: true,
        detail: { control: 'check', active: this.hasAttribute('active'), selected: newSelected, label: this.getAttribute('label') }
      }));
    } else if (controlType === 'radio') {
      let newSelected;
      if (!isDirectControlClick) {
        newSelected = !this.hasAttribute('selected');
        this.toggleAttribute('selected', newSelected);
      } else {
        const radioEl = this.shadowRoot.querySelector('ds-radio');
        newSelected = radioEl ? radioEl.hasAttribute('selected') : !this.hasAttribute('selected');
        this.toggleAttribute('selected', newSelected);
      }

      this.dispatchEvent(new CustomEvent('ds-row-click', {
        bubbles: true,
        composed: true,
        detail: { control: 'radio', active: this.hasAttribute('active'), selected: newSelected, label: this.getAttribute('label') }
      }));
    } else {
      this.dispatchEvent(new CustomEvent('ds-row-click', {
        bubbles: true,
        composed: true,
        detail: { control: 'none', active: this.hasAttribute('active'), selected: this.hasAttribute('selected'), label: this.getAttribute('label') }
      }));
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
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] });
  }

  updateAttributes() {
    const isDisabled = this.hasAttribute('disabled');
    const ariaLabel = this.getAttribute('aria-label');
    const controlAttr = this.getAttribute('control') || 'none';
    const labelText = this.getAttribute('label') || '';
    const effectiveLabel = labelText || ariaLabel || 'Option';

    // 1. Text & Icon Sync
    if (this.labelEl) {
      this.labelEl.textContent = labelText;
    }

    if (this.iconEl) {
      if (this.hasAttribute('show-icon') && this.getAttribute('icon')) {
        this.iconEl.setAttribute('name', this.getAttribute('icon'));
        
        // Strict mapping
        const iconVariant = this.getAttribute('icon-variant');
        if (iconVariant === 'fill') {
          this.iconEl.setAttribute('variant', 'fill');
        } else {
          this.iconEl.removeAttribute('variant');
        }

        this.iconEl.style.display = '';
      } else {
        this.iconEl.style.display = 'none';
      }
    }

    // 2. Keyboard Shortcuts rendering using <ds-kbd> elements
    if (this.kbdEl) {
      if (this.hasAttribute('show-kbd') && this.getAttribute('kbd')) {
        this.kbdEl.textContent = this.getAttribute('kbd');
        this.kbdEl.style.display = '';

        const kbdVariant = this.getAttribute('kbd-variant');
        if (kbdVariant) this.kbdEl.setAttribute('variant', kbdVariant);
        this.hasAttribute('kbd-show-plus') ? this.kbdEl.setAttribute('show-plus', '') : this.kbdEl.removeAttribute('show-plus');
        const kbdKey = this.getAttribute('kbd-key');
        if (kbdKey) this.kbdEl.setAttribute('key', kbdKey); else this.kbdEl.removeAttribute('key');
      } else {
        this.kbdEl.style.display = 'none';
      }
    }

    // 3. Delegate Accessibility Roles & Focus Rules
    if (this.rowBtn) {
      if (controlAttr === 'none') {
        this.rowBtn.setAttribute('role', 'button');
        if (isDisabled) {
          this.rowBtn.setAttribute('tabindex', '-1');
          this.rowBtn.setAttribute('aria-disabled', 'true');
        } else {
          this.rowBtn.setAttribute('tabindex', '0');
          this.rowBtn.removeAttribute('aria-disabled');
        }

        if (effectiveLabel) {
          this.rowBtn.setAttribute('aria-label', effectiveLabel);
        }
      } else {
        this.rowBtn.removeAttribute('role');
        this.rowBtn.removeAttribute('tabindex');
        this.rowBtn.removeAttribute('aria-disabled');
        this.rowBtn.removeAttribute('aria-label');
      }

      if (ariaLabel) {
        this.removeAttribute('aria-label');
      }
    }

    // 4. Render Control Variant Containers
    if (this.controlContainer) {
      let currentControl = this.controlContainer.firstElementChild;
      const targetTag = controlAttr === 'toggle' ? 'ds-toggle' : controlAttr === 'check' ? 'ds-check' : controlAttr === 'radio' ? 'ds-radio' : null;

      if (currentControl && currentControl.tagName.toLowerCase() !== targetTag) {
        this.controlContainer.innerHTML = '';
        currentControl = null;
      }

      if (controlAttr === 'toggle') {
        if (!currentControl) {
          currentControl = document.createElement('ds-toggle');
          currentControl.addEventListener('ds-toggle-change', (e) => {
            e.stopPropagation();
            this.toggleAttribute('active', e.detail.checked);
            this.dispatchEvent(new CustomEvent('ds-row-click', {
              bubbles: true, composed: true,
              detail: { control: 'toggle', active: e.detail.checked, selected: this.hasAttribute('selected'), label: this.getAttribute('label') }
            }));
          });
          this.controlContainer.appendChild(currentControl);
        }

        currentControl.setAttribute('show-icon', 'true');
        currentControl.setAttribute('aria-label', effectiveLabel);
        this.hasAttribute('active') ? currentControl.setAttribute('checked', '') : currentControl.removeAttribute('checked');
        isDisabled ? currentControl.setAttribute('disabled', '') : currentControl.removeAttribute('disabled');

        const textOn = this.getAttribute('toggle-text-on');
        const textOff = this.getAttribute('toggle-text-off');
        if (textOn) currentControl.setAttribute('text-on', textOn); else currentControl.removeAttribute('text-on');
        if (textOff) currentControl.setAttribute('text-off', textOff); else currentControl.removeAttribute('text-off');

      } else if (controlAttr === 'check') {
        if (!currentControl) {
          currentControl = document.createElement('ds-check');
          this.controlContainer.appendChild(currentControl);
        }

        currentControl.setAttribute('aria-label', effectiveLabel);
        const isSelected = this.hasAttribute('selected');
        isSelected ? currentControl.setAttribute('selected', '') : currentControl.removeAttribute('selected');
        isDisabled ? currentControl.setAttribute('disabled', '') : currentControl.removeAttribute('disabled');

        this.hasAttribute('check-has-background')
          ? currentControl.setAttribute('has-background', '')
          : currentControl.removeAttribute('has-background');

      } else if (controlAttr === 'radio') {
        if (!currentControl) {
          currentControl = document.createElement('ds-radio');
          this.controlContainer.appendChild(currentControl);
        }

        currentControl.setAttribute('aria-label', effectiveLabel);
        const isSelected = this.hasAttribute('selected');
        isSelected ? currentControl.setAttribute('selected', '') : currentControl.removeAttribute('selected');
        isDisabled ? currentControl.setAttribute('disabled', '') : currentControl.removeAttribute('disabled');

      } else if (controlAttr === 'none' && currentControl) {
        this.controlContainer.innerHTML = '';
      }
    }
  }
}

if (!customElements.get('ds-item-row')) {
  customElements.define('ds-item-row', DsItemRow);
}
import css from './seek-bar.css?inline';
import '../../molecules/Tooltip/Tooltip.js';

export class SeekBar extends HTMLElement {
  static get observedAttributes() {
    return [
      'percent',
      'variant',
      'disabled',
      'show-tooltip',
      'tooltip-text',
      'show-kbd',
      'kbd-label',
      'kbd-key',
      'aria-label',
      'dir',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isDragging = false;

    // Removed tabindex="0" from the internal .seek-container wrapper to prevent duplicate loops[cite: 13]
// Inside SeekBar.js constructor
this.shadowRoot.innerHTML = `
  <style>${css}</style>
  <div class="seek-container" role="slider" aria-valuemin="0" aria-valuemax="100" tabindex="-1">
    <div class="seek-track">
      <div class="seek-fill"></div>
    </div>
    <ds-tooltip tabindex="-1" position="top" style="position: absolute; top: 0; left: 0%; width: 0; height: 100%; pointer-events: none;"></ds-tooltip>
  </div>
`;
    this.container = this.shadowRoot.querySelector('.seek-container');
    this.fill = this.shadowRoot.querySelector('.seek-fill');
    this.tooltip = this.shadowRoot.querySelector('ds-tooltip');

    // Bound handler references for event listener cleanup[cite: 13]
    this._onWindowMouseMove = this._onWindowMouseMove.bind(this);
    this._onWindowMouseUp = this._onWindowMouseUp.bind(this);
    this._onWindowTouchMove = this._onWindowTouchMove.bind(this);
    this._onWindowTouchEnd = this._onWindowTouchEnd.bind(this);
    this._onContainerMouseEnter = this._onContainerMouseEnter.bind(this);
    this._onContainerMouseLeave = this._onContainerMouseLeave.bind(this);
    this._onContainerMouseMove = this._onContainerMouseMove.bind(this);
  }

  connectedCallback() {
    this._observeRootAccessibility();
    this.bindEvents();
    this.render();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    this.unbindEvents();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      const currentDir = root.getAttribute('dir') || 'ltr';
      this.setAttribute('dir', currentDir);
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
      this.toggleAttribute('a11y-focus-mode', root.classList.contains('a11y-focus-mode'));
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, { attributes: true, attributeFilter: ['class', 'dir'] });
  }

  render() {
    const percent = parseFloat(this.getAttribute('percent')) || 0;
    const variant = this.getAttribute('variant') || 'default';
    const isVertical = variant === 'vertical';
    const isDisabled = this.hasAttribute('disabled');
    const ariaLabel = this.getAttribute('aria-label');
    const showTooltip = !this.hasAttribute('show-tooltip') || this.getAttribute('show-tooltip') !== 'false';

    this.fill.style.setProperty('--progress-percent', `${percent}%`);
    this.container.setAttribute('aria-valuenow', Math.round(percent).toString());

    if (isVertical) {
      this.container.setAttribute('aria-orientation', 'vertical');
    } else {
      this.container.removeAttribute('aria-orientation');
    }

    if (isDisabled) {
  this.container.classList.add('disabled');
  this.container.setAttribute('aria-disabled', 'true');
  this.removeAttribute('tabindex'); // Host is not focusable
} else {
  this.container.classList.remove('disabled');
  this.container.removeAttribute('aria-disabled');
  this.setAttribute('tabindex', '0'); // Host IS focusable
      if (this.tooltip) {
        this.tooltip.style.display = showTooltip ? 'block' : 'none';
      }
    }

    // Configure Tooltip Position & Attributes based on Variant[cite: 13]
    if (this.tooltip && showTooltip) {
      let targetPosition = 'top';
      if (variant === 'top-bar') targetPosition = 'bottom';
      if (variant === 'vertical') targetPosition = 'right';

      this.tooltip.setAttribute('position', targetPosition);

      const customText = this.getAttribute('tooltip-text');
      if (customText) {
        this.tooltip.setAttribute('text', customText);
      } else if (!this.tooltip.hasAttribute('text')) {
        this.tooltip.setAttribute('text', `${Math.round(percent)}%`);
      }

      if (this.hasAttribute('show-kbd')) {
        this.tooltip.setAttribute('show-kbd', '');
        if (this.getAttribute('kbd-label')) this.tooltip.setAttribute('kbd-label', this.getAttribute('kbd-label'));
        if (this.getAttribute('kbd-key')) this.tooltip.setAttribute('kbd-key', this.getAttribute('kbd-key'));
      } else {
        this.tooltip.removeAttribute('show-kbd');
      }
    }

    // ARIA Delegation & Host Scrubbing Pattern[cite: 13]
    if (ariaLabel) {
      this.container.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }
  }

  _calculatePercent(e) {
    const rect = this.container.getBoundingClientRect();
    const variant = this.getAttribute('variant') || 'default';
    const isVertical = variant === 'vertical';
    const isRTL = this.getAttribute('dir') === 'rtl';

    if (isVertical) {
      if (rect.height === 0) return 0;
      const clientY =
        e.clientY !== undefined
          ? e.clientY
          : e.touches && e.touches[0]
          ? e.touches[0].clientY
          : 0;
      const y = Math.max(0, Math.min(rect.bottom - clientY, rect.height));
      return (y / rect.height) * 100;
    } else {
      if (rect.width === 0) return 0;
      const clientX =
        e.clientX !== undefined
          ? e.clientX
          : e.touches && e.touches[0]
          ? e.touches[0].clientX
          : 0;
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      return isRTL ? 100 - percent : percent;
    }
  }

  _updateTooltipPosition(e) {
    if (!this.tooltip || this.hasAttribute('disabled')) return;
    const hoverPercent = this._calculatePercent(e);
    const variant = this.getAttribute('variant') || 'default';
    const isVertical = variant === 'vertical';
    const isRTL = this.getAttribute('dir') === 'rtl';

    if (isVertical) {
      this.tooltip.style.left = '50%';
      this.tooltip.style.top = `${100 - hoverPercent}%`;
      this.tooltip.style.width = '100%';
      this.tooltip.style.height = '0';
    } else {
      this.tooltip.style.left = isRTL ? `${100 - hoverPercent}%` : `${hoverPercent}%`;
      this.tooltip.style.top = '0';
      this.tooltip.style.width = '0';
      this.tooltip.style.height = '100%';
    }

    const customText = this.getAttribute('tooltip-text');
    const displayVal = Math.round(hoverPercent);
    this.tooltip.setAttribute(
      'text',
      customText ? `${customText} (${displayVal}%)` : `${displayVal}%`
    );

    this.tooltip.setAttribute('visible', '');
  }

  _handleMove(e) {
    if (this.hasAttribute('disabled')) return;

    const percent = this._calculatePercent(e);
    this.fill.style.setProperty('--progress-percent', `${percent}%`);
    this.container.setAttribute('aria-valuenow', Math.round(percent).toString());

    this._updateTooltipPosition(e);

    this.dispatchEvent(
      new CustomEvent('ds-seek', {
        detail: { percent },
        bubbles: true,
        composed: true,
      })
    );
  }

  _onContainerMouseEnter() {
    if (!this.hasAttribute('disabled') && this.tooltip) {
      this.tooltip.setAttribute('visible', '');
    }
  }

  _onContainerMouseLeave() {
    if (!this.isDragging && this.tooltip) {
      this.tooltip.removeAttribute('visible');
    }
  }

  _onContainerMouseMove(e) {
    if (!this.hasAttribute('disabled')) {
      this._updateTooltipPosition(e);
    }
  }

  _onWindowMouseMove(e) {
    if (this.isDragging) {
      this._handleMove(e);
    }
  }

  _onWindowMouseUp(e) {
    if (this.isDragging) {
      this.isDragging = false;
      this.container.classList.remove('is-dragging');

      if (this.tooltip) {
        if (e && e.clientX !== undefined) {
          const rect = this.container.getBoundingClientRect();
          const isInside =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

          if (!isInside) {
            this.tooltip.removeAttribute('visible');
          }
        } else {
          this.tooltip.removeAttribute('visible');
        }
      }
    }
  }

  _onWindowTouchMove(e) {
    if (this.isDragging) {
      this._handleMove(e);
    }
  }

  _onWindowTouchEnd() {
    if (this.isDragging) {
      this.isDragging = false;
      this.container.classList.remove('is-dragging');
      if (this.tooltip) {
        this.tooltip.removeAttribute('visible');
      }
    }
  }

  bindEvents() {
    this.container.addEventListener('mouseenter', this._onContainerMouseEnter);
    this.container.addEventListener('mouseleave', this._onContainerMouseLeave);
    this.container.addEventListener('mousemove', this._onContainerMouseMove);

    this.container.addEventListener('mousedown', (e) => {
      if (this.hasAttribute('disabled')) return;
      this.isDragging = true;
      this.container.classList.add('is-dragging');
      if (this.tooltip) this.tooltip.setAttribute('visible', '');
      this._handleMove(e);
    });

    this.container.addEventListener(
      'touchstart',
      (e) => {
        if (this.hasAttribute('disabled')) return;
        this.isDragging = true;
        this.container.classList.add('is-dragging');
        if (this.tooltip) this.tooltip.setAttribute('visible', '');
        this._handleMove(e);
      },
      { passive: true }
    );

    window.addEventListener('mousemove', this._onWindowMouseMove);
    window.addEventListener('mouseup', this._onWindowMouseUp);
    window.addEventListener('touchmove', this._onWindowTouchMove, { passive: true });
    window.addEventListener('touchend', this._onWindowTouchEnd);

    // Keyboard Accessibility captures events on the Host node wrapper directly[cite: 1, 13]
    this.addEventListener('keydown', (e) => {
      if (this.hasAttribute('disabled')) return;
      let current = parseFloat(this.container.getAttribute('aria-valuenow')) || 0;
      let step = 5;
      const isRTL = this.getAttribute('dir') === 'rtl';

      const isIncrement = isRTL 
        ? (e.key === 'ArrowLeft' || e.key === 'ArrowUp')
        : (e.key === 'ArrowRight' || e.key === 'ArrowUp');

      const isDecrement = isRTL
        ? (e.key === 'ArrowRight' || e.key === 'ArrowDown')
        : (e.key === 'ArrowLeft' || e.key === 'ArrowDown');

      let next = current;
      let handled = false;

      if (isIncrement) {
        next = Math.min(100, current + step);
        handled = true;
      } else if (isDecrement) {
        next = Math.max(0, current - step);
        handled = true;
      } else if (e.key === 'PageUp') {
        next = Math.min(100, current + (step * 2));
        handled = true;
      } else if (e.key === 'PageDown') {
        next = Math.max(0, current - (step * 2));
        handled = true;
      } else if (e.key === 'Home') {
        next = 0;
        handled = true;
      } else if (e.key === 'End') {
        next = 100;
        handled = true;
      }

      if (handled) {
        e.preventDefault();
        this.setAttribute('percent', next.toString());
        const rect = this.container.getBoundingClientRect();
        const isVertical = this.getAttribute('variant') === 'vertical';

        const syntheticE = isVertical
          ? { clientY: rect.bottom - (next / 100) * rect.height }
          : { clientX: isRTL ? rect.right - (next / 100) * rect.width : rect.left + (next / 100) * rect.width };

        this._handleMove(syntheticE);
      }
    });
  }

  unbindEvents() {
    this.container.removeEventListener('mouseenter', this._onContainerMouseEnter);
    this.container.removeEventListener('mouseleave', this._onContainerMouseLeave);
    this.container.removeEventListener('mousemove', this._onContainerMouseMove);
    window.removeEventListener('mousemove', this._onWindowMouseMove);
    window.removeEventListener('mouseup', this._onWindowMouseUp);
    window.removeEventListener('touchmove', this._onWindowTouchMove);
    window.removeEventListener('touchend', this._onWindowTouchEnd);
  }
}

if (!customElements.get('ds-seek-bar')) {
  customElements.define('ds-seek-bar', SeekBar);
}
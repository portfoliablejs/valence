import css from './breadcrumb.css?inline';
import '../../sub-atomic/Iconography/Iconography.js';
import '../../atoms/Button/Button.js';
import '../../molecules/Tooltip/Tooltip.js';
import '../../organisms/ContextualMenu/ContextualMenu.js';

export class Breadcrumb extends HTMLElement {
  static get observedAttributes() {
    return ['current-label', 'visible', 'aria-label', 'item-count'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._menuItems = null;
    this._items = null;

    this._onKeyDown = this._onKeyDown.bind(this);

    // Compressed template string prevents ghost text nodes inside Shadow DOM layouts
    this.shadowRoot.innerHTML = `<style>${css}</style><nav class="top-breadcrumb" aria-label="Breadcrumb"></nav>`;
  }

  get items() {
    return this._items;
  }

  set items(val) {
    if (Array.isArray(val)) {
      this._items = val;
      this.render();
    }
  }

  get itemCount() {
    const attr = parseInt(this.getAttribute('item-count'), 10);
    if (!isNaN(attr)) {
      return Math.max(1, attr);
    }
    return Array.isArray(this._items) ? this._items.length : 3;
  }

  set itemCount(val) {
    this.setAttribute('item-count', val.toString());
  }

  get menuItems() {
    return this._menuItems;
  }

  set menuItems(items) {
    this._menuItems = Array.isArray(items) ? items : (items === null ? null : []);
    this.render();
  }

  get currentLabel() {
    return this.getAttribute('current-label') || 'Item Title';
  }

  set currentLabel(val) {
    if (val) {
      this.setAttribute('current-label', val);
    } else {
      this.removeAttribute('current-label');
    }
  }

  get visible() {
    return this.getAttribute('visible') !== 'false';
  }

  set visible(val) {
    const isVisible = Boolean(val) && val !== 'false';
    this.setAttribute('visible', isVisible ? 'true' : 'false');
  }

  connectedCallback() {
    this.navEl = this.shadowRoot.querySelector('.top-breadcrumb');
    window.addEventListener('keydown', this._onKeyDown);
    this.render();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
    window.removeEventListener('keydown', this._onKeyDown);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'aria-label' && newValue === null) return;

    if (this.navEl) {
      this.render();
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

  _getDefaultCrumbs() {
    const count = this.itemCount;
    const label = this.currentLabel;

    if (count === 3) {
      return [
        { id: 'home', label: 'Home', hasMenu: false },
        { id: 'category', label: 'Category', hasMenu: true },
        { id: 'current', label: label, hasMenu: false }
      ];
    } else if (count === 2) {
      return [
        { id: 'home', label: 'Home', hasMenu: false },
        { id: 'current', label: label, hasMenu: true }
      ];
    }
    return [{ id: 'home', label: 'Home', hasMenu: false }];
  }

  _getEffectiveCrumbs() {
    if (Array.isArray(this._items) && this._items.length > 0) {
      return this._items;
    }
    return this._getDefaultCrumbs();
  }

  _onKeyDown(e) {
    const crumbs = this._getEffectiveCrumbs();
    if (crumbs.length <= 1) return;

    const activeEl = this.shadowRoot.activeElement || document.activeElement;
    const isEditingText = activeEl && (
      activeEl.tagName === 'INPUT' || 
      activeEl.tagName === 'TEXTAREA' || 
      activeEl.isContentEditable
    );

    if (e.key === 'Backspace' && !isEditingText) {
      e.preventDefault();
      this._handleReturn();
      return;
    }

    const focusableButtons = Array.from(this.shadowRoot.querySelectorAll('ds-button'));
    const currentIndex = focusableButtons.indexOf(this.shadowRoot.activeElement);

    if (currentIndex !== -1) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIdx = (currentIndex + 1) % focusableButtons.length;
        focusableButtons[nextIdx].focus();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIdx = (currentIndex - 1 + focusableButtons.length) % focusableButtons.length;
        focusableButtons[prevIdx].focus();
      }
    }
  }

  _handleReturn() {
    const crumbs = this._getEffectiveCrumbs();
    if (crumbs.length <= 1) return;

    const remainingCrumbs = crumbs.slice(0, -1);
    const targetItem = remainingCrumbs[remainingCrumbs.length - 1];

    this.dispatchEvent(new CustomEvent('ds-breadcrumb-return', {
      detail: { 
        remainingCount: remainingCrumbs.length,
        remainingItems: remainingCrumbs,
        targetItem
      },
      bubbles: true,
      composed: true
    }));
  }

  _handleHome() {
    const crumbs = this._getEffectiveCrumbs();
    const homeCrumb = crumbs[0] || { id: 'home', label: 'Home' };

    this.dispatchEvent(new CustomEvent('ds-breadcrumb-home', {
      detail: { id: homeCrumb.id || 'home', item: homeCrumb },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    if (!this.navEl) return;

    // ARIA Delegation & Host Scrubbing Pattern
    const ariaLabel = this.getAttribute('aria-label');
    if (ariaLabel) {
      this.navEl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label');
    }

    const crumbs = this._getEffectiveCrumbs();

    const isVisibleAttr = this.getAttribute('visible') !== 'false';
    const shouldBeVisible = crumbs.length > 1 && isVisibleAttr;

    if (!shouldBeVisible) {
      this.style.display = 'none';
      return;
    }

    this.style.display = '';
    this.navEl.innerHTML = '';

    const returnWrapper = document.createElement('div');
    returnWrapper.className = 'crumb-return-wrapper';

    const returnBtn = document.createElement('ds-button');
    returnBtn.setAttribute('tabindex', '0');
    returnBtn.setAttribute('variant', 'icon');
    returnBtn.setAttribute('icon', 'arrow-left');
    returnBtn.setAttribute('aria-label', 'Return');
    returnBtn.className = 'crumb-return-btn';

    const returnTooltip = document.createElement('ds-tooltip');
    returnTooltip.setAttribute('text', 'Return');
    returnTooltip.setAttribute('show-kbd', '');
    returnTooltip.setAttribute('kbd-label', 'Backspace');
    returnTooltip.setAttribute('position', 'bottom');

    returnBtn.addEventListener('click', () => this._handleReturn());

    returnWrapper.appendChild(returnBtn);
    returnWrapper.appendChild(returnTooltip);
    this.navEl.appendChild(returnWrapper);

    crumbs.forEach((crumb, index) => {
      const labelText = typeof crumb === 'string' ? crumb : (crumb.label || '');
      const crumbId = typeof crumb === 'string' ? crumb : (crumb.id || labelText);

      const itemMenuItems = typeof crumb === 'object' && Array.isArray(crumb.menuItems) 
        ? crumb.menuItems 
        : (Array.isArray(this._menuItems) ? this._menuItems : []);

      let shouldShowMenu = false;
      if (index > 0) {
        if (typeof crumb === 'object' && typeof crumb.hasMenu === 'boolean') {
          shouldShowMenu = crumb.hasMenu && itemMenuItems.length > 0;
        } else {
          shouldShowMenu = itemMenuItems.length > 0;
        }
      }

      if (index > 0) {
        const separator = document.createElement('ds-icon');
        separator.setAttribute('name', 'chevron-right');
        separator.setAttribute('size', '14');
        separator.className = 'crumb-separator';
        this.navEl.appendChild(separator);
      }

      if (index === 0) {
        const homeBtn = document.createElement('ds-button');
        homeBtn.setAttribute('tabindex', '0');
        homeBtn.setAttribute('variant', 'text');
        homeBtn.className = 'crumb-btn crumb-home-btn';
        homeBtn.textContent = labelText;
        homeBtn.addEventListener('click', () => {
          this._handleHome();
        });
        this.navEl.appendChild(homeBtn);
      } else {
        const wrapper = document.createElement('div');
        wrapper.className = 'crumb-item-wrapper';

        const itemBtn = document.createElement('ds-button');
        itemBtn.setAttribute('tabindex', '0');
        itemBtn.setAttribute('variant', 'text');
        itemBtn.className = 'crumb-btn';
        itemBtn.textContent = labelText;
        
        itemBtn.addEventListener('click', () => {
          this.dispatchEvent(new CustomEvent('ds-breadcrumb-select', {
            detail: { id: crumbId, index, label: labelText, item: crumb },
            bubbles: true,
            composed: true
          }));
        });

        wrapper.appendChild(itemBtn);

        if (shouldShowMenu) {
          const menu = document.createElement('ds-contextual-menu');
          menu.setAttribute('open', '');
          
          // Pure presentational fallbacks driven by properties passed downstream
          const headerText = crumb.menuHeader || 'Options';
          const subcategoryTitle = crumb.subcategoryTitle || 'SELECT';

          menu.setAttribute('header-text', headerText);
          menu.setAttribute('aria-label', 'Contextual Actions Menu');
          menu.setAttribute('subcategory-title', subcategoryTitle);
          menu.setAttribute('hide-close', '');
          menu.setAttribute('style', '--ds-contextual-menu-width: var(--ds-breadcrumb-menu-width, 260px);');

          menu.items = itemMenuItems.map((menuItem, menuIdx) => ({
            id: menuItem.id || `item-${menuIdx}`,
            label: menuItem.label || menuItem,
            icon: 'chevron-right',
            iconVariant: 'fill',
            showIcon: true,
            control: 'none'
          }));

          wrapper.addEventListener('focusin', () => wrapper.classList.add('has-keyboard-focus'));
          wrapper.addEventListener('focusout', (e) => {
            setTimeout(() => {
              const active = this.shadowRoot.activeElement;
              if (!wrapper.contains(active) && (!e.relatedTarget || !wrapper.contains(e.relatedTarget))) {
                wrapper.classList.remove('has-keyboard-focus');
              }
            }, 50);
          });

          itemBtn.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              wrapper.classList.add('has-keyboard-focus');
              const firstItemRow = menu.shadowRoot.querySelector('ds-item-row');
              if (firstItemRow) {
                firstItemRow.focus();
              }
            }
          });

          menu.addEventListener('ds-select', (e) => {
            const selectedMenuItem = itemMenuItems.find(i => (i.id || i) === e.detail.id) || e.detail;
            const newLabel = selectedMenuItem.label || selectedMenuItem.id || selectedMenuItem;

            this.dispatchEvent(new CustomEvent('ds-breadcrumb-select', {
              detail: { 
                id: e.detail.id, 
                label: newLabel, 
                index, 
                parentItem: crumb,
                selectedMenuItem 
              },
              bubbles: true,
              composed: true
            }));
          });

          wrapper.appendChild(menu);
        }

        this.navEl.appendChild(wrapper);
      }
    });
  }
}

if (!customElements.get('ds-breadcrumb')) {
  customElements.define('ds-breadcrumb', Breadcrumb);
}
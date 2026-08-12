import css from './navigation-menu.css?inline';
import '../../atoms/Button/Button.js';
import '../../atoms/Divider/Divider.js';
import '../Tooltip/Tooltip.js';
import '../../organisms/ContextualMenu/ContextualMenu.js';

const DEFAULT_AVATAR_SRC = 'https://thispersondoesnotexist.com/random-person.jpeg';

const A11Y_CLASS_BY_ITEM_ID = {
  'text-size': 'a11y-large-text',
  'dyslexia-font': 'a11y-dyslexia',
  'dark-mode': 'a11y-dark-mode',
  'high-contrast': 'a11y-high-contrast',
  'reduce-motion': 'a11y-reduce-motion',
  'tab-navigation': 'a11y-tab-nav',
};

export class NavigationMenu extends HTMLElement {
  static get observedAttributes() {
    return [
      'language-tooltip',
      'language-kbd-label',
      'language-kbd-key',
      'language-kbd-show-plus',
      'language-aria-label',
      'accessibility-tooltip',
      'accessibility-kbd-label',
      'accessibility-kbd-key',
      'accessibility-kbd-show-plus',
      'accessibility-aria-label',
      'about-tooltip',
      'about-kbd-label',
      'about-kbd-key',
      'about-kbd-show-plus',
      'about-aria-label',
      'language-menu-header',
      'accessibility-menu-header',
      'accessibility-menu-subcategory-title',
      'a11y-label-text-size',
      'a11y-label-dyslexia-font',
      'a11y-label-dark-mode',
      'a11y-label-high-contrast',
      'a11y-label-reduce-motion',
      'a11y-label-tab-navigation',
      'avatar-src',
      'avatar-alt',
      'disabled'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._languageItems = [
      { id: 'en', label: 'English', showIcon: false, control: 'check', selected: true, checkHasBackground: false, category: 'main' },
      { id: 'pt', label: 'Portuguese', showIcon: false, control: 'check', selected: false, checkHasBackground: false, category: 'main' },
    ];

    this._accessibilityItems = [
      { id: 'text-size', label: 'Text Size', showIcon: false, showKbd: true, kbd: '⌥', kbdShowPlus: true, kbdKey: 'T', control: 'toggle', active: false, category: 'main' },
      { id: 'dyslexia-font', label: 'Dyslexia Font', showIcon: false, showKbd: true, kbd: '⌥', kbdShowPlus: true, kbdKey: 'Y', control: 'toggle', active: false, category: 'main' },
      { id: 'dark-mode', label: 'Dark Mode', showIcon: false, showKbd: true, kbd: '⌥', kbdShowPlus: true, kbdKey: 'D', control: 'toggle', active: false, category: 'subcategory' },
      { id: 'high-contrast', label: 'High Contrast', showIcon: false, showKbd: true, kbd: '⌥', kbdShowPlus: true, kbdKey: 'C', control: 'toggle', active: false, category: 'subcategory' },
      { id: 'reduce-motion', label: 'Reduce Motion', showIcon: false, showKbd: true, kbd: '⌥', kbdShowPlus: true, kbdKey: 'M', control: 'toggle', active: false, category: 'subcategory' },
      { id: 'tab-navigation', label: 'TAB Navigation', showIcon: false, showKbd: true, kbd: '⌥', kbdShowPlus: true, kbdKey: 'F', control: 'toggle', active: false, category: 'subcategory' },
    ];

    this.shadowRoot.innerHTML = `<style>${css}</style><nav class="navigation-menu" aria-label="Navigation menu"><div class="menu-group menu-profile"><div class="menu-item"><ds-button class="avatar-button" variant="tertiary" has-text="false" has-image image-src="https://thispersondoesnotexist.com/random-person.jpeg" image-alt="Profile face" aria-label="About"></ds-button><ds-tooltip class="about-tooltip" text="About" show-kbd kbd-label="⌥" kbd-show-plus kbd-key="I" position="bottom"></ds-tooltip></div></div><div class="menu-divider"><ds-divider orientation="vertical" aria-label="Navigation menu separator"></ds-divider></div><div class="menu-group menu-actions"><div class="menu-item menu-item-language"><ds-button class="language-btn" variant="tertiary" has-text="false" has-icon icon="language" icon-variant="outline" aria-label="Language"></ds-button><ds-tooltip class="language-tooltip" text="Language" show-kbd kbd-label="⌥" kbd-show-plus kbd-key="L" position="bottom"></ds-tooltip><ds-contextual-menu class="language-menu" aria-label="Language menu"></ds-contextual-menu></div><div class="menu-item menu-item-accessibility"><ds-button class="accessibility-btn" variant="tertiary" has-text="false" has-icon icon="accessibility" icon-variant="outline" aria-label="Accessibility"></ds-button><ds-tooltip class="accessibility-tooltip" text="Accessibility" show-kbd kbd-label="⌥" kbd-show-plus kbd-key="A" position="bottom-right"></ds-tooltip><ds-contextual-menu class="accessibility-menu" aria-label="Accessibility menu"></ds-contextual-menu></div></div></nav>`;
  }

  connectedCallback() {
    this._cacheElements();
    this._bindEvents();
    this._setupContextMenus();
    this.updateAttributes();
    this._observeRootAccessibility();
  }

  disconnectedCallback() {
    this._unbindEvents();
    if (this._onDocumentPointerDown) {
      document.removeEventListener('pointerdown', this._onDocumentPointerDown, true);
    }
    if (this._themeObserver) {
      this._themeObserver.disconnect();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (this.navEl) {
      this.updateAttributes();
    }
  }

  _cacheElements() {
    this.navEl = this.shadowRoot.querySelector('.navigation-menu');
    this.languageBtn = this.shadowRoot.querySelector('.language-btn');
    this.accessibilityBtn = this.shadowRoot.querySelector('.accessibility-btn');
    this.avatarBtn = this.shadowRoot.querySelector('.avatar-button');
    this.languageTooltip = this.shadowRoot.querySelector('.language-tooltip');
    this.accessibilityTooltip = this.shadowRoot.querySelector('.accessibility-tooltip');
    this.aboutTooltip = this.shadowRoot.querySelector('.about-tooltip');
    this.languageMenu = this.shadowRoot.querySelector('.language-menu');
    this.accessibilityMenu = this.shadowRoot.querySelector('.accessibility-menu');
  }

  _bindEvents() {
    this._onLanguageClick = () => {
      if (this.hasAttribute('disabled')) return;
      this._toggleMenu('language');
      this.dispatchEvent(new CustomEvent('ds-navigation-menu-language', {
        bubbles: true,
        composed: true,
      }));
    };

    this._onAccessibilityClick = () => {
      if (this.hasAttribute('disabled')) return;
      this._toggleMenu('accessibility');
      this.dispatchEvent(new CustomEvent('ds-navigation-menu-accessibility', {
        bubbles: true,
        composed: true,
      }));
    };

    this._onAboutClick = () => {
      if (this.hasAttribute('disabled')) return;
      this._closeMenus();
      this.dispatchEvent(new CustomEvent('ds-navigation-menu-about', {
        bubbles: true,
        composed: true,
      }));
    };

    this._onLanguageSelect = (e) => {
      const selectedId = e.detail?.id;
      if (!selectedId) return;
      this._languageItems = this._languageItems.map((item) => ({
        ...item,
        selected: item.id === selectedId,
      }));
      this.languageMenu.items = this._languageItems;
      this._closeMenus();
      this.dispatchEvent(new CustomEvent('ds-navigation-menu-language-select', {
        detail: { id: selectedId, item: this._languageItems.find((it) => it.id === selectedId) },
        bubbles: true,
        composed: true,
      }));
    };

    this._onAccessibilitySelect = (e) => {
      const selectedId = e.detail?.id;
      if (!selectedId) return;

      this._accessibilityItems = this._accessibilityItems.map((item) => {
        if (item.id !== selectedId) return item;
        if (item.control === 'toggle') {
          return { ...item, active: !item.active };
        }
        if (item.control === 'check') {
          return { ...item, selected: !item.selected };
        }
        return item;
      });
      this.dispatchEvent(new CustomEvent('ds-navigation-menu-accessibility-select', {
        detail: {
          id: selectedId,
          item: this._accessibilityItems.find((it) => it.id === selectedId),
          items: this._accessibilityItems,
        },
        bubbles: true,
        composed: true,
      }));
    };

    this._onMenuClose = () => {
      this._closeMenus();
    };

    this._onDocumentPointerDown = (e) => {
      const path = e.composedPath();
      if (!path.includes(this)) {
        this._closeMenus();
      }
    };

    this.languageBtn.addEventListener('click', this._onLanguageClick);
    this.accessibilityBtn.addEventListener('click', this._onAccessibilityClick);
    this.avatarBtn.addEventListener('click', this._onAboutClick);
    this.languageMenu.addEventListener('ds-select', this._onLanguageSelect);
    this.accessibilityMenu.addEventListener('ds-select', this._onAccessibilitySelect);
    this.languageMenu.addEventListener('ds-close', this._onMenuClose);
    this.accessibilityMenu.addEventListener('ds-close', this._onMenuClose);
    document.addEventListener('pointerdown', this._onDocumentPointerDown, true);
  }

  _unbindEvents() {
    if (this.languageBtn && this._onLanguageClick) {
      this.languageBtn.removeEventListener('click', this._onLanguageClick);
    }
    if (this.accessibilityBtn && this._onAccessibilityClick) {
      this.accessibilityBtn.removeEventListener('click', this._onAccessibilityClick);
    }
    if (this.avatarBtn && this._onAboutClick) {
      this.avatarBtn.removeEventListener('click', this._onAboutClick);
    }
    if (this.languageMenu && this._onLanguageSelect) {
      this.languageMenu.removeEventListener('ds-select', this._onLanguageSelect);
    }
    if (this.accessibilityMenu && this._onAccessibilitySelect) {
      this.accessibilityMenu.removeEventListener('ds-select', this._onAccessibilitySelect);
    }
    if (this.languageMenu && this._onMenuClose) {
      this.languageMenu.removeEventListener('ds-close', this._onMenuClose);
    }
    if (this.accessibilityMenu && this._onMenuClose) {
      this.accessibilityMenu.removeEventListener('ds-close', this._onMenuClose);
    }
  }

  _setupContextMenus() {
    this._languageItems = this._languageItems.map((item) => ({
      ...item,
      control: 'check',
    }));

    this.languageMenu.setAttribute('header-text', this.getAttribute('language-menu-header') || 'LANGUAGE');
    this.languageMenu.setAttribute('semantic-role', 'group');
    this.languageMenu.setAttribute('open', '');
    this.languageMenu.removeAttribute('open');
    this.languageMenu.removeAttribute('show-subcategory');
    this.languageMenu.removeAttribute('hide-header');
    this.languageMenu.removeAttribute('hide-close');
    this.languageMenu.setAttribute('max-height', '520px');
    this.languageMenu.items = this._languageItems;

    this.accessibilityMenu.setAttribute('header-text', this.getAttribute('accessibility-menu-header') || 'ACCESSIBILITY');
    this.accessibilityMenu.setAttribute('semantic-role', 'group');
    const accessibilitySubcategoryTitle = String(this.getAttribute('accessibility-menu-subcategory-title') || '').trim();
    if (accessibilitySubcategoryTitle) {
      this.accessibilityMenu.setAttribute('show-subcategory', '');
      this.accessibilityMenu.setAttribute('subcategory-title', accessibilitySubcategoryTitle);
    } else {
      this.accessibilityMenu.removeAttribute('show-subcategory');
      this.accessibilityMenu.removeAttribute('subcategory-title');
    }
    this.accessibilityMenu.removeAttribute('hide-close');
    this.accessibilityMenu.setAttribute('max-height', '520px');
    this.accessibilityMenu.items = this._accessibilityItems;

    this._syncMenuState();
  }

  _syncAccessibilityItems() {
    const root = this.ownerDocument.documentElement;
    let hasChanges = false;

    const nextItems = this._accessibilityItems.map((item) => {
      if (item.control !== 'toggle') {
        return item;
      }

      const className = A11Y_CLASS_BY_ITEM_ID[item.id] || `a11y-${item.id}`;
      const isActive = root.classList.contains(className);

      if (item.active === isActive) {
        return item;
      }

      hasChanges = true;

      return {
        ...item,
        active: isActive,
      };
    });

    if (!hasChanges) {
      return;
    }

    this._accessibilityItems = nextItems;

    if (this.accessibilityMenu) {
      this.accessibilityMenu.items = this._accessibilityItems;
    }
  }

  _closeMenus() {
    this.languageMenu.removeAttribute('open');
    this.accessibilityMenu.removeAttribute('open');
    this._syncMenuState();
  }

  _toggleMenu(menuName) {
    const target = menuName === 'language' ? this.languageMenu : this.accessibilityMenu;
    const other = menuName === 'language' ? this.accessibilityMenu : this.languageMenu;
    const willOpen = !target.hasAttribute('open');

    other.removeAttribute('open');
    if (willOpen) {
      target.setAttribute('open', '');
    } else {
      target.removeAttribute('open');
    }

    this._syncMenuState();
  }

  _syncMenuState() {
    this.toggleAttribute('language-menu-open', this.languageMenu.hasAttribute('open'));
    this.toggleAttribute('accessibility-menu-open', this.accessibilityMenu.hasAttribute('open'));
  }

  _setTooltipContent(prefix, tooltipEl, defaults) {
    const text = this.getAttribute(`${prefix}-tooltip`) || defaults.text;
    const kbdLabel = this.getAttribute(`${prefix}-kbd-label`) || defaults.kbdLabel;
    const kbdKey = this.getAttribute(`${prefix}-kbd-key`) || defaults.kbdKey;
    const showPlus = this.hasAttribute(`${prefix}-kbd-show-plus`) || defaults.showPlus;

    tooltipEl.setAttribute('text', text);
    tooltipEl.setAttribute('show-kbd', '');
    tooltipEl.setAttribute('kbd-label', kbdLabel);
    tooltipEl.setAttribute('kbd-key', kbdKey);

    if (showPlus) {
      tooltipEl.setAttribute('kbd-show-plus', '');
    } else {
      tooltipEl.removeAttribute('kbd-show-plus');
    }
  }

  _syncTooltipPositionsForDirection(direction = 'ltr') {
    if (!(this.accessibilityTooltip instanceof HTMLElement)) return;
    if (direction === 'rtl') {
      this.accessibilityTooltip.setAttribute('position', 'bottom-left');
    } else {
      this.accessibilityTooltip.setAttribute('position', 'bottom-right');
    }
  }

  _syncTooltipKbdOrderForDirection(direction = 'ltr') {
    const tooltips = [this.languageTooltip, this.accessibilityTooltip, this.aboutTooltip];
    tooltips.forEach((tooltipEl) => {
      if (!(tooltipEl instanceof HTMLElement)) return;
      if (direction === 'rtl') {
        tooltipEl.setAttribute('kbd-first', '');
      } else {
        tooltipEl.removeAttribute('kbd-first');
      }
    });
  }

  updateAttributes() {
    const disabled = this.hasAttribute('disabled');

    this.languageBtn.toggleAttribute('disabled', disabled);
    this.accessibilityBtn.toggleAttribute('disabled', disabled);
    this.avatarBtn.toggleAttribute('disabled', disabled);

    this.languageBtn.setAttribute('aria-label', this.getAttribute('language-aria-label') || 'Language');
    this.accessibilityBtn.setAttribute('aria-label', this.getAttribute('accessibility-aria-label') || 'Accessibility');
    this.avatarBtn.setAttribute('aria-label', this.getAttribute('about-aria-label') || 'About');

    this._setTooltipContent('language', this.languageTooltip, {
      text: 'Language',
      kbdLabel: '⌥',
      kbdKey: 'L',
      showPlus: true,
    });

    this._setTooltipContent('accessibility', this.accessibilityTooltip, {
      text: 'Accessibility',
      kbdLabel: '⌥',
      kbdKey: 'A',
      showPlus: true,
    });

    const currentDirection = this.getAttribute('dir') || 'ltr';
    this._syncTooltipPositionsForDirection(currentDirection);
    this._syncTooltipKbdOrderForDirection(currentDirection);

    this._setTooltipContent('about', this.aboutTooltip, {
      text: 'About',
      kbdLabel: '⌥',
      kbdKey: 'I',
      showPlus: true,
    });

    this.languageMenu.setAttribute('header-text', this.getAttribute('language-menu-header') || 'LANGUAGE');
    this.accessibilityMenu.setAttribute('header-text', this.getAttribute('accessibility-menu-header') || 'ACCESSIBILITY');

    const accessibilitySubcategoryTitle = String(this.getAttribute('accessibility-menu-subcategory-title') || '').trim();
    if (accessibilitySubcategoryTitle) {
      this.accessibilityMenu.setAttribute('show-subcategory', '');
      this.accessibilityMenu.setAttribute('subcategory-title', accessibilitySubcategoryTitle);
    } else {
      this.accessibilityMenu.removeAttribute('show-subcategory');
      this.accessibilityMenu.removeAttribute('subcategory-title');
    }

    const labelByItemId = {
      'text-size': this.getAttribute('a11y-label-text-size') || 'Text Size',
      'dyslexia-font': this.getAttribute('a11y-label-dyslexia-font') || 'Dyslexia Font',
      'dark-mode': this.getAttribute('a11y-label-dark-mode') || 'Dark Mode',
      'high-contrast': this.getAttribute('a11y-label-high-contrast') || 'High Contrast',
      'reduce-motion': this.getAttribute('a11y-label-reduce-motion') || 'Reduce Motion',
      'tab-navigation': this.getAttribute('a11y-label-tab-navigation') || 'TAB Navigation'
    };

    this._accessibilityItems = this._accessibilityItems.map((item) => {
      const nextLabel = labelByItemId[item.id] || item.label;
      if (item.label === nextLabel) return item;
      return { ...item, label: nextLabel };
    });

    if (this.accessibilityMenu) {
      this.accessibilityMenu.items = this._accessibilityItems;
    }

    const avatarSrc = this.getAttribute('avatar-src') || DEFAULT_AVATAR_SRC;
    this.avatarBtn.setAttribute('image-src', avatarSrc);
    this.avatarBtn.setAttribute('image-alt', this.getAttribute('avatar-alt') || 'Profile face');
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      const currentDir = root.getAttribute('dir') || 'ltr';
      this.setAttribute('dir', currentDir);
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
      this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
      this.toggleAttribute('a11y-focus-mode', root.classList.contains('a11y-focus-mode'));
      this.toggleAttribute('a11y-forced-colors', root.classList.contains('a11y-forced-colors'));
      this._syncTooltipPositionsForDirection(currentDir);
      this._syncTooltipKbdOrderForDirection(currentDir);
      this._syncAccessibilityItems();
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class', 'dir'],
    });
  }
}

if (!customElements.get('ds-navigation-menu')) {
  customElements.define('ds-navigation-menu', NavigationMenu);
}

import { userEvent, within, expect, fn } from 'storybook/test';
import './ContextualMenu.js';

export default {
  title: 'Organisms/ContextualMenu',
  component: 'ds-contextual-menu',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `ds-contextual-menu` component is a floating popover organism rendering contextual actions. It utilizes `<ds-item-row>` for rendering items and supports category dividers and customized subcategories.',
      },
    },
  },
  argTypes: {
    // --- COMPONENT: CORE CONTROLS ---
    open: {
      control: 'boolean',
      description: 'Toggles open/closed visibility state.',
      table: {
        category: 'Component: Core Controls',
        defaultValue: { summary: 'true' },
      },
    },
    headerText: {
      control: 'text',
      description: 'Custom header text displayed at the top of the contextual menu.',
      table: {
        category: 'Component: Core Controls',
        defaultValue: { summary: 'ACTIONS' },
      },
    },
    hideHeader: {
      control: 'boolean',
      description: 'Hides the header text bar entirely.',
      table: {
        category: 'Component: Core Controls',
        defaultValue: { summary: 'false' },
      },
    },
    hideClose: {
      control: 'boolean',
      description: 'Hides the top-right close button trigger.',
      table: {
        category: 'Component: Core Controls',
        defaultValue: { summary: 'false' },
      },
    },
    showSubcategory: {
      control: 'boolean',
      description: 'Toggles visibility of the subcategory section.',
      table: {
        category: 'Component: Subcategories',
        defaultValue: { summary: 'false' },
      },
    },
    subcategoryTitle: {
      control: 'text',
      description: 'Custom header title for the subcategory section.',
      table: {
        category: 'Component: Subcategories',
        defaultValue: { summary: 'PREFERENCES' },
      },
    },
    itemCount: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'Dynamically controls the number of <ds-item-row> items rendered inside the preview iframe.',
      table: {
        category: 'Component: Dynamic Item Generator',
        defaultValue: { summary: '5' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible ARIA label delegated to internal shadow DOM container.',
      table: {
        category: 'Component: Core Controls',
        defaultValue: { summary: 'Contextual Actions Menu' },
      },
    },

    // --- SUB-ATOMIC OVERRIDES ---
    customWidth: {
      control: 'text',
      description: 'Sub-atomic property override for card width (`--custom-width`).',
      table: {
        category: 'Sub-Atomic Overrides',
        defaultValue: { summary: '260px' },
      },
    },
    customBg: {
      control: 'color',
      description: 'Sub-atomic property override for surface background (`--custom-bg`).',
      table: {
        category: 'Sub-Atomic Overrides',
        defaultValue: { summary: 'var(--color-bg)' },
      },
    },
    customRadius: {
      control: 'text',
      description: 'Sub-atomic property override for corner radius (`--custom-radius`).',
      table: {
        category: 'Sub-Atomic Overrides',
        defaultValue: { summary: 'var(--radius-lg)' },
      },
    },

    // --- EVENTS ---
    onClose: {
      action: 'ds-close',
      description: 'Event emitted when the top-right close button is activated.',
      table: { category: 'Events' },
    },
    onSelect: {
      action: 'ds-select',
      description: 'Event emitted when any item row is clicked.',
      table: { category: 'Events' },
    },
  },
  args: {
    open: true,
    headerText: 'ACTIONS',
    hideHeader: false,
    hideClose: false,
    showSubcategory: true,
    subcategoryTitle: 'PREFERENCES',
    itemCount: 5,
    ariaLabel: 'Contextual Actions Menu',
    customWidth: '260px',
    onClose: fn(),
    onSelect: fn(),
  },
};

const MASTER_ITEM_POOL = [
  { id: 'autoscroll', label: 'Auto-scroll from here', icon: 'autoscroll', showKbd: true, kbd: '⌥', kbdShowPlus: true, kbdKey: 'A', control: 'none', category: 'main' },
  { id: 'copy-link', label: 'Copy link', icon: 'link', showKbd: true, kbd: '⌘', kbdShowPlus: true, kbdKey: 'C', control: 'none', category: 'main' },
  { id: 'email-lio', label: 'Email Lio', icon: 'email', control: 'none', category: 'main' },
  { id: 'dark-mode', label: 'Dark Theme', icon: 'moon', control: 'toggle', active: false, category: 'subcategory' },
  { id: 'notifications', label: 'Enable Alerts', icon: 'flag-shield', control: 'check', selected: true, checkHasBackground: true, category: 'subcategory' },
  { id: 'primary-opt', label: 'Set Default', icon: 'check', control: 'radio', selected: true, category: 'main' },
  { id: 'share', label: 'Share Document', icon: 'share', showKbd: true, kbd: '⇧', kbdShowPlus: true, kbdKey: 'S', control: 'none', category: 'main' },
  { id: 'language', label: 'Translate Page', icon: 'language', control: 'check', selected: false, checkHasBackground: true, category: 'subcategory' },
  { id: 'lock-access', label: 'Restricted Action', icon: 'lock-closed', disabled: true, control: 'none', category: 'main' },
  { id: 'ask-ai', label: 'Ask AI Assistant', icon: 'ask-ai', showKbd: true, kbd: '⌘', kbdShowPlus: true, kbdKey: 'K', control: 'none', category: 'main' },
];

const Template = (args) => {
  const menu = document.createElement('ds-contextual-menu');

  args.open ? menu.setAttribute('open', '') : menu.removeAttribute('open');
  if (args.headerText) menu.setAttribute('header-text', args.headerText);
  if (args.ariaLabel) menu.setAttribute('aria-label', args.ariaLabel);
  if (args.subcategoryTitle) menu.setAttribute('subcategory-title', args.subcategoryTitle);

  args.hideHeader ? menu.setAttribute('hide-header', '') : menu.removeAttribute('hide-header');
  args.hideClose ? menu.setAttribute('hide-close', '') : menu.removeAttribute('hide-close');
  args.showSubcategory ? menu.setAttribute('show-subcategory', '') : menu.removeAttribute('show-subcategory');

  if (args.customWidth) menu.style.setProperty('--custom-width', args.customWidth);
  if (args.customBg) menu.style.setProperty('--custom-bg', args.customBg);
  if (args.customRadius) menu.style.setProperty('--custom-radius', args.customRadius);

  const count = Math.max(1, Math.min(args.itemCount || 5, MASTER_ITEM_POOL.length));
  menu.items = MASTER_ITEM_POOL.slice(0, count);

  menu.addEventListener('ds-close', (e) => args.onClose(e));
  menu.addEventListener('ds-select', (e) => args.onSelect(e.detail));

  return menu;
};

export const Default = {
  render: Template,
  args: {
    open: true,
    headerText: 'ACTIONS',
    hideHeader: false,
    hideClose: false,
    showSubcategory: true,
    subcategoryTitle: 'PREFERENCES',
    itemCount: 5,
    customWidth: '260px',
  },
  play: async ({ canvasElement, step }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');

    await step('Verify shadow root elements render successfully', async () => {
      expect(menu).toBeTruthy();
      const closeBtn = menu.shadowRoot.querySelector('.close-btn');
      expect(closeBtn).toBeTruthy();
    });

    await step('Hover first item row to verify interaction feedback', async () => {
      const firstItemRow = menu.shadowRoot.querySelector('ds-item-row');
      if (firstItemRow) {
        await userEvent.hover(firstItemRow);
      }
    });

    await step('Click close button trigger and verify menu closes', async () => {
      const closeBtn = menu.shadowRoot.querySelector('.close-btn');
      if (closeBtn && closeBtn.style.display !== 'none') {
        await userEvent.click(closeBtn);
        expect(menu.hasAttribute('open')).toBe(false);
      }
    });
  },
};

/**
 * 1. Actions Popover Menu (Matches Screenshot 2)
 * Renders core document & quick-action triggers specific behaviors.
 */
export const ActionsMenu = {
  render: Template,
  args: {
    open: true,
    headerText: 'ACTIONS',
    hideHeader: false,
    hideClose: false,
    showSubcategory: false,
    customWidth: '240px',
  },
  play: async ({ canvasElement, step }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');

    await step('Inject Actions Menu item set', async () => {
      menu.items = [
        { id: 'ask-ai', label: 'Ask AI about it', icon: 'ask-ai', showIcon: true, control: 'none' },
        { id: 'autoscroll', label: 'Auto-scroll from here', icon: 'autoscroll', showIcon: true, control: 'none' },
        { id: 'copy-link', label: 'Copy link', icon: 'link', showIcon: true, control: 'none' },
        { id: 'email-author', label: 'Email Author', icon: 'email', showIcon: true, control: 'none' },
        { id: 'share', label: 'Share', icon: 'share', showIcon: true, control: 'none' },
      ];
    });

    await step('Verify shadow root elements render successfully', async () => {
      expect(menu).toBeTruthy();
      const headerTitle = menu.shadowRoot.querySelector('.menu-title');
      expect(headerTitle.textContent).toBe('ACTIONS');
    });

    await step('Hover AI action row and trigger click event', async () => {
      const itemRows = menu.shadowRoot.querySelectorAll('ds-item-row');
      expect(itemRows.length).toBe(5);
      await userEvent.hover(itemRows[0]);
      await userEvent.click(itemRows[0]);
    });
  },
};

/**
 * 2. Case Studies & Navigation List (Matches Screenshot 3)
 * Minimal headerless popover list using right chevrons for article or project navigation.
 */
export const CaseStudyNavigation = {
  render: Template,
  args: {
    open: true,
    hideHeader: true,
    hideClose: true,
    showSubcategory: false,
    customWidth: '240px',
  },
  play: async ({ canvasElement, step }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');

    await step('Inject Navigation item set', async () => {
      menu.items = [
        { id: 'e-reader', label: 'Building an e-reader', icon: 'chevron-right', showIcon: true, control: 'none' },
        { id: 'ux-wrist', label: 'UX on Wrist', icon: 'chevron-right', showIcon: true, control: 'none' },
        { id: 'redesign', label: 'US$400k Redesign', icon: 'chevron-right', showIcon: true, control: 'none' },
      ];
    });

    await step('Verify header bar is concealed', async () => {
      expect(menu).toBeTruthy();
      const headerBar = menu.shadowRoot.querySelector('.menu-header');
      expect(headerBar.style.display).toBe('none');
    });

    await step('Interact with list items', async () => {
      const itemRows = menu.shadowRoot.querySelectorAll('ds-item-row');
      expect(itemRows.length).toBe(3);
      await userEvent.hover(itemRows[1]);
      await userEvent.click(itemRows[1]);
    });
  },
};

/**
 * 3. Accessibility Control Panel (Matches Screenshot 1)
 * Full category panel configuring typography sizes, visual modes, and motion/focus toggles.
 */
export const AccessibilityPanel = {
  render: Template,
  args: {
    open: true,
    headerText: 'ACCESSIBILITY',
    hideHeader: false,
    hideClose: false,
    showSubcategory: true,
    subcategoryTitle: 'VISUALS',
    customWidth: '320px',
  },
  play: async ({ canvasElement, step }) => {
    const menu = canvasElement.querySelector('ds-contextual-menu');

    await step('Inject Accessibility settings item payload', async () => {
      menu.items = [
        // Typography Section
        { id: 'text-size', label: 'Text Size', icon: 'text-size', showIcon: true, showKbd: true, kbd: '⌥', kbdShowPlus: false, kbdKey: 'T', control: 'none', category: 'main' },
        { id: 'dyslexia-font', label: 'Dyslexia Font', icon: 'accessibility', showIcon: true, showKbd: true, kbd: '⌥', kbdShowPlus: false, kbdKey: 'Y', control: 'toggle', active: false, category: 'main' },
        
        // Visuals Section
        { id: 'dark-mode', label: 'Dark Mode', icon: 'moon', showIcon: true, showKbd: true, kbd: '⌥', kbdShowPlus: false, kbdKey: 'D', control: 'toggle', active: true, category: 'subcategory' },
        { id: 'high-contrast', label: 'High Contrast', icon: 'high-contrast', showIcon: true, showKbd: true, kbd: '⌥', kbdShowPlus: false, kbdKey: 'C', control: 'toggle', active: false, category: 'subcategory' },
        
        // Motion & Focus Section
        { id: 'reduce-motion', label: 'Reduce Motion', icon: 'motion-play', showIcon: true, showKbd: true, kbd: '⌥', kbdShowPlus: false, kbdKey: 'M', control: 'toggle', active: false, category: 'subcategory' },
        { id: 'tab-navigation', label: 'TAB Navigation', icon: 'tab-nav-left', showIcon: true, showKbd: true, kbd: '⌥', kbdShowPlus: false, kbdKey: 'F', control: 'toggle', active: false, category: 'subcategory' }
      ];
    });

    await step('Verify header title and subcategory grouping render', async () => {
      expect(menu).toBeTruthy();
      const headerTitle = menu.shadowRoot.querySelector('.menu-title');
      expect(headerTitle.textContent).toBe('ACCESSIBILITY');
      
      const subcategoryHeader = menu.shadowRoot.querySelector('.subcategory-title');
      expect(subcategoryHeader).toBeTruthy();
      expect(subcategoryHeader.textContent).toBe('VISUALS');
    });

    await step('Toggle Dark Mode switch option', async () => {
      const itemRows = menu.shadowRoot.querySelectorAll('ds-item-row');
      const darkModeRow = Array.from(itemRows).find(row => row.getAttribute('label') === 'Dark Mode');
      expect(darkModeRow).toBeTruthy();
      await userEvent.click(darkModeRow);
    });
  },
};
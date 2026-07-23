import { html } from 'lit';
import { expect, fn, userEvent } from 'storybook/test';
import './NavigationMenu.js';

export default {
  title: 'Molecules/Navigation Menu [v1.1.0]',
  component: 'ds-navigation-menu',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Top navigation molecule with avatar, icon actions, tooltips, and contextual menus for language and accessibility controls.',
      },
    },
  },
  argTypes: {
    languageTooltip: { control: 'text', table: { category: 'Tooltips' } },
    languageKbdLabel: { control: 'text', table: { category: 'Tooltips' } },
    languageKbdKey: { control: 'text', table: { category: 'Tooltips' } },
    languageKbdShowPlus: { control: 'boolean', table: { category: 'Tooltips', defaultValue: { summary: 'true' } } },
    languageAriaLabel: { control: 'text', table: { category: 'Accessibility' } },

    accessibilityTooltip: { control: 'text', table: { category: 'Tooltips' } },
    accessibilityKbdLabel: { control: 'text', table: { category: 'Tooltips' } },
    accessibilityKbdKey: { control: 'text', table: { category: 'Tooltips' } },
    accessibilityKbdShowPlus: { control: 'boolean', table: { category: 'Tooltips', defaultValue: { summary: 'true' } } },
    accessibilityAriaLabel: { control: 'text', table: { category: 'Accessibility' } },

    aboutTooltip: { control: 'text', table: { category: 'Tooltips' } },
    aboutKbdLabel: { control: 'text', table: { category: 'Tooltips' } },
    aboutKbdKey: { control: 'text', table: { category: 'Tooltips' } },
    aboutKbdShowPlus: { control: 'boolean', table: { category: 'Tooltips', defaultValue: { summary: 'true' } } },
    aboutAriaLabel: { control: 'text', table: { category: 'Accessibility' } },

    avatarSrc: { control: 'text', table: { category: 'Avatar' } },
    avatarAlt: { control: 'text', table: { category: 'Avatar' } },
    disabled: { control: 'boolean', table: { category: 'Core', defaultValue: { summary: 'false' } } },

    onLanguage: { action: 'ds-navigation-menu-language', table: { category: 'Events' } },
    onAccessibility: { action: 'ds-navigation-menu-accessibility', table: { category: 'Events' } },
    onAbout: { action: 'ds-navigation-menu-about', table: { category: 'Events' } },
    onLanguageSelect: { action: 'ds-navigation-menu-language-select', table: { category: 'Events' } },
    onAccessibilitySelect: { action: 'ds-navigation-menu-accessibility-select', table: { category: 'Events' } },
  },
  args: {
    languageTooltip: 'Language',
    languageKbdLabel: 'Ctrl',
    languageKbdKey: 'L',
    languageKbdShowPlus: true,
    languageAriaLabel: 'Language',

    accessibilityTooltip: 'Accessibility',
    accessibilityKbdLabel: 'Ctrl',
    accessibilityKbdKey: 'A',
    accessibilityKbdShowPlus: true,
    accessibilityAriaLabel: 'Accessibility',

    aboutTooltip: 'About',
    aboutKbdLabel: 'Ctrl',
    aboutKbdKey: 'I',
    aboutKbdShowPlus: true,
    aboutAriaLabel: 'About',

    avatarSrc: 'https://thispersondoesnotexist.com/random-person.jpeg',
    avatarAlt: 'Profile face',
    disabled: false,

    onLanguage: fn(),
    onAccessibility: fn(),
    onAbout: fn(),
    onLanguageSelect: fn(),
    onAccessibilitySelect: fn(),
  },
  render: (args) => html`
    <div style="padding: 16px; min-height: 560px; width: fit-content; display: inline-flex; align-items: flex-start; background: var(--color-bg, #ffffff);">
      <ds-navigation-menu
        language-tooltip=${args.languageTooltip}
        language-kbd-label=${args.languageKbdLabel}
        language-kbd-key=${args.languageKbdKey}
        ?language-kbd-show-plus=${args.languageKbdShowPlus}
        language-aria-label=${args.languageAriaLabel}

        accessibility-tooltip=${args.accessibilityTooltip}
        accessibility-kbd-label=${args.accessibilityKbdLabel}
        accessibility-kbd-key=${args.accessibilityKbdKey}
        ?accessibility-kbd-show-plus=${args.accessibilityKbdShowPlus}
        accessibility-aria-label=${args.accessibilityAriaLabel}

        about-tooltip=${args.aboutTooltip}
        about-kbd-label=${args.aboutKbdLabel}
        about-kbd-key=${args.aboutKbdKey}
        ?about-kbd-show-plus=${args.aboutKbdShowPlus}
        about-aria-label=${args.aboutAriaLabel}

        avatar-src=${args.avatarSrc}
        avatar-alt=${args.avatarAlt}
        ?disabled=${args.disabled}
        @ds-navigation-menu-language=${args.onLanguage}
        @ds-navigation-menu-accessibility=${args.onAccessibility}
        @ds-navigation-menu-about=${args.onAbout}
        @ds-navigation-menu-language-select=${args.onLanguageSelect}
        @ds-navigation-menu-accessibility-select=${args.onAccessibilitySelect}>
      </ds-navigation-menu>
    </div>
  `,
};

export const Default = {
  parameters: {
    docs: {
      description: {
        story: 'Default navigation menu with avatar, language menu, and accessibility menu. Includes interaction checks for open/close behavior, alignment, and tooltip visibility states.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const nav = canvasElement.querySelector('ds-navigation-menu');
    const languageBtn = nav.shadowRoot.querySelector('.language-btn');
    const accessibilityBtn = nav.shadowRoot.querySelector('.accessibility-btn');
    const avatarBtn = nav.shadowRoot.querySelector('.avatar-button');
    const languageTooltip = nav.shadowRoot.querySelector('.language-tooltip');
    const accessibilityTooltip = nav.shadowRoot.querySelector('.accessibility-tooltip');
    const languageMenu = nav.shadowRoot.querySelector('.language-menu');
    const accessibilityMenu = nav.shadowRoot.querySelector('.accessibility-menu');

    await step('Verify avatar appears on the left and menus are initially closed', async () => {
      const firstGroup = nav.shadowRoot.querySelector('.menu-profile');
      const firstMenuItem = firstGroup.querySelector('.menu-item');
      expect(firstMenuItem.contains(avatarBtn)).toBe(true);
      expect(languageMenu.hasAttribute('open')).toBe(false);
      expect(accessibilityMenu.hasAttribute('open')).toBe(false);
    });

    await step('Open language menu and choose Portuguese', async () => {
      await userEvent.click(languageBtn);
      expect(languageMenu.hasAttribute('open')).toBe(true);
      expect(getComputedStyle(languageTooltip).display).toBe('none');

      const languageCloseBtn = languageMenu.shadowRoot.querySelector('.close-btn');
      const accessibilityCloseBtn = accessibilityMenu.shadowRoot.querySelector('.close-btn');
      expect(languageCloseBtn).toBeTruthy();
      expect(accessibilityCloseBtn).toBeTruthy();

      const languageCard = languageMenu.shadowRoot.querySelector('.menu-card');
      const accessibilityCard = accessibilityMenu.shadowRoot.querySelector('.menu-card');
      expect(getComputedStyle(languageCard).width).toBe(getComputedStyle(accessibilityCard).width);

      const ptRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find((row) => row.getAttribute('label') === 'Portuguese');
      expect(ptRow).toBeTruthy();
      const ptRowAction = ptRow.shadowRoot.querySelector('.a11y-row');
      await userEvent.click(ptRowAction);
      expect(languageMenu.hasAttribute('open')).toBe(false);
    });

    await step('Open accessibility menu and toggle Text Size', async () => {
      await userEvent.click(accessibilityBtn);
      expect(accessibilityMenu.hasAttribute('open')).toBe(true);
      expect(getComputedStyle(accessibilityTooltip).display).toBe('none');

      const menuRect = accessibilityMenu.getBoundingClientRect();
      const buttonRect = accessibilityBtn.getBoundingClientRect();
      expect(menuRect.top).toBeGreaterThan(buttonRect.bottom - 1);
      expect(Math.abs(menuRect.right - buttonRect.right)).toBeLessThan(2);

      const textSizeRow = Array.from(accessibilityMenu.shadowRoot.querySelectorAll('ds-item-row')).find((row) => row.getAttribute('label') === 'Text Size');
      expect(textSizeRow).toBeTruthy();
      const textSizeAction = textSizeRow.shadowRoot.querySelector('.a11y-row');
      await userEvent.click(textSizeAction);
      expect(accessibilityMenu.hasAttribute('open')).toBe(true);
    });

    await step('Click avatar button to emit about action and close menus', async () => {
      await userEvent.click(avatarBtn);
      expect(languageMenu.hasAttribute('open')).toBe(false);
      expect(accessibilityMenu.hasAttribute('open')).toBe(false);
      expect(getComputedStyle(languageTooltip).display).not.toBe('none');
      expect(getComputedStyle(accessibilityTooltip).display).not.toBe('none');
    });
  },
};

export const PortugueseExample = {
  parameters: {
    docs: {
      description: {
        story: 'Localized variant demonstrating translated tooltip labels and the same interactive behavior for both contextual menus.',
      },
    },
  },
  args: {
    languageTooltip: 'Idioma',
    languageKbdLabel: 'Ctrl',
    languageKbdKey: 'L',
    accessibilityTooltip: 'Acessibilidade',
    accessibilityKbdLabel: 'Ctrl',
    accessibilityKbdKey: 'A',
    aboutTooltip: 'Sobre',
    aboutKbdLabel: 'Ctrl',
    aboutKbdKey: 'I',
    languageAriaLabel: 'Idioma',
    accessibilityAriaLabel: 'Acessibilidade',
    aboutAriaLabel: 'Sobre',
  },
  play: async ({ canvasElement, step }) => {
    const nav = canvasElement.querySelector('ds-navigation-menu');
    const languageBtn = nav.shadowRoot.querySelector('.language-btn');
    const languageTooltip = nav.shadowRoot.querySelector('.language-tooltip');
    const accessibilityBtn = nav.shadowRoot.querySelector('.accessibility-btn');

    await step('Verify localized tooltip labels are applied', async () => {
      expect(languageTooltip.getAttribute('text')).toBe('Idioma');
    });

    await step('Open localized language menu and select English', async () => {
      await userEvent.click(languageBtn);
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      expect(languageMenu.hasAttribute('open')).toBe(true);

      const enRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find((row) => row.getAttribute('label') === 'English');
      expect(enRow).toBeTruthy();
      const enRowAction = enRow.shadowRoot.querySelector('.a11y-row');
      await userEvent.click(enRowAction);
      expect(languageMenu.hasAttribute('open')).toBe(false);
    });

    await step('Open accessibility menu from localized scenario', async () => {
      await userEvent.click(accessibilityBtn);
      const accessibilityMenu = nav.shadowRoot.querySelector('.accessibility-menu');
      expect(accessibilityMenu.hasAttribute('open')).toBe(true);
    });
  },
};

export const LanguageMenuBehavior = {
  parameters: {
    docs: {
      description: {
        story: 'Focused interaction story for language menu single-select check behavior. Verifies that selection changes from English to Portuguese and menu closes after selection.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const nav = canvasElement.querySelector('ds-navigation-menu');
    const languageBtn = nav.shadowRoot.querySelector('.language-btn');

    await step('Open language menu', async () => {
      await userEvent.click(languageBtn);
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      expect(languageMenu.hasAttribute('open')).toBe(true);
    });

    await step('Verify English starts selected', async () => {
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      const enRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find((row) => row.getAttribute('label') === 'English');
      expect(enRow).toBeTruthy();
      expect(enRow.hasAttribute('selected')).toBe(true);
    });

    await step('Select Portuguese and verify close', async () => {
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      const ptRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find((row) => row.getAttribute('label') === 'Portuguese');
      expect(ptRow).toBeTruthy();
      const ptRowAction = ptRow.shadowRoot.querySelector('.a11y-row');
      await userEvent.click(ptRowAction);
      expect(languageMenu.hasAttribute('open')).toBe(false);
    });

    await step('Re-open and confirm Portuguese is selected', async () => {
      await userEvent.click(languageBtn);
      const languageMenu = nav.shadowRoot.querySelector('.language-menu');
      const ptRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find((row) => row.getAttribute('label') === 'Portuguese');
      const enRow = Array.from(languageMenu.shadowRoot.querySelectorAll('ds-item-row')).find((row) => row.getAttribute('label') === 'English');
      expect(ptRow.hasAttribute('selected')).toBe(true);
      expect(enRow.hasAttribute('selected')).toBe(false);
    });
  },
};

import { html } from 'lit';
import { expect, fn } from 'storybook/test';
import './Header.js';

const defaultBreadcrumbItems = [
  { id: 'home', label: 'Home', hasMenu: false },
  {
    id: 'work',
    label: 'Work',
    hasMenu: true,
    menuItems: [
      { id: 'case-study-a', label: 'Case Study A' },
      { id: 'case-study-b', label: 'Case Study B' },
      { id: 'case-study-c', label: 'Case Study C' }
    ]
  },
  { id: 'current', label: 'Valence Header', hasMenu: false }
];

export default {
  title: 'Organisms/Header',
  component: 'ds-header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Presentational header organism that composes `ds-breadcrumb` on the far left and `ds-navigation-menu` on the far right. The component remains state-dumb by accepting breadcrumb data and visibility toggles from the host app while forwarding interaction events from its child molecules.',
      },
    },
  },
  argTypes: {
    breadcrumbItems: {
      control: false,
      description: 'Array of breadcrumb item objects passed through to the composed breadcrumb molecule.',
      table: { category: 'Composition' },
    },
    breadcrumbMenuItems: {
      control: false,
      description: 'Optional fallback menu items array for breadcrumb contextual menus.',
      table: { category: 'Composition' },
    },
    showBreadcrumb: {
      control: 'boolean',
      description: 'Toggles the breadcrumb region on the far left.',
      table: { category: 'Core', defaultValue: { summary: 'true' } },
    },
    showLanguageMenu: {
      control: 'boolean',
      description: 'Toggles the language action inside the composed navigation menu.',
      table: { category: 'Core', defaultValue: { summary: 'true' } },
    },
    avatarSrc: {
      control: 'text',
      description: 'Pass-through avatar image source for the navigation menu.',
      table: { category: 'Navigation Menu' },
    },
    avatarAlt: {
      control: 'text',
      description: 'Pass-through avatar alternative text for the navigation menu.',
      table: { category: 'Navigation Menu' },
    },
    onBreadcrumbHome: {
      action: 'ds-breadcrumb-home',
      description: 'Event forwarded when the breadcrumb home item is activated.',
      table: { category: 'Events' },
    },
    onBreadcrumbReturn: {
      action: 'ds-breadcrumb-return',
      description: 'Event forwarded when the breadcrumb return control is activated.',
      table: { category: 'Events' },
    },
    onBreadcrumbSelect: {
      action: 'ds-breadcrumb-select',
      description: 'Event forwarded when a breadcrumb item or item menu option is selected.',
      table: { category: 'Events' },
    },
    onLanguage: {
      action: 'ds-navigation-menu-language',
      description: 'Event forwarded when the navigation menu language button is activated.',
      table: { category: 'Events' },
    },
    onAccessibility: {
      action: 'ds-navigation-menu-accessibility',
      description: 'Event forwarded when the accessibility button is activated.',
      table: { category: 'Events' },
    },
    onAbout: {
      action: 'ds-navigation-menu-about',
      description: 'Event forwarded when the avatar button is activated.',
      table: { category: 'Events' },
    },
    onLanguageSelect: {
      action: 'ds-navigation-menu-language-select',
      description: 'Event forwarded when a language option is selected.',
      table: { category: 'Events' },
    },
    onAccessibilitySelect: {
      action: 'ds-navigation-menu-accessibility-select',
      description: 'Event forwarded when an accessibility option is selected.',
      table: { category: 'Events' },
    },
  },
  args: {
    breadcrumbItems: defaultBreadcrumbItems,
    breadcrumbMenuItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'details', label: 'Details' },
      { id: 'results', label: 'Results' }
    ],
    showBreadcrumb: true,
    showLanguageMenu: true,
    avatarSrc: 'https://thispersondoesnotexist.com/random-person.jpeg',
    avatarAlt: 'Profile face',
    onBreadcrumbHome: fn(),
    onBreadcrumbReturn: fn(),
    onBreadcrumbSelect: fn(),
    onLanguage: fn(),
    onAccessibility: fn(),
    onAbout: fn(),
    onLanguageSelect: fn(),
    onAccessibilitySelect: fn(),
  },
  render: (args) => html`
    <div style="width: 100%; min-height: 500px; padding: 0 0 180px; background: var(--color-bg, #ffffff); box-sizing: border-box; overflow-x: hidden; overflow-y: visible;">
      <ds-header
        .breadcrumbItems=${args.breadcrumbItems}
        .breadcrumbMenuItems=${args.breadcrumbMenuItems}
        .showBreadcrumb=${args.showBreadcrumb}
        .showLanguageMenu=${args.showLanguageMenu}
        avatar-src=${args.avatarSrc}
        avatar-alt=${args.avatarAlt}
        @ds-breadcrumb-home=${args.onBreadcrumbHome}
        @ds-breadcrumb-return=${args.onBreadcrumbReturn}
        @ds-breadcrumb-select=${args.onBreadcrumbSelect}
        @ds-navigation-menu-language=${args.onLanguage}
        @ds-navigation-menu-accessibility=${args.onAccessibility}
        @ds-navigation-menu-about=${args.onAbout}
        @ds-navigation-menu-language-select=${args.onLanguageSelect}
        @ds-navigation-menu-accessibility-select=${args.onAccessibilitySelect}>
      </ds-header>
    </div>
  `,
};

export const Complete = {
  parameters: {
    docs: {
      description: {
        story: 'Default header composition stretched across the viewport. Shows the intended far-left breadcrumb and far-right navigation alignment for app-level page chrome while preserving enough canvas height for opened contextual menus.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const header = canvasElement.querySelector('ds-header');

    await step('Verify both composed molecules are rendered and aligned', async () => {
      const breadcrumbRegion = header.shadowRoot.querySelector('.breadcrumb-region');
      const navigationRegion = header.shadowRoot.querySelector('.navigation-region');
      const breadcrumb = header.shadowRoot.querySelector('ds-breadcrumb');
      const navigation = header.shadowRoot.querySelector('ds-navigation-menu');

      expect(breadcrumbRegion.hidden).toBe(false);
      expect(breadcrumb).toBeTruthy();
      expect(navigation).toBeTruthy();
      expect(navigationRegion.getBoundingClientRect().left).toBeGreaterThan(breadcrumbRegion.getBoundingClientRect().left);
    });
  },
};

export const NoBreadcrumb = {
  parameters: {
    docs: {
      description: {
        story: 'Header variant for views that do not expose hierarchy. The breadcrumb region is removed while the navigation menu remains pinned to the far right across the full viewport width.',
      },
    },
  },
  args: {
    showBreadcrumb: false,
  },
  play: async ({ canvasElement, step }) => {
    const header = canvasElement.querySelector('ds-header');

    await step('Verify the breadcrumb region is hidden', async () => {
      const breadcrumbRegion = header.shadowRoot.querySelector('.breadcrumb-region');
      expect(breadcrumbRegion.hidden).toBe(true);
    });
  },
};

export const NoLanguageMenu = {
  parameters: {
    docs: {
      description: {
        story: 'Header variant for apps that manage locale outside the top bar. The breadcrumb remains visible while the navigation menu suppresses the language action and keeps the remaining controls intact within the full-width header shell.',
      },
    },
  },
  args: {
    showLanguageMenu: false,
  },
  play: async ({ canvasElement, step }) => {
    const header = canvasElement.querySelector('ds-header');

    await step('Verify the navigation menu hides the language action', async () => {
      const navigation = header.shadowRoot.querySelector('ds-navigation-menu');
      const languageItem = navigation.shadowRoot.querySelector('.menu-item-language');
      expect(getComputedStyle(languageItem).display).toBe('none');
    });
  },
};
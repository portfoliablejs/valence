import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, fn, userEvent } from 'storybook/test';
import { useArgs } from 'storybook/preview-api';
import './Breadcrumb.js';

export default {
  title: 'Molecules/Breadcrumb',
  component: 'ds-breadcrumb',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stateless, controlled top navigation breadcrumb molecule. Emits custom DOM events for SPA navigation and supports item-level contextual menus.',
      },
    },
  },
  argTypes: {
    visible: {
      name: 'visible',
      control: 'boolean',
      description: 'Toggles breadcrumb visibility state.',
      table: { category: 'Core Controls', defaultValue: { summary: 'true' } },
    },
    onHomeClick: {
      action: 'ds-breadcrumb-home',
      description: 'Event emitted when the root home button is clicked.',
      table: { category: 'Events' },
    },
    onReturnClick: {
      action: 'ds-breadcrumb-return',
      description: 'Event emitted when the arrow-left return button is clicked.',
      table: { category: 'Events' },
    },
    onSelect: {
      action: 'ds-breadcrumb-select',
      description: 'Event emitted when a crumb or contextual menu item is selected.',
      table: { category: 'Events' },
    },
  },
  args: {
    visible: true,
    onHomeClick: fn(),
    onReturnClick: fn(),
    onSelect: fn(),
  },
  render: (args) => {
    const [{ items }, updateArgs] = useArgs();

    const handleSelect = (e) => {
      args.onSelect(e.detail);
      const currentItems = items || args.items;
      if (Array.isArray(currentItems) && e.detail.index !== undefined) {
        // Slice items up to the clicked crumb index to simulate SPA routing
        const sliced = currentItems.slice(0, e.detail.index + 1);
        updateArgs({ items: sliced });
      }
    };

    const handleReturn = (e) => {
      args.onReturnClick(e.detail);
      const currentItems = items || args.items;
      if (Array.isArray(currentItems) && currentItems.length > 1) {
        updateArgs({ items: currentItems.slice(0, -1) });
      }
    };

    const handleHome = (e) => {
      args.onHomeClick(e.detail);
      const currentItems = items || args.items;
      if (Array.isArray(currentItems) && currentItems.length > 0) {
        updateArgs({ items: [currentItems[0]] });
      }
    };

    return html`
      <div style="padding: 150px 50px; background: var(--color-bg, #ffffff); display: flex; justify-content: center;">
        <ds-breadcrumb 
          .items=${items || args.items}
          .menuItems=${args.menuItems}
          visible=${args.visible ? 'true' : 'false'}
          @ds-breadcrumb-home=${handleHome}
          @ds-breadcrumb-return=${handleReturn}
          @ds-breadcrumb-select=${handleSelect}>
        </ds-breadcrumb>
      </div>
    `;
  },
};

/**
 * Default story showing a 3-item breadcrumb stack with a middle contextual menu
 */
export const Default3Items = {
  args: {
    items: [
      { id: 'home', label: 'Home', hasMenu: false },
      { id: 'category', label: 'Category', hasMenu: true },
      { id: 'current', label: 'Item Title', hasMenu: false },
    ],
    menuItems: [
      { id: 'opt-1', label: 'Option 1' },
      { id: 'opt-2', label: 'Option 2' },
      { id: 'opt-3', label: 'Option 3' },
    ],
  },
};

/**
 * 2-Item Breadcrumb with NO contextual menu (e.g. Home - About)
 */
export const TwoItemsWithoutMenu = {
  args: {
    items: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About', hasMenu: false },
    ],
  },
};

/**
 * 2-Item Breadcrumb WITH contextual menu (e.g. Home - Case Study A)
 */
export const TwoItemsWithMenu = {
  args: {
    items: [
      { id: 'home', label: 'Home' },
      { 
        id: 'case-a', 
        label: 'Case Study A', 
        hasMenu: true,
        menuItems: [
          { id: 'case-a', label: 'Case Study A' },
          { id: 'case-b', label: 'Case Study B' },
          { id: 'case-c', label: 'Case Study C' },
        ] 
      },
    ],
  },
};
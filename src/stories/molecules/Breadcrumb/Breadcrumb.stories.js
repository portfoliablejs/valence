import { html } from 'lit';
import { expect, fn } from 'storybook/test';
import { useArgs } from 'storybook/preview-api';
import './Breadcrumb.js';

export default {
  title: 'Molecules/Breadcrumb [v1.0.0]',
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
    // Control Isolation Contract: Lock core state variables
    items: {
      name: 'items',
      control: false,
      description: 'Array of breadcrumb items defining the active stack.',
      table: { category: 'Core' },
    },
    menuItems: {
      name: 'menuItems',
      control: false,
      description: 'Global fallback array of contextual menu items.',
      table: { category: 'Core' },
    },
    itemCount: {
      name: 'itemCount',
      control: false,
      description: 'Fallback item count indicator when items is omitted.',
      table: { category: 'Core' },
    },
    currentLabel: {
      name: 'currentLabel',
      control: false,
      description: 'Fallback label for the final crumb when items is omitted.',
      table: { category: 'Core' },
    },
    visible: {
      name: 'visible',
      control: 'boolean',
      description: 'Toggles breadcrumb visibility state.',
      table: { category: 'Core', defaultValue: { summary: 'true' } },
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
    // Sub-Atomic Token Props
    '--ds-breadcrumb-gap': {
      name: '--ds-breadcrumb-gap',
      control: 'text',
      description: 'Overrides horizontal spacing gap between crumb items.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-breadcrumb-separator-color': {
      name: '--ds-breadcrumb-separator-color',
      control: 'color',
      description: 'Overrides separator icon color.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-breadcrumb-item-opacity': {
      name: '--ds-breadcrumb-item-opacity',
      control: 'text',
      description: 'Overrides non-hovered crumb item opacity.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-breadcrumb-menu-width': {
      name: '--ds-breadcrumb-menu-width',
      control: 'text',
      description: 'Overrides width of contextual menu popover.',
      table: { category: 'SUB-ATOMIC PROPS' },
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
        const { index, id, label } = e.detail;

        const updatedItems = currentItems.slice(0, index + 1).map((item, idx) => {
          if (idx === index) {
            return {
              ...item,
              id: id,
              label: label,
              menuItems: item.menuItems || args.menuItems
            };
          }
          return item;
        });

        updateArgs({ items: updatedItems });
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

    // Sub-atomic style assembly pipeline
    const styleString = [
      args['--ds-breadcrumb-gap'] ? `--ds-breadcrumb-gap: ${args['--ds-breadcrumb-gap']};` : '',
      args['--ds-breadcrumb-separator-color'] ? `--ds-breadcrumb-separator-color: ${args['--ds-breadcrumb-separator-color']};` : '',
      args['--ds-breadcrumb-item-opacity'] ? `--ds-breadcrumb-item-opacity: ${args['--ds-breadcrumb-item-opacity']};` : '',
      args['--ds-breadcrumb-menu-width'] ? `--ds-breadcrumb-menu-width: ${args['--ds-breadcrumb-menu-width']};` : '',
    ].filter(Boolean).join(' ');

    return html`
      <div style="padding: 150px 50px; background: var(--color-bg, #ffffff); display: flex; justify-content: center;">
        <ds-breadcrumb 
          style=${styleString}
          .items=${items || args.items}
          .menuItems=${args.menuItems}
          visible=${args.visible ? 'true' : 'false'}
          @ds-breadcrumb-home=${handleHome}
          @ds-breadcrumb-return=${handleReturn}
          @ds-breadcrumb-select=${handleSelect}>
        </ds-breadcrumb>
      </div>
    `;
  }
};

export const Default3Items = {
  args: {
    items: [
      { id: 'home', label: 'Home', hasMenu: false },
      { id: 'category', label: 'Category', hasMenu: true },
      { id: 'current', label: 'Item Title', hasMenu: true },
    ],
    menuItems: [
      { id: 'opt-1', label: 'Option 1' },
      { id: 'opt-2', label: 'Option 2' },
      { id: 'opt-3', label: 'Option 3' },
    ],
  },
};

export const TwoItemsWithoutMenu = {
  args: {
    items: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About', hasMenu: false },
    ],
  },
};

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
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect } from 'storybook/test';
import './Kbd';

/**
 * Global component definition detail descriptions mapping clean architectural APIs down to layout layers.
 */
export default {
  title: 'Atoms/Keyboard Icon',
  component: 'ds-kbd',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A presentational keyboard indicator used to render standalone key commands or multi-key combinations. Frequently embedded in tooltips, search palettes, and inline documentation.',
      },
    },
  },
  // Structural Decorator Wrapper providing canvas breathing room for dynamic components
  decorators: [
    (Story) => html`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${Story()}
      </div>
    `
  ],
  argTypes: {
    // --- COMPONENT: CORE ---
    variant: {
      name: 'variant',
      description: 'Determines the visual rendering and thematic style variation parameters.',
      control: { type: 'select' },
      options: ['default', 'inverted'],
      table: { category: 'Component: Core', defaultValue: { summary: 'default' } },
    },
    label: {
      name: 'label',
      description: 'Slotted template content representing the modifier or primary key.',
      control: { type: 'select' },
      options: ['⌥ Option', '⎇ Alt', '⇧ Shift', '⌘ Cmd', 'Ctrl', 'Esc', 'Backspace'],
      table: { category: 'Component: Core' },
    },
    showPlus: {
      name: 'showPlus',
      description: 'Toggles the addition of an internal combination operator.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    key: {
      name: 'key',
      description: 'The alphanumeric trailing key triggered in multi-key combination chains.',
      control: 'text',
      if: { arg: 'showPlus' },
      table: { category: 'Component: Core' },
    },

    // --- SUB-ATOMIC PROPS ---
    radius: {
      name: 'radius',
      description: 'Sub-atomic modifier overriding corner bounding geometry variables.',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--radius-sm)' } },
    },
    backgroundColor: {
      name: 'backgroundColor',
      description: 'Sub-atomic modifier overriding default backdrop pattern shading.',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-gray-xlight) / var(--color-overlay-light)' } },
    },
    borderWidth: {
      name: 'borderWidth',
      description: 'Sub-atomic modifier overriding boundary stroke thickness.',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--border-width-thin)' } },
    },
    borderColor: {
      name: 'borderColor',
      description: 'Sub-atomic modifier overriding frame boundary colors.',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-kbd-border) / var(--color-tooltip-kbd-border)' } },
    },
  },
  render: (args) => {
    // Map Sub-Atomic Override Properties cleanly without polluting component markup structures
    const customStyles = [
      args.radius ? `--custom-radius: ${args.radius};` : '',
      args.backgroundColor ? `--custom-bg: ${args.backgroundColor};` : '',
      args.borderWidth ? `--custom-border-width: ${args.borderWidth};` : '',
      args.borderColor ? `--custom-border-color: ${args.borderColor};` : ''
    ].join(' ').trim();

    return html`
      <ds-kbd 
        variant=${args.variant || 'default'}
        ?show-plus=${args.showPlus}
        key=${ifDefined(args.showPlus ? args.key : undefined)}
        style=${ifDefined(customStyles || undefined)}>
        ${args.label}
      </ds-kbd>
    `;
  },
};

/**
 * Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.
 */
export const StandaloneKey = {
  args: {
    variant: 'default',
    label: 'Backspace',
    showPlus: false,
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-kbd');

    await step('Verify structural attributes pass cleanly and combination parameters remain unattached', async () => {
      expect(component.getAttribute('variant')).toBe('default');
      expect(component.hasAttribute('show-plus')).toBe(false);
      expect(component.textContent.trim()).toBe('Backspace');
    });

    await step('Verify inner shadow root container layout primitives render correctly', async () => {
      const primitive = component.shadowRoot.querySelector('.kbd') || component.shadowRoot.firstElementChild;
      expect(primitive).not.toBeNull();
    });
  },
};

/**
 * Secondary inverted configuration mapped to transparent and overlay design tokens for dark context containers.
 */
export const Inverted = {
  args: { 
    variant: 'inverted', 
    label: 'Esc',
    showPlus: false,
  },
  parameters: { 
    backgrounds: { default: 'dark' } 
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-kbd');

    await step('Verify inverse markup attributes match dark workspace targets', async () => {
      expect(component.getAttribute('variant')).toBe('inverted');
      expect(component.textContent.trim()).toBe('Esc');
    });
  },
};

/**
 * Multi-key combination chaining featuring a secondary alphanumeric key property and dynamic operator indicator.
 */
export const MultiKeyCombination = {
  args: {
    variant: 'default',
    label: '⇧ Shift',
    showPlus: true,
    key: 'p',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-kbd');

    await step('Verify combination attributes pass cleanly to host component', async () => {
      expect(component.hasAttribute('show-plus')).toBe(true);
      expect(component.getAttribute('key')).toBe('p');
    });

    await step('Verify dynamic operator and key elements pass into internal shadow scope', async () => {
      const internalKeySpan = component.shadowRoot.querySelector('.key');
      expect(internalKeySpan).not.toBeNull();
      expect(internalKeySpan.textContent.trim()).toBe('p');
    });
  },
};
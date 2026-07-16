import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, userEvent, fireEvent } from 'storybook/test';

import './Check';

export default {
  title: 'Atoms/Check [v1.0.0]',
  component: 'ds-check',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A minimalist presentational vector graphic atom used to indicate selection or completion states. Features optional background container framing, smooth CSS animations, full keyboard/click toggling, disabled states, and sub-atomic style overrides.',
      },
    },
  },
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
    selected: {
      name: 'selected',
      description: 'Toggles the active selection state and animated appearance of the checkmark.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    hasBackground: {
      name: 'hasBackground',
      description: 'Activates an outer surface container background and structural border ring around the checkmark.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    disabled: {
      name: 'disabled',
      description: 'Disables user interactions and applies muted visual opacity tokens.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Crucial accessibility label delegated directly to internal primitives to keep host clean.',
      control: 'text',
      table: { category: 'Component: Core' },
    },

    // --- SUB-ATOMIC PROPS ---
    color: {
      name: 'color',
      description: 'Sub-atomic modifier overriding default SVG stroke vector color (--ds-check-color).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-accent)' } },
    },
    size: {
      name: 'size',
      description: 'Sub-atomic modifier overriding outer bounding box dimensions (--ds-check-size).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--size-icon-sm)' } },
    },
    bg: {
      name: 'bg',
      description: 'Sub-atomic modifier overriding surface container background color (--ds-check-bg).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-surface)' } },
    },
    borderColor: {
      name: 'borderColor',
      description: 'Sub-atomic modifier overriding container border ring color (--ds-check-border-color).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-gray-light)' } },
    },
  },
  render: (args) => {
    const customStyles = [
      args.color ? `--ds-check-color: ${args.color};` : '',
      args.size ? `--ds-check-size: ${args.size};` : '',
      args.bg ? `--ds-check-bg: ${args.bg};` : '',
      args.borderColor ? `--ds-check-border-color: ${args.borderColor};` : '',
    ].join(' ').trim();

    return html`
      <ds-check
        ?selected=${args.selected}
        ?has-background=${args.hasBackground}
        ?disabled=${args.disabled}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}>
      </ds-check>
    `;
  },
};

/**
 * Default isolated check icon state.
 */
export const Default = {
  args: {
    selected: true,
    hasBackground: false,
    disabled: false,
    ariaLabel: 'Toggle task completion',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-check');

    await step('Verify initial selected state and ARIA attributes', async () => {
      expect(component.hasAttribute('selected')).toBe(true);
      expect(component.getAttribute('aria-checked')).toBe('true');
      expect(component.getAttribute('aria-disabled')).toBe('false');
    });

    await step('Simulate a mouse click to unselect the check', async () => {
      await userEvent.click(component);
      expect(component.hasAttribute('selected')).toBe(false);
      expect(component.getAttribute('aria-checked')).toBe('false');
    });

    await step('Simulate another click to re-select it', async () => {
      await userEvent.click(component);
      expect(component.hasAttribute('selected')).toBe(true);
      expect(component.getAttribute('aria-checked')).toBe('true');
    });

    await step('Simulate a keyboard spacebar press to unselect it again', async () => {
      fireEvent.keyDown(component, { key: ' ', code: 'Space' });

      expect(component.hasAttribute('selected')).toBe(false);
      expect(component.getAttribute('aria-checked')).toBe('false');
    });
  },
};

/**
 * Checkmark framed inside a surface container box with border outline.
 */
export const WithBackground = {
  args: {
    selected: true,
    hasBackground: true,
    disabled: false,
    ariaLabel: 'Checkbox option with surface container',
  },
};

/**
 * Disabled state story validating disabled attributes and interaction suppression.
 */
export const Disabled = {
  args: {
    selected: true,
    hasBackground: true,
    disabled: true,
    ariaLabel: 'Disabled completed item',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-check');

    await step('Verify initial disabled ARIA attributes and focus prevention', async () => {
      expect(component.hasAttribute('disabled')).toBe(true);
      expect(component.getAttribute('aria-disabled')).toBe('true');
      expect(component.getAttribute('tabindex')).toBe('-1');
    });

    await step('Verify click events are ignored when disabled', async () => {
      await userEvent.click(component, { pointerEventsCheck: 0 });
      expect(component.hasAttribute('selected')).toBe(true);
    });
  },
};

/**
 * Sub-atomic style override configuration demonstrating all 4 custom hooks.
 */
export const CustomStyled = {
  args: {
    selected: true,
    hasBackground: true,
    disabled: false,
    ariaLabel: 'Custom success indicator',
    color: '#ffffff',
    size: '2.5rem',
    bg: '#10b981',
    borderColor: '#059669',
  },
};
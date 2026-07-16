import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, userEvent, fireEvent } from 'storybook/test';

import './Radio';

export default {
  title: 'Atoms/Radio',
  component: 'ds-radio',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A minimalist presentational vector graphic atom used to indicate single-select radio button choices. Features spring-physics animations, full keyboard/click toggling, disabled/invalid states, accessibility observer sync, and sub-atomic style overrides.',
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
      description: 'Toggles the active selection state and animated appearance of the radio inner dot.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    disabled: {
      name: 'disabled',
      description: 'Disables user interactions and applies muted visual opacity tokens.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    invalid: {
      name: 'invalid',
      description: 'Applies error state styling using --color-error for form validation feedback.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Crucial accessibility label assigned for screen reader announcements.',
      control: 'text',
      table: { category: 'Component: Core' },
    },

    // --- SUB-ATOMIC PROPS ---
    color: {
      name: 'color',
      description: 'Sub-atomic modifier overriding default SVG stroke and fill vector colors.',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-accent)' } },
    },
    size: {
      name: 'size',
      description: 'Sub-atomic modifier overriding outer bounding box dimensions.',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--size-icon-sm)' } },
    },
  },
  render: (args) => {
    const customStyles = [
      args.color ? `--custom-color: ${args.color};` : '',
      args.size ? `--custom-size: ${args.size};` : ''
    ].join(' ').trim();

    return html`
      <ds-radio
        ?selected=${args.selected}
        ?disabled=${args.disabled}
        ?invalid=${args.invalid}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}>
      </ds-radio>
    `;
  },
};

/**
 * State 1: Unselected / Rest State
 */
export const Unselected = {
  args: {
    selected: false,
    disabled: false,
    invalid: false,
    ariaLabel: 'Unselected radio option',
  },
};

/**
 * State 2: Selected State with automated interaction test
 */
export const Selected = {
  args: {
    selected: true,
    disabled: false,
    invalid: false,
    ariaLabel: 'Selected radio option',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-radio');

    await step('Verify initial selected state and ARIA attributes', async () => {
      expect(component.hasAttribute('selected')).toBe(true);
      expect(component.getAttribute('aria-checked')).toBe('true');
    });

    await step('Simulate click to unselect', async () => {
      await userEvent.click(component);
      expect(component.hasAttribute('selected')).toBe(false);
      expect(component.getAttribute('aria-checked')).toBe('false');
    });

    await step('Simulate keyboard spacebar press to re-select', async () => {
      fireEvent.keyDown(component, { key: ' ', code: 'Space' });
      expect(component.hasAttribute('selected')).toBe(true);
      expect(component.getAttribute('aria-checked')).toBe('true');
    });
  },
};

/**
 * State 3: Disabled Unselected & Selected States
 */
export const Disabled = {
  args: {
    selected: true,
    disabled: true,
    invalid: false,
    ariaLabel: 'Disabled radio choice',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-radio');

    await step('Verify disabled attributes and focus prevention', async () => {
      expect(component.hasAttribute('disabled')).toBe(true);
      expect(component.getAttribute('aria-disabled')).toBe('true');
      expect(component.getAttribute('tabindex')).toBe('-1');
    });

    await step('Verify interactions are suppressed when disabled', async () => {
      await userEvent.click(component, { pointerEventsCheck: 0 });
      expect(component.hasAttribute('selected')).toBe(true);
    });
  },
};

/**
 * State 4: Invalid / Validation Error State
 */
export const InvalidState = {
  args: {
    selected: false,
    disabled: false,
    invalid: true,
    ariaLabel: 'Selection required',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-radio');

    await step('Verify invalid attribute reflection', async () => {
      expect(component.getAttribute('aria-invalid')).toBe('true');
    });
  },
};

/**
 * State 5: Sub-Atomic Styled Custom Tokens Override
 */
export const CustomStyled = {
  args: {
    selected: true,
    disabled: false,
    invalid: false,
    ariaLabel: 'Custom success radio',
    color: 'var(--color-success)',
    size: 'var(--size-icon-xl)',
  },
};
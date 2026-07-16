import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, fn, userEvent } from 'storybook/test';
import './Tab';

/**
 * Global component definition detail descriptions mapping clean architectural APIs down to layout layers.
 */
export default {
  title: 'Atoms/Tab',
  component: 'ds-tab',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An interactive navigation tab control designed for switching views within a tablist widget. Fully accessible with dynamic `role="tab"`, `aria-selected`, and `tabindex` state tracking.',
      },
    },
  },
  // FIX: Added role="tablist" and aria-label to satisfy axe-core's aria-required-parent rule
  decorators: [
    (Story) => html`
      <div 
        class="canvas-buffer" 
        role="tablist" 
        aria-label="Tab Navigation Container" 
        style="
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
    label: {
      name: 'label',
      description: 'Slotted template content or attribute label delivered cleanly to internal primitives.',
      control: 'text',
      table: { category: 'Component: Core' },
    },
    active: {
      name: 'active',
      description: 'Controls the selected visual state and aria-selected tracking parameter.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    disabled: {
      name: 'disabled',
      description: 'Forces non-actionable interaction parameters across the tab button surface.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Crucial accessibility label delegated directly to internal primitives to keep host clean.',
      control: 'text',
      table: { category: 'Component: Core' },
    },

    // --- SUB-ATOMIC OVERRIDES ---
    radius: {
      name: 'radius',
      description: 'Sub-atomic modifier overriding corner bounding geometry variables.',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--radius-md)' } },
    },
    textColor: {
      name: 'textColor',
      description: 'Sub-atomic modifier overriding default baseline tab text color.',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-text-secondary)' } },
    },
    activeColor: {
      name: 'activeColor',
      description: 'Sub-atomic modifier overriding active state background shading.',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-black)' } },
    },
  },
  args: { 
    onClick: fn() 
  },
  render: (args) => {
    // Map Sub-Atomic Override Properties cleanly without polluting component markup structures
    const customStyles = [
      args.radius ? `--custom-radius: ${args.radius};` : '',
      args.textColor ? `--custom-color: ${args.textColor};` : '',
      args.activeColor ? `--custom-active-bg: ${args.activeColor};` : ''
    ].join(' ').trim();

    return html`
      <ds-tab
        label=${ifDefined(args.label)}
        ?active=${args.active}
        ?disabled=${args.disabled}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}
        @ds-tab-click=${args.onClick}>
      </ds-tab>
    `;
  },
};

/**
 * Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.
 */
export const Default = {
  args: {
    label: 'Project Dashboard',
    active: false,
    disabled: false,
    ariaLabel: 'Project Dashboard View Tab',
  },
  play: async ({ canvasElement, step, args }) => {
    const component = canvasElement.querySelector('ds-tab');

    await step('Verify structural parameters pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.hasAttribute('active') && component.getAttribute('active') !== 'false').toBe(false);
      expect(component.getAttribute('aria-label')).toBeNull(); // Confirms attribute host-purging worked
    });

    await step('Verify inner shadow layout primitives receive delegated ARIA attributes and tabindex', async () => {
      const buttonEl = component.shadowRoot.querySelector('button');
      expect(buttonEl.getAttribute('role')).toBe('tab');
      expect(buttonEl.getAttribute('aria-selected')).toBe('false');
      expect(buttonEl.getAttribute('tabindex')).toBe('-1');
      expect(buttonEl.getAttribute('aria-label')).toBe('Project Dashboard View Tab');
      expect(buttonEl.textContent).toBe('Project Dashboard');
    });

    await step('Verify click events dispatch the custom ds-tab-click event payload', async () => {
      const buttonEl = component.shadowRoot.querySelector('button');
      await userEvent.click(buttonEl);
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};

/**
 * Active tab state configuration verifying active CSS classes, aria-selected="true", and tabindex="0".
 */
export const Active = {
  args: {
    label: 'Project History',
    active: true,
    disabled: false,
    ariaLabel: 'Project History View Tab',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-tab');

    await step('Verify active ARIA state and focusable tabindex on inner button primitive', async () => {
      const buttonEl = component.shadowRoot.querySelector('button');
      expect(buttonEl.classList.contains('active')).toBe(true);
      expect(buttonEl.getAttribute('aria-selected')).toBe('true');
      expect(buttonEl.getAttribute('tabindex')).toBe('0');
      expect(buttonEl.getAttribute('aria-label')).toBe('Project History View Tab');
    });
  },
};
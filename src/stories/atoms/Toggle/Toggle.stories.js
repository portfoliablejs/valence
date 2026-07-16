import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, userEvent, fn } from 'storybook/test';
import './Toggle.js';

/**
 * `ds-toggle` is an universal interactive binary and text toggle switch layout atoms. Can be used for Mode Switchers (On/Off Code), 
 * enlarge font size (A/A+), and has `show-icon` for Accessibility.
 */
export default {
  title: 'Atoms/Toggle',
  component: 'ds-toggle',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => html`
      <div class="canvas-buffer" style="padding: 40px; display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
        ${Story()}
      </div>
    `
  ],
  // CRITICAL FIXED BLOCK: Default keys ordered intentionally to lock the table category sorting layout
  args: {
    checked: false,
    disabled: false,
    showIcon: true,
    textOn: '',
    textOff: '',
    ariaLabel: '',
    onToggleChange: fn(), // Placed last to strictly enforce that the 'Events' category renders at the bottom
  },
  argTypes: {
    // --- COMPONENT: CORE ---
    checked: {
      name: 'checked',
      description: 'Controls the active boolean state of the toggle.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    disabled: {
      name: 'disabled',
      description: 'Suspends component interaction entirely.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    showIcon: {
      name: 'show-icon',
      description: 'Determines if the internal visual status indicator renders inside the sliding knob.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'true' } },
    },
    textOn: {
      name: 'text-on',
      description: 'Label mapped explicitly to the active (checked) bounding zone.',
      control: 'text',
      table: { category: 'Component: Dynamic Text Layout' },
    },
    textOff: {
      name: 'text-off',
      description: 'Label mapped explicitly to the passive (unchecked) bounding zone.',
      control: 'text',
      table: { category: 'Component: Dynamic Text Layout' },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Required screen reader descriptor mapped to the native hidden checkbox.',
      control: 'text',
      table: { category: 'Component: Accessibility' },
    },

    // --- EVENTS (Safely placed at the bottom) ---
    onToggleChange: {
      name: 'ds-toggle-change',
      action: 'ds-toggle-change',
      table: { category: 'Events' },
    },

    // --- SUB-ATOMIC OVERRIDES ---
    toggleCheckedColor: {
      name: 'checkedBackgroundColor',
      description: 'Sub-atomic modifier overriding the active state track fill.',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
  },
  render: (args) => {
    const customStyles = [
      args.toggleCheckedColor ? `--custom-checked-bg: ${args.toggleCheckedColor};` : ''
    ].join(' ').trim();

    return html`
      <ds-toggle
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        show-icon=${ifDefined(args.showIcon ? 'true' : 'false')}
        text-on=${ifDefined(args.textOn || undefined)}
        text-off=${ifDefined(args.textOff || undefined)}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}
        @ds-toggle-change=${(e) => args.onToggleChange(e.detail)}>
      </ds-toggle>
    `;
  },
};

/**
 * Standard pill switch configuration verifying baseline operational parameters.
 */
export const SwitchDefault = {
  args: {
    checked: false,
    showIcon: true,
    ariaLabel: 'Enable standard notifications',
  },
  play: async ({ canvasElement, args, step }) => {
    const component = canvasElement.querySelector('ds-toggle');
    const root = component.shadowRoot.querySelector('.component-root');
    const input = component.shadowRoot.querySelector('input');

    await step('Verify ARIA delegation clears host markup', async () => {
      expect(component.getAttribute('aria-label')).toBeNull();
      expect(input.getAttribute('aria-label')).toBe('Enable standard notifications');
    });

    await step('Hover toggle to verify interaction feedback', async () => {
      await userEvent.hover(root);
    });

    await step('Verify keyboard focus capability', async () => {
      input.focus();
      expect(component.shadowRoot.activeElement).toBe(input);
    });

    await step('Trigger layout activation via user event selection', async () => {
      await userEvent.click(root);
      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(args.onToggleChange).toHaveBeenCalledWith({ checked: true });
    });
  },
};

/**
 * Subtle, programmatic dark overlay blend directly on the active track only when text mode 
 * is engaged, we deepen the underlying background color slightly, pushing the mathematical contrast ratio over the 4.5:1 line.
 */
export const TextSegmentMode = {
  args: {
    checked: true,
    textOn: 'Code',
    textOff: 'Code',
    showIcon: false,
    ariaLabel: 'Toggle billing cycle',
  },
};

/**
 * Single state text block boundary layouts with absolute dynamic width adaptations.
 */
export const TextSingleOnly = {
  args: {
    checked: false,
    textOn: 'Active',
    textOff: '',
    showIcon: true,
    ariaLabel: 'Status switch control panel',
  },
};
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, fn, userEvent } from 'storybook/test';
import './Toast';

export default {
  title: 'Molecules/Toast',
  component: 'ds-toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '`ds-toast` is a floating notification molecule used for dynamic system announcements. Features optional left "Close" `ds-button` `variant="icon"`, optional right "Never show this again" `ds-button` `variant="text"` with muted opacity, and `role="status"` / `aria-live="polite"` for assistive technology compatibility.',
      },
    },
  },
  decorators: [
    (Story) => html`
      <div class="canvas-buffer" style="display: flex; justify-content: center; align-items: center; box-sizing: border-box;">
        ${Story()}
      </div>
    `
  ],
  argTypes: {
    // --- COMPONENT: CORE ---
    visible: {
      name: 'visible',
      description: 'Controls visibility and entry/exit animation state.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'true' } },
    },
    caseTitle: {
      name: 'caseTitle',
      description: 'Text string rendered inside the notification container.',
      control: 'text',
      table: { category: 'Component: Core' },
    },
    showClose: {
      name: 'showClose',
      description: 'Toggles the left close icon button.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'true' } },
    },
    showNeverShow: {
      name: 'showNeverShow',
      description: 'Toggles the right "Never show this again" text button.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'true' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Accessibility label delegated to internal live region primitive.',
      control: 'text',
      table: { category: 'Component: Core', defaultValue: { summary: 'Resume case reader' } },
    },

    // --- SUB-ATOMIC OVERRIDES ---
    backgroundColor: {
      name: 'backgroundColor',
      description: 'Sub-atomic modifier overriding default surface background.',
      control: 'color',
      table: { category: 'Sub-Atomic Overrides' },
    },
    textColor: {
      name: 'textColor',
      description: 'Sub-atomic modifier overriding default text color.',
      control: 'color',
      table: { category: 'Sub-Atomic Overrides' },
    },

    // --- EVENTS ---
    onToastClick: {
      name: 'onToastClick',
      description: 'Fires when the main toast body is clicked.',
      action: 'ds-toast-click',
      table: { category: 'SUB-ATOMIC PROPS', subcategory: 'Events' },
    },
    onClose: {
      name: 'onClose',
      description: 'Fires when the left close icon button is clicked.',
      action: 'ds-toast-close',
      table: { category: 'SUB-ATOMIC PROPS', subcategory: 'Events' },
    },
    onNeverShow: {
      name: 'onNeverShow',
      description: 'Fires when the "Never show this again" text button is clicked.',
      action: 'ds-toast-never-show',
      table: { category: 'SUB-ATOMIC PROPS', subcategory: 'Events' },
    },
  },
  args: {
    onToastClick: fn(),
    onClose: fn(),
    onNeverShow: fn(),
  },
  render: (args) => {
    const customStyles = [
      args.backgroundColor ? `--custom-bg: ${args.backgroundColor};` : '',
      args.textColor ? `--custom-color: ${args.textColor};` : ''
    ].join(' ').trim();

    return html`
      <ds-toast
        visible=${args.visible ? 'true' : 'false'}
        case-title=${ifDefined(args.caseTitle)}
        ?show-close=${args.showClose}
        ?show-never-show=${args.showNeverShow}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}
        @ds-toast-click=${args.onToastClick}
        @ds-toast-close=${args.onClose}
        @ds-toast-never-show=${args.onNeverShow}>
      </ds-toast>
    `;
  },
};

/**
 * Full toast configuration with both the left close button and right "Never show this again" button active.
 */
export const Default = {
  args: {
    visible: true,
    caseTitle: 'Resume: Agentic AI Design',
    showClose: true,
    showNeverShow: true,
    ariaLabel: 'Resume reading Agentic AI Design case study',
  },
  play: async ({ canvasElement, step, args }) => {
    const component = canvasElement.querySelector('ds-toast');

    await step('Verify structural attributes pass cleanly and host scrubbing executes', async () => {
      expect(component.getAttribute('visible')).toBe('true');
      expect(component.getAttribute('aria-label')).toBeNull();
    });

    await step('Verify both buttons are visible in shadow root', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');

      expect(closeBtn.hasAttribute('hidden')).toBe(false);
      expect(neverBtn.hasAttribute('hidden')).toBe(false);
    });

    await step('Verify clicking left close icon button triggers ds-toast-close event', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      await userEvent.click(closeBtn);
      expect(args.onClose).toHaveBeenCalled();
    });

    await step('Verify clicking "Never show this again" text button triggers ds-toast-never-show event', async () => {
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');
      await userEvent.click(neverBtn);
      expect(args.onNeverShow).toHaveBeenCalled();
    });
  },
};

/**
 * Toast configuration rendering ONLY the left close icon button.
 */
export const JustCloseButton = {
  args: {
    visible: true,
    caseTitle: 'Resume: Agentic AI Design',
    showClose: true,
    showNeverShow: false,
    ariaLabel: 'Resume reading Agentic AI Design case study',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-toast');

    await step('Verify only left close icon button is rendered', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');

      expect(closeBtn.hasAttribute('hidden')).toBe(false);
      expect(neverBtn.hasAttribute('hidden')).toBe(true);
    });
  },
};

/**
 * Toast configuration rendering ONLY the right "Never show this again" text button.
 */
export const JustNeverShowButton = {
  args: {
    visible: true,
    caseTitle: 'Resume: Agentic AI Design',
    showClose: false,
    showNeverShow: true,
    ariaLabel: 'Resume reading Agentic AI Design case study',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-toast');

    await step('Verify only right text button is rendered', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');

      expect(closeBtn.hasAttribute('hidden')).toBe(true);
      expect(neverBtn.hasAttribute('hidden')).toBe(false);
    });
  },
};

/**
 * Clean toast notification rendering NO interactive buttons.
 */
export const ToastOnly = {
  args: {
    visible: true,
    caseTitle: 'Resume: Agentic AI Design',
    showClose: false,
    showNeverShow: false,
    ariaLabel: 'Resume reading Agentic AI Design case study',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-toast');

    await step('Verify both buttons are hidden', async () => {
      const closeBtn = component.shadowRoot.querySelector('.toast-close-btn');
      const neverBtn = component.shadowRoot.querySelector('.toast-never-btn');

      expect(closeBtn.hasAttribute('hidden')).toBe(true);
      expect(neverBtn.hasAttribute('hidden')).toBe(true);
    });
  },
};
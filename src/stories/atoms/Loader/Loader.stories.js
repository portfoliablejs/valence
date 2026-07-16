import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect } from 'storybook/test';
import './Loader';

/**
 * Global component definition detail descriptions mapping clean architectural APIs down to layout layers.
 */
export default {
  title: 'Atoms/Loader',
  component: 'ds-loader',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '`ds-loader` is a circular SVG spinner used to indicate loading or buffering states. It includes `role="status"` and `aria-live="polite"` to ensure screen readers announce the loading state properly.',
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
    visible: {
      name: 'visible',
      description: 'Toggles the opacity and visibility of the loader.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'true' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Crucial accessibility label delegated directly to internal primitives to keep host clean.',
      control: 'text',
      table: { category: 'Component: Core', defaultValue: { summary: 'Video is buffering...' } },
    },
    size: {
      name: 'size',
      description: 'Controls the outer bounding box dimensions of the spinner container.',
      control: 'text',
      table: { category: 'Component: Core', defaultValue: { summary: '48px' } },
    },

    // --- SUB-ATOMIC OVERRIDES ---
    backgroundColor: {
      name: 'backgroundColor',
      description: 'Sub-atomic modifier overriding default backdrop pattern shading.',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-bg)' } },
    },
    iconColor: {
      name: 'iconColor',
      description: 'Sub-atomic modifier overriding default stroke icon foreground color.',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-text-primary)' } },
    },
  },
  render: (args) => {
    const customStyles = [
      args.backgroundColor ? `--custom-bg: ${args.backgroundColor};` : '',
      args.iconColor ? `--custom-color: ${args.iconColor};` : ''
    ].join(' ').trim();

    return html`
      <ds-loader
        visible=${args.visible ? 'true' : 'false'}
        aria-label=${ifDefined(args.ariaLabel)}
        size=${ifDefined(args.size)}
        style=${ifDefined(customStyles || undefined)}>
      </ds-loader>
    `;
  },
};

/**
 * Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.
 */
export const DefaultBaseline = {
  args: {
    visible: true,
    ariaLabel: 'Video is buffering...',
    size: '48px',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-loader');

    await step('Verify structural attributes pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.getAttribute('visible')).toBe('true');
      expect(component.getAttribute('aria-label')).toBeNull();
    });

    await step('Verify inner shadow layout primitives receive the delegated attribute and accessible text', async () => {
      const loaderEl = component.shadowRoot.querySelector('.video-loader');
      const srOnlyEl = component.shadowRoot.querySelector('.sr-only');
      
      expect(loaderEl.getAttribute('aria-label')).toBe('Video is buffering...');
      expect(srOnlyEl.textContent).toBe('Video is buffering...');
      expect(loaderEl.getAttribute('role')).toBe('status');
    });
  },
};

/**
 * Validates state updates when the component enters a hidden configuration.
 */
export const HiddenState = {
  args: {
    ...DefaultBaseline.args,
    visible: false,
    ariaLabel: 'Content loaded',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-loader');

    await step('Verify hidden aria state applied to internal shadow primitive', async () => {
      const loaderEl = component.shadowRoot.querySelector('.video-loader');
      expect(loaderEl.getAttribute('aria-hidden')).toBe('true');
    });
  },
};
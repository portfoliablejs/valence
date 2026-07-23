import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, fn, userEvent } from 'storybook/test';
import './SliderDot';

/**
 * An interactive pagination dot used to navigate between slides.
 */
export default {
  title: 'Atoms/Slider Dot [v1.0.0]',
  component: 'ds-slider-dot',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      description: {
        component: 'An interactive pagination dot used to navigate between slides. It is fully keyboard accessible, utilizing a native `<button>` element internally to handle focus and `Enter`/`Space` key presses automatically.',
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
    // --- SLIDERDOT: CORE ---
    active: {
      name: 'active',
      description: 'Sets the dot to its active, scaled-up state.',
      control: 'boolean',
      table: { category: 'SliderDot: Core', defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Crucial accessibility label delegated directly to internal primitives to keep host clean.',
      control: 'text',
      table: { category: 'SliderDot: Core', defaultValue: { summary: 'Go to slide 2' } },
    },

    // --- SUB-ATOMIC PROPS ---
    size: {
      name: 'size',
      description: 'Sub-atomic modifier overriding default diameter geometry (--ds-slider-dot-size).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: '12px' } },
    },
    backgroundColor: {
      name: 'backgroundColor',
      description: 'Sub-atomic modifier overriding default baseline background color (--ds-slider-dot-bg).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-gray-xlight)' } },
    },
    activeColor: {
      name: 'activeColor',
      description: 'Sub-atomic modifier overriding active state background color (--ds-slider-dot-active-bg).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-gray-dark)' } },
    },

    // --- EVENTS ---
    onClick: {
      name: 'onClick',
      description: 'Fires when clicked. View output in the Storybook "Actions" tab.',
      action: 'clicked',
      table: { 
        category: 'SUB-ATOMIC PROPS',
        subcategory: 'Events' 
      },
    },
  },
  args: { 
    onClick: fn() 
  },
  render: (args) => {
    // Map Sub-Atomic Override Properties cleanly without polluting component markup structures
    const customStyles = [
      args.size ? `--ds-slider-dot-size: ${args.size};` : '',
      args.backgroundColor ? `--ds-slider-dot-bg: ${args.backgroundColor};` : '',
      args.activeColor ? `--ds-slider-dot-active-bg: ${args.activeColor};` : ''
    ].join(' ').trim();

    return html`
      <ds-slider-dot
        ?active=${args.active}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}
        @ds-dot-click=${args.onClick}>
      </ds-slider-dot>
    `;
  },
};

/**
 * Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.
 */
export const Inactive = {
  args: {
    active: false,
    ariaLabel: 'Go to slide 2',
  },
  play: async ({ canvasElement, step, args }) => {
    const component = canvasElement.querySelector('ds-slider-dot');

    await step('Verify structural parameters pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.hasAttribute('active') && component.getAttribute('active') !== 'false').toBe(false);
      expect(component.getAttribute('aria-label')).toBeNull(); // Confirms attribute host-purging worked
    });

    await step('Verify inner shadow layout primitives receive delegated aria attributes', async () => {
      const buttonEl = component.shadowRoot.querySelector('.slider-dot');
      expect(buttonEl.getAttribute('aria-label')).toBe('Go to slide 2');
      expect(buttonEl.getAttribute('aria-current')).toBe('false');
    });

    await step('Verify click events trigger custom ds-dot-click event', async () => {
      const buttonEl = component.shadowRoot.querySelector('.slider-dot');
      await userEvent.click(buttonEl);
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};

/**
 * Validates the component when rendered in an active slide pagination state.
 */
export const Active = {
  args: {
    active: true,
    ariaLabel: 'Current slide, slide 1',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-slider-dot');

    await step('Verify active state reflection on internal shadow DOM primitive', async () => {
      const buttonEl = component.shadowRoot.querySelector('.slider-dot');
      expect(buttonEl.classList.contains('active')).toBe(true);
      expect(buttonEl.getAttribute('aria-current')).toBe('true');
      expect(buttonEl.getAttribute('aria-label')).toBe('Current slide, slide 1');
    });
  },
};
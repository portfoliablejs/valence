import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect } from 'storybook/test';
import './Divider';

export default {
  title: 'Atoms/Divider [v1.0.0]',
  component: 'ds-divider',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A static structural layout atom used to separate content blocks horizontally or vertically. It correctly delegates semantic accessibility primitives and handles custom token style overrides.',
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
        width: 300px;
        height: 120px;
      ">
        ${Story()}
      </div>
    `
  ],
  argTypes: {
    // --- COMPONENT: CORE ---
    orientation: {
      name: 'orientation',
      description: 'Determines the structural orientation layout axis.',
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: { category: 'Component: Core', defaultValue: { summary: 'horizontal' } },
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
      description: 'Sub-atomic modifier overriding default line stroke color (--ds-divider-color).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-card-border)' } },
    },
    thickness: {
      name: 'thickness',
      description: 'Sub-atomic modifier overriding default line thickness geometry (--ds-divider-thickness).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--border-width-thin)' } },
    },
    margin: {
      name: 'margin',
      description: 'Sub-atomic modifier overriding default spatial spacing bounds (--ds-divider-margin).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--space-md) 0' } },
    },
  },
  render: (args) => {
    const customStyles = [
      args.color ? `--ds-divider-color: ${args.color};` : '',
      args.thickness ? `--ds-divider-thickness: ${args.thickness};` : '',
      args.margin ? `--ds-divider-margin: ${args.margin};` : ''
    ].join(' ').trim();

    return html`
      <ds-divider
        orientation=${args.orientation || 'horizontal'}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}>
      </ds-divider>
    `;
  },
};

/**
 * Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.
 */
export const Horizontal = {
  args: {
    orientation: 'horizontal',
    ariaLabel: 'Section break',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-divider');

    await step('Verify structural attributes pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.getAttribute('orientation')).toBe('horizontal');
      expect(component.getAttribute('aria-label')).toBeNull();
    });

    await step('Verify inner shadow layout primitives receive delegated accessibility attributes', async () => {
      const primitive = component.shadowRoot.querySelector('.divider-root') || component.shadowRoot.firstElementChild;
      expect(primitive.getAttribute('aria-label')).toBe('Section break');
      expect(primitive.getAttribute('aria-orientation')).toBe('horizontal');
      expect(primitive.getAttribute('role')).toBe('separator');
    });
  },
};

/**
 * Vertical orientation setup used to visually separate inline or side-by-side content items.
 */
export const Vertical = {
  args: {
    orientation: 'vertical',
    ariaLabel: 'Content separator',
  },
  decorators: [
    (Story) => html`
      <div style="display: flex; align-items: center; gap: 16px; height: 100%; width: 100%; justify-content: center;">
        <span>Left Block</span>
        ${Story()}
        <span>Right Block</span>
      </div>
    `
  ],
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-divider');

    await step('Verify vertical orientation maps cleanly to internal primitives', async () => {
      expect(component.getAttribute('orientation')).toBe('vertical');
      const primitive = component.shadowRoot.querySelector('.divider-root') || component.shadowRoot.firstElementChild;
      expect(primitive.getAttribute('aria-orientation')).toBe('vertical');
    });
  },
};

/**
 * Sub-atomic style override configuration demonstrating custom token mapping for color, thickness, and margin.
 */
export const CustomStyled = {
  args: {
    orientation: 'horizontal',
    color: 'var(--color-accent)',
    thickness: 'var(--border-width-medium)',
    margin: 'var(--space-xl) 0',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-divider');

    await step('Verify sub-atomic custom CSS variables inject properly onto host inline styles', async () => {
      const styleAttr = component.getAttribute('style');
      expect(styleAttr).toContain('--ds-divider-color: var(--color-accent);');
      expect(styleAttr).toContain('--ds-divider-thickness: var(--border-width-medium);');
      expect(styleAttr).toContain('--ds-divider-margin: var(--space-xl) 0;');
    });
  },
};
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect } from 'storybook/test';

import './Iconography.js';
import { ICON_REGISTRY } from './Iconography.js';

export default {
  title: 'Atoms/Icon [v1.0.0]',
  component: 'ds-icon',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // --- 1. CORE CONTROLS ---
    name: {
      name: 'name',
      description: 'Select icon identifier from base registry names.',
      control: { type: 'select' },
      options: Object.keys(ICON_REGISTRY),
      table: { category: 'Core', defaultValue: { summary: 'search' } },
    },
    variant: {
      name: 'variant',
      description: 'Global toggle switching between outline vector paths and solid fills.',
      control: { type: 'select' },
      options: ['outline', 'fill'],
      table: { category: 'Core', defaultValue: { summary: 'outline' } },
    },
    size: {
      name: 'size',
      description: 'Bounding box dimension in pixels (maps to size attribute).',
      control: { type: 'number' },
      table: { category: 'Core', defaultValue: { summary: '24' } },
    },
    color: {
      name: 'color',
      description: 'Sets text color on host element for CSS inheritance.',
      control: 'color',
      table: { category: 'Core', defaultValue: { summary: 'currentColor' } },
    },

    // --- 2. SUB-ATOMIC PROPS ---
    strokeWidth: {
      name: 'strokeWidth',
      description: 'Sub-atomic override for vector stroke weight (--ds-icon-stroke-width).',
      control: { type: 'range', min: 1, max: 4, step: 0.5 },
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    stroke: {
      name: 'stroke',
      description: 'Sub-atomic override for vector stroke color (--ds-icon-stroke).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    fill: {
      name: 'fill',
      description: 'Sub-atomic override for vector interior fill color (--ds-icon-fill).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    customSize: {
      name: 'customSize',
      description: 'Sub-atomic override for bounding box size geometry (--ds-icon-size).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
  },
  render: (args) => {
    const iconStyles = [
      args.strokeWidth ? `--ds-icon-stroke-width: ${args.strokeWidth};` : '',
      args.stroke ? `--ds-icon-stroke: ${args.stroke};` : '',
      args.fill ? `--ds-icon-fill: ${args.fill};` : '',
      args.customSize ? `--ds-icon-size: ${args.customSize};` : '',
    ].join(' ').trim();

    return html`
      <ds-icon
        name=${ifDefined(args.name)}
        variant=${ifDefined(args.variant)}
        size=${ifDefined(args.size)}
        color=${ifDefined(args.color)}
        style=${ifDefined(iconStyles || undefined)}>
      </ds-icon>
    `;
  },
};

/**
 * Standard Outlined Icon state.
 */
export const Default = {
  args: {
    name: 'search',
    variant: 'outline',
  },
  play: async ({ canvasElement, step }) => {
    const icon = canvasElement.querySelector('ds-icon');

    await step('Verify Shadow DOM component mount', async () => {
      expect(icon).toBeTruthy();
      const svg = icon.shadowRoot.querySelector('svg');
      expect(svg).toBeTruthy();
      expect(svg.getAttribute('aria-hidden')).toBe('true');
    });
  },
};

/**
 * Solid Filled Variant state (switches geometry and fills automatically).
 */
export const FilledVariant = {
  args: {
    name: 'bookmark',
    variant: 'fill',
  },
  play: async ({ canvasElement, step }) => {
    const icon = canvasElement.querySelector('ds-icon');

    await step('Verify host attribute reflection for filled variant', async () => {
      expect(icon.getAttribute('variant')).toBe('fill');
    });
  },
};

/**
 * Sub-atomic token style override configuration demonstrating all custom hooks.
 */
export const CustomStyled = {
  args: {
    name: 'bookmark',
    variant: 'outline',
    strokeWidth: 2.5,
    stroke: '#ff5722',
    fill: '#ffe0b2',
    customSize: '48px',
  },
  play: async ({ canvasElement, step }) => {
    const icon = canvasElement.querySelector('ds-icon');

    await step('Verify sub-atomic custom CSS variables inject properly onto host inline styles', async () => {
      const styleAttr = icon.getAttribute('style');
      expect(styleAttr).toContain('--ds-icon-stroke-width: 2.5;');
      expect(styleAttr).toContain('--ds-icon-stroke: #ff5722;');
      expect(styleAttr).toContain('--ds-icon-fill: #ffe0b2;');
      expect(styleAttr).toContain('--ds-icon-size: 48px;');
    });
  },
};

/**
 * Test for container color cascading and forced-colors hover compatibility.
 */
export const ContainerInheritance = {
  render: (args) => html`
    <div style="
      padding: 16px;
      background: var(--color-black, #000);
      color: var(--color-white, #fff);
      display: inline-flex;
      align-items: center;
      gap: 12px;
      border-radius: 8px;
    ">
      <span>Container Text</span>
      <ds-icon 
        name=${ifDefined(args.name)} 
        variant=${ifDefined(args.variant)}>
      </ds-icon>
    </div>
  `,
  args: {
    name: 'lock-closed',
    variant: 'outline',
  },
};

/**
 * Regression matrix covering glyphs that previously rendered broken or black in fill mode.
 */
export const FillVariantRegression = {
  render: () => {
    const regressionIcons = [
      'clock',
      'forward-10',
      'forward-5',
      'backward-10',
      'backward-5',
      'subtitle-on',
      'subtitle-closed',
      'autoscroll-closed',
      'pip',
      'video-quality',
      'check-circle',
      'info',
      'alert-circle',
      'language',
      'accessibility',
      'high-contrast',
      'settings',
      'tab-nav-left',
      'tab-nav-right',
      'ask-ai',
    ];

    return html`
      <div style="display:grid; gap:16px; width:min(900px, 100%);">
        <div style="display:grid; gap:8px;">
          <strong>Default inherited color</strong>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(88px, 1fr)); gap:12px;">
            ${regressionIcons.map((iconName) => html`
              <div style="display:grid; place-items:center; gap:6px; padding:10px 8px; border:1px solid #ddd; border-radius:8px;">
                <ds-icon name=${iconName} variant="fill" size="24"></ds-icon>
                <span style="font-size:11px; text-align:center; line-height:1.2;">${iconName}</span>
              </div>
            `)}
          </div>
        </div>

        <div style="display:grid; gap:8px; background:#111; color:#8af7ff; padding:12px; border-radius:10px;">
          <strong style="color:#e7f9ff;">Token override color on dark surface</strong>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(88px, 1fr)); gap:12px;">
            ${regressionIcons.map((iconName) => html`
              <div style="display:grid; place-items:center; gap:6px; padding:10px 8px; border:1px solid #2a3d44; border-radius:8px;">
                <ds-icon name=${iconName} variant="fill" size="24" style="--ds-icon-fill: #8af7ff; --ds-icon-stroke: #8af7ff;"></ds-icon>
                <span style="font-size:11px; text-align:center; line-height:1.2; color:#d6eef2;">${iconName}</span>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  },
};
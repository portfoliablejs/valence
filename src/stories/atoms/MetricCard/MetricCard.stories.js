import { html } from 'lit';
import './MetricCard.js';

export default {
  title: 'Atoms/Metric Card [v1.0.0]',
  component: 'ds-metric-card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stateless presentational atom for summary indicators, statistics, KPIs, and case study highlights.',
      },
    },
  },
  argTypes: {
    // Core functional attributes
    value: {
      name: 'value',
      control: 'text',
      description: 'Primary metric value or statistical figure.',
      table: { category: 'Core' },
    },
    label: {
      name: 'label',
      control: 'text',
      description: 'Descriptive subtitle or category label.',
      table: { category: 'Core' },
    },
    prefix: {
      name: 'prefix',
      control: 'text',
      description: 'Optional currency or direction symbol before value (e.g. $, +).',
      table: { category: 'Core' },
    },
    suffix: {
      name: 'suffix',
      control: 'text',
      description: 'Optional unit or percentage symbol after value (e.g. %, h+).',
      table: { category: 'Core' },
    },
    variant: {
      name: 'variant',
      control: { type: 'select' },
      options: ['default', 'success', 'accent', 'warning', 'error'],
      description: 'Semantic indicator border color variant.',
      table: { category: 'Core', defaultValue: { summary: 'default' } },
    },
    treatment: {
      name: 'treatment',
      control: { type: 'inline-radio' },
      options: ['border-left', 'surface', 'minimal'],
      description: 'Surface rendering style and container framing.',
      table: { category: 'Core', defaultValue: { summary: 'border-left' } },
    },
    size: {
      name: 'size',
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Density scale and typography sizing.',
      table: { category: 'Core', defaultValue: { summary: 'md' } },
    },
    trend: {
      name: 'trend',
      control: { type: 'select' },
      options: [null, 'up', 'down', 'neutral'],
      description: 'Directional indicator arrow rendered next to metric value.',
      table: { category: 'Core' },
    },
    icon: {
      name: 'icon',
      control: 'text',
      description: 'Optional sub-atomic icon name rendered beside the label.',
      table: { category: 'Core' },
    },
    // Sub-Atomic Token Props
    '--ds-metric-card-border-color': {
      name: '--ds-metric-card-border-color',
      control: 'color',
      description: 'Overrides left indicator border color.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-metric-card-bg': {
      name: '--ds-metric-card-bg',
      control: 'color',
      description: 'Overrides card container background surface.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-metric-card-padding': {
      name: '--ds-metric-card-padding',
      control: 'text',
      description: 'Overrides internal container padding.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-metric-card-value-color': {
      name: '--ds-metric-card-value-color',
      control: 'color',
      description: 'Overrides primary metric value text color.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-metric-card-label-color': {
      name: '--ds-metric-card-label-color',
      control: 'color',
      description: 'Overrides metric label text color.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
  },
  args: {
    value: '18 → 5.3',
    label: 'Days to first deliverable',
    variant: 'default',
    treatment: 'border-left',
    size: 'md',
  },
  render: (args) => {
    const styleString = [
      args['--ds-metric-card-border-color'] ? `--ds-metric-card-border-color: ${args['--ds-metric-card-border-color']};` : '',
      args['--ds-metric-card-bg'] ? `--ds-metric-card-bg: ${args['--ds-metric-card-bg']};` : '',
      args['--ds-metric-card-padding'] ? `--ds-metric-card-padding: ${args['--ds-metric-card-padding']};` : '',
      args['--ds-metric-card-value-color'] ? `--ds-metric-card-value-color: ${args['--ds-metric-card-value-color']};` : '',
      args['--ds-metric-card-label-color'] ? `--ds-metric-card-label-color: ${args['--ds-metric-card-label-color']};` : '',
    ].filter(Boolean).join(' ');

    return html`
      <ds-metric-card
        style=${styleString || undefined}
        value=${args.value || ''}
        label=${args.label || ''}
        prefix=${args.prefix || ''}
        suffix=${args.suffix || ''}
        variant=${args.variant || 'default'}
        treatment=${args.treatment || 'border-left'}
        size=${args.size || 'md'}
        trend=${args.trend || ''}
        icon=${args.icon || ''}>
      </ds-metric-card>
    `;
  },
};

/**
 * Default metric card state
 */
export const Default = {
  args: {
    value: '18 → 5.3',
    label: 'Days to first deliverable',
  },
};

/**
 * Story for the `value` property
 */
export const Value = {
  args: {
    value: '99.9%',
    label: 'Uptime SLA',
  },
};

/**
 * Story for the `label` property
 */
export const Label = {
  args: {
    value: '2.4s',
    label: 'Average Page Load Time',
  },
};

/**
 * Story for the `prefix` property
 */
export const Prefix = {
  args: {
    prefix: '$',
    value: '2.4M',
    label: 'Annual Cost Savings',
  },
};

/**
 * Story for the `suffix` property
 */
export const Suffix = {
  args: {
    value: '70',
    suffix: '%',
    label: 'Latency Reduction',
  },
};

/**
 * Story for `variant="default"`
 */
export const VariantDefault = {
  args: {
    variant: 'default',
    value: '18 → 5.3',
    label: 'Default Variant',
  },
};

/**
 * Story for `variant="success"`
 */
export const VariantSuccess = {
  args: {
    variant: 'success',
    value: '70%',
    label: 'Success Variant',
  },
};

/**
 * Story for `variant="accent"`
 */
export const VariantAccent = {
  args: {
    variant: 'accent',
    value: '+$2.4M',
    label: 'Accent Variant',
  },
};

/**
 * Story for `variant="warning"`
 */
export const VariantWarning = {
  args: {
    variant: 'warning',
    value: '10h+',
    label: 'Warning Variant',
  },
};

/**
 * Story for `variant="error"`
 */
export const VariantError = {
  args: {
    variant: 'error',
    value: '45%',
    label: 'Error Variant',
  },
};

/**
 * Story for `treatment="border-left"`
 */
export const TreatmentBorderLeft = {
  args: {
    treatment: 'border-left',
    value: '100%',
    label: 'Border-Left Treatment',
  },
};

/**
 * Story for `treatment="surface"`
 */
export const TreatmentSurface = {
  args: {
    treatment: 'surface',
    variant: 'success',
    value: '< 2s',
    label: 'Surface Treatment',
  },
};

/**
 * Story for `treatment="minimal"`
 */
export const TreatmentMinimal = {
  args: {
    treatment: 'minimal',
    value: '10h+',
    label: 'Minimal Treatment',
  },
};

/**
 * Story for `size="sm"`
 */
export const SizeSmall = {
  args: {
    size: 'sm',
    value: '100%',
    label: 'Small Size',
  },
};

/**
 * Story for `size="md"`
 */
export const SizeMedium = {
  args: {
    size: 'md',
    value: '18 → 5.3',
    label: 'Medium Size',
  },
};

/**
 * Story for `size="lg"`
 */
export const SizeLarge = {
  args: {
    size: 'lg',
    treatment: 'surface',
    variant: 'accent',
    value: '70%',
    label: 'Large Size',
  },
};

/**
 * Story for `trend="up"`
 */
export const TrendUp = {
  args: {
    variant: 'success',
    trend: 'up',
    prefix: '+',
    value: '2.4',
    suffix: 'M',
    label: 'Trend Up',
  },
};

/**
 * Story for `trend="down"`
 */
export const TrendDown = {
  args: {
    variant: 'success',
    trend: 'down',
    value: '70',
    suffix: '%',
    label: 'Trend Down',
  },
};

/**
 * Story for `trend="neutral"`
 */
export const TrendNeutral = {
  args: {
    variant: 'default',
    trend: 'neutral',
    value: '2.0',
    suffix: 's',
    label: 'Trend Neutral',
  },
};

/**
 * Story for the `icon` property
 */
export const Icon = {
  args: {
    variant: 'accent',
    value: '10',
    suffix: 'h+',
    label: 'Weekly hours recovered',
    icon: 'check-circle',
  },
};
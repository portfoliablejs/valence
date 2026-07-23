import { html } from 'lit';
import './Summary.js';
import '../../atoms/MetricCard/MetricCard.js';

export default {
  title: 'Molecules/Summary',
  component: 'ds-summary',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Stateless presentational molecule for summaries and key insights featuring audio-player glassmorphic styling, controllable metrics toggle, and fully configurable slotted metric card grids.',
      },
    },
  },
  argTypes: {
    // Core functional attributes
    text: {
      name: 'text',
      control: 'text',
      description: 'Primary summary body text string.',
      table: { category: 'Core' },
    },
    active: {
      name: 'active',
      control: 'boolean',
      description: 'Triggers the dynamic AI typing animation sequence.',
      table: { category: 'Core', defaultValue: { summary: 'false' } },
    },
    labelHeader: {
      name: 'label-header',
      control: 'text',
      description: 'Localizable header label string.',
      table: { category: 'Core', defaultValue: { summary: 'Summary' } },
    },
    showMetrics: {
      name: 'show-metrics',
      control: 'boolean',
      description: 'Toggles visibility of the slotted metric cards grid.',
      table: { category: 'Core', defaultValue: { summary: 'true' } },
    },
    // Slotted Metric Card 1 Controls
    metric1Value: {
      name: 'Metric 1 Value',
      control: 'text',
      description: 'Value for metric card 1.',
      table: { category: 'SLOTTED METRIC 1' },
    },
    metric1Label: {
      name: 'Metric 1 Label',
      control: 'text',
      description: 'Label for metric card 1.',
      table: { category: 'SLOTTED METRIC 1' },
    },
    metric1Variant: {
      name: 'Metric 1 Variant',
      control: { type: 'select' },
      options: ['default', 'success', 'accent', 'warning', 'error'],
      table: { category: 'SLOTTED METRIC 1' },
    },
    metric1Treatment: {
      name: 'Metric 1 Treatment',
      control: { type: 'inline-radio' },
      options: ['border-left', 'surface', 'minimal'],
      table: { category: 'SLOTTED METRIC 1' },
    },
    // Slotted Metric Card 2 Controls
    metric2Value: {
      name: 'Metric 2 Value',
      control: 'text',
      description: 'Value for metric card 2.',
      table: { category: 'SLOTTED METRIC 2' },
    },
    metric2Label: {
      name: 'Metric 2 Label',
      control: 'text',
      description: 'Label for metric card 2.',
      table: { category: 'SLOTTED METRIC 2' },
    },
    metric2Variant: {
      name: 'Metric 2 Variant',
      control: { type: 'select' },
      options: ['default', 'success', 'accent', 'warning', 'error'],
      table: { category: 'SLOTTED METRIC 2' },
    },
    metric2Icon: {
      name: 'Metric 2 Icon',
      control: 'text',
      description: 'Icon for metric card 2.',
      table: { category: 'SLOTTED METRIC 2' },
    },
    // Slotted Metric Card 3 Controls
    metric3Value: {
      name: 'Metric 3 Value',
      control: 'text',
      description: 'Value for metric card 3.',
      table: { category: 'SLOTTED METRIC 3' },
    },
    metric3Label: {
      name: 'Metric 3 Label',
      control: 'text',
      description: 'Label for metric card 3.',
      table: { category: 'SLOTTED METRIC 3' },
    },
    // Slotted Metric Card 4 Controls
    metric4Value: {
      name: 'Metric 4 Value',
      control: 'text',
      description: 'Value for metric card 4.',
      table: { category: 'SLOTTED METRIC 4' },
    },
    metric4Label: {
      name: 'Metric 4 Label',
      control: 'text',
      description: 'Label for metric card 4.',
      table: { category: 'SLOTTED METRIC 4' },
    },
    // Sub-Atomic Token Props
    '--ds-summary-bg': {
      name: '--ds-summary-bg',
      control: 'color',
      description: 'Overrides background container surface color.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-summary-border-color': {
      name: '--ds-summary-border-color',
      control: 'color',
      description: 'Overrides summary container border color.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-summary-header-color': {
      name: '--ds-summary-header-color',
      control: 'color',
      description: 'Overrides header title text color.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-summary-text-color': {
      name: '--ds-summary-text-color',
      control: 'color',
      description: 'Overrides summary body text color.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    '--ds-summary-padding': {
      name: '--ds-summary-padding',
      control: 'text',
      description: 'Overrides internal summary container padding.',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
  },
  args: {
    text: 'Holofante lab required a scalable post-sale portal to align clients. This solution introduced self-service scheduling and real-time tracking, vastly reducing operational overhead and account management blind spots.',
    active: false,
    labelHeader: 'Summary',
    showMetrics: true,
    metric1Value: '18 → 5.3',
    metric1Label: 'Days to first deliverable',
    metric1Variant: 'success',
    metric1Treatment: 'border-left',
    metric2Value: '10h+',
    metric2Label: 'Weekly hours recovered',
    metric2Variant: 'accent',
    metric2Icon: 'check-circle',
    metric3Value: '100%',
    metric3Label: 'UI Consistency',
    metric4Value: '< 2s',
    metric4Label: 'UI Latency',
  },
  render: (args) => {
    const styleString = [
      args['--ds-summary-bg'] ? `--ds-summary-bg: ${args['--ds-summary-bg']};` : '',
      args['--ds-summary-border-color'] ? `--ds-summary-border-color: ${args['--ds-summary-border-color']};` : '',
      args['--ds-summary-header-color'] ? `--ds-summary-header-color: ${args['--ds-summary-header-color']};` : '',
      args['--ds-summary-text-color'] ? `--ds-summary-text-color: ${args['--ds-summary-text-color']};` : '',
      args['--ds-summary-padding'] ? `--ds-summary-padding: ${args['--ds-summary-padding']};` : '',
    ].filter(Boolean).join(' ');

    return html`
      <ds-summary
        style=${styleString || undefined}
        text=${args.text || ''}
        active=${args.active ? 'true' : 'false'}
        label-header=${args.labelHeader || 'Summary'}
        show-metrics=${args.showMetrics ? 'true' : 'false'}>
        ${args.showMetrics ? html`
          <ds-metric-card
            value=${args.metric1Value || '18 → 5.3'}
            label=${args.metric1Label || 'Days to first deliverable'}
            variant=${args.metric1Variant || 'success'}
            treatment=${args.metric1Treatment || 'border-left'}>
          </ds-metric-card>
          <ds-metric-card
            value=${args.metric2Value || '10h+'}
            label=${args.metric2Label || 'Weekly hours recovered'}
            variant=${args.metric2Variant || 'accent'}
            icon=${args.metric2Icon || 'check-circle'}>
          </ds-metric-card>
          <ds-metric-card
            value=${args.metric3Value || '100%'}
            label=${args.metric3Label || 'UI Consistency'}>
          </ds-metric-card>
          <ds-metric-card
            value=${args.metric4Value || '< 2s'}
            label=${args.metric4Label || 'UI Latency'}>
          </ds-metric-card>
        ` : ''}
      </ds-summary>
    `;
  },
};

/**
 * Default summary state with slotted metrics visible in main preview iframe
 */
export const Default = {
  args: {
    text: 'Holofante lab required a scalable post-sale portal to align clients. This solution introduced self-service scheduling and real-time tracking, vastly reducing operational overhead.',
    active: false,
    labelHeader: 'Summary',
    showMetrics: true,
  },
};

/**
 * Story for the `text` property
 */
export const Text = {
  args: {
    text: 'The platform automation reduced design handoff latency by 70% across three engineering teams.',
    showMetrics: true,
  },
};

/**
 * Story for the `active` property (triggers typing animation sequence)
 */
export const Active = {
  args: {
    text: 'Real-time telemetry and automated component auditing cut delivery cycle times in half.',
    active: true,
    showMetrics: true,
  },
};

/**
 * Story for the `label-header` property
 */
export const LabelHeader = {
  args: {
    labelHeader: 'Executive Brief',
    text: 'Projected operational savings exceed $2.4M annually following design system consolidation.',
    showMetrics: true,
  },
};

/**
 * Story for the `show-metrics` property (disabling slotted metric card grid)
 */
export const ShowMetricsDisabled = {
  args: {
    text: 'Holofante lab required a scalable post-sale portal to align clients. Operational overhead was reduced significantly without additional headcount.',
    showMetrics: false,
  },
};
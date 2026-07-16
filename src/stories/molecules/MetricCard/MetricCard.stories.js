import { html } from 'lit';
import './MetricCard';

export default {
  title: 'Molecules/MetricCard',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
  },
  render: (args) => html`
    <ds-metric-card value="${args.value}" label="${args.label}"></ds-metric-card>
  `,
};

export const Default = {
  args: {
    value: '18 → 5.3',
    label: 'Days to first deliverable',
  },
};
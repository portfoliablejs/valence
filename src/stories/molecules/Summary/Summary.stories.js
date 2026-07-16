import { html } from 'lit';
import './Summary';

export default {
  title: 'Molecules/Summary',
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    active: { control: 'boolean', description: 'Set to true to trigger the typing animation.' },
  },
  render: (args) => html`
    <div style="padding: 40px; max-width: 600px; background: var(--color-bg);">
      <ds-summary text="${args.text}" active="${args.active}">
        <ds-metric-card value="18 → 5.3" label="Days to first deliverable"></ds-metric-card>
        <ds-metric-card value="10h+" label="Weekly hours recovered"></ds-metric-card>
        <ds-metric-card value="100%" label="UI Consistency"></ds-metric-card>
      </ds-summary>
    </div>
  `,
};

export const Default = {
  args: {
    text: 'Holofante lab required a scalable post-sale portal to align clients. This solution introduced self-service scheduling and real-time tracking, vastly reducing operational overhead and account management blind spots.',
    active: true,
  },
};
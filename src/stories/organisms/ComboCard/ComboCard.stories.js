// src/stories/organisms/ComboCard/ComboCard.stories.js
import { html } from 'lit';
import './ComboCard';

export default {
  title: 'Organisms/ComboCard',
  tags: ['autodocs'],
};

export const WithTabs = {
  render: () => html`
    <ds-combo-card>
      <div slot="dashboard" data-label="Dashboard">Content for Dashboard</div>
      <div slot="history" data-label="History">Content for History</div>
      <div slot="download" data-label="Download">Content for Download</div>
    </ds-combo-card>
  `,
};
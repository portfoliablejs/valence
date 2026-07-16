import { html } from 'lit';
import { fn } from 'storybook/test';
import './ComboTabs';

export default {
  title: 'Molecules/ComboTabs',
  tags: ['autodocs'],
  args: { onTabChange: fn() },
  render: (args) => {
    // We use a small script to pass the array data to the DOM element
    setTimeout(() => {
      const el = document.querySelector('ds-combo-tabs');
      if (el) el.tabs = args.tabs;
    }, 0);

    return html`
      <ds-combo-tabs @ds-tab-change="${(e) => args.onTabChange(e.detail.activeId)}"></ds-combo-tabs>
    `;
  },
};

export const Default = {
  args: {
    tabs: [
      { id: 'tab-dashboard', label: 'Project Dashboard' },
      { id: 'tab-history', label: 'Project History' },
      { id: 'tab-download', label: 'Secure Download' }
    ]
  },
};
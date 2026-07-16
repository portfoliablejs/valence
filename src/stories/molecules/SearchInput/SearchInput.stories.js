import { html } from 'lit';
import { fn } from 'storybook/test';
import './SearchInput';

export default {
  title: 'Molecules/SearchInput',
  tags: ['autodocs'],
  argTypes: {
    expanded: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: { onInput: fn() },
  render: (args) => html`
    <div style="padding: 40px; background: var(--color-glass-bg, #EBEBF0); border-radius: 100px; display: inline-block;">
      <ds-search-input 
        expanded="${args.expanded}" 
        placeholder="${args.placeholder}"
        @ds-search-input="${(e) => args.onInput(e.detail.value)}">
      </ds-search-input>
    </div>
  `,
};

export const Collapsed = {
  args: {
    expanded: false,
    placeholder: 'Search cases...',
  },
};

export const Expanded = {
  args: {
    expanded: true,
    placeholder: 'Search cases...',
  },
};
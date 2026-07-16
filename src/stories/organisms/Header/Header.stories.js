// src/stories/organisms/Header/Header.stories.js
import { html } from 'lit';
import { fn } from 'storybook/test';
import './Header.js';

export default {
  title: 'Organisms/Header',
  tags: ['autodocs'],
  argTypes: {
    view: {
      control: { type: 'select' },
      options: ['home', 'case', 'about'],
      description: 'Controls the visibility of the back button and breadcrumb.',
    },
    currentLabel: { 
      control: 'text',
      description: 'The text for the current page in the breadcrumb (for "case" or "about" views).',
    },
  },
  args: {
    onHomeClick: fn(),
    onA11yClick: fn(),
    onLangClick: fn(),
    onModeChange: fn(),
  },
  render: (args) => html`
    <div style="padding: 20px; background: #f9f9f9; height: 150px; position: relative;">
      <ds-header 
        view="${args.view}" 
        current-label="${args.currentLabel}"
        @ds-home-click="${args.onHomeClick}"
        @ds-a11y-click="${args.onA11yClick}"
        @ds-lang-click="${args.onLangClick}"
        @ds-mode-change="${(e) => args.onModeChange(e.detail)}">
      </ds-header>
    </div>
  `,
};

export const HomeView = {
  args: {
    view: 'home',
  },
};

export const CaseView = {
  args: {
    view: 'case',
    currentLabel: 'Agentic AI Design',
  },
};
import { html } from 'lit';
import { expect } from 'storybook/test';
import './HomeView.js';

export default {
  title: 'Templates/HomeView [v1.0.0]',
  component: 'ds-home-view',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Template-level composition that places the Header organism above a semantic H1, followed by the Gallery organism and a dimmed footer text block.',
      },
    },
  },
  argTypes: {
    titleText: {
      control: 'text',
      name: 'title-text',
      table: { category: 'Content' },
    },
    footerText: {
      control: 'text',
      name: 'footer-text',
      table: { category: 'Content' },
    },
    itemCount: {
      control: { type: 'range', min: 1, max: 8, step: 1 },
      name: 'item-count',
      table: { category: 'Gallery' },
    },
    showBreadcrumb: {
      control: 'boolean',
      name: 'show-breadcrumb',
      table: { category: 'Header' },
    },
    showLanguageMenu: {
      control: 'boolean',
      name: 'show-language-menu',
      table: { category: 'Header' },
    },
  },
  args: {
    titleText: "Lio Schimanko's Portfolio",
    footerText: '(c)2026 All trademarks are property of their owners.',
    itemCount: 4,
    showBreadcrumb: false,
    showLanguageMenu: true,
  },
  render: (args) => html`
    <div style="width: 100%; min-height: 100vh; background: var(--color-bg, #fff); box-sizing: border-box;">
      <ds-home-view
        title-text=${args.titleText}
        footer-text=${args.footerText}
        item-count=${args.itemCount}
        show-breadcrumb=${args.showBreadcrumb ? 'true' : 'false'}
        show-language-menu=${args.showLanguageMenu ? 'true' : 'false'}>
      </ds-home-view>
    </div>
  `,
};

export const Default = {
  play: async ({ canvasElement, step }) => {
    const homeView = canvasElement.querySelector('ds-home-view');

    await step('Render header, title, gallery, and footer in sequence', async () => {
      const shell = homeView.shadowRoot.querySelector('.homeview-shell');
      const header = shell.querySelector('ds-header');
      const title = shell.querySelector('.homeview-title');
      const gallery = shell.querySelector('ds-gallery');
      const footer = shell.querySelector('.homeview-footer');

      expect(header).toBeTruthy();
      expect(title.tagName).toBe('H1');
      expect(gallery).toBeTruthy();
      expect(footer).toBeTruthy();
      expect(footer.textContent.length).toBeGreaterThan(0);
    });
  },
};
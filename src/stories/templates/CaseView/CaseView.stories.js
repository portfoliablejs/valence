import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { expect, fn } from 'storybook/test';
import './CaseView.js';
import '../../atoms/Thumbnail/Thumbnail.js';
import '../../molecules/Summary/Summary.js';
import '../../molecules/AudioPlayer/AudioPlayer.js';
import '../../molecules/CaseNavigator/CaseNavigator.js';
import '../../atoms/MetricCard/MetricCard.js';

const mockBody = `
  <h3 id="overview">Overview</h3>
  <p>
    CaseView composes Header and Article in one route-friendly template so single-page shells can switch
    from gallery browsing to case detail without full page reloads.
  </p>
  <h3 id="impact">Impact</h3>
  <p>
    Teams can centralize route logic externally while keeping this component strictly presentational and
    accessible.
  </p>
`;

export default {
  title: 'Templates/CaseView [v1.0.0]',
  component: 'ds-case-view',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Template composition that reuses the HomeView-style ds-header (with breadcrumb controls) and projects long-form case content through ds-article slots.',
      },
    },
  },
  argTypes: {
    kicker: { control: 'text', table: { category: 'Article Content' } },
    titleText: { control: 'text', name: 'title-text', table: { category: 'Article Content' } },
    primaryLabel: { control: 'text', name: 'primary-label', table: { category: 'Article Actions' } },
    secondary1Label: { control: 'text', name: 'secondary1-label', table: { category: 'Article Actions' } },
    secondary2Label: { control: 'text', name: 'secondary2-label', table: { category: 'Article Actions' } },
    showBreadcrumb: { control: 'boolean', name: 'show-breadcrumb', table: { category: 'Header' } },
    showLanguageMenu: { control: 'boolean', name: 'show-language-menu', table: { category: 'Header' } },
    showSummary: { control: 'boolean', name: 'show-summary', table: { category: 'Article Regions' } },
    showPlayer: { control: 'boolean', name: 'show-player', table: { category: 'Article Regions' } },
    showNavigator: { control: 'boolean', name: 'show-navigator', table: { category: 'Article Regions' } },
  },
  args: {
    kicker: '2026',
    titleText: 'Unified Case View Flow',
    primaryLabel: 'Watch Pitch',
    secondary1Label: 'Repository',
    secondary2Label: 'Live Demo',
    showBreadcrumb: true,
    showLanguageMenu: true,
    showSummary: true,
    showPlayer: false,
    showNavigator: true,
  },
  render: (args) => html`
    <div style="width: 100%; min-height: 100vh; background: var(--color-bg, #fff); box-sizing: border-box;">
      <ds-case-view
        kicker=${args.kicker}
        title-text=${args.titleText}
        primary-label=${args.primaryLabel}
        secondary1-label=${args.secondary1Label}
        secondary2-label=${args.secondary2Label}
        show-breadcrumb=${args.showBreadcrumb ? 'true' : 'false'}
        show-language-menu=${args.showLanguageMenu ? 'true' : 'false'}
        show-summary=${args.showSummary ? 'true' : 'false'}
        show-player=${args.showPlayer ? 'true' : 'false'}
        show-navigator=${args.showNavigator ? 'true' : 'false'}>
        <ds-thumbnail
          slot="thumbnail"
          category="mobile"
          brand="apple"
          model="Apple iPhone 15"
          color="Natural Titanium"
          screen-image="https://picsum.photos/1000/620">
        </ds-thumbnail>

        <ds-summary slot="summary" title="Case Snapshot" subtitle="Structured metrics projected from parent shell.">
          <ds-metric-card slot="metrics" value="70%" title="Delivery Latency" subtitle="reduction"></ds-metric-card>
          <ds-metric-card slot="metrics" value="4.6x" title="Iteration Speed" subtitle="faster"></ds-metric-card>
          <ds-metric-card slot="metrics" value="99.9%" title="Route Stability" subtitle="uptime"></ds-metric-card>
        </ds-summary>

        <ds-audio-player
          slot="player"
          title="Case Narration"
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
        </ds-audio-player>

        ${unsafeHTML(mockBody)}

        <ds-case-navigator
          slot="navigator"
          previous-label="Previous"
          next-label="Next"
          current-label="Case 1 of 4">
        </ds-case-navigator>
      </ds-case-view>
    </div>
  `,
};

export const Default = {
  play: async ({ canvasElement, step }) => {
    const caseView = canvasElement.querySelector('ds-case-view');

    await step('Render header and article regions', async () => {
      const shadow = caseView.shadowRoot;
      const header = shadow.querySelector('ds-header');
      const article = shadow.querySelector('ds-article');
      expect(header).toBeTruthy();
      expect(article).toBeTruthy();
    });

    await step('Pass breadcrumb and article events through the template boundary', async () => {
      const onBreadcrumbHome = fn();
      const onArticleAction = fn();

      caseView.addEventListener('ds-breadcrumb-home', onBreadcrumbHome);
      caseView.addEventListener('ds-article-action', onArticleAction);

      const header = caseView.shadowRoot.querySelector('ds-header');
      const article = caseView.shadowRoot.querySelector('ds-article');

      header.dispatchEvent(new CustomEvent('ds-breadcrumb-home', { bubbles: true, composed: true }));
      article.dispatchEvent(new CustomEvent('ds-article-action', { detail: { action: 'primary' }, bubbles: true, composed: true }));

      expect(onBreadcrumbHome).toHaveBeenCalledTimes(1);
      expect(onArticleAction).toHaveBeenCalledTimes(1);
    });
  },
};

export const Minimal = {
  args: {
    showSummary: false,
    showPlayer: false,
    showNavigator: false,
    showLanguageMenu: false,
    secondary1Label: '',
    secondary2Label: '',
  },
};

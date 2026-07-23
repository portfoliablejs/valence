import { html } from 'lit';
import { expect } from 'storybook/test';
import './CaseReaderView.js';

// Import all required sub-component definitions
import '../molecules/Summary/Summary.js';
import '../molecules/AudioPlayer/AudioPlayer.js';
import '../molecules/CaseNavigator/CaseNavigator.js';
import '../atoms/MetricCard/MetricCard.js';

export default {
  title: 'Templates/CaseReaderView',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A structural Atomic Design Template orchestrating the two-column case study reader view. Integrates a hero sticky `<ds-thumbnail>` alongside the complete `<ds-article>` reading organism.',
      },
    },
  },
  argTypes: {
    /* ------------------------------------------------------------------
       1. Hero Thumbnail Controls
       ------------------------------------------------------------------ */
    caseId: {
      name: 'case-id',
      control: { type: 'text' },
      description: 'Unique identifier used for shared-element SPA View Transitions.',
      table: { category: 'Hero Thumbnail' },
    },
    category: {
      name: 'category',
      control: { type: 'select' },
      options: ['mobile', 'desktop', 'tablet', 'wearable'],
      table: { category: 'Hero Thumbnail' },
    },
    brand: { name: 'brand', control: { type: 'text' }, table: { category: 'Hero Thumbnail' } },
    model: { name: 'model', control: { type: 'text' }, table: { category: 'Hero Thumbnail' } },
    color: { name: 'color', control: { type: 'text' }, table: { category: 'Hero Thumbnail' } },
    screenImage: { name: 'screen-image', control: { type: 'text' }, table: { category: 'Hero Thumbnail' } },
    customOnly: { name: 'custom-only', control: { type: 'boolean' }, table: { category: 'Hero Thumbnail' } },

    /* ------------------------------------------------------------------
       2. Article Metadata & Action Controls
       ------------------------------------------------------------------ */
    kicker: { name: 'kicker', control: { type: 'text' }, table: { category: 'Article Metadata' } },
    titleText: { name: 'title-text', control: { type: 'text' }, table: { category: 'Article Metadata' } },
    primaryLabel: { name: 'primary-label', control: { type: 'text' }, table: { category: 'Article Actions' } },
    primaryIcon: { name: 'primary-icon', control: { type: 'text' }, table: { category: 'Article Actions' } },
    secondary1Label: { name: 'secondary1-label', control: { type: 'text' }, table: { category: 'Article Actions' } },
    secondary2Label: { name: 'secondary2-label', control: { type: 'text' }, table: { category: 'Article Actions' } },

    /* ------------------------------------------------------------------
       3. Article Visibility Flags
       ------------------------------------------------------------------ */
    showKicker: { name: 'show-kicker', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showTitle: { name: 'show-title', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showSocialShare: { name: 'show-social-share', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showSocialLinkedin: { name: 'show-social-linkedin', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showSocialX: { name: 'show-social-x', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showSocialFacebook: { name: 'show-social-facebook', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showActionPrimary: { name: 'show-action-primary', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showActionSecondary1: { name: 'show-action-secondary1', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showActionSecondary2: { name: 'show-action-secondary2', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showSummary: { name: 'show-summary', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showPlayer: { name: 'show-player', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showToc: { name: 'show-toc', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },
    showNavigator: { name: 'show-navigator', control: { type: 'boolean' }, table: { category: 'Article Visibility' } },

    /* ------------------------------------------------------------------
       4. Scroll Interaction Configuration
       ------------------------------------------------------------------ */
    scrollThreshold: {
      name: 'scroll-threshold',
      control: { type: 'number' },
      description: 'Scroll offset Y threshold (px) triggering the structural position shift.',
      table: { category: 'Scroll Interaction' },
    },
  },
  args: {
    caseId: 'holofante',
    category: 'mobile',
    brand: 'apple',
    model: 'Apple iPhone 13',
    color: 'Midnight',
    screenImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    customOnly: false,
    kicker: '2026 • HOLOFANTE R&D LAB',
    titleText: 'Agentic AI Design',
    primaryLabel: 'Pitch',
    primaryIcon: 'play-fill',
    secondary1Label: 'Repository',
    secondary2Label: 'Demo',
    showKicker: true,
    showTitle: true,
    showSocialShare: true,
    showSocialLinkedin: true,
    showSocialX: true,
    showSocialFacebook: true,
    showActionPrimary: true,
    showActionSecondary1: true,
    showActionSecondary2: true,
    showSummary: true,
    showPlayer: true,
    showToc: true,
    showNavigator: true,
    scrollThreshold: 100,
  },
  render: (args) => html`
    <ds-case-reader-view
      case-id="${args.caseId}"
      category="${args.category}"
      brand="${args.brand}"
      model="${args.model}"
      color="${args.color}"
      screen-image="${args.screenImage}"
      ?custom-only="${args.customOnly}"
      kicker="${args.kicker}"
      title-text="${args.titleText}"
      primary-label="${args.primaryLabel}"
      primary-icon="${args.primaryIcon}"
      secondary1-label="${args.secondary1Label}"
      secondary2-label="${args.secondary2Label}"
      show-kicker="${args.showKicker}"
      show-title="${args.showTitle}"
      show-social-share="${args.showSocialShare}"
      show-social-linkedin="${args.showSocialLinkedin}"
      show-social-x="${args.showSocialX}"
      show-social-facebook="${args.showSocialFacebook}"
      show-action-primary="${args.showActionPrimary}"
      show-action-secondary1="${args.showActionSecondary1}"
      show-action-secondary2="${args.showActionSecondary2}"
      show-summary="${args.showSummary}"
      show-player="${args.showPlayer}"
      show-toc="${args.showToc}"
      show-navigator="${args.showNavigator}"
      scroll-threshold="${args.scrollThreshold}"
    >
      <!-- SLOTTED KPI SUMMARY BLOCK -->
      <ds-summary
        slot="summary"
        text="Holofante is an agentic AI platform designed for automated UI orchestration. By leveraging web components and edge rendering, it delivers dynamic layout generation with zero runtime performance penalties."
      >
        <ds-metric-card value="+143%" label="Increase in session duration" variant="success"></ds-metric-card>
        <ds-metric-card value="US$ 5/mo" label="Fixed infrastructure cost"></ds-metric-card>
        <ds-metric-card value="0.9s" label="FCP Performance"></ds-metric-card>
        <ds-metric-card value="92/100" label="WCAG AA Compliance"></ds-metric-card>
      </ds-summary>

      <!-- SLOTTED AUDIO PLAYER BLOCK -->
      <ds-audio-player slot="player" duration="184" time="0" label-reader="Reader"></ds-audio-player>

      <!-- SLOTTED ARTICLE BODY COPY -->
      <h2 id="sec-architecture">Agentic AI System Architecture</h2>
      <p class="p1">
        Lorem ipsum dolor sit amet, <strong>consectetur bold text</strong> and <em>italicized emphasis</em>. You can also combine <mark>highlighted text</mark>, <del>strikethrough text</del>, and inline code like <code>const pipeline = new AIStream();</code>.
      </p>

      <h3 id="sec-execution">Execution Pipeline & Code Controls</h3>
      <p class="p1">
        Below is an example configuration file processed by our edge worker pipeline:
      </p>

<pre><code class="language-typescript">// TypeScript Generic Pipeline Configuration
export interface AgentConfig<T> {
  id: string;
  model: T;
  maxTokens: number;
  temperature: number;
}

export class AgentOrchestrator {
  public async initialize(): Promise<void> {
    console.log("Agentic pipeline initialized successfully.");
  }
}</code></pre>

      <h3 id="sec-metrics">Performance & Benchmarks</h3>
      <p class="p1">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <!-- SLOTTED FLOATING CASE NAVIGATOR DOCK -->
      <ds-case-navigator slot="navigator" current-index="1" total-cases="4"></ds-case-navigator>
    </ds-case-reader-view>
  `,
};

/* ==========================================================================
   STORIES
   ========================================================================= */

export const DefaultView = {
  play: async ({ canvasElement, step }) => {
    const template = canvasElement.querySelector('ds-case-reader-view');

    await step('Verify hero thumbnail renders inside host Shadow DOM', async () => {
      const thumbnail = template.shadowRoot.querySelector('ds-thumbnail');
      expect(thumbnail).toBeTruthy();
    });

    await step('Verify full ds-article organism is mounted with slotted sub-components', async () => {
      const article = template.shadowRoot.querySelector('ds-article');
      expect(article).toBeTruthy();
      expect(article.getAttribute('title-text')).toBe('Agentic AI Design');

      const summary = template.querySelector('ds-summary');
      const player = template.querySelector('ds-audio-player');
      const navigator = template.querySelector('ds-case-navigator');

      expect(summary).toBeTruthy();
      expect(player).toBeTruthy();
      expect(navigator).toBeTruthy();
    });
  },
};
import { html } from 'lit';
import { expect, fn } from 'storybook/test';
import './PlayerView.js';
import { DEVICE_CATALOG } from '../../atoms/Thumbnail/Thumbnail.js';

const DEFAULT_VIDEO_SRC = 'https://cdn.pixabay.com/video/2023/07/12/171274-845168276_tiny.mp4';
const DEFAULT_SUBTITLE_SRC = 'data:text/vtt,WEBVTT%0A%0A00:00.000%20--%3E%2000:04.000%0APlayerView%20demo%20captions%0A%0A00:04.000%20--%3E%2000:08.000%0ASeek%20and%20play%20controls%20stay%20in%20sync';
const CATEGORY_OPTIONS = Object.keys(DEVICE_CATALOG || {});

export default {
  title: 'Templates/PlayerView [v1.1.0]',
  component: 'ds-player-view',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Video-first template that composes ds-thumbnail, a viewport-top ds-seek-bar, and ds-video-controls into a single playback surface.',
      },
    },
  },
  argTypes: {
    videoSrc: { control: 'text', name: 'video-src', table: { category: 'Media' } },
    subtitleSrc: { control: 'text', name: 'subtitle-src', table: { category: 'Media' } },
    caseTitle: { control: 'text', name: 'case-title', table: { category: 'Header Breadcrumb' } },
    videoTitle: { control: 'text', name: 'video-title', table: { category: 'Header Breadcrumb' } },
    muted: { control: 'boolean', table: { category: 'Media' } },
    autoplay: { control: 'boolean', table: { category: 'Media' } },
    loop: { control: 'boolean', table: { category: 'Media' } },
    showControls: { control: 'boolean', name: 'show-controls', table: { category: 'Layout' } },
    stageGap: { control: 'text', name: 'stage-gap', table: { category: 'Layout' } },
    thumbnailWidth: { control: 'text', name: 'thumbnail-width', table: { category: 'Layout' } },
    thumbnailHeight: { control: 'text', name: 'thumbnail-height', table: { category: 'Layout' } },
    controlsWidth: { control: 'text', name: 'controls-width', table: { category: 'Layout' } },
    viewportPadding: { control: 'text', name: 'viewport-padding', table: { category: 'Layout' } },
    category: {
      control: { type: 'select' },
      options: CATEGORY_OPTIONS,
      description: 'Thumbnail contract API: device category.',
      table: { category: 'Thumbnail Contract API' }
    },
    brand: {
      control: 'text',
      description: 'Thumbnail contract API: device brand.',
      table: { category: 'Thumbnail Contract API' }
    },
    model: {
      control: 'text',
      description: 'Thumbnail contract API: device model.',
      table: { category: 'Thumbnail Contract API' }
    },
    color: {
      control: 'text',
      description: 'Thumbnail contract API: device color/variant.',
      table: { category: 'Thumbnail Contract API' }
    },
    deviceSrc: {
      control: 'text',
      name: 'device-src',
      description: 'Thumbnail contract API: direct device frame URL override.',
      table: { category: 'Thumbnail Contract API' }
    },
    customOnly: {
      control: 'boolean',
      name: 'custom-only',
      description: 'Thumbnail contract API: hide device frame and render media only.',
      table: { category: 'Thumbnail Contract API' }
    },
    onClose: { action: 'ds-video-close', table: { category: 'Events' } },
    onEnded: { action: 'ds-video-ended', table: { category: 'Events' } },
  },
  args: {
    videoSrc: DEFAULT_VIDEO_SRC,
    subtitleSrc: DEFAULT_SUBTITLE_SRC,
    caseTitle: 'Case Study A',
    videoTitle: 'This Video (PlayerView)',
    muted: false,
    autoplay: false,
    loop: false,
    showControls: true,
    stageGap: 'clamp(10px, 1.6vw, 18px)',
    thumbnailWidth: '390px',
    thumbnailHeight: 'min(72vh, 600px)',
    controlsWidth: '220px',
    viewportPadding: 'clamp(64px, 8vh, 96px)',
    category: 'mobile',
    brand: 'apple',
    model: 'Apple iPhone 13',
    color: 'Midnight',
    deviceSrc: '',
    customOnly: false,
  },
  render: (args) => html`
    <ds-player-view
      video-src="${args.videoSrc}"
      subtitle-src="${args.subtitleSrc}"
      case-title="${args.caseTitle}"
      video-title="${args.videoTitle}"
      ?muted=${args.muted}
      ?autoplay=${args.autoplay}
      ?loop=${args.loop}
      ?show-controls=${args.showControls}
      stage-gap="${args.stageGap}"
      thumbnail-width="${args.thumbnailWidth}"
      thumbnail-height="${args.thumbnailHeight}"
      controls-width="${args.controlsWidth}"
      viewport-padding="${args.viewportPadding}"
      category="${args.category}"
      brand="${args.brand}"
      model="${args.model}"
      color="${args.color}"
      device-src="${args.deviceSrc}"
      ?custom-only=${args.customOnly}
      @ds-video-close=${args.onClose}
      @ds-video-ended=${args.onEnded}
    ></ds-player-view>
  `,
};

export const Default = {
  play: async ({ canvasElement, step }) => {
    const playerView = canvasElement.querySelector('ds-player-view');

    await step('Render the top seek bar and thumbnail video surface', async () => {
      const shadow = playerView.shadowRoot;
      const header = shadow.querySelector('ds-header');
      expect(shadow.querySelector('ds-seek-bar')).toBeTruthy();
      expect(shadow.querySelector('ds-thumbnail')).toBeTruthy();
      expect(shadow.querySelector('ds-video-controls')).toBeTruthy();
      expect(header).toBeTruthy();
    });

    await step('Show breadcrumb while keeping accessibility menu available', async () => {
      const header = playerView.shadowRoot.querySelector('ds-header');
      const navigationRegion = header.shadowRoot.querySelector('.navigation-region');
      const breadcrumb = header.shadowRoot.querySelector('ds-breadcrumb');
      const navigation = header.shadowRoot.querySelector('ds-navigation-menu');
      const accessibilityButton = navigation.shadowRoot.querySelector('.accessibility-btn');
      expect(navigationRegion.hidden).toBe(false);
      expect(Array.isArray(breadcrumb.items)).toBe(true);
      expect(breadcrumb.items).toHaveLength(3);
      expect(breadcrumb.items[2].label).toBe('This Video (PlayerView)');
      expect(accessibilityButton).toBeTruthy();
    });

    await step('Keep captions available when a subtitle track is present', async () => {
      const controls = playerView.shadowRoot.querySelector('ds-video-controls');
      expect(controls.getAttribute('show-cc')).toBe('true');
    });
  },
};

export const NoSubtitlesHideCC = {
  args: {
    subtitleSrc: '',
  },
  play: async ({ canvasElement, step }) => {
    const playerView = canvasElement.querySelector('ds-player-view');

    await step('Hide CC controls when no subtitle source exists', async () => {
      const controls = playerView.shadowRoot.querySelector('ds-video-controls');
      const ccWrapper = controls.shadowRoot.querySelector('.cc-wrapper');
      expect(controls.getAttribute('show-cc')).toBe('false');
      expect(ccWrapper.hidden).toBe(true);
    });
  },
};

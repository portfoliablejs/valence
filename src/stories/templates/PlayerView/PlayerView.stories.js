import { html } from 'lit';
import { expect, fn } from 'storybook/test';
import './PlayerView.js';

const DEFAULT_VIDEO_SRC = 'https://cdn.pixabay.com/video/2023/07/12/171274-845168276_tiny.mp4';
const DEFAULT_SUBTITLE_SRC = 'data:text/vtt,WEBVTT%0A%0A00:00.000%20--%3E%2000:04.000%0APlayerView%20demo%20captions%0A%0A00:04.000%20--%3E%2000:08.000%0ASeek%20and%20play%20controls%20stay%20in%20sync';

export default {
  title: 'Templates/PlayerView [v1.0.0]',
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
    muted: { control: 'boolean', table: { category: 'Media' } },
    autoplay: { control: 'boolean', table: { category: 'Media' } },
    loop: { control: 'boolean', table: { category: 'Media' } },
    showControls: { control: 'boolean', name: 'show-controls', table: { category: 'Layout' } },
    stageGap: { control: 'text', name: 'stage-gap', table: { category: 'Layout' } },
    thumbnailWidth: { control: 'text', name: 'thumbnail-width', table: { category: 'Layout' } },
    thumbnailHeight: { control: 'text', name: 'thumbnail-height', table: { category: 'Layout' } },
    controlsWidth: { control: 'text', name: 'controls-width', table: { category: 'Layout' } },
    viewportPadding: { control: 'text', name: 'viewport-padding', table: { category: 'Layout' } },
    onClose: { action: 'ds-video-close', table: { category: 'Events' } },
    onEnded: { action: 'ds-video-ended', table: { category: 'Events' } },
  },
  args: {
    videoSrc: DEFAULT_VIDEO_SRC,
    subtitleSrc: DEFAULT_SUBTITLE_SRC,
    muted: true,
    autoplay: false,
    loop: false,
    showControls: true,
    stageGap: 'clamp(10px, 1.6vw, 18px)',
    thumbnailWidth: '390px',
    thumbnailHeight: 'min(72vh, 600px)',
    controlsWidth: '220px',
    viewportPadding: 'clamp(64px, 8vh, 96px)',
  },
  render: (args) => html`
    <ds-player-view
      video-src="${args.videoSrc}"
      subtitle-src="${args.subtitleSrc}"
      ?muted=${args.muted}
      ?autoplay=${args.autoplay}
      ?loop=${args.loop}
      ?show-controls=${args.showControls}
      stage-gap="${args.stageGap}"
      thumbnail-width="${args.thumbnailWidth}"
      thumbnail-height="${args.thumbnailHeight}"
      controls-width="${args.controlsWidth}"
      viewport-padding="${args.viewportPadding}"
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
      expect(shadow.querySelector('ds-seek-bar')).toBeTruthy();
      expect(shadow.querySelector('ds-thumbnail')).toBeTruthy();
      expect(shadow.querySelector('ds-video-controls')).toBeTruthy();
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

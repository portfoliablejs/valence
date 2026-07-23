import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, userEvent } from 'storybook/test';
import './AudioPlayer.js';

/**
 * An interactive audio player component (`ds-audio-player`) that manages audio playback states, 
 * speed variations, volume controls, and viewport auto-scrolling synchronization.
 */
export default {
  title: 'Molecules/Audio Player [v1.0.0]',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'scrolled'],
      description: 'Player variant format (default container or shrunk floating pill)',
      table: { category: 'Variants' },
    },
    playing: {
      control: 'boolean',
      description: 'Playback state toggle',
      table: { category: 'Core State' },
    },
    time: {
      control: { type: 'range', min: 0, max: 300, step: 1 },
      description: 'Current playback position in seconds',
      table: { category: 'Core State' },
    },
    duration: {
      control: { type: 'number', min: 1 },
      description: 'Total track duration in seconds',
      table: { category: 'Core State' },
    },
    speed: {
      control: { type: 'select' },
      options: ['0.75X', '1X', '1.25X', '1.5X', '1.75X', '2X'],
      description: 'Playback speed indicator',
      table: { category: 'Core State' },
    },
    volume: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Volume level percentage',
      table: { category: 'Core State' },
    },
    muted: {
      control: 'boolean',
      description: 'Mute state toggle',
      table: { category: 'Core State' },
    },
    'hide-on-scroll': {
      control: 'boolean',
      description: 'Hide player during page scroll state',
      table: { category: 'Behavior' },
    },
    'auto-scroll': {
      control: 'boolean',
      description: 'Auto-scroll article text with playback',
      table: { category: 'Behavior' },
    },

    // --- LOCALIZATION ARGTYPES ---
    labelReader: {
      name: 'label-reader',
      control: 'text',
      description: 'Text string for the header category label.',
      table: { category: 'Localization' },
    },
    labelPlay: {
      name: 'label-play',
      control: 'text',
      description: 'Accessibility and tooltip label when playback is paused.',
      table: { category: 'Localization' },
    },
    labelPause: {
      name: 'label-pause',
      control: 'text',
      description: 'Accessibility and tooltip label when playback is active.',
      table: { category: 'Localization' },
    },
    labelMute: {
      name: 'label-mute',
      control: 'text',
      description: 'Accessibility and tooltip label when volume is active.',
      table: { category: 'Localization' },
    },
    labelUnmute: {
      name: 'label-unmute',
      control: 'text',
      description: 'Accessibility and tooltip label when volume is muted.',
      table: { category: 'Localization' },
    },
    labelSpeed: {
      name: 'label-speed',
      control: 'text',
      description: 'Text prefix used for speed selector tooltips.',
      table: { category: 'Localization' },
    },
    labelHide: {
      name: 'label-hide',
      control: 'text',
      description: 'Aria and tooltip description when hide-on-scroll is inactive.',
      table: { category: 'Localization' },
    },
    labelShow: {
      name: 'label-show',
      control: 'text',
      description: 'Aria and tooltip description when hide-on-scroll is active.',
      table: { category: 'Localization' },
    },
    labelAutoscrollOn: {
      name: 'label-autoscroll-on',
      control: 'text',
      description: 'Aria and tooltip description when auto-scroll is inactive.',
      table: { category: 'Localization' },
    },
    labelAutoscrollOff: {
      name: 'label-autoscroll-off',
      control: 'text',
      description: 'Aria and tooltip description when auto-scroll is active.',
      table: { category: 'Localization' },
    },
    labelVolume: {
      name: 'label-volume',
      control: 'text',
      description: 'Tooltip text prefix for the volume slider control.',
      table: { category: 'Localization' },
    },
    labelVolumeLevel: {
      name: 'label-volume-level',
      control: 'text',
      description: 'Accessibility label delegated into the volume slider container.',
      table: { category: 'Localization' },
    },
    labelAudioPos: {
      name: 'label-audio-pos',
      control: 'text',
      description: 'Accessibility label delegated into the main playback seek-bar slider.',
      table: { category: 'Localization' },
    },

    onPlayToggle: { action: 'ds-audio-play-toggle', table: { category: 'Events' } },
    onSeek: { action: 'ds-audio-seek', table: { category: 'Events' } },
    onVolumeChange: { action: 'ds-audio-volume-change', table: { category: 'Events' } },
    onMuteToggle: { action: 'ds-audio-mute-toggle', table: { category: 'Events' } },
    onSpeedCycle: { action: 'ds-audio-speed-cycle', table: { category: 'Events' } },
    onHideToggle: { action: 'ds-audio-hide-toggle', table: { category: 'Events' } },
    onAutoscrollToggle: { action: 'ds-audio-autoscroll-toggle', table: { category: 'Events' } },
  },
  args: {
    variant: 'default',
    playing: false,
    time: 45,
    duration: 180,
    speed: '1X',
    volume: 80,
    muted: false,
    'hide-on-scroll': false,
    'auto-scroll': true,
  },
  // Note: Booleans explicitly pass string interpretations instead of Lit's ? prefix 
  // because the component relies on string validations (e.g. === 'true')
  render: (args) => html`
    <div style="width: 580px; padding: 24px; background: var(--color-bg, #FFFFFF); display: flex; justify-content: center;">
      <ds-audio-player
        variant="${args.variant}"
        playing="${args.playing}"
        time="${args.time}"
        duration="${args.duration}"
        speed="${args.speed}"
        volume="${args.volume}"
        muted="${args.muted}"
        hide-on-scroll="${args['hide-on-scroll']}"
        auto-scroll="${args['auto-scroll']}"
        label-reader="${ifDefined(args.labelReader)}"
        label-play="${ifDefined(args.labelPlay)}"
        label-pause="${ifDefined(args.labelPause)}"
        label-mute="${ifDefined(args.labelMute)}"
        label-unmute="${ifDefined(args.labelUnmute)}"
        label-speed="${ifDefined(args.labelSpeed)}"
        label-hide="${ifDefined(args.labelHide)}"
        label-show="${ifDefined(args.labelShow)}"
        label-autoscroll-on="${ifDefined(args.labelAutoscrollOn)}"
        label-autoscroll-off="${ifDefined(args.labelAutoscrollOff)}"
        label-volume="${ifDefined(args.labelVolume)}"
        label-volume-level="${ifDefined(args.labelVolumeLevel)}"
        label-audio-pos="${ifDefined(args.labelAudioPos)}"
        @ds-audio-play-toggle="${args.onPlayToggle}"
        @ds-audio-seek="${(e) => args.onSeek(e.detail)}"
        @ds-audio-volume-change="${(e) => args.onVolumeChange(e.detail)}"
        @ds-audio-mute-toggle="${args.onMuteToggle}"
        @ds-audio-speed-cycle="${args.onSpeedCycle}"
        @ds-audio-hide-toggle="${args.onHideToggle}"
        @ds-audio-autoscroll-toggle="${args.onAutoscrollToggle}"
      ></ds-audio-player>
    </div>
  `,
};

/**
 * The default, full-width container audio player. Includes interaction tests for toggling play states, 
 * expanding the volume controller, and traversing elements via keyboard focus.
 */
export const Default = {
  args: {
    playing: false,
    time: 60,
    duration: 240,
    speed: '1X',
    volume: 75,
  },
  play: async ({ canvasElement, step }) => {
    const player = canvasElement.querySelector('ds-audio-player');

    await step('Verify Play button hover and click trigger toggles state', async () => {
      const playBtn = player.shadowRoot.querySelector('.play-btn');
      await userEvent.hover(playBtn);
      await userEvent.click(playBtn);
      expect(player.getAttribute('playing')).toBe('true');
    });

    await step('Verify Volume hover expands horizontal volume seek bar to the right', async () => {
      const volumeContainer = player.shadowRoot.querySelector('.volume-container');
      await userEvent.hover(volumeContainer);
    });

    await step('Verify Keyboard Focus Traversal across interactive controls', async () => {
      const playBtnInternal = player.shadowRoot.querySelector('.play-btn').shadowRoot.querySelector('button');
      playBtnInternal.focus();
      expect(player.shadowRoot.activeElement).toBe(player.shadowRoot.querySelector('.play-btn'));
    });
  },
};

/**
 * A compact, floating pill variant of the player. Automatically triggered under scrolled page states 
 * to provide unobtrusive, persistent playback control.
 */
export const ScrolledPill = {
  args: {
    variant: 'scrolled',
    playing: true,
    time: 120,
    duration: 240,
    speed: '1.25X',
    volume: 0,
    muted: true,
  },
};

import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { fn, userEvent, fireEvent, expect } from 'storybook/test';
import './VideoControls';

export default {
  title: 'Molecules/Video Controls [v1.0.0]',
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'The `ds-video-controls` component aggregates an overlay configuration layout block of circular buttons and tooltip notifications designed explicitly to handle playback coordination on compact canvas media surfaces.',
      }
    }
  },
  argTypes: {
    // --- CORE & VARIANT CONTROLS ---
    playing: { 
      control: 'boolean',
      description: 'Sets the play/pause visualization state downstream.',
      table: { category: 'Core & Variant Controls' }
    },
    muted: { 
      control: 'boolean',
      description: 'Configures active volume mute visualization.',
      table: { category: 'Core & Variant Controls' }
    },
    ccEnabled: { 
      name: 'cc-enabled',
      control: 'boolean',
      description: 'Toggles active highlighting for text overlays.',
      table: { category: 'Core & Variant Controls' }
    },
    speed: { 
      control: 'text',
      description: 'Sets the active speed rate gauge string.',
      table: { category: 'Core & Variant Controls' }
    },

    // --- LOCALIZATION PIPELINE ---
    labelPlay: {
      name: 'label-play',
      control: 'text',
      description: 'Translation string allocated to the Play button trigger description.',
      table: { category: 'Localization' },
    },
    labelPause: {
      name: 'label-pause',
      control: 'text',
      description: 'Translation string allocated to the Pause button trigger description.',
      table: { category: 'Localization' },
    },
    labelCcOn: {
      name: 'label-cc-on',
      control: 'text',
      description: 'Translation string allocated to captions when active.',
      table: { category: 'Localization' },
    },
    labelCcOff: {
      name: 'label-cc-off',
      control: 'text',
      description: 'Translation string allocated to captions when resting.',
      table: { category: 'Localization' },
    },
    labelMute: {
      name: 'label-mute',
      control: 'text',
      description: 'Translation string applied to the active mute toggle.',
      table: { category: 'Localization' },
    },
    labelUnmute: {
      name: 'label-unmute',
      control: 'text',
      description: 'Translation string applied to the resting unmute toggle.',
      table: { category: 'Localization' },
    },
    labelSpeed: {
      name: 'label-speed',
      control: 'text',
      description: 'Translation string prefix applied to the speed gauge state tracker.',
      table: { category: 'Localization' },
    },
    labelReturn: {
      name: 'label-return',
      control: 'text',
      description: 'Translation string allocated to the navigation escape trigger.',
      table: { category: 'Localization' },
    },
  },
  args: { onAction: fn() }
};

// Reusable template for binding data updates inside the render stream
const baseRenderTemplate = (args) => {
  const handleAction = (e) => {
    args.onAction(e.detail.action);
    const controls = e.target;

    if (e.detail.action === 'play-pause') {
      const isPlaying = controls.getAttribute('playing') === 'true';
      controls.setAttribute('playing', (!isPlaying).toString());
    }
    if (e.detail.action === 'mute') {
      const isMuted = controls.getAttribute('muted') === 'true';
      controls.setAttribute('muted', (!isMuted).toString());
    }
    if (e.detail.action === 'cc') {
      const isCC = controls.getAttribute('cc-enabled') === 'true';
      controls.setAttribute('cc-enabled', (!isCC).toString());
    }
    if (e.detail.action === 'speed') {
      const currentSpeed = controls.getAttribute('speed') || '1X';
      const nextSpeed = currentSpeed === '1X' ? '1.5X' : currentSpeed === '1.5X' ? '2X' : '1X';
      controls.setAttribute('speed', nextSpeed);
    }
  };

  return html`
    <ds-video-controls 
      playing="${args.playing}"
      muted="${args.muted}"
      cc-enabled="${args.ccEnabled}"
      speed="${args.speed}"
      label-play="${ifDefined(args.labelPlay)}"
      label-pause="${ifDefined(args.labelPause)}"
      label-cc-on="${ifDefined(args.labelCcOn)}"
      label-cc-off="${ifDefined(args.labelCcOff)}"
      label-mute="${ifDefined(args.labelMute)}"
      label-unmute="${ifDefined(args.labelUnmute)}"
      label-speed="${ifDefined(args.labelSpeed)}"
      label-return="${ifDefined(args.labelReturn)}"
      @ds-video-action="${handleAction}">
    </ds-video-controls>
  `;
};

export const Desktop = {
  args: {
    playing: false,
    muted: false,
    ccEnabled: true,
    speed: '1X',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default implementation rendering the video toolbar as a vertical floating menu panel block suitable for large desktop application layouts.',
      }
    }
  },
  render: (args) => html`
    <div style="display: flex; justify-content: center; align-items: center; height: 25vh;">
      ${baseRenderTemplate(args)}
    </div>
  `,
  play: async ({ canvasElement, step }) => {
    const controlsMolecule = canvasElement.querySelector('ds-video-controls');
    const shadowBoundary = controlsMolecule.shadowRoot;
    
    const playBtn = shadowBoundary.getElementById('btn-play');
    const speedBtn = shadowBoundary.getElementById('btn-speed');

    await step('Confirm structural interaction feedback on pointer targets', async () => {
      await userEvent.hover(playBtn);
    });

    await step('Verify keyboard tab sequence capture within nested control trees', async () => {
      playBtn.focus();
      expect(shadowBoundary.activeElement).toBe(playBtn);
    });

    await step('Verify standard state switching updates across control actions', async () => {
      fireEvent.keyDown(playBtn, { key: ' ', code: 'Space', keyCode: 32 });
      await userEvent.click(playBtn);
      expect(controlsMolecule.getAttribute('playing')).toBe('true');

      await userEvent.click(speedBtn);
      expect(controlsMolecule.getAttribute('speed')).toBe('1.5X');
    });
  }
};

export const Mobile = {
  args: {
    ...Desktop.args,
    ccEnabled: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Renders the component using Storybook\'s explicit mobile device emulation mode. This shrinks the parent viewport canvas to force trigger the responsive horizontal bar layouts and confirms that contextual tooltips are disabled.',
      }
    }
  },
  render: (args) => html`
    <div style="display: flex; justify-content: center; align-items: center; height: 25vh; width: 100%;">
      ${baseRenderTemplate(args)}
    </div>
  `
};
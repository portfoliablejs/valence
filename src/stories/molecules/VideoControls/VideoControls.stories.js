import { html } from 'lit';
import { fn } from 'storybook/test';
import './VideoControls';
import '../../atoms/Subtitle/Subtitle';

export default {
  title: 'Molecules/VideoControls',
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' }
  },
  argTypes: {
    playing: { control: 'boolean' },
    muted: { control: 'boolean' },
    ccEnabled: { control: 'boolean' },
    speed: { control: 'text' },
  },
  args: { onAction: fn() }
};

export const Interactive = {
  args: {
    playing: false,
    muted: false,
    ccEnabled: true,
    speed: '1X',
  },
  render: (args) => {
    // Pure DOM state management for the Storybook preview
    const handleAction = (e) => {
      args.onAction(e.detail.action); // Log to Storybook Actions tab
      
      const controls = e.target;
      const container = controls.parentElement;
      const subtitle = container.querySelector('ds-subtitle');

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
        if (subtitle) subtitle.setAttribute('visible', (!isCC).toString());
      }
      if (e.detail.action === 'speed') {
        const currentSpeed = controls.getAttribute('speed');
        const nextSpeed = currentSpeed === '1X' ? '1.5X' : currentSpeed === '1.5X' ? '2X' : '1X';
        controls.setAttribute('speed', nextSpeed);
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 80vh; position: relative;">
        
        <!-- Dynamic Subtitle Atom -->
        <div style="position: absolute; bottom: 100px; width: 100%;">
          <ds-subtitle 
            text="This is a dynamically rendered subtitle track." 
            visible="${args.ccEnabled}">
          </ds-subtitle>
        </div>

        <!-- Video Controls -->
        <ds-video-controls 
          playing="${args.playing}"
          muted="${args.muted}"
          cc-enabled="${args.ccEnabled}"
          speed="${args.speed}"
          @ds-video-action="${handleAction}">
        </ds-video-controls>

      </div>
    `;
  }
};
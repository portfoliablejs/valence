// src/stories/organisms/VideoPlayer/VideoPlayer.stories.js
import { html } from 'lit';
import { fn } from 'storybook/test';
import './VideoPlayer.js';

// Mock case data, similar to what App.js would provide
const mockCaseData = {
    id: 'holofante',
    title: { en: 'Agentic AI Design' },
    // Using a public, CORS-friendly sample video for Storybook
    videoSrc: { en: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }, 
    frameSrc: 'https://www.schimanko.dev/assets/frames/holofante.avif',
};

export default {
  title: 'Organisms/VideoPlayer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    visible: { control: 'boolean' },
  },
  args: {
    onClose: fn(),
    onEnded: fn(),
  },
  render: (args) => {
    // This script simulates how App.js would interact with the component
    setTimeout(() => {
      const player = document.querySelector('ds-video-player');
      if (player) {
        player.caseData = mockCaseData;
        if (args.visible) {
          player.play();
        } else {
          player.pause();
        }
      }
    }, 0);

    // *** THE FIX IS HERE ***
    // We create a container with a defined height to ensure the Storybook iframe is not collapsed.
    // The position: fixed player will correctly overlay this container.
    return html`
      <div style="position: relative; height: 100vh; background: #333; display: flex; align-items: center; justify-content: center; color: #666; font-family: sans-serif;">
        <p>Application content is behind the player...</p>
        
        <ds-video-player
          ?visible="${args.visible}"
          @ds-video-close="${args.onClose}"
          @ds-video-ended="${args.onEnded}"
        ></ds-video-player>
      </div>
    `;
  },
};

export const Default = {
  args: {
    visible: true,
  },
};
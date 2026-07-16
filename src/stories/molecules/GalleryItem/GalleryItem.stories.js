// src/stories/molecules/GalleryItem/GalleryItem.stories.js
import { html } from 'lit';
import { fn } from 'storybook/test';
import './GalleryItem';

export default {
  title: 'Molecules/GalleryItem',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    shortDesc: { control: 'text' },
    readTime: { control: 'text' },
    aspectRatio: {
      control: { type: 'select' },
      options: ['', '1:1', '16:9', '4:3'],
      description: 'Optional. Defaults to portrait if not set.',
    },
    isProtected: { control: 'boolean' },
    isUnlocked: { control: 'boolean' },
    hasVideo: { control: 'boolean' },
    hasRepo: { control: 'boolean' },
    hasLive: { control: 'boolean' },
  },
  args: { onSelect: fn() },
  render: (args) => html`
      <div style="padding: 40px; display: flex; justify-content: center; background: var(--color-bg); height: 600px; align-items: center;">
        <ds-gallery-item 
          style="--device-h-gallery: 450px;" 
          title="${args.title}"
          short-desc="${args.shortDesc}"
          read-time="${args.readTime}"
          thumb-src="/holofante.avif"
          aspect-ratio="${args.aspectRatio}"
          ?is-protected="${args.isProtected}"
          ?is-unlocked="${args.isUnlocked}"
          ?has-video="${args.hasVideo}"
          ?has-repo="${args.hasRepo}"
          ?has-live="${args.hasLive}"
          @ds-case-select="${args.onSelect}">
        </ds-gallery-item>
      </div>
    `,
};

export const DefaultPortrait = {
  args: {
    title: 'Agentic AI Design',
    shortDesc: 'A project with a default portrait aspect ratio.',
    readTime: '3 min',
    aspectRatio: '',
    hasVideo: true,
    hasRepo: true,
    hasLive: true,
    isProtected: false,
    isUnlocked: false,
  },
};

export const SquareFrame = {
  args: {
    title: 'Square Project',
    shortDesc: 'A project best viewed in a 1:1 aspect ratio.',
    readTime: '2 min',
    aspectRatio: '1:1',
    hasVideo: false,
    hasRepo: true,
    hasLive: false,
    isProtected: false,
    isUnlocked: false,
  },
};

export const Protected = {
  args: {
    title: 'Top Secret Project',
    shortDesc: 'This content is protected.',
    readTime: '1 min',
    aspectRatio: '16:9',
    hasVideo: false,
    hasRepo: false,
    hasLive: false,
    isProtected: true,
    isUnlocked: false,
  },
};

export const Unlocked = {
  args: {
    title: 'Top Secret Project',
    shortDesc: 'This content is now unlocked.',
    readTime: '1 min',
    aspectRatio: '16:9',
    hasVideo: true,
    hasRepo: true,
    hasLive: false,
    isProtected: true,
    isUnlocked: true,
  },
};
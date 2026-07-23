// src/stories/organisms/Gallery/Gallery.stories.js
import { html } from 'lit';
import { expect, fireEvent, fn } from 'storybook/test';
import './Gallery';
import '../../molecules/GalleryItem/GalleryItem';

export default {
  title: 'Organisms/Gallery [v1.0.0]',
  component: 'ds-gallery',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The `ds-gallery` organism renders a generated row of `ds-gallery-item` cards and lets the user drag the strip horizontally with a soft, Apple-like overscroll feel. Use `item-count` to control how many gallery items are rendered, with five items as the default.',
      },
    },
  },
  argTypes: {
    engine: {
      name: 'engine',
      control: 'text',
      description: 'Motion preset used for drag follow, overscroll, and edge-return timing.',
      table: {
        category: 'Component: Motion',
        defaultValue: { summary: 'minimal' },
      },
    },
    itemCount: {
      name: 'item-count',
      control: { type: 'range', min: 1, max: 8, step: 1 },
      description: 'Controls how many GalleryItem cards are rendered by the gallery.',
      table: {
        category: 'Component: Core Controls',
        defaultValue: { summary: '5' },
      },
    },
    itemGap: {
      name: 'item-gap',
      control: 'text',
      description: 'Horizontal gap between gallery items.',
      table: {
        category: 'Component: Layout',
        defaultValue: { summary: '100px' },
      },
    },
    onCaseSelect: {
      action: 'ds-case-select',
      description: 'Fires when a generated GalleryItem thumbnail is selected.',
      table: { category: 'Events' },
    },
  },
  args: {
    engine: 'minimal',
    itemCount: 5,
    itemGap: '100px',
    onCaseSelect: fn(),
  },
  render: (args) => html`
    <div style="min-height: 100vh; width: 100%; padding: 0 50px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; background: transparent;">
      <div style="width: 100%;">
        <ds-gallery
          style="width: 100%; --gallery-item-gap: ${args.itemGap};"
          .engine=${args.engine}
          .itemCount=${args.itemCount}
          @ds-case-select=${args.onCaseSelect}
        ></ds-gallery>
      </div>
    </div>
  `,
};

export const Default = {
  parameters: {
    docs: {
      description: {
        story: 'The default gallery renders five generated GalleryItem cards and keeps the strip flush without any outer padding.',
      },
    },
  },
  play: async ({ canvasElement, args, step }) => {
    const gallery = canvasElement.querySelector('ds-gallery');

    await step('Render the default five GalleryItem cards', async () => {
      expect(gallery).toBeTruthy();
      expect(gallery.shadowRoot.querySelectorAll('ds-gallery-item').length).toBe(5);
    });

    await step('Bubble a selection event from the first item', async () => {
      const firstItem = gallery.shadowRoot.querySelector('ds-gallery-item');
      const thumb = firstItem.shadowRoot.querySelector('.case-thumb-wrapper');
      fireEvent.click(thumb);
      expect(args.onCaseSelect).toHaveBeenCalled();
    });

    await step('Support arrow and enter navigation from the gallery viewport', async () => {
      const viewport = gallery.shadowRoot.querySelector('.gallery-viewport');
      viewport.focus();
      fireEvent.keyDown(viewport, { key: 'ArrowRight' });
      expect(gallery.shadowRoot.activeElement?.shadowRoot?.activeElement || gallery.shadowRoot.activeElement).toBeTruthy();
      fireEvent.keyDown(viewport, { key: 'Enter' });
    });
  },
};

export const ThreeItems = {
  args: {
    itemCount: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'A compact gallery variant that proves the item-count prop can reduce the row to three cards.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const gallery = canvasElement.querySelector('ds-gallery');

    await step('Render only three generated items', async () => {
      expect(gallery.shadowRoot.querySelectorAll('ds-gallery-item').length).toBe(3);
    });
  },
};

export const EightItems = {
  args: {
    itemCount: 8,
  },
  parameters: {
    docs: {
      description: {
        story: 'An extended gallery that fills the track with the full internal item pool and confirms the generated cards scale cleanly.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const gallery = canvasElement.querySelector('ds-gallery');

    await step('Render the full eight-item pool', async () => {
      expect(gallery.shadowRoot.querySelectorAll('ds-gallery-item').length).toBe(8);
    });
  },
};

export const SoftEdgeDrag = {
  args: {
    itemCount: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exercises the drag physics by pulling past the leading edge and verifying the overscroll stays restrained before settling back into place.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const gallery = canvasElement.querySelector('ds-gallery');
    const viewport = gallery.shadowRoot.querySelector('.gallery-viewport');
    const track = gallery.shadowRoot.querySelector('.gallery-track');

    await step('Pull the gallery beyond the left edge', async () => {
      fireEvent.pointerDown(viewport, { button: 0, pointerId: 1, clientX: 120, clientY: 120 });
      fireEvent.pointerMove(window, { pointerId: 1, clientX: 380, clientY: 120 });
      expect(track.style.transform).not.toBe('translate3d(0px, 0, 0)');
      expect(track.style.transform).toContain('px');
      fireEvent.pointerUp(window, { pointerId: 1 });
    });

    await step('Snap the gallery back to the resting position', async () => {
      expect(track.style.transform).toBe('translate3d(0px, 0, 0)');
    });
  },
};
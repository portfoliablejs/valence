import { html } from 'lit';
import { expect } from 'storybook/test';
import { useArgs } from 'storybook/preview-api';
import { DEVICE_CATALOG } from './Thumbnail.js';
import './Thumbnail.js';

export default {
  title: 'Atoms/Thumbnail [v1.1.0]',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prototype thumbnail frame that renders `screen-image` or `screen-video` beneath the device frame layer. If both are provided, `screen-image` takes precedence. Includes a `custom-only` fallback to cancel the frame entirely.',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const [args, updateArgs] = useArgs();

      // Dynamically sync Storybook Controls options with DEVICE_CATALOG
      const categoryKeys = Object.keys(DEVICE_CATALOG);
      const category = categoryKeys.includes(args.category) ? args.category : (categoryKeys[0] || 'mobile');

      const catData = DEVICE_CATALOG[category] || {};
      const validBrands = Object.keys(catData);

      const brand = validBrands.includes(args.brand) ? args.brand : (validBrands[0] || '');
      const brandData = catData[brand] || {};
      const validModels = Object.keys(brandData);

      const model = validModels.includes(args.model) ? args.model : (validModels[0] || '');
      const modelData = brandData[model] || {};
      const validColors = Object.keys(modelData.colors || {});

      const color = validColors.includes(args.color) ? args.color : (validColors[0] || '');

      if (context.argTypes) {
        if (context.argTypes.category) context.argTypes.category.options = categoryKeys;
        if (context.argTypes.brand) context.argTypes.brand.options = validBrands;
        if (context.argTypes.model) context.argTypes.model.options = validModels;
        if (context.argTypes.color) context.argTypes.color.options = validColors;
      }

      if (
        args.category !== category ||
        args.brand !== brand ||
        args.model !== model ||
        args.color !== color
      ) {
        updateArgs({ category, brand, model, color });
      }

      return Story();
    },
  ],
  argTypes: {
    /* ------------------------------------------------------------------
       1. Frame Selection Controls
       ------------------------------------------------------------------ */
    category: {
      name: 'category',
      control: { type: 'select' },
      options: Object.keys(DEVICE_CATALOG),
      description: 'Form factor category (mobile, desktop, tablet, television, wearable).',
      table: { category: 'Frame Selection' },
    },
    brand: {
      name: 'brand',
      control: { type: 'select' },
      description: 'Brand ecosystem filter (dynamically filters model options).',
      table: { category: 'Frame Selection' },
    },
    model: {
      name: 'model',
      control: { type: 'select' },
      description: 'Specific device model from the avif catalog.',
      table: { category: 'Frame Selection' },
    },
    color: {
      name: 'color',
      control: { type: 'select' },
      description: 'Device body color/variant matching the physical file tree.',
      table: { category: 'Frame Selection' },
    },

    /* ------------------------------------------------------------------
       2. Screen Media Controls
       ------------------------------------------------------------------ */
    screenImage: {
      name: 'screen-image',
      control: { type: 'text' },
      description: 'Image rendered inside the device screen window. Takes precedence when both media sources are set.',
      table: { category: 'Screen Content', type: { summary: 'URL' } },
    },
    screenVideo: {
      name: 'screen-video',
      control: { type: 'text' },
      description: 'Optional video source rendered inside the same masked screen region when screen-image is not provided.',
      table: { category: 'Screen Content', type: { summary: 'URL' } },
    },
    customOnly: {
      name: 'custom-only',
      control: { type: 'boolean' },
      description: 'Cancels the device frame entirely, allowing the active screen media (image or video) to dictate scale and boundaries.',
      table: { category: 'Screen Content', defaultValue: { summary: 'false' } },
    },

    /* ------------------------------------------------------------------
       3. State & Sizing
       ------------------------------------------------------------------ */
    maxHeight: {
      name: 'max-height',
      control: { type: 'text' },
      description: 'Constraint sizing to prevent massive desktop mockup overflow.',
      table: { category: 'Sizing & State', defaultValue: { summary: '100%' } },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
      table: { category: 'Sizing & State', defaultValue: { summary: 'false' } },
    },
  },
  args: {
    category: 'mobile',
    brand: 'apple',
    model: 'Apple iPhone 13',
    color: 'Midnight',
    customOnly: false,
    screenImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    screenVideo: '',
    maxHeight: '600px',
  },
  render: (args) => html`
    <ds-thumbnail
      category="${args.category}"
      brand="${args.brand}"
      model="${args.model}"
      color="${args.color}"
      ?custom-only="${args.customOnly}"
      ?disabled="${args.disabled}"
      screen-image="${args.screenImage}"
      screen-video="${args.screenVideo}"
      max-height="${args.maxHeight}"
    ></ds-thumbnail>
  `,
};

/* ==========================================================================
   STORIES
   ========================================================================== */

/**
 * Standard setup featuring an iPhone 13 frame overlaying a mandatory background image.
 */
export const DefaultMobileFrame = {
  args: {
    category: 'mobile',
    brand: 'apple',
    model: 'Apple iPhone 13',
    color: 'Midnight',
  },
  play: async ({ canvasElement, step }) => {
    const thumbnail = canvasElement.querySelector('ds-thumbnail');

    await step('Verify image cover exists beneath the frame', async () => {
      const screenCover = thumbnail.shadowRoot.querySelector('.screen-cover');
      expect(screenCover.getAttribute('src')).toBeTruthy();
    });
  },
};

/**
 * Desktop MacBook Pro mockup story.
 */
export const DesktopMacBook = {
  args: {
    category: 'desktop',
    brand: 'apple',
    model: 'Apple MacBook Pro',
    color: 'Space Grey',
    maxHeight: '400px',
  },
};

/**
 * Demonstrates the `custom-only` cancellation property.
 * Hides the `.avif` device frame and presents only the unconstrained screen image cover.
 */
export const CustomImageOnly = {
  args: {
    customOnly: true,
    screenImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop',
    maxHeight: '400px',
  },
  play: async ({ canvasElement, step }) => {
    const thumbnail = canvasElement.querySelector('ds-thumbnail');

    await step('Verify device frame is hidden when custom-only is active', async () => {
      const deviceImg = thumbnail.shadowRoot.querySelector('.device-image');
      const computedStyle = window.getComputedStyle(deviceImg);
      expect(computedStyle.display).toBe('none');
    });
  },
};

/**
 * Video-only screen content constrained by the same frame mask as image mode.
 */
export const VideoOnly = {
  args: {
    screenImage: '',
    screenVideo: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    customOnly: false,
    maxHeight: '420px',
  },
  play: async ({ canvasElement, step }) => {
    const thumbnail = canvasElement.querySelector('ds-thumbnail');

    await step('Verify video layer is active when no screen-image is provided', async () => {
      const imageLayer = thumbnail.shadowRoot.querySelector('.screen-cover');
      const videoLayer = thumbnail.shadowRoot.querySelector('.screen-cover-video');
      expect(imageLayer.hidden).toBe(true);
      expect(videoLayer.hidden).toBe(false);
      expect(videoLayer.getAttribute('src')).toContain('.mp4');
      expect(videoLayer.hasAttribute('controls')).toBe(false);
    });
  },
};

/**
 * Precedence check: image remains primary when both media sources are present.
 */
export const BothMediaImageFirst = {
  args: {
    screenImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop',
    screenVideo: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  play: async ({ canvasElement, step }) => {
    const thumbnail = canvasElement.querySelector('ds-thumbnail');

    await step('Verify screen-image wins when both image and video sources are provided', async () => {
      const imageLayer = thumbnail.shadowRoot.querySelector('.screen-cover');
      const videoLayer = thumbnail.shadowRoot.querySelector('.screen-cover-video');
      expect(imageLayer.hidden).toBe(false);
      expect(imageLayer.getAttribute('src')).toBeTruthy();
      expect(videoLayer.hidden).toBe(true);
    });
  },
};
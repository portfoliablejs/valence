// src/stories/molecules/GalleryItem/GalleryItem.stories.js
import { html } from 'lit';
import { fn } from 'storybook/test';
import { useArgs } from 'storybook/preview-api';
import { DEVICE_CATALOG } from '../../atoms/Thumbnail/Thumbnail.js';
import './GalleryItem';

export default {
  title: 'Molecules/Gallery Item [v1.2.0]',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`ds-gallery-item` is a composite preview card molecule that combines a configurable `ds-thumbnail`, case metadata, lock-state behavior, and optional action pills. Use controls to switch frame devices, toggle content visibility, and simulate protected/unlocked states.',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const [args, updateArgs] = useArgs();

      const categoryKeys = Object.keys(DEVICE_CATALOG);
      const thumbCategory = categoryKeys.includes(args.thumbCategory)
        ? args.thumbCategory
        : (categoryKeys[0] || 'mobile');

      const categoryData = DEVICE_CATALOG[thumbCategory] || {};
      const brandKeys = Object.keys(categoryData);
      const thumbBrand = brandKeys.includes(args.thumbBrand)
        ? args.thumbBrand
        : (brandKeys[0] || '');

      const brandData = categoryData[thumbBrand] || {};
      const modelKeys = Object.keys(brandData);
      const thumbModel = modelKeys.includes(args.thumbModel)
        ? args.thumbModel
        : (modelKeys.includes('Apple iPhone 12') ? 'Apple iPhone 12' : (modelKeys[0] || ''));

      const modelData = brandData[thumbModel] || {};
      const colorKeys = Object.keys(modelData.colors || {});
      const thumbColor = colorKeys.includes(args.thumbColor)
        ? args.thumbColor
        : (colorKeys[0] || '');

      if (context.argTypes) {
        if (context.argTypes.thumbCategory) context.argTypes.thumbCategory.options = categoryKeys;
        if (context.argTypes.thumbBrand) context.argTypes.thumbBrand.options = brandKeys;
        if (context.argTypes.thumbModel) context.argTypes.thumbModel.options = modelKeys;
        if (context.argTypes.thumbColor) context.argTypes.thumbColor.options = colorKeys;
      }

      if (
        args.thumbCategory !== thumbCategory ||
        args.thumbBrand !== thumbBrand ||
        args.thumbModel !== thumbModel ||
        args.thumbColor !== thumbColor
      ) {
        updateArgs({ thumbCategory, thumbBrand, thumbModel, thumbColor });
      }

      return Story();
    },
  ],
  argTypes: {
    title: {
      control: 'text',
      table: { category: 'Content' },
    },
    shortDesc: {
      control: 'text',
      table: { category: 'Content' },
    },
    readTime: {
      control: 'text',
      table: { category: 'Content' },
    },
    thumbSrc: {
      control: 'text',
      table: { category: 'Content' },
      description: 'Image rendered inside the selected device frame.',
    },
    showTitle: {
      control: 'boolean',
      table: { category: 'Content Visibility' },
    },
    showShortDesc: {
      control: 'boolean',
      table: { category: 'Content Visibility' },
    },
    showReadTime: {
      control: 'boolean',
      table: { category: 'Content Visibility' },
    },
    showThumbnail: {
      control: 'boolean',
      table: { category: 'Content Visibility' },
    },

    thumbCategory: {
      control: { type: 'select' },
      options: Object.keys(DEVICE_CATALOG),
      table: { category: 'Thumbnail Frame' },
      description: 'Thumbnail catalog category.',
    },
    thumbBrand: {
      control: { type: 'select' },
      options: [],
      table: { category: 'Thumbnail Frame' },
      description: 'Device brand in thumbnail catalog.',
    },
    thumbModel: {
      control: { type: 'select' },
      options: [],
      table: { category: 'Thumbnail Frame' },
      description: 'Device model used for the frame.',
    },
    thumbColor: {
      control: { type: 'select' },
      options: [],
      table: { category: 'Thumbnail Frame' },
      description: 'Color variant for the selected model.',
    },
    thumbDeviceSrc: {
      control: 'text',
      table: { category: 'Thumbnail Frame' },
      description: 'Optional direct frame URL override; leave empty to use catalog selection.',
    },
    thumbCustomOnly: {
      control: 'boolean',
      table: { category: 'Thumbnail Frame' },
      description: 'When true, forces Thumbnail custom-only mode and hides the device frame.',
    },

    aspectRatio: {
      control: { type: 'select' },
      options: ['', '1:1', '16:9', '4:3'],
      description: 'Optional. Defaults to portrait if not set.',
      table: { category: 'Layout' },
    },

    isProtected: { control: 'boolean', table: { category: 'State' } },
    isUnlocked: { control: 'boolean', table: { category: 'State' } },
    hasVideo: { control: 'boolean', table: { category: 'Pills' } },
    hasRepo: { control: 'boolean', table: { category: 'Pills' } },
    hasLive: { control: 'boolean', table: { category: 'Pills' } },
  },
  args: {
    onSelect: fn(),
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
  },
  render: (args) => html`
      <div style="padding: 0 50px; display: flex; justify-content: center; background: transparent; min-height: 600px; width: 100%; box-sizing: border-box; align-items: center;">
        <ds-gallery-item 
          style="--device-h-gallery: 450px;" 
          title="${args.title}"
          short-desc="${args.shortDesc}"
          read-time="${args.readTime}"
          thumb-src="${args.thumbSrc}"
          thumb-category="${args.thumbCategory}"
          thumb-brand="${args.thumbBrand}"
          thumb-model="${args.thumbModel}"
          thumb-color="${args.thumbColor}"
          thumb-device-src="${args.thumbDeviceSrc}"
          ?thumb-custom-only="${args.thumbCustomOnly}"
          show-title="${args.showTitle}"
          show-short-desc="${args.showShortDesc}"
          show-read-time="${args.showReadTime}"
          show-thumbnail="${args.showThumbnail}"
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
  parameters: {
    docs: {
      description: {
        story: 'Default gallery card in portrait mode using an Apple iPhone 12 frame with all primary metadata and pills visible.',
      },
    },
  },
  args: {
    title: 'Agentic AI Design',
    shortDesc: 'A project with a default portrait aspect ratio.',
    readTime: '3 min',
    thumbSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    thumbCategory: 'mobile',
    thumbBrand: 'apple',
    thumbModel: 'Apple iPhone 12',
    thumbColor: 'Black',
    thumbDeviceSrc: '',
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
    aspectRatio: '',
    hasVideo: true,
    hasRepo: true,
    hasLive: true,
    isProtected: false,
    isUnlocked: false,
  },
};

export const SquareFrame = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the same gallery content constrained to a 1:1 thumbnail ratio while preserving frame and metadata behavior.',
      },
    },
  },
  args: {
    title: 'Square Project',
    shortDesc: 'A project best viewed in a 1:1 aspect ratio.',
    readTime: '2 min',
    thumbSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    thumbCategory: 'mobile',
    thumbBrand: 'apple',
    thumbModel: 'Apple iPhone 12',
    thumbColor: 'Blue',
    thumbDeviceSrc: '',
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
    aspectRatio: '1:1',
    hasVideo: false,
    hasRepo: true,
    hasLive: false,
    isProtected: false,
    isUnlocked: false,
  },
};

export const Protected = {
  parameters: {
    docs: {
      description: {
        story: 'Shows protected-state redaction: title/description are masked, read time is hidden, and action pills are suppressed.',
      },
    },
  },
  args: {
    title: 'Top Secret Project',
    shortDesc: 'This content is protected.',
    readTime: '1 min',
    thumbSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    thumbCategory: 'mobile',
    thumbBrand: 'apple',
    thumbModel: 'Apple iPhone 12',
    thumbColor: 'Green',
    thumbDeviceSrc: '',
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
    aspectRatio: '16:9',
    hasVideo: false,
    hasRepo: false,
    hasLive: false,
    isProtected: true,
    isUnlocked: false,
  },
};

export const Unlocked = {
  parameters: {
    docs: {
      description: {
        story: 'Represents an unlocked protected case where lock-open state restores readable metadata and optional action pills.',
      },
    },
  },
  args: {
    title: 'Top Secret Project',
    shortDesc: 'This content is now unlocked.',
    readTime: '1 min',
    thumbSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    thumbCategory: 'mobile',
    thumbBrand: 'apple',
    thumbModel: 'Apple iPhone 12',
    thumbColor: 'White',
    thumbDeviceSrc: '',
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
    aspectRatio: '16:9',
    hasVideo: true,
    hasRepo: true,
    hasLive: false,
    isProtected: true,
    isUnlocked: true,
  },
};
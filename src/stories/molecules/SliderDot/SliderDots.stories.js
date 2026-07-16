// src/stories/molecules/SliderDots/SliderDots.stories.js

import { html } from 'lit';
import { fn } from 'storybook/test';
import './SliderDots';

export default {
  title: 'Molecules/SliderDots',
  tags: ['autodocs'],
  argTypes: {
    dots: { control: { type: 'number', min: 1, max: 10 } },
    activeIndex: { control: { type: 'number', min: 0 } },
  },
  args: { onDotSelect: fn(), onSearch: fn() },
  render: (args) => html`
    <ds-slider-dots 
      dots="${args.dots}" 
      active-index="${args.activeIndex}"
      @ds-dot-select="${(e) => args.onDotSelect(e.detail.index)}"
      @ds-search-input="${(e) => args.onSearch(e.detail.value)}">
    </ds-slider-dots>
  `,
};

export const Default = {
  args: {
    dots: 4,
    activeIndex: 0,
  },
};
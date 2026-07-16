// src/stories/organisms/Gallery/Gallery.stories.js
import { html } from 'lit';
import './Gallery';
import '../../molecules/GalleryItem/GalleryItem';

export default {
  title: 'Organisms/Gallery',
  tags: ['autodocs'],
};

export const Default = {
  render: () => html`
    <div style="height: 100vh; width: 100vw; position: relative;">
      <ds-gallery>
        <ds-gallery-item title="Case One" short-desc="Description for one." read-time="3 min" thumb-src="/holofante.avif"></ds-gallery-item>
        <ds-gallery-item title="Case Two" short-desc="Description for two." read-time="2 min" thumb-src="/testamentus.avif" device="apple-watch"></ds-gallery-item>
        <ds-gallery-item title="Case Three" short-desc="Description for three." read-time="4 min" thumb-src="/consulta.avif" device="iphone-12"></ds-gallery-item>
        <ds-gallery-item title="Case Four" short-desc="Description for four." read-time="3 min" thumb-src="/cassiwatch.avif"></ds-gallery-item>
      </ds-gallery>
    </div>
  `,
};
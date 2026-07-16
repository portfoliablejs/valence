// src/stories/organisms/CaseSlide/CaseSlide.stories.js
import { html } from 'lit';
import './CaseSlide';
import '../../molecules/Summary/Summary';
import '../../molecules/MetricCard/MetricCard';
import '../../molecules/AudioPlayer/AudioPlayer';
import '../../atoms/Button/Button';

export default {
  title: 'Organisms/CaseSlide',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // This story takes up the full screen
  },
  argTypes: {
    title: { control: 'text' },
    year: { control: 'text' },
    thumbSrc: { control: 'text' },
    device: { control: { type: 'select' }, options: ['iphone-17', 'apple-watch', 'iphone-12'] },
    scrolled: { control: 'boolean' },
  },
};

const longDescription = `
  <p>This is the first paragraph of a long description. It sets the stage for the case study, providing context and background information. The text will continue, allowing for scrolling to test the component's behavior.</p>
  <h3>First Major Section</h3>
  <p>Content under the first major section. This paragraph elaborates on the challenges and the initial approach taken to solve the problem. It's important to have enough text to demonstrate the scroll spy functionality of the Table of Contents.</p>
  <p>Another paragraph to add more length. We can discuss user research, initial findings, and the pivot towards the final solution. The more content we have, the better we can test the scroll effects.</p>
  <h3>Second Major Section</h3>
  <p>This section details the design and development process. It can include technical details, framework choices, and collaboration stories. The TOC on the right should highlight this section as you scroll past it.</p>
  <p>Final paragraph to conclude the case study, summarizing the results and the impact of the project. This ensures the scroll container has a definitive end.</p>
`;

export const Default = {
  args: {
    title: 'Agentic AI Design',
    year: '2026 ∙ Holofante R&D lab',
    thumbSrc: '/holofante.avif',
    device: 'iphone-17',
    scrolled: false,
  },
  render: (args) => html`
    <ds-case-slide 
      title="${args.title}" 
      year="${args.year}" 
      thumb-src="${args.thumbSrc}" 
      device="${args.device}"
      ?scrolled="${args.scrolled}">
      
      <div slot="actions">
        <ds-button variant="primary" icon="play">Pitch</ds-button>
        <ds-button variant="secondary" icon="link">Repo</ds-button>
      </div>

      <ds-summary slot="ai-summary" text="This is an AI-generated summary of the case study, highlighting the key achievements and outcomes of the project." active="true">
        <ds-metric-card value="18 → 5.3" label="Days to deliverable"></ds-metric-card>
        <ds-metric-card value="10h+" label="Weekly hours recovered"></ds-metric-card>
      </ds-summary>

      <ds-audio-player slot="audio-player" duration="180" time="45"></ds-audio-player>

      <div slot="description">${longDescription}</div>

    </ds-case-slide>
  `,
};
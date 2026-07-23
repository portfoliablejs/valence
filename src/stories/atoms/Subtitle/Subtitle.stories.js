import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, fn, userEvent, fireEvent } from 'storybook/test';
import './Subtitle';

/**
 * Global component definition detail descriptions mapping clean architectural APIs down to layout layers.
 */
export default {
  title: 'Atoms/Subtitle [v1.0.0]',
  component: 'ds-subtitle',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dynamically rendered overlay subtitle component designed for media captions and real-time announcements. Supports interactive dragging across the viewport and uses `aria-live="polite"` for accessible announcements.',
      },
    },
  },
  decorators: [
    (Story) => html`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${Story()}
      </div>
    `
  ],
  argTypes: {
    // --- COMPONENT: CORE ---
    text: {
      name: 'text',
      description: 'Text string passed to internal shadow DOM container.',
      control: 'text',
      table: { category: 'Component: Core' },
    },
    visible: {
      name: 'visible',
      description: 'Toggles the opacity and visibility transition state of the subtitle container.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'true' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Crucial accessibility label delegated directly to internal primitives to keep host clean.',
      control: 'text',
      table: { category: 'Component: Core' },
    },

    // --- SUB-ATOMIC PROPS ---
    radius: {
      name: 'radius',
      description: 'Sub-atomic modifier overriding corner bounding geometry variables (--ds-subtitle-radius).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--radius-sm)' } },
    },
    backgroundColor: {
      name: 'backgroundColor',
      description: 'Sub-atomic modifier overriding default backdrop pattern shading (--ds-subtitle-bg).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-gray-dark)' } },
    },
    textColor: {
      name: 'textColor',
      description: 'Sub-atomic modifier overriding default text color (--ds-subtitle-color).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-white)' } },
    },

    // --- EVENTS ---
    onDragStart: {
      name: 'onDragStart',
      description: 'Fires when the subtitle element begins a drag action.',
      action: 'ds-subtitle-dragstart',
      table: { 
        category: 'SUB-ATOMIC PROPS',
        subcategory: 'Events' 
      },
    },
    onDragEnd: {
      name: 'onDragEnd',
      description: 'Fires when the drag action ends.',
      action: 'ds-subtitle-dragend',
      table: { 
        category: 'SUB-ATOMIC PROPS',
        subcategory: 'Events' 
      },
    },
  },
  args: {
    onDragStart: fn(),
    onDragEnd: fn()
  },
  render: (args) => {
    const customStyles = [
      args.radius ? `--ds-subtitle-radius: ${args.radius};` : '',
      args.backgroundColor ? `--ds-subtitle-bg: ${args.backgroundColor};` : '',
      args.textColor ? `--ds-subtitle-color: ${args.textColor};` : ''
    ].join(' ').trim();

    return html`
      <ds-subtitle
        text=${ifDefined(args.text)}
        ?visible=${args.visible}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}
        @ds-subtitle-dragstart=${args.onDragStart}
        @ds-subtitle-dragend=${args.onDragEnd}>
      </ds-subtitle>
    `;
  },
};

/**
 * Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.
 */
export const DefaultBaseline = {
  args: {
    text: 'This is a dynamically rendered subtitle.',
    visible: true,
    ariaLabel: 'Media caption subtitle',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-subtitle');

    await step('Verify structural attributes pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.hasAttribute('visible') && component.getAttribute('visible') !== 'false').toBe(true);
      expect(component.getAttribute('aria-label')).toBeNull();
    });

    await step('Verify inner shadow layout primitives receive delegated attributes and text content', async () => {
      const primitive = component.shadowRoot.querySelector('.custom-subtitle');
      expect(primitive.getAttribute('aria-label')).toBe('Media caption subtitle');
      expect(primitive.getAttribute('aria-live')).toBe('polite');
      expect(primitive.textContent).toBe('This is a dynamically rendered subtitle.');
      expect(primitive.classList.contains('visible')).toBe(true);
    });
  },
};

/**
 * Story verifying hidden state logic and accessibility aria-hidden updates.
 */
export const HiddenState = {
  args: {
    ...DefaultBaseline.args,
    visible: false,
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-subtitle');

    await step('Verify internal shadow primitive toggles off visible class and sets aria-hidden', async () => {
      const primitive = component.shadowRoot.querySelector('.custom-subtitle');
      expect(primitive.classList.contains('visible')).toBe(false);
      expect(primitive.getAttribute('aria-hidden')).toBe('true');
    });
  },
};

/**
 * Story validating draggable interactions and event triggers.
 */
export const DraggableInteraction = {
  args: {
    text: 'Drag me across the screen!',
    visible: true,
    ariaLabel: 'Draggable subtitle caption',
  },
  play: async ({ canvasElement, step, args }) => {
    const component = canvasElement.querySelector('ds-subtitle');
    const primitive = component.shadowRoot.querySelector('.custom-subtitle');

    await step('Verify inner shadow primitive is draggable', async () => {
      // Check DOM property or fallback to attribute check safely
      const isDraggable = primitive.draggable || primitive.getAttribute('draggable') === 'true';
      expect(Boolean(isDraggable)).toBe(true);
    });

    await step('Trigger pointer events and verify dragging class + event dispatch', async () => {
      fireEvent.pointerDown(primitive, { button: 0, clientX: 100, clientY: 100 });
      expect(primitive.classList.contains('dragging')).toBe(true);
      expect(args.onDragStart).toHaveBeenCalled();

      fireEvent.pointerMove(window, { clientX: 150, clientY: 150 });
      fireEvent.pointerUp(window);

      expect(primitive.classList.contains('dragging')).toBe(false);
      expect(args.onDragEnd).toHaveBeenCalled();
    });
  },
};

/**
 * Story simulating dynamic WebVTT cue updates during video playback.
 */
export const VTTCueSimulation = {
  args: {
    text: '',
    visible: false,
    ariaLabel: 'WebVTT synchronized subtitle',
  },
  // Disable the a11y addon specifically for this timed interaction story
  parameters: {
    a11y: { disable: true },
  },
  render: (args) => {
    return html`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div style="font-size: 12px; color: var(--color-gray-med); font-family: var(--font-mono);">
          [Simulating WebVTT Cue Engine]
        </div>
        <ds-subtitle
          text=${ifDefined(args.text)}
          ?visible=${args.visible}
          aria-label=${ifDefined(args.ariaLabel)}>
        </ds-subtitle>
      </div>
    `;
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-subtitle');
    const primitive = component.shadowRoot.querySelector('.custom-subtitle');

    // CI Detection fallback (optional, but good if you also run Chromatic/Playwright)
    const isCI = window.navigator.webdriver || window.navigator.userAgent.includes('Headless');
    const visualDelay = (ms) => new Promise((resolve) => setTimeout(resolve, isCI ? 0 : ms));

    const mockVttCues = [
      { text: '<b>[Speaker 1]</b> Welcome to the Valence Design System lesson.', duration: 1500 },
      { text: '<i>Today we will cover WebVTT subtitle synchronization.</i>', duration: 1500 },
      { text: 'Subtitles support dynamic drag positioning and a11y overrides.', duration: 1500 },
    ];

    await step('Simulate Cue 1: Welcome message', async () => {
      const cleanText = mockVttCues[0].text.replace(/<[^>]*>/g, '');
      component.setAttribute('text', cleanText);
      component.setAttribute('visible', 'true');

      expect(primitive.textContent).toBe('[Speaker 1] Welcome to the Valence Design System lesson.');
      expect(primitive.classList.contains('visible')).toBe(true);
      
      await visualDelay(mockVttCues[0].duration);
    });

    await step('Simulate Cue 2: Italic formatting tag stripping', async () => {
      const cleanText = mockVttCues[1].text.replace(/<[^>]*>/g, '');
      component.setAttribute('text', cleanText);

      expect(primitive.textContent).toBe('Today we will cover WebVTT subtitle synchronization.');
      
      await visualDelay(mockVttCues[1].duration);
    });

    await step('Simulate Cue 3: Final caption string', async () => {
      const cleanText = mockVttCues[2].text.replace(/<[^>]*>/g, '');
      component.setAttribute('text', cleanText);

      expect(primitive.textContent).toBe('Subtitles support dynamic drag positioning and a11y overrides.');
      
      await visualDelay(mockVttCues[2].duration);
    });

    await step('Simulate Cue End: Hide subtitle overlay when cues end', async () => {
      component.setAttribute('visible', 'false');

      expect(primitive.classList.contains('visible')).toBe(false);
      expect(primitive.getAttribute('aria-hidden')).toBe('true');
    });
  },
};
import { html } from 'lit';
import { expect, userEvent } from 'storybook/test';
import './SeekBar.js';

/**
 * `ds-seek-bar` is a multi-use interactive timeline primitive designed for embedded audio player molecules, top-viewport video players, and vertical volume control sliders.
 * Features an integrated `ds-tooltip` molecule that tracks cursor movement across an expanded hit area to present real-time progress percentages.
 */
export default {
  title: 'Atoms/Seek Bar',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A multi-use interactive seek bar used across embedded audio players, top-viewport video player organisms, and vertical volume control sliders. Automatically positions an integrated `ds-tooltip` molecule that follows mouse movement in real time over an expanded hit area.',
      },
    },
  },
  argTypes: {
    /* ------------------------------------------------------------------
       1. Core & Variant Controls
       ------------------------------------------------------------------ */
    percent: {
      name: 'percent',
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current playback percentage or volume level (0 to 100).',
      table: { category: 'Core & Variant Controls', defaultValue: { summary: '0' } },
    },
    variant: {
      name: 'variant',
      control: { type: 'select' },
      options: ['default', 'top-bar', 'vertical'],
      description: 'Layout variant: standard embedded player, flush top-viewport video bar, or vertical volume slider.',
      table: { category: 'Core & Variant Controls', defaultValue: { summary: 'default' } },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
      description: 'Suppresses seeking interactions and hover tooltip display.',
      table: { category: 'Core & Variant Controls', defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      control: { type: 'text' },
      description: 'Accessible label delegated down to the internal slider element.',
      table: { category: 'Core & Variant Controls', defaultValue: { summary: 'Media progress' } },
    },

    /* ------------------------------------------------------------------
       2. Tooltip Controls
       ------------------------------------------------------------------ */
    showTooltip: {
      name: 'showTooltip',
      control: { type: 'boolean' },
      description: 'Toggles activation of the integrated hover tooltip molecule.',
      table: { category: 'Tooltip Controls', defaultValue: { summary: 'true' } },
    },
    tooltipText: {
      name: 'tooltipText',
      control: { type: 'text' },
      description: 'Optional explicit text prefix or override displayed inside the hover tooltip.',
      table: { category: 'Tooltip Controls' },
    },
    showKbd: {
      name: 'showKbd',
      control: { type: 'boolean' },
      description: 'Toggles keyboard shortcut indicator inside the hover tooltip.',
      table: { category: 'Tooltip Controls', defaultValue: { summary: 'false' } },
    },
    kbdLabel: {
      name: 'kbdLabel',
      control: { type: 'select' },
      options: ['←', '→', '↑', '↓', 'Shift', 'Space'],
      description: 'Primary shortcut key label passed to the tooltip kbd atom.',
      table: { category: 'Tooltip Controls' },
    },

    /* ------------------------------------------------------------------
       3. Sub-Atomic Props (Design Token Overrides)
       ------------------------------------------------------------------ */
    customTrackBg: {
      name: '--custom-track-bg',
      control: { type: 'color' },
      description: 'Sub-atomic custom property override for unfilled track background.',
      table: { category: 'Sub-Atomic Props' },
    },
    customFillBg: {
      name: '--custom-fill-bg',
      control: { type: 'color' },
      description: 'Sub-atomic custom property override for active progress fill.',
      table: { category: 'Sub-Atomic Props' },
    },
    customKnobBg: {
      name: '--custom-knob-bg',
      control: { type: 'color' },
      description: 'Sub-atomic custom property override for draggable handle knob.',
      table: { category: 'Sub-Atomic Props' },
    },

    /* ------------------------------------------------------------------
       4. Event Listeners
       ------------------------------------------------------------------ */
    onSeek: {
      name: 'ds-seek',
      action: 'ds-seek',
      description: 'Custom event dispatched when seeking via mouse drag, touch, or arrow keys.',
      table: { category: 'Event Listeners' },
    },
  },
  args: {
    percent: 45,
    variant: 'default',
    disabled: false,
    showTooltip: true,
    ariaLabel: 'Audio progress bar',
  },
  render: (args) => {
    const styleString = [
      args.customTrackBg ? `--custom-track-bg: ${args.customTrackBg};` : '',
      args.customFillBg ? `--custom-fill-bg: ${args.customFillBg};` : '',
      args.customKnobBg ? `--custom-knob-bg: ${args.customKnobBg};` : '',
      args.variant === 'vertical' ? 'height: 200px;' : '',
    ]
      .join(' ')
      .trim();

    return html`
      <div style="width: 100%; max-width: 720px; min-height: 240px; margin: 0 auto; padding: 48px 24px; box-sizing: border-box; display: flex; justify-content: center; align-items: center; background: var(--color-bg, #ffffff);">
        <ds-seek-bar
          percent="${args.percent}"
          variant="${args.variant}"
          ?disabled="${args.disabled}"
          ?show-tooltip="${args.showTooltip}"
          tooltip-text="${args.tooltipText || ''}"
          ?show-kbd="${args.showKbd}"
          kbd-label="${args.kbdLabel || ''}"
          aria-label="${args.ariaLabel}"
          style="${styleString}"
          @ds-seek="${(e) => args.onSeek && args.onSeek(e.detail.percent)}"
        ></ds-seek-bar>
      </div>
    `;
  },
};

/* ==========================================================================
   STORIES & AUTOMATED INTERACTION TESTS
   ========================================================================== */

/**
 * Standard embedded audio player configuration.
 * Hovering over the expanded hit area displays a top-anchored `ds-tooltip` that tracks mouse X movement in real time.
 */
export const DefaultAudioEmbedded = {
  args: {
    percent: 35,
    ariaLabel: 'Audio track progress',
    showTooltip: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Standard embedded audio player seek bar. Moving your cursor over the track smoothly slides the top-positioned `ds-tooltip` to match your mouse position across an enlarged hit area.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const seekBar = canvasElement.querySelector('ds-seek-bar');

    await step('Verify shadow root slider element renders correctly', async () => {
      const internalSlider = seekBar.shadowRoot.querySelector('[role="slider"]');
      expect(internalSlider).not.toBeNull();
      expect(internalSlider.getAttribute('aria-valuenow')).toBe('35');
    });

    await step('Hover seek container and assert integrated tooltip visibility', async () => {
      const container = seekBar.shadowRoot.querySelector('.seek-container');
      const tooltip = seekBar.shadowRoot.querySelector('ds-tooltip');

      await userEvent.hover(container);
      expect(tooltip).not.toBeNull();
      expect(tooltip.hasAttribute('visible')).toBe(true);
    });

    await step('Verify keyboard arrow right increments progress', async () => {
      const internalSlider = seekBar.shadowRoot.querySelector('[role="slider"]');
      internalSlider.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(internalSlider.getAttribute('aria-valuenow')).toBe('40');
    });
  },
};

/**
 * Flush top-viewport video player variant (`variant="top-bar"`).
 * Features flat rectangular track geometry with a round handle knob, 100% full-width viewport coverage, enlarged 8px default height, hover expansion (16px), active drag expansion (20px), and bottom tooltip anchoring.
 */
export const VideoTopBar = {
  args: {
    percent: 60,
    variant: 'top-bar',
    ariaLabel: 'Video playback timeline',
    showTooltip: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Flush top-viewport video player variant (`variant="top-bar"`). Rendered cleanly at 100% full-width with flat track geometry, a round handle knob, 8px default track height, hover expansion (16px), active drag expansion (20px), and bottom tooltip anchoring.',
      },
    },
  },
  render: (args) => html`
    <div style="width: 100%; max-width: 720px; margin: 0 auto; padding: 36px 0; box-sizing: border-box;">
      <ds-seek-bar
        percent="${args.percent}"
        variant="top-bar"
        aria-label="${args.ariaLabel}"
        ?show-tooltip="${args.showTooltip}"
        @ds-seek="${(e) => args.onSeek && args.onSeek(e.detail.percent)}"
      ></ds-seek-bar>
    </div>
  `,
  play: async ({ canvasElement, step }) => {
    const seekBar = canvasElement.querySelector('ds-seek-bar');

    await step('Verify variant attribute reflects top-bar', async () => {
      expect(seekBar.getAttribute('variant')).toBe('top-bar');
    });

    await step('Verify tooltip position anchors to bottom for top-bar variant', async () => {
      const tooltip = seekBar.shadowRoot.querySelector('ds-tooltip');
      expect(tooltip.getAttribute('position')).toBe('bottom');
    });
  },
};

/**
 * Vertical orientation variant (`variant="vertical"`).
 * Designed for volume control popovers, audio mixers, and vertical sliders. Tracks Y-axis movement bottom-to-top with right tooltip anchoring and sets `aria-orientation="vertical"`.
 */
export const VerticalVolume = {
  args: {
    percent: 70,
    variant: 'vertical',
    ariaLabel: 'Volume control',
    showTooltip: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Vertical orientation variant (`variant="vertical"`). Designed for volume controls and audio mixing panels. Tracks cursor position vertically from bottom to top with right-anchored tooltips and `aria-orientation="vertical"`.',
      },
    },
  },
  render: (args) => html`
    <div style="height: 220px; display: flex; align-items: center; justify-content: center; padding: 24px;">
      <ds-seek-bar
        percent="${args.percent}"
        variant="vertical"
        aria-label="${args.ariaLabel}"
        ?show-tooltip="${args.showTooltip}"
        @ds-seek="${(e) => args.onSeek && args.onSeek(e.detail.percent)}"
      ></ds-seek-bar>
    </div>
  `,
  play: async ({ canvasElement, step }) => {
    const seekBar = canvasElement.querySelector('ds-seek-bar');

    await step('Verify variant attribute reflects vertical', async () => {
      expect(seekBar.getAttribute('variant')).toBe('vertical');
    });

    await step('Verify aria-orientation="vertical" is delegated to internal slider', async () => {
      const internalSlider = seekBar.shadowRoot.querySelector('[role="slider"]');
      expect(internalSlider.getAttribute('aria-orientation')).toBe('vertical');
    });

    await step('Verify tooltip position anchors to right for vertical variant', async () => {
      const tooltip = seekBar.shadowRoot.querySelector('ds-tooltip');
      expect(tooltip.getAttribute('position')).toBe('right');
    });
  },
};

/**
 * Demonstrates explicitly passing custom textual descriptions to the mouse-tracking tooltip (`tooltip-text="Timestamp"`).
 */
export const WithCustomTooltipText = {
  args: {
    percent: 75,
    showTooltip: true,
    tooltipText: 'Timestamp',
    ariaLabel: 'Custom labeled seek bar',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates passing custom textual prefixes (such as "Timestamp") to the mouse-tracking hover tooltip via the `tooltip-text` attribute.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const seekBar = canvasElement.querySelector('ds-seek-bar');

    await step('Hover container and check custom tooltip text formatting', async () => {
      const container = seekBar.shadowRoot.querySelector('.seek-container');
      const tooltip = seekBar.shadowRoot.querySelector('ds-tooltip');

      await userEvent.hover(container);
      expect(tooltip.getAttribute('text')).toContain('Timestamp');
    });
  },
};

/**
 * Demonstrates rendering keyboard shortcut hints (`← / →`) inside the mouse-tracking hover tooltip.
 */
export const WithKeyboardShortcuts = {
  args: {
    percent: 50,
    showTooltip: true,
    showKbd: true,
    kbdLabel: '← / →',
    ariaLabel: 'Keyboard accessible seek bar',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Integrates `ds-kbd` shortcut indicators inside the mouse-tracking hover tooltip to instruct users on keyboard arrow seeking capabilities.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const seekBar = canvasElement.querySelector('ds-seek-bar');

    await step('Verify show-kbd attribute propagates to the internal tooltip', async () => {
      const tooltip = seekBar.shadowRoot.querySelector('ds-tooltip');
      expect(tooltip.hasAttribute('show-kbd')).toBe(true);
    });
  },
};

/**
 * Disabled seek bar state. Mouse drag, keyboard seeking, and mouse-tracking hover tooltips are completely suppressed.
 */
export const Disabled = {
  args: {
    percent: 20,
    disabled: true,
    ariaLabel: 'Disabled timeline',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled seek bar state. Suppresses all mouse hover tracking, touch dragging, keyboard focus, and tooltip visibility.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const seekBar = canvasElement.querySelector('ds-seek-bar');

    await step('Verify disabled attribute hides the tooltip element', async () => {
      const tooltip = seekBar.shadowRoot.querySelector('ds-tooltip');
      expect(tooltip.style.display).toBe('none');
    });
  },
};
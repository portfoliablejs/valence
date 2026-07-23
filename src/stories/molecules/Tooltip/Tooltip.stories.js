import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, userEvent } from 'storybook/test';
import './Tooltip';

/**
 * An interactive overlay component that anchors to a target element 
 * to display helpful descriptive text and keyboard shortcut hints.
 */
export default {
  title: 'Molecules/Tooltip [v1.0.0]',
  component: 'ds-tooltip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', 
  },
  decorators: [
    (Story) => html`
      <div style="
        padding: 50px 100px;
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
    text: {
      name: 'text',
      description: 'The descriptive message text content displayed inside the container body.',
      control: 'text',
      table: { category: 'Core & Variant Controls' },
    },
    showKbd: {
      name: 'showKbd',
      description: 'The exclusive toggle switch to activate or deactivate the sub-atomic keyboard indicator.',
      control: 'boolean',
      table: { category: 'Core & Variant Controls', defaultValue: { summary: 'false' } },
    },
    kbdLabel: {
      name: 'kbdLabel',
      description: 'The primary shortcut modifier value passed down to the internal kbd component.',
      control: { type: 'select' },
      options: ['⌥ Option', '⎇ Alt', '⇧ Shift', '⌘ Cmd', 'Ctrl', 'Esc', 'Backspace'],
      if: { arg: 'showKbd' },
      table: { category: 'Core & Variant Controls' },
    },
    kbdShowPlus: {
      name: 'kbdShowPlus',
      description: 'Toggles a combination plus operator inside the shortcut atom container.',
      control: 'boolean',
      if: { arg: 'showKbd' },
      table: { category: 'Core & Variant Controls', defaultValue: { summary: 'false' } },
    },
    kbdKey: {
      name: 'kbdKey',
      description: 'The secondary action key bound to multi-key shortcut chains.',
      control: 'text',
      if: { arg: 'showKbd' },
      table: { category: 'Core & Variant Controls' },
    },
    position: {
      name: 'position',
      description: 'Determines the direction where the overlay anchors relative to its target element parent.',
      control: { type: 'select' },
      options: ['bottom', 'top', 'left', 'right'],
      table: { category: 'Core & Variant Controls', defaultValue: { summary: 'bottom' } },
    },

    // --- SUB-ATOMIC PROPS ---
    radius: {
      name: 'radius',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--radius-md)' } },
    },
    backgroundColor: {
      name: 'backgroundColor',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--color-overlay-dark)' } },
    },
  },
  render: (args) => {
    const dynamicStyles = [
      args.radius ? `--ds-tooltip-radius: ${args.radius};` : '',
      args.backgroundColor ? `--ds-tooltip-bg: ${args.backgroundColor};` : ''
    ].join(' ').trim();

    return html`
      <div 
        id="hover-container"
        tabindex="0"
        style="position: relative; display: inline-flex; justify-content: center; align-items: center; width: 140px; height: 50px; background: var(--color-gray-xlight, #eee); border-radius: var(--radius-sm, 4px); cursor: pointer; user-select: none; font-family: var(--font-family); font-size: 13px; font-weight: 500;">
        Hover Me
        <ds-tooltip 
          text="${args.text}" 
          ?show-kbd="${args.showKbd}"
          kbd-label="${ifDefined(args.kbdLabel)}"
          ?kbd-show-plus="${args.kbdShowPlus}"
          kbd-key="${ifDefined(args.kbdKey)}"
          position="${args.position || 'bottom'}"
          style=${ifDefined(dynamicStyles || undefined)}>
        </ds-tooltip>
      </div>
    `;
  },
};

/**
 * Bottom-positioned tooltip with a multi-key shortcut combination. Includes full tests for hover and keyboard focus triggers.
 */
export const BottomPositionWithCombo = {
  args: {
    text: 'Save Project',
    showKbd: true,
    kbdLabel: '⌘ Cmd',
    kbdShowPlus: true,
    kbdKey: 's',
    position: 'bottom',
  },
  play: async ({ canvasElement, step }) => {
    const container = canvasElement.querySelector('#hover-container');
    const tooltip = canvasElement.querySelector('ds-tooltip');

    await step('Verify tooltip is hidden by default initially', async () => {
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });

    await step('Hover parent container and assert automatic visibility activation', async () => {
      await userEvent.hover(container);
      expect(tooltip.hasAttribute('visible')).toBe(true);

      const innerKbd = tooltip.shadowRoot.querySelector('.tooltip-kbd');
      expect(innerKbd.getAttribute('key')).toBe('s');
    });

    await step('Unhover parent container and ensure visibility safely clears out', async () => {
      await userEvent.unhover(container);
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });

    await step('Focus parent via keyboard and ensure accessibility triggers visibility', async () => {
      container.focus();
      expect(tooltip.hasAttribute('visible')).toBe(true);
      container.blur();
    });
  }
};

/**
 * Top-positioned tooltip featuring a single-key shortcut (e.g., Escape) without a plus modifier.
 */
export const TopPositionSingleKey = {
  args: {
    text: 'Exit Fullscreen',
    showKbd: true,
    kbdLabel: 'Esc',
    kbdShowPlus: false,
    position: 'top',
  },
  play: async ({ canvasElement, step }) => {
    const tooltip = canvasElement.querySelector('ds-tooltip');
    
    await step('Verify positional constraint matches Top', async () => {
      expect(tooltip.getAttribute('position')).toBe('top');
      expect(tooltip.hasAttribute('kbd-show-plus')).toBe(false);
    });
  }
};

/**
 * Left-positioned tooltip containing only text, with keyboard indicators completely hidden.
 */
export const LeftPositionTextOnly = {
  args: {
    text: 'Delete Permanently',
    showKbd: false,
    position: 'left',
  },
  play: async ({ canvasElement, step }) => {
    const container = canvasElement.querySelector('#hover-container');
    const tooltip = canvasElement.querySelector('ds-tooltip');

    await step('Trigger hover actions to inspect shortcut components', async () => {
      await userEvent.hover(container);
      
      const innerKbd = tooltip.shadowRoot.querySelector('.tooltip-kbd');
      expect(innerKbd.style.display).toBe('none');
    });
  }
};

/**
 * Right-positioned tooltip containing only text, ideal for sidebars and compact columns.
 */
export const RightPositionTextOnly = {
  args: {
    text: 'Share Profile',
    showKbd: false,
    position: 'right',
  },
  play: async ({ canvasElement, step }) => {
    const tooltip = canvasElement.querySelector('ds-tooltip');

    await step('Verify spatial alignment targets the right axis', async () => {
      expect(tooltip.getAttribute('position')).toBe('right');
    });
  }
};

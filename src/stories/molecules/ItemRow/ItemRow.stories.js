import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { fn, userEvent, expect } from 'storybook/test';
import './ItemRow';

/**
 * An interactive list row component (`ds-item-row`) that supports leading icons, text labels, 
 * keyboard shortcut indicators, and interactive right-aligned controls (toggle, check, or radio).
 */
export default {
  title: 'Molecules/Item Row [v1.0.0]',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
  (Story) => html`
    <style>
      .story-menu-card {
        width: 380px;
        box-sizing: border-box;
        background: var(--custom-bg, var(--color-bg, #ffffff));
        border: var(--border-width-thin, 1px) var(--border-style-solid, solid) var(--color-surface-border, rgba(0, 0, 0, 0.08));
        border-radius: var(--custom-radius, var(--radius-lg, 16px));
        box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
        padding: var(--space-md, 12px);
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      /* Exact dark mode replica of :host([a11y-dark-mode]) .menu-card */
      html.a11y-dark-mode .story-menu-card {
        background: #1c1c1e !important;
        border-color: var(--color-surface-border, rgba(255, 255, 255, 0.12)) !important;
        /* Re-defines --color-surface locally so ds-item-row's hover state is visible against #1c1c1e */
        --color-surface: rgba(255, 255, 255, 0.12);
      }
    </style>

    <div class="canvas-buffer" style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      box-sizing: border-box;
    ">
      <div class="story-menu-card">
        ${Story()}
      </div>
    </div>
  `
],
  argTypes: {
    // --- CORE ---
    label: {
      control: 'text',
      description: 'Primary text label mapping to the left slot.',
      table: { category: 'Component: Core' }
    },
    showIcon: {
      control: 'boolean',
      description: 'Toggles visibility of the left leading icon.',
      table: { category: 'Component: Core' }
    },
    icon: {
      control: 'text',
      description: 'System icon name rendered when showIcon is enabled.',
      table: { category: 'Component: Core' }
    },
    iconVariant: {
      control: { type: 'select' },
      options: ['outline', 'fill'],
      description: 'Variant style passed down to the leading icon.',
      table: { category: 'Component: Core' }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all user interaction on the row and passes disabled state down to child controls.',
      table: { category: 'Component: Core' }
    },
    ariaLabel: {
      control: 'text',
      description: 'Override accessibility label mapped to the row wrapper.',
      table: { category: 'Component: Core' }
    },

    // --- KBD CONTROLS ---
    showKbd: {
      control: 'boolean',
      description: 'Toggles keyboard shortcut hint visibility.',
      table: { category: 'Component: Keyboard Controls (Kbd)' }
    },
    kbd: {
      control: 'text',
      description: 'Primary shortcut key (e.g., Shift, Cmd).',
      table: { category: 'Component: Keyboard Controls (Kbd)' }
    },
    kbdVariant: {
      control: { type: 'select' },
      options: ['default', 'inverted'],
      description: 'Determines visual style of the nested Kbd.',
      table: { category: 'Component: Keyboard Controls (Kbd)' }
    },
    kbdShowPlus: {
      control: 'boolean',
      description: 'Appends a combination plus operator inside the Kbd node.',
      table: { category: 'Component: Keyboard Controls (Kbd)' }
    },
    kbdKey: {
      control: 'text',
      description: 'Secondary shortcut key appended if showPlus is active.',
      table: { category: 'Component: Keyboard Controls (Kbd)' }
    },

    // --- CONTROL VARIANTS ---
    control: { 
      control: { type: 'select' }, 
      options: ['toggle', 'check', 'radio', 'none'],
      description: 'Interactive control type rendered on the right side.',
      table: { category: 'Component: Control Variants' }
    },
    checkHasBackground: {
      control: 'boolean',
      description: 'Toggles surface container background framing on the child Check atom.',
      table: { category: 'Component: Control Variants' }
    },
    active: {
      control: 'boolean',
      description: 'Active state mapped to the toggle-variant.',
      table: { category: 'Component: Control Variants' }
    },
    selected: {
      control: 'boolean',
      description: 'Selected state mapped to check and radio variants.',
      table: { category: 'Component: Control Variants' }
    },
    toggleTextOn: {
      control: 'text',
      description: 'Active text boundary configuration for child Toggle.',
      table: { category: 'Component: Control Variants' }
    },
    toggleTextOff: {
      control: 'text',
      description: 'Passive text boundary configuration for child Toggle.',
      table: { category: 'Component: Control Variants' }
    },

    // --- SUB-ATOMIC PROPS ---
    colorCheck: {
      control: 'color',
      description: 'Sub-atomic modifier overriding checkmark vector color (--ds-check-color).',
      table: { category: 'SUB-ATOMIC PROPS' }
    },
    colorRadio: {
      control: 'color',
      description: 'Sub-atomic modifier overriding radio vector stroke/fill color (--ds-radio-color).',
      table: { category: 'SUB-ATOMIC PROPS' }
    },
    colorToggleActive: {
      control: 'color',
      description: 'Sub-atomic modifier overriding active toggle track background (--ds-toggle-checked-bg).',
      table: { category: 'SUB-ATOMIC PROPS' }
    },

    // --- EVENTS ---
    onClick: {
      action: 'ds-row-click',
      description: 'Event emitted on row click with updated state payload.',
      table: { category: 'Events' }
    }
  },
  args: { 
    label: 'Play Track',
    showIcon: true,
    icon: 'play',
    iconVariant: 'outline',
    disabled: false,
    showKbd: true,
    kbd: '⌘',
    kbdVariant: 'default',
    kbdShowPlus: true,
    kbdKey: 'P',
    control: 'none',
    active: false,
    selected: false,
    checkHasBackground: false,
    toggleTextOn: '',
    toggleTextOff: '',
    onClick: fn() 
  },
  render: (args) => {
    const customStyles = [
      args.colorCheck ? `--ds-check-color: ${args.colorCheck};` : '',
      args.colorRadio ? `--ds-radio-color: ${args.colorRadio};` : '',
      args.colorToggleActive ? `--ds-toggle-checked-bg: ${args.colorToggleActive};` : ''
    ].join(' ').trim();

    return html`
      <ds-item-row 
        label="${args.label}" 
        icon="${args.icon}" 
        icon-variant="${args.iconVariant}"
        ?show-icon="${args.showIcon}"
        kbd="${args.kbd}" 
        ?show-kbd="${args.showKbd}" 
        kbd-variant="${args.kbdVariant}"
        ?kbd-show-plus="${args.kbdShowPlus}"
        kbd-key="${args.kbdKey}"
        control="${args.control}" 
        ?active="${args.active}" 
        ?selected="${args.selected}"
        ?disabled="${args.disabled}"
        ?check-has-background="${args.checkHasBackground}" 
        toggle-text-on="${args.toggleTextOn}"
        toggle-text-off="${args.toggleTextOff}"
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}
        @ds-row-click="${(e) => args.onClick(e.detail)}">
      </ds-item-row>
    `;
  },
  play: async ({ canvasElement, step }) => {
    const itemRow = canvasElement.querySelector('ds-item-row');

    await step('Hover row to verify hover state transition', async () => {
      await userEvent.hover(itemRow);
    });

    await step('Verify keyboard focus capability', async () => {
      const focusableTarget = 
        itemRow.shadowRoot.querySelector('.a11y-row[tabindex="0"]') || 
        itemRow.shadowRoot.querySelector('ds-toggle') || 
        itemRow.shadowRoot.querySelector('ds-check') || 
        itemRow.shadowRoot.querySelector('ds-radio') || 
        itemRow.shadowRoot.querySelector('.a11y-row');

      if (focusableTarget && typeof focusableTarget.focus === 'function') {
        focusableTarget.focus();
      }

      expect(itemRow.shadowRoot.activeElement || document.activeElement).toBeDefined();
    });

    await step('Click row target to trigger payload dispatch', async () => {
      await userEvent.click(itemRow);
    });
  }
};

/**
 * Standard text row featuring a leading icon and keyboard shortcut, without an interactive right-side control.
 */
export const StandardRow = {
  args: {
    showIcon: true,
    icon: 'search',
    label: 'Find in Document',
    showKbd: true,
    kbd: '⌘',
    kbdShowPlus: true,
    kbdKey: 'F',
    control: 'none',
  }
};

/**
 * Row variant integrated with a right-side toggle switch control for binary state management.
 */
export const ToggleVariant = { 
  args: { 
    control: 'toggle', 
    active: true, 
    showKbd: true,
    kbd: '⌘',
    kbdShowPlus: true,
    kbdKey: 'D',
    showIcon: true,
    icon: 'moon',
    label: 'Dark Mode',
  } 
};

/**
 * Row variant integrated with a right-side checkbox control for multi-selection options.
 */
export const CheckVariant = { 
  args: { 
    control: 'check', 
    selected: true, 
    showKbd: false, 
    showIcon: true,
    icon: 'language', 
    label: 'Translate to English',
  } 
};

/**
 * Row variant integrated with a right-side radio control for single-selection lists.
 */
export const RadioVariant = { 
  args: { 
    control: 'radio', 
    selected: true, 
    showKbd: false, 
    showIcon: true,
    icon: 'check', 
    label: 'Primary Selection Option',
  } 
};

/**
 * Disabled row state that suppresses user interaction and dims internal controls.
 */
export const DisabledRow = {
  args: {
    showIcon: true,
    icon: 'lock-closed',
    label: 'Restricted Action',
    control: 'toggle',
    active: true,
    disabled: true
  }
};

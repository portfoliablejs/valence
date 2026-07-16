import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { fn, expect, within, userEvent } from 'storybook/test';

// Import component definitions
import './Button';
import '../../molecules/Tooltip/Tooltip';

/**
 * `ds-button` is Valence's multi-use resource. It can be used in a wide variety of contexts, and particularly inside the `portfoliable` environment it has recommendations regarding its use. This component can be seen in a variety of molecules, such as `ds-breadcrumb`, `ds-video-player` and many more.  
 */
export default {
  title: 'Atoms/Button [v1.0.0]',
  component: 'ds-button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', 
  },
  decorators: [
    (Story) => html`
      <div style="
        padding: 30px; 
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
    // --- 1. BUTTON (Core & Icon) ---
    variant: {
      name: 'variant',
      description: 'Select the visual style and functional variant.',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text', 'icon', 'floating'],
      table: { category: 'Button', subcategory: 'Core', defaultValue: { summary: 'primary' } },
    },
    label: {
      name: 'label',
      description: 'The text content for the button (Ignored in icon-only variant).',
      control: 'text',
      table: { category: 'Button', subcategory: 'Core' },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Essential for accessibility on icon-only buttons.',
      control: 'text',
      table: { category: 'Button', subcategory: 'Core' },
    },
    disabled: {
      name: 'disabled',
      description: 'If true, the button is non-interactive.',
      control: 'boolean',
      table: { category: 'Button', subcategory: 'Core', defaultValue: { summary: 'false' } },
    },
    hasIcon: {
      name: 'hasIcon',
      description: 'Toggle to enable or disable the icon rendering.',
      control: 'boolean',
      table: { category: 'Button', subcategory: 'Icon', defaultValue: { summary: 'false' } },
    },
    icon: {
      name: 'icon',
      description: 'The name of the icon to display.',
      control: 'text',
      if: { arg: 'hasIcon' },
      table: { category: 'Button', subcategory: 'Icon' },
    },
    iconVariant: {
      name: 'iconVariant',
      description: 'Select icon variant style (outline or fill).',
      control: { type: 'select' },
      options: ['outline', 'fill'],
      if: { arg: 'hasIcon' },
      table: { category: 'Button', subcategory: 'Icon', defaultValue: { summary: 'outline' } },
    },
    iconPosition: {
      name: 'iconPosition',
      description: 'Position of the icon relative to the text label.',
      control: 'radio',
      options: ['left', 'right'],
      if: { arg: 'hasIcon' },
      table: { category: 'Button', subcategory: 'Icon', defaultValue: { summary: 'left' } },
    },

    // --- 2. TOOLTIP (Config, KBD Config, & Sub-Atomic Props) ---
    showTooltip: {
      name: 'showTooltip',
      description: 'Toggle whether to render the tooltip component in the DOM.',
      control: 'boolean',
      table: { category: 'Tooltip', subcategory: 'Config', defaultValue: { summary: 'true' } },
    },
    tooltipVisible: {
      name: 'tooltipVisible',
      description: 'Force the tooltip to remain visible without needing to hover.',
      control: 'boolean',
      table: { category: 'Tooltip', subcategory: 'Config', defaultValue: { summary: 'false' } },
    },
    tooltipText: {
      name: 'tooltipText',
      description: 'The message body rendered inside the tooltip container.',
      control: 'text',
      if: { arg: 'showTooltip' },
      table: { category: 'Tooltip', subcategory: 'Config' },
    },
    tooltipPosition: {
      name: 'tooltipPosition',
      description: 'Determines which direction the tooltip anchors relative to the button.',
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      if: { arg: 'showTooltip' },
      table: { category: 'Tooltip', subcategory: 'Config', defaultValue: { summary: 'top' } },
    },
    tooltipShowKbd: {
      name: 'tooltipShowKbd',
      description: 'The exclusive toggle switch to activate or deactivate the shortcut key indicator.',
      control: 'boolean',
      if: { arg: 'showTooltip' },
      table: { category: 'Tooltip', subcategory: 'KBD Config', defaultValue: { summary: 'false' } },
    },
    tooltipKbdLabel: {
      name: 'tooltipKbdLabel',
      description: 'Select the standard shortcut modifier function key.',
      control: { type: 'select' },
      options: ['⌥ Option', '⎇ Alt', '⇧ Shift', '⌘ Cmd', 'Ctrl', 'Esc', 'Backspace'],
      if: { arg: 'tooltipShowKbd' },
      table: { category: 'Tooltip', subcategory: 'KBD Config' },
    },
    tooltipKbdShowPlus: {
      name: 'tooltipKbdShowPlus',
      description: 'Toggles a combination plus operator inside the shortcut layout matrix.',
      control: 'boolean',
      if: { arg: 'tooltipShowKbd' },
      table: { category: 'Tooltip', subcategory: 'KBD Config', defaultValue: { summary: 'false' } },
    },
    tooltipKbdKey: {
      name: 'tooltipKbdKey',
      description: 'The secondary alphanumeric action key bound to multi-key shortcut sequences.',
      control: 'text',
      if: { arg: 'tooltipKbdShowPlus' },
      table: { category: 'Tooltip', subcategory: 'KBD Config' },
    },
    tooltipRadius: {
      name: 'tooltipRadius',
      description: 'Sub-atomic control to override the tooltip corner bounding geometry.',
      control: 'text',
      if: { arg: 'showTooltip' },
      table: { category: 'Tooltip', subcategory: 'Sub-Atomic Props', defaultValue: { summary: 'var(--radius-md)' } },
    },
    tooltipBackgroundColor: {
      name: 'tooltipBackgroundColor',
      description: 'Sub-atomic control to alter the backdrop surface color mask.',
      control: 'color',
      if: { arg: 'showTooltip' },
      table: { category: 'Tooltip', subcategory: 'Sub-Atomic Props', defaultValue: { summary: 'var(--color-overlay-dark)' } },
    },

    // --- 3. SUB-ATOMIC PROPS ---
    radius: {
      name: 'radius',
      description: 'Define a custom border-radius override (--btn-radius).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    backgroundColor: {
      name: 'backgroundColor',
      description: 'Override default background color (--btn-bg).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    borderWidth: {
      name: 'borderWidth',
      description: 'CSS value for border width (--btn-border-width).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    borderColor: {
      name: 'borderColor',
      description: 'CSS value for border color (--btn-border-color).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    hoverBackgroundColor: {
      name: 'hoverBackgroundColor',
      description: 'Override hover state background color (--btn-hover-bg).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    activeBackgroundColor: {
      name: 'activeBackgroundColor',
      description: 'Override active state background color (--btn-active-bg).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },

    // --- 4. EVENTS ---
    onClick: {
      name: 'onClick',
      description: 'Fires when clicked. View output in the Storybook "Actions" tab.',
      action: 'clicked',
      table: { 
        category: 'SUB-ATOMIC PROPS',
        subcategory: 'Events'
      },
    },
  },
  render: (args) => {
    const buttonStyles = [
      args.radius ? `--btn-radius: ${args.radius};` : '',
      args.backgroundColor ? `--btn-bg: ${args.backgroundColor};` : '',
      args.borderWidth ? `--btn-border-width: ${args.borderWidth};` : '',
      args.borderColor ? `--btn-border-color: ${args.borderColor};` : '',
      args.hoverBackgroundColor ? `--btn-hover-bg: ${args.hoverBackgroundColor};` : '',
      args.activeBackgroundColor ? `--btn-active-bg: ${args.activeBackgroundColor};` : ''
    ].join(' ').trim();

    const tooltipStyles = [
      args.tooltipRadius ? `--tooltip-radius: ${args.tooltipRadius};` : '',
      args.tooltipBackgroundColor ? `--tooltip-bg: ${args.tooltipBackgroundColor};` : ''
    ].join(' ').trim();

    return html`
      <div class="story-wrapper" style="position: relative; display: inline-flex;">
        <ds-button 
          variant=${args.variant}
          aria-label=${ifDefined(args.ariaLabel)}
          ?disabled=${args.disabled}
          icon=${ifDefined(args.hasIcon ? args.icon : undefined)}
          icon-position=${ifDefined(args.hasIcon ? args.iconPosition : undefined)}
          icon-variant=${ifDefined(args.hasIcon ? args.iconVariant : undefined)}
          style=${ifDefined(buttonStyles || undefined)}
          @click=${args.onClick}>
          ${args.variant !== 'icon' && args.variant !== 'floating' ? args.label : ''}
        </ds-button>
        
        ${args.showTooltip
          ? html`
              <ds-tooltip 
                text=${ifDefined(args.tooltipText)} 
                position=${ifDefined(args.tooltipPosition)}
                ?visible=${args.tooltipVisible}
                ?show-kbd=${args.tooltipShowKbd}
                kbd-label=${ifDefined(args.tooltipKbdLabel)}
                ?kbd-show-plus=${args.tooltipKbdShowPlus}
                kbd-key=${ifDefined(args.tooltipKbdKey)}
                style=${ifDefined(tooltipStyles || undefined)}>
              </ds-tooltip>
            `
          : ''
        }
      </div>
    `;
  },
};

/**
 * The Primary Button is mainly used as a Call-to-Action inside the Case Reader View, 
 * leading the user towards the Video Player View. 
 */
export const PrimaryButton = {
  args: {
    variant: 'primary',
    label: 'Play Video',
    hasIcon: true,
    icon: 'play',
    iconVariant: 'outline',
    iconPosition: 'left',
    showTooltip: true,
    tooltipVisible: false,
    tooltipText: 'Initiates video playback',
    tooltipPosition: 'top',
    tooltipShowKbd: true,
    tooltipKbdLabel: '⇧ Shift',
    tooltipKbdShowPlus: true,
    tooltipKbdKey: 'p',
  },
  play: async ({ canvasElement, step }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');

    await step('Verify initial tooltip state is hidden', async () => {
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });

    await step('Hover button to show tooltip', async () => {
      await userEvent.hover(button);
      expect(tooltip.hasAttribute('visible')).toBe(true);
    });

    await step('Unhover button to hide tooltip', async () => {
      await userEvent.unhover(button);
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });

    await step('Click the primary button', async () => {
      await userEvent.click(button);
    });
  },
};

/**
 * Also known as ye-ol-reliable, this little fellow is seen across the entire `portfoliable` user interface.
 */
export const SecondaryButton = {
  args: {
    variant: 'secondary',
    label: 'Repository',
    hasIcon: true,
    icon: 'link',
    iconPosition: 'right',
    showTooltip: true,
    tooltipVisible: false,
    tooltipText: 'View project repo',
    tooltipPosition: 'bottom',
    tooltipShowKbd: false,
  },
  play: async ({ canvasElement, step }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');

    await step('Verify right-side icon position attribute', async () => {
      expect(button.getAttribute('icon-position')).toBe('right');
    });

    await step('Focus button via keyboard to trigger tooltip', async () => {
      const internalButton = button.shadowRoot.querySelector('button');
      internalButton.focus();

      expect(document.activeElement).toBe(button);
      expect(tooltip.hasAttribute('visible')).toBe(true);
    });

    await step('Blur button to dismiss tooltip', async () => {
      const internalButton = button.shadowRoot.querySelector('button');
      internalButton.blur();
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });
  },
};

/**
 * Great companions for long paragraphs and standalone blocks of text, and not so great attention-grabbers.
 */
export const Text = {
  args: {
    variant: 'text',
    label: 'Learn More',
    hasIcon: false,
    showTooltip: false,
  },
  play: async ({ canvasElement, step }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');

    await step('Verify tooltip is NOT rendered in DOM', async () => {
      expect(tooltip).toBeNull();
    });

    await step('Verify text content', async () => {
      expect(button.textContent.trim()).toBe('Learn More');
    });

    await step('Click the text button', async () => {
      await userEvent.click(button);
    });
  },
};

/**
 * Inside `portfoliable`, used for Sharing case studies across social networks and generating unique URLs.
 */
export const IconOnly = {
  args: {
    variant: 'icon',
    hasIcon: true,
    icon: 'share',
    ariaLabel: 'Share content',
    showTooltip: true,
    tooltipVisible: false,
    tooltipText: 'Share content',
    tooltipPosition: 'right',
    tooltipShowKbd: false,
  },
  play: async ({ canvasElement, step }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');

    await step('Verify accessibility aria-label is delegated to internal button', async () => {
      const internalButton = button.shadowRoot.querySelector('button');
      expect(internalButton.getAttribute('aria-label')).toBe('Share content');
    });

    await step('Verify outer host element has scrubbed the prohibited attribute', async () => {
      expect(button.getAttribute('aria-label')).toBeNull();
    });

    await step('Verify internal text label is hidden', async () => {
      expect(button.textContent.trim()).toBe('');
    });

    await step('Hover to reveal tooltip', async () => {
      await userEvent.hover(button);
      expect(tooltip.hasAttribute('visible')).toBe(true);
    });
  },
};

/**
 * A circular, elevated button for critical, persistent actions, as seen in `ds-video-controls`. 
 */
export const Floating = {
  args: {
    variant: 'floating',
    hasIcon: true,
    icon: 'play',
    ariaLabel: 'Go Back',
    showTooltip: true,
    tooltipVisible: false,
    tooltipText: 'Play Video',
    tooltipPosition: 'left',
    tooltipShowKbd: true,
    tooltipKbdLabel: 'Esc',
    tooltipKbdShowPlus: false,
  },
  play: async ({ canvasElement, step }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');

    await step('Verify standard floating attributes', async () => {
      expect(button.getAttribute('variant')).toBe('floating');
      expect(tooltip.getAttribute('position')).toBe('left');
      expect(tooltip.hasAttribute('show-kbd')).toBe(true);
    });

    await step('Click the floating action button', async () => {
      await userEvent.click(button);
    });
  },
};
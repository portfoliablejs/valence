import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect } from 'storybook/test';
import './Pill';

/**
 * ## User Story
 * **As a** design system consumer and case study author,  
 * **I want** an accessible, auto-detecting `ds-pill` telemetry component,  
 * **So that** I can present live user connection stats, display hardware, memory allocation, and frame rates seamlessly inside case studies and interactive dashboards.
 *
 * ## Design System Attributes
 * - **Variants**: `default` (Tag / Category Badge) and `telemetry` (Overlay Glass with pulse dot).
 * - **Browser Telemetry Engine**: Live auto-detection across 8 Web API data streams (`rtt`, `network-type`, `downlink`, `online-status`, `fps`, `viewport`, `memory`, `battery`).
 * - **Accessibility**: Native Shadow DOM ARIA delegation with root-level class syncing for dark mode, high contrast (WCAG AAA), and dyslexia font stacks.
 */
export default {
  title: 'Atoms/Pill [v1.0.0]',
  component: 'ds-pill',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A compact informational tag used for metadata, categorization, or real-time device telemetry data.
When configured with \`variant="telemetry"\`, it can automatically read and update directly from browser APIs.
        `,
      },
    },
  },
  decorators: [
    (Story) => html`
      <div 
        class="canvas-buffer" 
        style="
          display: flex; 
          justify-content: center; 
          align-items: center; 
          padding: 24px;
        "
      >
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    // --- COMPONENT: CORE ---
    variant: {
      name: 'variant',
      description: 'Determines visual rendering and thematic style configuration.',
      control: { type: 'select' },
      options: ['default', 'telemetry'],
      table: { category: 'Component: Core', defaultValue: { summary: 'default' } },
    },
    label: {
      name: 'label',
      description: 'Explicit text string. When passed, it overrides slotted light DOM and auto-detected telemetry.',
      control: 'text',
      table: { category: 'Component: Core' },
    },
    showPulse: {
      name: 'showPulse',
      description: 'Controls visibility of the animated status dot indicator.',
      control: 'boolean',
      table: { category: 'Component: Core', defaultValue: { summary: 'false' } },
    },
    telemetryType: {
      name: 'telemetry-type',
      description: 'Selects the dynamic Web API browser metric when no explicit label is supplied in telemetry mode.',
      control: { type: 'select' },
      options: [
        'rtt',
        'network-type',
        'downlink',
        'online-status',
        'fps',
        'viewport',
        'memory',
        'battery',
      ],
      if: { arg: 'variant', eq: 'telemetry' },
      table: { category: 'Component: Core', defaultValue: { summary: 'rtt' } },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description: 'Accessibility label applied directly to the component for screen readers.',
      control: 'text',
      table: { category: 'Component: Core' },
    },
    pulseColor: {
      name: 'pulseColor',
      description: 'Overrides the status indicator dot color.',
      control: 'color',
      if: { arg: 'showPulse' },
      table: { category: 'Component: Core', defaultValue: { summary: 'var(--color-success)' } },
    },

    // --- SUB-ATOMIC PROPS ---
    radius: {
      name: 'radius',
      description: 'Sub-atomic modifier overriding corner bounding geometry variables (`--ds-pill-radius`).',
      control: 'text',
      table: { category: 'SUB-ATOMIC PROPS', defaultValue: { summary: 'var(--radius-pill)' } },
    },
    backgroundColor: {
      name: 'backgroundColor',
      description: 'Sub-atomic modifier overriding default backdrop shading (`--ds-pill-bg`).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
    textColor: {
      name: 'textColor',
      description: 'Sub-atomic modifier overriding default text color (`--ds-pill-color`).',
      control: 'color',
      table: { category: 'SUB-ATOMIC PROPS' },
    },
  },
  render: (args) => {
    const customStyles = [
      args.radius ? `--ds-pill-radius: ${args.radius};` : '',
      args.backgroundColor ? `--ds-pill-bg: ${args.backgroundColor};` : '',
      args.textColor ? `--ds-pill-color: ${args.textColor};` : '',
    ].join(' ').trim();

    return html`
      <ds-pill
        variant=${args.variant || 'default'}
        label=${ifDefined(args.label && args.label.trim() !== '' ? args.label : undefined)}
        ?show-pulse=${args.showPulse}
        telemetry-type=${ifDefined(args.telemetryType)}
        pulse-color=${ifDefined(args.pulseColor)}
        aria-label=${ifDefined(args.ariaLabel)}
        style=${ifDefined(customStyles || undefined)}>
      </ds-pill>
    `;
  },
};

/* ==========================================================================
   STORIES & INTERACTION TESTS
   ========================================================================== */

export const DefaultBaseline = {
  parameters: {
    docs: {
      description: {
        story: 'Renders the standard tag badge variant using a static label, hidden pulse dot, and proper ARIA accessibility roles.',
      },
    },
  },
  args: {
    variant: 'default',
    label: 'Case Study',
    showPulse: false,
    ariaLabel: 'Case Study Category Tag',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify role="status" and aria-label are present on host element', async () => {
      expect(component.getAttribute('role')).toBe('status');
      expect(component.getAttribute('aria-label')).toBe('Case Study Category Tag');
    });

    await step('Verify label text renders properly inside shadow root', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toBe('Case Study');
    });

    await step('Verify pulse dot is hidden in default mode', async () => {
      const pulseEl = component.shadowRoot.querySelector('.pulse-dot');
      expect(window.getComputedStyle(pulseEl).display).toBe('none');
    });
  },
};

export const InteractiveTelemetryMain = {
  parameters: {
    docs: {
      description: {
        story: 'Displays the primary interactive telemetry variant with dynamic Web API auto-detection and an animated pulse indicator enabled.',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'rtt',
    showPulse: true,
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify host element reflects telemetry variant and role', async () => {
      expect(component.getAttribute('variant')).toBe('telemetry');
      expect(component.getAttribute('role')).toBe('status');
    });

    await step('Verify live telemetry text updates dynamically', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent.length).toBeGreaterThan(0);
    });

    await step('Verify pulse dot element is displayed', async () => {
      const pulseEl = component.shadowRoot.querySelector('.pulse-dot');
      expect(window.getComputedStyle(pulseEl).display).not.toBe('none');
    });
  },
};

export const StaticTelemetry = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates telemetry styling with a custom static string override, custom pulse dot color, and specific screen reader accessibility labels.',
      },
    },
  },
  args: {
    variant: 'telemetry',
    label: 'Latency: 28ms',
    showPulse: true,
    ariaLabel: 'System Latency Metric: 28 milliseconds',
    pulseColor: '#34c759',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify pulse dot element is visible', async () => {
      const pulseEl = component.shadowRoot.querySelector('.pulse-dot');
      expect(window.getComputedStyle(pulseEl).display).not.toBe('none');
    });

    await step('Verify static label text renders in telemetry mode', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toBe('Latency: 28ms');
    });
  },
};

export const AutoDetectedRTT = {
  parameters: {
    docs: {
      description: {
        story: 'Auto-detects and displays estimated round-trip network latency (RTT) using the browser Network Information API stream.',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'rtt',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify RTT latency metric formats and displays correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Latency|Status/);
    });
  },
};

export const AutoDetectedNetworkType = {
  parameters: {
    docs: {
      description: {
        story: 'Auto-detects active effective connection speed type (e.g., 4G, 3G, slow-2G) from the client environment.',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'network-type',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify network effective type displays', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Network:/);
    });
  },
};

export const AutoDetectedDownlink = {
  parameters: {
    docs: {
      description: {
        story: 'Auto-detects downstream network connection bandwidth metrics formatted in megabits per second (Mbps).',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'downlink',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify download speed metric displays Mbps value', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Speed:/);
    });
  },
};

export const AutoDetectedOnlineStatus = {
  parameters: {
    docs: {
      description: {
        story: 'Tracks real-time online/offline network connectivity state directly via browser window event listeners.',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'online-status',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify online/offline status displays correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Status: (ONLINE|OFFLINE)/);
    });
  },
};

export const AutoDetectedFPS = {
  parameters: {
    docs: {
      description: {
        story: 'Calculates live rendering frame rates (FPS) using requestAnimationFrame loop sampling.',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'fps',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify FPS render counter initializes', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Render:/);
    });
  },
};

export const AutoDetectedViewport = {
  parameters: {
    docs: {
      description: {
        story: 'Reads current viewport dimension metrics (width × height) alongside Device Pixel Ratio (DPR).',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'viewport',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify viewport dimensions and DPR display correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/\d+ × \d+ @ \d+x/);
    });
  },
};

export const AutoDetectedMemory = {
  parameters: {
    docs: {
      description: {
        story: 'Retrieves current JavaScript performance heap memory allocation using the Performance Memory API.',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'memory',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify RAM allocation displays correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/RAM: \d+ MB/);
    });
  },
};

export const AutoDetectedBattery = {
  parameters: {
    docs: {
      description: {
        story: 'Queries device power state and charge percentage using the standard Navigator Battery Status API.',
      },
    },
  },
  args: {
    variant: 'telemetry',
    telemetryType: 'battery',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify battery level or status displays correctly', async () => {
      const labelEl = component.shadowRoot.querySelector('.pill-label');
      expect(labelEl.textContent).toMatch(/Battery:|Charging/);
    });
  },
};

export const FullTelemetrySuite = {
  parameters: {
    docs: {
      description: {
        story: 'Displays a comprehensive grid layout running all 8 telemetry auto-detection streams concurrently.',
      },
    },
  },
  render: () => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; max-width: 800px;">
      <ds-pill variant="telemetry" telemetry-type="rtt"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="network-type"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="downlink"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="online-status"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="fps"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="viewport"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="memory"></ds-pill>
      <ds-pill variant="telemetry" telemetry-type="battery"></ds-pill>
    </div>
  `,
  play: async ({ canvasElement, step }) => {
    const pills = canvasElement.querySelectorAll('ds-pill');

    await step('Verify all 8 telemetry pills render in the gallery suite', async () => {
      expect(pills.length).toBe(8);
    });

    await step('Verify each pill in the suite has updated its text content', async () => {
      pills.forEach((pill) => {
        const labelEl = pill.shadowRoot.querySelector('.pill-label');
        expect(labelEl.textContent.length).toBeGreaterThan(0);
      });
    });
  },
};

export const SubAtomicOverrides = {
  parameters: {
    docs: {
      description: {
        story: 'Illustrates sub-atomic design token overrides via inline CSS variables (`--ds-pill-bg`, `--ds-pill-color`, `--ds-pill-radius`).',
      },
    },
  },
  args: {
    variant: 'default',
    label: 'Custom Theme',
    radius: '4px',
    backgroundColor: '#5856D6',
    textColor: '#FFFFFF',
  },
  play: async ({ canvasElement, step }) => {
    const component = canvasElement.querySelector('ds-pill');

    await step('Verify inline custom CSS tokens exist on host element', async () => {
      const style = component.getAttribute('style');
      expect(style).toContain('--ds-pill-bg: #5856D6');
      expect(style).toContain('--ds-pill-color: #FFFFFF');
      expect(style).toContain('--ds-pill-radius: 4px');
    });
  },
};

import { html } from 'lit';
import './Toc.js';
import { userEvent, within, expect, fn } from 'storybook/test';

/* Standard 13-item pool used across default story preview iframes */
const mockHeadings = [
  { id: 'sales', label: 'Sales Overview', level: 1 },
  { id: 'new-quote', label: 'New Quote Creation', level: 2 },
  { id: 'manual-dispatch', label: 'Manual Quote Dispatch', level: 3 },
  { id: 'edit-quote', label: 'Edit Existing Quote', level: 3 },
  { id: 'when-not-to-send', label: 'When Not to Send Quote', level: 3 },
  { id: 'quote-preview', label: 'Quote Preview & Validation', level: 2 },
  { id: 'quote-acceptance', label: 'Quote Acceptance & Data Entry', level: 2 },
  { id: 'contract-generation', label: 'Contract Generation', level: 1 },
  { id: 'legal-compliance', label: 'Legal Terms & Compliance', level: 2 },
  { id: 'billing-schedule', label: 'Billing & Payment Schedule', level: 2 },
  { id: 'sla-coverage', label: 'SLA & Support Coverage', level: 2 },
  { id: 'appendix-a', label: 'Appendix A - Rate Card Token Maps', level: 1 },
  { id: 'appendix-b', label: 'Appendix B - Signature Sign-off', level: 1 },
];

export default {
  title: 'Atoms/TOC [v1.1.0]',
  component: 'ds-toc',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A presentational Table of Contents Atom supporting an Apple-like minimap strip, hover expandable contextual menu with custom item rows, smooth section scrolling, and scroll-to-top actions.',
      },
    },
  },
  argTypes: {
    // Component: Core
    opened: { control: 'boolean', table: { category: 'Core' } },
    'title-text': { control: 'text', table: { category: 'Core' } },
    'target-selector': { control: false, table: { category: 'Core' } },

    // SUB-ATOMIC PROPS
    '--ds-toc-position': { control: 'text', table: { category: 'SUB-ATOMIC PROPS' } },
    '--ds-toc-top': { control: 'text', table: { category: 'SUB-ATOMIC PROPS' } },
    '--ds-toc-right': { control: 'text', table: { category: 'SUB-ATOMIC PROPS' } },
    '--ds-toc-max-height': { control: 'text', table: { category: 'SUB-ATOMIC PROPS' } },
    '--ds-toc-line-color': { control: 'color', table: { category: 'SUB-ATOMIC PROPS' } },
    '--ds-toc-line-active-color': { control: 'color', table: { category: 'SUB-ATOMIC PROPS' } },
  },
  args: {
    opened: false,
    'title-text': 'CONTENTS',
    '--ds-toc-position': 'absolute',
    '--ds-toc-top': '50%',
    '--ds-toc-right': '24px',
    '--ds-toc-max-height': '380px',
    '--ds-toc-line-color': '#D9D9D9',
    '--ds-toc-line-active-color': '#000000',
  },
  render: (args) => {
    const styleArray = [
      args['--ds-toc-position'] ? `--ds-toc-position: ${args['--ds-toc-position']};` : '',
      args['--ds-toc-top'] ? `--ds-toc-top: ${args['--ds-toc-top']};` : '',
      args['--ds-toc-right'] ? `--ds-toc-right: ${args['--ds-toc-right']};` : '',
      args['--ds-toc-max-height'] ? `--ds-toc-max-height: ${args['--ds-toc-max-height']};` : '',
      args['--ds-toc-line-color'] ? `--ds-toc-line-color: ${args['--ds-toc-line-color']};` : '',
      args['--ds-toc-line-active-color'] ? `--ds-toc-line-active-color: ${args['--ds-toc-line-active-color']};` : '',
    ].filter(Boolean);

    const styleString = styleArray.length > 0 ? styleArray.join(' ') : undefined;

    return html`
      <!-- Container provides physical height context for Storybook rendering -->
      <div style="position: relative; min-height: 480px; width: 100%; box-sizing: border-box;">
        <ds-toc
          style=${styleString}
          ?opened=${args.opened}
          title-text=${args['title-text'] || undefined}
          .items=${mockHeadings}>
        </ds-toc>
      </div>
    `;
  },
};

export const ClosedMinimap = {
  args: {
    opened: false,
  },
};

export const OpenedMenu = {
  args: {
    opened: true,
  },
  play: async ({ canvasElement, step }) => {
    const toc = canvasElement.querySelector('ds-toc');

    await step('Verify TOC menu renders internally when opened', async () => {
      const menu = toc.shadowRoot.querySelector('.toc-menu');
      expect(menu).toBeTruthy();
    });

    await step('Verify 13 heading items populated in preview iframe', async () => {
      expect(toc.items.length).toBe(13);
    });

    await step('Select menu heading item and verify event dispatch', async () => {
      const menu = toc.shadowRoot.querySelector('.toc-menu');
      let selectEventFired = false;

      toc.addEventListener('ds-toc-select', (e) => {
        if (e.detail.id) selectEventFired = true;
      });

      menu.dispatchEvent(
        new CustomEvent('ds-select', {
          bubbles: true,
          composed: true,
          detail: { id: 'new-quote', label: 'New Quote Creation' }
        })
      );

      expect(selectEventFired).toBe(true);
    });
  },
};

export const ThirteenItemsOverflow = {
  args: {
    opened: true,
    'title-text': 'CONTENTS',
    '--ds-toc-max-height': '360px',
  },
  render: (args) => {
    const styleArray = [
      args['--ds-toc-position'] ? `--ds-toc-position: ${args['--ds-toc-position']};` : '',
      args['--ds-toc-top'] ? `--ds-toc-top: ${args['--ds-toc-top']};` : '',
      args['--ds-toc-right'] ? `--ds-toc-right: ${args['--ds-toc-right']};` : '',
      args['--ds-toc-max-height'] ? `--ds-toc-max-height: ${args['--ds-toc-max-height']};` : '',
    ].filter(Boolean);

    const styleString = styleArray.length > 0 ? styleArray.join(' ') : undefined;

    return html`
      <div style="position: relative; min-height: 520px; width: 100%; box-sizing: border-box;">
        <ds-toc
          style=${styleString}
          ?opened=${args.opened}
          title-text=${args['title-text'] || undefined}
          .items=${mockHeadings}>
        </ds-toc>
      </div>
    `;
  },
  play: async ({ canvasElement, step }) => {
    const toc = canvasElement.querySelector('ds-toc');

    await step('Verify 13 heading items populate into TOC custom element', async () => {
      expect(toc).toBeTruthy();
      expect(toc.items.length).toBe(13);
    });

    await step('Verify internal contextual menu renders with CONTENTS header', async () => {
      const menu = toc.shadowRoot.querySelector('.toc-menu');
      expect(menu).toBeTruthy();
      expect(menu.getAttribute('header-text')).toBe('CONTENTS');
    });
  },
};

export const WithActiveHeading = {
  args: {
    opened: true,
  },
  render: (args) => {
    const headingsWithActive = mockHeadings.map((h, i) => i === 1 ? { ...h, active: true } : h);
    return html`
      <div style="position: relative; min-height: 480px; width: 100%; box-sizing: border-box;">
        <ds-toc
          style="--ds-toc-position: absolute; --ds-toc-top: 50%; --ds-toc-right: 24px;"
          ?opened=${args.opened}
          title-text=${args['title-text'] || undefined}
          .items=${headingsWithActive}>
        </ds-toc>
      </div>
    `;
  },
};

export const CustomMaxHeight = {
  args: {
    opened: true,
    'title-text': 'CONTENTS',
    '--ds-toc-max-height': '220px',
  },
};

export const SubAtomicTokenOverrides = {
  args: {
    opened: false,
    '--ds-toc-position': 'absolute',
    '--ds-toc-top': '20%',
    '--ds-toc-line-color': '#2B71F0',
    '--ds-toc-line-active-color': '#FF3B30',
  },
};
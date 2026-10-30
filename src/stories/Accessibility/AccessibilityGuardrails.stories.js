import { html } from 'lit';
import { expect, userEvent, within } from 'storybook/test';

export default {
  title: 'Accessibility/Guardrails',
  parameters: {
    layout: 'centered',
  },
  render: () => html`
    <form @submit=${(event) => event.preventDefault()}>
      <label for="project-name">Project name</label>
      <input id="project-name" name="projectName" />
      <button type="submit">Save changes</button>
    </form>
  `,
};

export const AccessibleNamesAndKeyboardFocus = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: 'Project name' });
    const button = canvas.getByRole('button', { name: 'Save changes' });

    await expect(input).toHaveAccessibleName('Project name');
    await expect(button).toHaveAccessibleName('Save changes');

    await userEvent.tab();
    expect(document.activeElement).toBe(input);

    await userEvent.tab();
    expect(document.activeElement).toBe(button);

    await userEvent.keyboard('{Enter}');
    expect(document.activeElement).toBe(button);
  },
};

export const AccessibilityGlobals = {
  globals: {
    textDirection: 'rtl',
    theme: 'contrast',
    largeText: true,
    dyslexiaFont: true,
    reduceMotion: true,
    visibleFocus: true,
    forcedColors: true,
    showLiveRegions: true,
    visionDeficiency: 'blur',
  },
  play: async () => {
    const { documentElement } = document;

    expect(documentElement).toHaveAttribute('dir', 'rtl');
    expect(documentElement).toHaveClass(
      'a11y-high-contrast',
      'a11y-large-text',
      'a11y-dyslexia',
      'a11y-reduce-motion',
      'a11y-focus-mode',
      'a11y-forced-colors',
      'a11y-show-live-regions',
      'a11y-cb-blur',
    );
  },
};

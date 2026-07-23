import '../src/style.css';
import '../src/stories/sub-atomic/Mermaid/MermaidDiagram.js';
import '../src/index.js';

/**
 * Storybook decorator to apply accessibility, theme, and text direction rules globally.
 */
const withThemeAndAccessibility = (Story, context) => {
  const {
    textDirection,
    theme,
    largeText,
    dyslexiaFont,
    reduceMotion,
    visibleFocus,
    forcedColors,
    showLiveRegions,
    visionDeficiency, // 👈 Extract global parameter
  } = context.globals;

  const htmlElement = document.documentElement;

  // --- 1. Universal Text Direction ---
  htmlElement.setAttribute('dir', textDirection || 'ltr');

  // --- 2. Theme Management ---
  const themeClasses = ['a11y-dark-mode', 'a11y-high-contrast'];
  themeClasses.forEach((cls) => htmlElement.classList.remove(cls));

  if (theme === 'dark') {
    htmlElement.classList.add('a11y-dark-mode');
  } else if (theme === 'contrast') {
    htmlElement.classList.add('a11y-high-contrast');
  }

  // --- 3. Toggleable A11y Features ---
  htmlElement.classList.toggle('a11y-large-text', !!largeText);
  htmlElement.classList.toggle('a11y-dyslexia', !!dyslexiaFont);
  htmlElement.classList.toggle('a11y-reduce-motion', !!reduceMotion);
  htmlElement.classList.toggle('a11y-focus-mode', !!visibleFocus);
  htmlElement.classList.toggle('a11y-forced-colors', !!forcedColors);
  htmlElement.classList.toggle('a11y-show-live-regions', !!showLiveRegions);

  // --- 4. Colorblindness & Vision Deficiency Simulator ---
  const visionClasses = [
    'a11y-cb-deuteranopia',
    'a11y-cb-protanopia',
    'a11y-cb-tritanopia',
    'a11y-cb-achromatopsia',
    'a11y-cb-blur',
  ];
  visionClasses.forEach((cls) => htmlElement.classList.remove(cls));

  if (visionDeficiency && visionDeficiency !== 'none') {
    htmlElement.classList.add(`a11y-cb-${visionDeficiency}`);
  }

  return Story();
};

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    docs: {
      toc: {
        headingSelector: 'h2', // 👈 Only targets ## (<h2>) headings
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          'Getting Started',
          ['Introduction', 'Installation & Usage', 'Design Tokens', 'Theming & Accessibility',
            'Changelog', 'Disclaimers'],
          'Contributing', 
          'Sub-atomic',
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
        ],
      },
    },

    a11y: {
      test: 'todo',
    },
  },

  globalTypes: {
    textDirection: {
      name: 'Direction',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'transfer',
        items: [
          { value: 'ltr', title: 'LTR (Left-to-Right)', icon: 'transfer' },
          { value: 'rtl', title: 'RTL (Right-to-Left)', icon: 'undo' },
        ],
        showName: true,
      },
    },

    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'contrast', title: 'High Contrast', icon: 'contrast' },
        ],
        showName: true,
      },
    },

    // 👁️ Color Vision Deficiency Simulator Toolbar Entry
    visionDeficiency: {
      name: 'Vision Deficiency',
      description: 'Simulate colorblindness and low vision',
      defaultValue: 'none',
      toolbar: {
        icon: 'eye',
        items: [
          { value: 'none', title: 'Normal Vision', icon: 'eye' },
          { value: 'deuteranopia', title: 'Deuteranopia (Green-blind)', icon: 'eye' },
          { value: 'protanopia', title: 'Protanopia (Red-blind)', icon: 'eye' },
          { value: 'tritanopia', title: 'Tritanopia (Blue-blind)', icon: 'eye' },
          { value: 'achromatopsia', title: 'Achromatopsia (Monochrome)', icon: 'eye' },
          { value: 'blur', title: 'Blurred / Low Vision', icon: 'zoom' },
        ],
        showName: true,
      },
    },

    largeText: {
      name: 'Large Text',
      defaultValue: false,
      toolbar: {
        icon: 'zoom',
        items: [
          { value: false, title: 'Normal Text', icon: 'zoomreset' },
          { value: true, title: 'Large Text', icon: 'zoom' },
        ],
        showName: false,
      },
    },

    dyslexiaFont: {
      name: 'Dyslexia Font',
      defaultValue: false,
      toolbar: {
        icon: 'accessibility',
        items: [
          { value: false, title: 'Default Font', icon: 'document' },
          { value: true, title: 'Dyslexia Font', icon: 'accessibility' },
        ],
        showName: false,
      },
    },

    reduceMotion: {
      name: 'Reduce Motion',
      defaultValue: false,
      toolbar: {
        icon: 'play',
        items: [
          { value: false, title: 'With Motion', icon: 'play' },
          { value: true, title: 'No Motion', icon: 'stop' },
        ],
        showName: false,
      },
    },

    visibleFocus: {
      name: 'Focus Rings',
      defaultValue: false,
      toolbar: {
        icon: 'key',
        items: [
          { value: false, title: 'No Tab Outline', icon: 'cross' },
          { value: true, title: 'With Tab Outline', icon: 'check' },
        ],
        showName: false,
      },
    },

    forcedColors: {
      name: 'Forced Colors',
      defaultValue: false,
      toolbar: {
        icon: 'eye',
        items: [
          { value: false, title: 'Default Colors', icon: 'eyeclose' },
          { value: true, title: 'Forced Colors Mode', icon: 'eye' },
        ],
        showName: false,
      },
    },

    showLiveRegions: {
      name: 'Live Regions',
      defaultValue: false,
      toolbar: {
        icon: 'speaker',
        items: [
          { value: false, title: 'Hide Live Regions', icon: 'mute' },
          { value: true, title: 'Highlight Live Regions', icon: 'speaker' },
        ],
        showName: false,
      },
    },
  },

  decorators: [withThemeAndAccessibility],
};

export default preview;
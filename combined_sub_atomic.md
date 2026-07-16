## Path: src/stories/sub-atomic/Chromography/Chromography.mdx

```
import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Chromography" />

# Chromography

The Chromography system forms the core visual foundation of Valence. It is a curated set of colors exposed as CSS Custom Properties (design tokens) to ensure strict consistency, accessibility, and theming capabilities across all components and applications.

## Semantic Role Tokens (Theme Aware)

These are the primary tokens components should consume. They automatically adjust across **Light Mode**, **Dark Mode**, and **High Contrast Mode** without breaking component-level logic.

<ColorPalette>
  <ColorItem 
    title="Backgrounds & Surfaces" 
    subtitle="Core UI canvas, container surfaces, and borders" 
    colors={{ 
      '--color-bg': '#FFFFFF', 
      '--color-surface': '#F2F2F7', 
      '--color-surface-border': 'rgba(0, 0, 0, 0.08)' 
    }} 
  />

  <ColorItem 
    title="Text & Foreground Content" 
    subtitle="Primary headings, body text, and muted copy" 
    colors={{ 
      '--color-text-primary': '#000000', 
      '--color-text-secondary': '#323232', 
      '--color-text-muted': '#777777' 
    }} 
  />
</ColorPalette>


## Primitive Palette

Immutable baseline colors used to build semantic roles and specialized states.

<ColorPalette>
  <ColorItem 
    title="Base Primitives" 
    subtitle="Static absolute black, white, and player canvas" 
    colors={{ 
      '--color-white': '#FFFFFF', 
      '--color-black': '#000000', 
      '--color-player-bg': '#101218' 
    }} 
  />
  
  <ColorItem 
    title="Grayscale Scale" 
    subtitle="Raw grayscale primitives" 
    colors={{ 
      '--color-gray-dark': '#323232', 
      '--color-gray-med': '#777777', 
      '--color-gray-light': '#B2B2B2', 
      '--color-gray-xlight': '#D9D9D9' 
    }} 
  />
  
  <ColorItem 
    title="Semantic Feedback & Accents" 
    subtitle="Action triggers, states, and feedback indicators" 
    colors={{ 
      '--color-accent': '#2B71F0', 
      '--color-success': '#34C759', 
      '--color-error': '#FF3B30', 
      '--color-error-alt': '#D73A49' 
    }} 
  />

  <ColorItem 
    title="Overlays & Glass" 
    subtitle="Layering surfaces, backdrop blur accents, and modals" 
    colors={{ 
      '--color-overlay-dark': 'rgba(0, 0, 0, 0.85)', 
      '--color-overlay-light': 'rgba(255, 255, 255, 0.1)', 
      '--color-glass-bg': 'rgba(235, 235, 240, 0.6)' 
    }} 
  />
</ColorPalette>


## Usage Guidelines

When implementing styles in Web Components or application stylesheets, **always reference semantic role variables directly** (`--color-text-primary`, `--color-surface`, `--color-bg`) rather than hardcoding primitive hex or RGB values.

### Basic Implementation

```css
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-surface-border);
  color: var(--color-text-primary);
}

.button-primary {
  background-color: var(--color-text-primary);
  color: var(--color-bg);
}
```

## Sub-Atomic Property Overrides
To allow one-off background color customizations (or Storybook control overrides) without breaking token encapsulation, components consume background tokens using fallback variables:
```css
.variant-primary {
  /* Uses --custom-bg if defined; otherwise defaults to --color-text-primary */
  background: var(--custom-bg, var(--color-text-primary));
}
```

## Best Practices
- Semantic Priority: Prefer --color-text-primary and --color-surface over hardcoded --color-black or --color-white to ensure automatic dark mode and high-contrast compliance.
- Feedback Standards: Use --color-error and --color-success exclusively for feedback, validation, and status updates—never purely for decorative accenting.
- Accessibility (Contrast): Text rendered over --color-bg or custom container backgrounds maintains a contrast ratio meeting WCAG 2.1/2.2 AA guidelines (4.5:1 ratio for normal body text, 3:1 for large text).
```

---

## Path: src/stories/sub-atomic/Chromography/chromography.css

```
:root {
  /* ==========================================================================
     PRIMITIVE PALETTE (DO NOT OVERRIDE IN THEMES)
     ========================================================================== */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-player-bg: #101218;
  
  /* Gray Scale Primitives */
  --color-gray-dark: #323232;
  --color-gray-med: #777777;
  --color-gray-light: #B2B2B2;
  --color-gray-xlight: #D9D9D9;

  /* Semantic Feedback & Accents */
  --color-accent: #2B71F0;
  --color-success: #34C759;
  --color-error: #FF3B30;
  --color-error-alt: #D73A49;
  
  /* Overlays & Glass */
  --color-overlay-dark: rgba(0, 0, 0, 0.85);
  --color-overlay-light: rgba(255, 255, 255, 0.1);
  --color-glass-bg: rgba(235, 235, 240, 0.6);

  /* KBD & Tooltips */
  --color-kbd-border: rgba(0, 0, 0, 0.15);
  --color-tooltip-kbd-border: rgba(255, 255, 255, 0.2);

  /* ==========================================================================
     SEMANTIC ROLE TOKENS (LIGHT MODE DEFAULT)
     ========================================================================== */
  --color-bg: var(--color-white);
  --color-surface: #F2F2F7;
  --color-surface-border: rgba(0, 0, 0, 0.08);
  
  --color-text-primary: var(--color-black);
  --color-text-secondary: var(--color-gray-dark);
  --color-text-muted: var(--color-gray-med);
  
  /* Backward Compatibility Alias */
  --color-card-bg: var(--color-surface);
  --color-card-border: var(--color-surface-border);
}
```

---

## Path: src/stories/sub-atomic/Borderography/Borderography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Borderography"/>

# Borderography

The Borderography system defines standardized border widths and line styles across components. Paired with Curvography (border radii), it completes the structural framing of Valence interfaces.

<br />

## Border Width & Style Tokens

Border tokens manage outlines, structural dividers, focus rings, and card encasements.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Thin Border</strong></td>
      <td>`var(--border-width-thin)`</td>
      <td>`1px`</td>
      <td>Standard card outlines, table borders, input fields, dividers.</td>
    </tr>
    <tr>
      <td><strong>Medium Border</strong></td>
      <td>`var(--border-width-medium)`</td>
      <td>`2px`</td>
      <td>Selected states, tab highlights, active input rings.</td>
    </tr>
    <tr>
      <td><strong>Thick Border</strong></td>
      <td>`var(--border-width-thick)`</td>
      <td>`4px`</td>
      <td>Accessibility focus rings, prominent status banners.</td>
    </tr>
    <tr>
      <td><strong>Solid Style</strong></td>
      <td>`var(--border-style-solid)`</td>
      <td>`solid`</td>
      <td>Default border rendering across standard UI elements.</td>
    </tr>
    <tr>
      <td><strong>Dashed Style</strong></td>
      <td>`var(--border-style-dashed)`</td>
      <td>`dashed`</td>
      <td>File upload drop zones, placeholder containers.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Use standard border shorthand or explicit border variables when constructing component styles.

### CSS Example

```css
.card {
  border: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
}

.dropzone {
  border: var(--border-width-medium) var(--border-style-dashed) var(--color-gray-med);
}

.button:focus-visible {
  outline: var(--border-width-thick) var(--border-style-solid) var(--color-accent);
}
```

## Sub-Atomic Property Overrides

For dynamic border customization in molecules or story controls, components reference custom border variables before defaulting to design tokens:

```css
.card {
  border: var(--custom-border-width, var(--border-width-thin)) 
          var(--border-style-solid) 
          var(--custom-border-color, var(--color-card-border));
}
````

## Best Practices
- Explicit Thickness: Always use --border-width-thin (1px) for internal dividing lines and structural cards to keep UI geometry sharp and clean.
- Focus Rings: Standardize active accessibility focus indicators around --border-width-thick (4px) for clear keyboard visibility.
```

---

## Path: src/stories/sub-atomic/Borderography/borderography.css

```
:root {
  /* Border Width Tokens */
  --border-width-none: 0px;
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 4px;

  /* Border Style Tokens */
  --border-style-solid: solid;
  --border-style-dashed: dashed;
  --border-style-dotted: dotted;
}
```

---

## Path: src/stories/sub-atomic/Iconography/iconography.css

```
:host {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

svg {
  display: block;
  width: var(--icon-size, 24px);
  height: var(--icon-size, 24px);
  fill: var(--icon-fill, none);
  stroke: var(--icon-stroke, currentColor);
  stroke-width: var(--icon-stroke-width, 2);
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: all var(--speed-fast, 0.2s) ease;
}

/* Specific overrides for filled icons */
:host([name="play"]) svg,
:host([name="pause"]) svg {
  fill: currentColor;
  stroke: none;
}
```

---

## Path: src/stories/sub-atomic/Iconography/Iconography.mdx

```
import { Meta, IconGallery, IconItem } from '@storybook/addon-docs/blocks';
import { ICON_REGISTRY } from './Iconography.js';

<Meta title="Sub-atomic/Iconography" />

# Iconography

The Iconography system provides visual clarity and wayfinding across the Valence platform. Icons are exposed via the `<ds-icon>` Web Component and rendered directly from SVG vector paths using CSS Custom Properties for sizing and coloring.
<br />

## Icon Gallery

Below is the complete set of system icons available in the registry.

<IconGallery>
  {Object.keys(ICON_REGISTRY).map((iconName) => (
    <IconItem key={iconName} name={iconName}>
      <ds-icon name={iconName} size="24" />
    </IconItem>
  ))}
</IconGallery>

<br />

## CSS Variables & Styling

Icons inherit their color from `currentColor` by default and scale via CSS custom properties.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Property</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Size</strong></td>
      <td>`--icon-size`</td>
      <td>`var(--size-icon-lg)`</td>
    </tr>
    <tr>
      <td><strong>Fill</strong></td>
      <td>`--icon-fill`</td>
      <td>`none`</td>
    </tr>
    <tr>
      <td><strong>Stroke</strong></td>
      <td>`var(--icon-stroke)`</td>
      <td>`currentColor`</td>
    </tr>
    <tr>
      <td><strong>Stroke Width</strong></td>
      <td>`--icon-stroke-width`</td>
      <td>`2`</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Use the custom Web Component `<ds-icon>` directly in standard HTML, Web Components, or application templates.

### Basic Implementation

```html
<ds-icon name="search"></ds-icon>

<ds-icon name="check" size="32" color="var(--color-success)"></ds-icon>

<ds-icon name="play"></ds-icon>
<ds-icon name="pause"></ds-icon>
```

## Styling with CSS

```css
.action-button ds-icon {
  --icon-size: var(--size-icon-lg);
  --icon-stroke-width: 1.5;
  color: var(--color-accent);
}

.action-button:hover ds-icon {
  color: var(--color-black);
}
```

## Best Practices
- **Accessibility**: Ensure standalone interactive icons (like close buttons) include an `aria-label` directly on the `<ds-button>` parent component, as `<ds-icon>` internally sets `aria-hidden="true"`. *Note: Valence components automatically delegate and scrub host-level ARIA labels internally to maintain clean, compliant Light DOM trees across all modern browsers.*- Inheritance: Set color on the parent container to let icons inherit brand or feedback state colors automatically.
- Icon Sizing: Stick to multiples of 4px or 8px (16px, 20px, 24px, 32px) to maintain grid pixel alignment.
```

---

## Path: src/stories/sub-atomic/Iconography/Iconography.js

```
// The CSS is now a template literal string directly inside the component file.
const css = `
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    display: block;
    width: var(--icon-size, 24px);
    height: var(--icon-size, 24px);
    fill: var(--icon-fill, none);
    stroke: var(--icon-stroke, currentColor);
    stroke-width: var(--icon-stroke-width, 2);
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all var(--speed-fast, 0.2s) ease;
  }

  /* Specific overrides for filled icons */
  :host([name="play"]) svg,
  :host([name="pause"]) svg {
    fill: currentColor;
    stroke: none;
  }
`;

export const ICON_REGISTRY = {
  'play': `<path d="M8 5V19L19 12L8 5Z"/>`,
  'pause': `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`,
  'search': `<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,
  'close': `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`,
  'check': `<polyline points="20 6 9 17 4 12"></polyline>`,
  'lock-closed': `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>`,
  'lock-open': `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>`,
  'share': `<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>`,
  'linkedin': `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>`,
  'x': `<path d="M4 4l11.73 16h5L9 4H4z"></path><path d="M4 20l6.76-6.76"></path><path d="M20 4l-6.76 6.76"></path>`,
  'facebook': `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>`,
  'language': `<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>`,
  'accessibility': `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r="2" fill="currentColor" stroke="none"/><path d="M7 11h10M12 11v5m0 0l-3 5m3-5l3 5" stroke-linecap="round"/>`,
  'return': `<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>`,
  'chevron-right': `<path d="M9 18l6-6-6-6"/>`,
  'eye-open': `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`,
  'eye-closed': `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`,
  'autoscroll': `<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>`,
  'ask-ai': `<rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8.01" y2="16" /><line x1="16" y1="16" x2="16.01" y2="16" />`,
  'email': `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>`,
  'link': `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>`,
  'arrow-left-long': `<path d="M3.00781 16.7871C3.1543 17.168 3.48633 17.4121 3.83789 17.4121C4.41406 17.4121 4.85352 16.9922 4.85352 16.416C4.85352 16.123 4.6875 15.7422 4.58984 15.4883L1.65039 8.00781L1.65039 9.39453L4.58984 1.91406C4.6875 1.66016 4.85352 1.26953 4.85352 0.986328C4.85352 0.419922 4.41406 0 3.83789 0C3.48633 0 3.1543 0.234375 3.00781 0.615234L0.390625 7.27539C0.214844 7.72461 0 8.27148 0 8.70117C0 9.13086 0.214844 9.67773 0.390625 10.127Z" fill="currentColor" stroke="none"/>`,
  'text-size': `<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>`,
  'flag-shield': `<path d="M4 19V5a2 2 0 0 1 2-2h13.4a1 1 0 0 1 .8 1.6l-3 4.4H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2-2H6a2 2 0 0 1-2-2z"></path>`,
  'moon': `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`,
  'motion-play': `<polygon points="5 3 19 12 5 21 5 3"></polygon>`,
  'tab-nav': `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>`,
  'stop-return': `<path d="M20 16.5H13M13 16.5L16 13.5M13 16.5L16 19.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  'pirate-shield': `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>`
};

// The class name can be simple, even if the file is named Iconography.js
class Icon extends HTMLElement {
  static get observedAttributes() { return ['name', 'size', 'color']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <svg viewBox="0 0 24 24" aria-hidden="true" part="icon-svg"></svg>
    `;
  }
  connectedCallback() { this.render(); }
  attributeChangedCallback(name, oldValue, newValue) { if (oldValue !== newValue) { this.render(); } }
  render() {
    const svgEl = this.shadowRoot.querySelector('svg');
    const name = this.getAttribute('name');
    const size = this.getAttribute('size');
    const color = this.getAttribute('color');
    if (size) this.style.setProperty('--icon-size', `${size}px`);
    if (color) this.style.color = color;
    if (name && ICON_REGISTRY[name]) { svgEl.innerHTML = ICON_REGISTRY[name]; } else { svgEl.innerHTML = ''; }
  }
}

// The component tag name remains 'ds-icon' as requested.
if (!customElements.get('ds-icon')) {
  customElements.define('ds-icon', Icon);
}
```

---

## Path: src/stories/sub-atomic/Spatialography/spatialography.css

```
:root {
  /* Spacing Scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-xxl: 32px;
  --space-xxxl: 40px;
  --space-xxxxl: 80px;
  --space-xxxxxl: 100px;

  /* Z-Index Scale */
  --z-base: 10;
  --z-above: 20;
  --z-dropdown: 50;
  --z-fixed: 100;
  --z-overlay: 1000;
  --z-modal: 2000;
  --z-max: 10000;

    /* Scales */
  --btn-active-scale: 0.95; 
  --btn-hover-scale: 1.02;  
  --btn-hover-scale-lg: 1.05; 
}
```

---

## Path: src/stories/sub-atomic/Spatialography/Spatialography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Spatialography" />

# Spatialography

The Spatialography system defines the core structural dimensions and visual layering for Valence. By using standardized tokens for spacing and z-index elevations, layout consistency and visual rhythm are guaranteed across all components.

<br />

## Spacing Scale Tokens

Spacing tokens dictate margins, paddings, and layout gaps. Sticking strictly to the scale maintains rhythm and harmony across UI grids.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>XS</strong></td>
      <td>`var(--space-xs)`</td>
      <td>`4px`</td>
      <td>Tight internal spacing (icon gaps, micro-badges).</td>
    </tr>
    <tr>
      <td><strong>SM</strong></td>
      <td>`var(--space-sm)`</td>
      <td>`8px`</td>
      <td>Compact padding (button content gaps, form control paddings).</td>
    </tr>
    <tr>
      <td><strong>MD</strong></td>
      <td>`var(--space-md)`</td>
      <td>`12px`</td>
      <td>Standard internal element padding and list gaps.</td>
    </tr>
    <tr>
      <td><strong>LG</strong></td>
      <td>`var(--space-lg)`</td>
      <td>`16px`</td>
      <td>Default container padding and card spacing.</td>
    </tr>
    <tr>
      <td><strong>XL</strong></td>
      <td>`var(--space-xl)`</td>
      <td>`24px`</td>
      <td>Section spacing and larger component padding.</td>
    </tr>
    <tr>
      <td><strong>XXL</strong></td>
      <td>`var(--space-xxl)`</td>
      <td>`32px`</td>
      <td>Major layout gaps, card groupings, and section headers.</td>
    </tr>
    <tr>
      <td><strong>XXXL</strong></td>
      <td>`var(--space-xxxl)`</td>
      <td>`40px`</td>
      <td>Large structural margins and component separations.</td>
    </tr>
    <tr>
      <td><strong>XXXXL</strong></td>
      <td>`var(--space-xxxxl)`</td>
      <td>`80px`</td>
      <td>Hero section margins and primary page dividers.</td>
    </tr>
    <tr>
      <td><strong>XXXXXL</strong></td>
      <td>`var(--space-xxxxxl)`</td>
      <td>`100px`</td>
      <td>Maximum spatial padding for landing page sections.</td>
    </tr>
  </tbody>
</table>

<br />


## Z-Index Elevation Tokens

Z-index tokens manage screen depth layering to avoid stacking context conflicts across the application.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Level</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Base Layer</strong></td>
      <td>`var(--z-base)`</td>
      <td>`10`</td>
      <td>Default elevated elements above baseline page flow.</td>
    </tr>
    <tr>
      <td><strong>Above</strong></td>
      <td>`var(--z-above)`</td>
      <td>`20`</td>
      <td>Overlapping items, active card states, elevated headers.</td>
    </tr>
    <tr>
      <td><strong>Dropdown</strong></td>
      <td>`var(--z-dropdown)`</td>
      <td>`50`</td>
      <td>Context menus, select dropdowns, autocomplete options.</td>
    </tr>
    <tr>
      <td><strong>Fixed</strong></td>
      <td>`var(--z-fixed)`</td>
      <td>`100`</td>
      <td>Fixed navigation bars, persistent banners, sticky elements.</td>
    </tr>
    <tr>
      <td><strong>Overlay</strong></td>
      <td>`var(--z-overlay)`</td>
      <td>`1000`</td>
      <td>Backdrops, dimming layers behind modals and drawers.</td>
    </tr>
    <tr>
      <td><strong>Modal</strong></td>
      <td>`var(--z-modal)`</td>
      <td>`2000`</td>
      <td>Modal windows, dialogs, slide-over panels.</td>
    </tr>
    <tr>
      <td><strong>Max</strong></td>
      <td>`var(--z-max)`</td>
      <td>`10000`</td>
      <td>Global notifications, critical alerts, priority tooltips.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Always reference design variables directly when applying spacing, borders, or layer stacking. Do not hardcode arbitrary px values or manual z-indexes in custom styles.

### Component Layout Implementation

```css
.card {
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
  border-radius: var(--radius-md);
  transition: all var(--speed-normal) var(--ease-fluid);
}

.card:hover {
  z-index: var(--z-above);
}
```

---

## Path: src/stories/sub-atomic/Formography/Formography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Formography" />

# Formography

The Formography system defines design standards, structural geometry, validation state behaviors, and accessibility requirements across Valence form controls (inputs, textareas, selects, checkboxes, radios, and switches).

<br />

## Form Control Sizing & Target Bounds

Form elements leverage `Sizography` height tokens to align predictably on horizontal layout grids while meeting WCAG touch target recommendations.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Size Token</th>
      <th style={{ textAlign: 'left' }}>Control Height</th>
      <th style={{ textAlign: 'left' }}>Internal Padding</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>var(--size-height-sm)</code></td>
      <td><code>32px</code></td>
      <td><code>var(--space-xs) var(--space-sm)</code></td>
      <td>Compact form layouts, inline table controls, search bars.</td>
    </tr>
    <tr>
      <td><strong>Default: </strong><code>var(--size-height-md)</code></td>
      <td><code>40px</code></td>
      <td><code>var(--space-xs) var(--space-md)</code></td>
      <td>Standard form inputs, select dropdowns, and text inputs.</td>
    </tr>
    <tr>
      <td><code>var(--size-height-lg)</code></td>
      <td><code>48px</code></td>
      <td><code>var(--space-sm) var(--space-lg)</code></td>
      <td>Prominent mobile-first inputs and search interfaces (WCAG AAA touch target).</td>
    </tr>
  </tbody>
</table>

<br />

## Validation & Feedback States

Formography standardizes validation semantics across four structural states: **Default / Rest**, **Focus**, **Error / Invalid**, and **Success / Valid**.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>State</th>
      <th style={{ textAlign: 'left' }}>Border & Focus Color</th>
      <th style={{ textAlign: 'left' }}>Background / Icon Token</th>
      <th style={{ textAlign: 'left' }}>Accessibility Requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Rest</strong></td>
      <td><code>var(--color-gray-light)</code></td>
      <td><code>var(--color-bg)</code></td>
      <td>Label associated via <code>for</code> or <code>aria-labelledby</code>.</td>
    </tr>
    <tr>
      <td><strong>Active / Focus</strong></td>
      <td><code>var(--color-accent)</code></td>
      <td><code>outline: 3px solid var(--color-accent)</code></td>
      <td>Visible focus ring via <code>:focus-visible</code>.</td>
    </tr>
    <tr>
      <td><strong>Invalid / Error</strong></td>
      <td><code>var(--color-error)</code></td>
      <td>Helper text in <code>var(--color-error)</code></td>
      <td>Requires <code>aria-invalid="true"</code> and <code>aria-describedby="[error-id]"</code>.</td>
    </tr>
    <tr>
      <td><strong>Valid / Success</strong></td>
      <td><code>var(--color-success)</code></td>
      <td>Optional checkmark icon</td>
      <td>Communicates valid input criteria upon blur or submit.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Construct form inputs using sub-atomic border, sizing, and color tokens. Ensure label containers and helper messages maintain standard spatial hierarchy (`--space-xs` gaps).

### Text Input CSS Implementation

```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: 100%;
}

.input-control {
  height: var(--size-height-md);
  padding: 0 var(--space-md);
  font-family: var(--font-family);
  font-size: 16px;
  color: var(--color-black);
  background: var(--custom-bg, var(--color-bg));
  border: var(--border-width-thin) var(--border-style-solid) var(--color-gray-light);
  border-radius: var(--custom-radius, var(--radius-md));
  transition: border-color var(--anim-fast) var(--ease-fluid),
              box-shadow var(--anim-fast) var(--ease-fluid);
}

/* Active Focus State */
.input-control:focus-visible {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(43, 113, 240, 0.2);
}

/* Invalid / Error State */
.input-control[aria-invalid="true"] {
  border-color: var(--color-error);
}

.input-control[aria-invalid="true"]:focus-visible {
  box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.2);
}

/* Disabled State */
.input-control:disabled {
  opacity: var(--opacity-disabled);
  background: var(--color-card-bg);
  cursor: not-allowed;
}

```

## Accessible Form Anatomy

Every interactive form control must maintain an explicit, accessible structure connecting labels, inputs, and feedback messages.

```html
<div class="form-field">
  <!-- Explicit Label Binding -->
  <label for="email-input" class="p2" style="font-weight: 600; color: var(--color-black);">
    Email Address
  </label>
  
  <!-- Native Primitive Control -->
  <input 
    id="email-input"
    type="email" 
    class="input-control" 
    placeholder="user@valence.design"
    aria-invalid="true"
    aria-describedby="email-error"
  />

  <!-- Validation Feedback Message -->
  <span id="email-error" class="p2" style="color: var(--color-error); font-size: 14px;">
    Please enter a valid email address.
  </span>
</div>

```

## High Contrast & Dyslexia Mode Overrides

In high-contrast mode, form controls rely on high-visibility solid borders (`--border-width-medium`) rather than subtle background fills.

```css
/* High Contrast Mode Overrides */
:host([a11y-high-contrast]) .input-control {
  background: #000000 !important;
  color: #FFFFFF !important;
  border: var(--border-width-medium) var(--border-style-solid) #FFFFFF !important;
}

:host([a11y-high-contrast]) .input-control:focus-visible {
  outline: 4px solid #FFFFFF !important;
  outline-offset: 2px;
}

/* Dyslexia Mode Overrides */
:host([a11y-dyslexia]) .input-control {
  font-family: "Comic Sans MS", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
}

```

## Best Practices

* **Never Rely Solely on Color**: When communicating an invalid input state, pair `--color-error` borders with explanatory error text and an `aria-invalid="true"` attribute.
* **Form Association**: Always link labels to input fields using `for="[id]"` or nested structural markup. Avoid orphan form controls.
* **Helper Text Programmatic Association**: Always link helper or error messages to input fields using `aria-describedby="[message-id]"`.
* **Keyboard Navigation & Traps**: Ensure form fields support standard `Tab` and `Shift+Tab` flows without trapping focus inside custom shadow DOM boundaries.
```

---

## Path: src/stories/sub-atomic/Formography/formography.css

```
/* Light DOM Form Resets & Base Styles */
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: 100%;
  font-family: var(--font-family);
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-black);
  letter-spacing: -0.01em;
}

.input-control {
  box-sizing: border-box;
  width: 100%;
  height: var(--size-height-md);
  padding: 0 var(--space-md);
  font-family: var(--font-family);
  font-size: 16px;
  color: var(--color-black);
  background: var(--custom-bg, var(--color-bg));
  border: var(--border-width-thin) var(--border-style-solid) var(--color-gray-light);
  border-radius: var(--custom-radius, var(--radius-md));
  transition: border-color var(--anim-fast) var(--ease-fluid),
              box-shadow var(--anim-fast) var(--ease-fluid);
}

/* Control Sizing Variants */
.input-control-sm {
  height: var(--size-height-sm);
  padding: 0 var(--space-sm);
  font-size: 14px;
}

.input-control-lg {
  height: var(--size-height-lg);
  padding: 0 var(--space-lg);
  font-size: 18px;
}

/* Interaction & Validation States */
.input-control:hover:not(:disabled) {
  border-color: var(--color-gray-med);
}

.input-control:focus-visible {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(43, 113, 240, 0.2);
}

.input-control[aria-invalid="true"] {
  border-color: var(--color-error);
}

.input-control[aria-invalid="true"]:focus-visible {
  box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.2);
}

.input-control:disabled {
  opacity: var(--opacity-disabled);
  background: var(--color-card-bg);
  cursor: not-allowed;
}

.form-helper-text {
  font-size: 13px;
  color: var(--color-gray-med);
  line-height: 1.2;
}

.form-helper-text.error {
  color: var(--color-error);
}

.form-helper-text.success {
  color: var(--color-success);
}
```

---

## Path: src/stories/sub-atomic/Surfaceography/Surfaceography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Surfaceography" />

# Elevations & Surfaces

The Elevation system (also referred to as Surfaceography) defines spatial depth, surface hierarchy, and elevation layers across Valence interfaces. By pairing background surfaces with `Shadowgraphy` (box-shadows), `Depthography` (glass blurs), and `Spatialography` (z-index tokens), components maintain clear tactile separation and visual context across different visual layers.

<br />

## Surface Elevation Levels

Valence components occupy six discrete elevation levels. Standardizing surface tokens ensures consistent depth perception and predictable stacking contexts across applications.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Elevation Level</th>
      <th style={{ textAlign: 'left' }}>Surface Token</th>
      <th style={{ textAlign: 'left' }}>Shadow Token</th>
      <th style={{ textAlign: 'left' }}>Z-Index Token</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Level 0 (Canvas)</strong></td>
      <td><code>var(--color-bg)</code></td>
      <td><code>var(--shadow-none)</code></td>
      <td><code>auto</code></td>
      <td>Baseline application viewport canvas and primary page layout background.</td>
    </tr>
    <tr>
      <td><strong>Level 1 (Card / Surface)</strong></td>
      <td><code>var(--color-card-bg)</code></td>
      <td><code>var(--shadow-sm)</code></td>
      <td><code>var(--z-base)</code></td>
      <td>Embedded cards, table rows, static containers, and content blocks.</td>
    </tr>
    <tr>
      <td><strong>Level 2 (Raised / Floating)</strong></td>
      <td><code>var(--color-bg)</code></td>
      <td><code>var(--shadow-md)</code></td>
      <td><code>var(--z-above)</code></td>
      <td>Interactive floating action buttons, elevated cards on hover, and active tiles.</td>
    </tr>
    <tr>
      <td><strong>Level 3 (Overlay / Dropdown)</strong></td>
      <td><code>var(--color-bg)</code></td>
      <td><code>var(--shadow-lg)</code></td>
      <td><code>var(--z-dropdown)</code></td>
      <td>Context menus, select dropdowns, autocomplete panels, and tooltips.</td>
    </tr>
    <tr>
      <td><strong>Level 4 (Sticky / Fixed)</strong></td>
      <td><code>var(--overlay-glass-bg)</code></td>
      <td><code>var(--shadow-md)</code></td>
      <td><code>var(--z-fixed)</code></td>
      <td>Sticky navigation headers, persistent bottom action bars, and floating toolbars.</td>
    </tr>
    <tr>
      <td><strong>Level 5 (Modal / Dialog)</strong></td>
      <td><code>var(--color-bg)</code></td>
      <td><code>var(--shadow-xl)</code></td>
      <td><code>var(--z-modal)</code></td>
      <td>High-priority dialogs, modal windows, alert overlays, and slide-over drawers.</td>
    </tr>
  </tbody>
</table>

<br />

## Glassmorphic vs. Solid Surfaces

Elevations combine traditional shadow drop-shadows with backdrop blurs depending on surface opacity and atmospheric depth needs.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Surface Style</th>
      <th style={{ textAlign: 'left' }}>CSS Variable Combination</th>
      <th style={{ textAlign: 'left' }}>Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Solid Surface</strong></td>
      <td>
        <code>background: var(--color-bg);</code><br />
        <code>box-shadow: var(--shadow-md);</code>
      </td>
      <td>Standard dialogs, popovers, and opaque content cards where content below should be fully masked.</td>
    </tr>
    <tr>
      <td><strong>Glass Surface</strong></td>
      <td>
        <code>background: var(--overlay-glass-bg);</code><br />
        <code>backdrop-filter: blur(var(--overlay-glass-blur));</code><br />
        <code>-webkit-backdrop-filter: blur(var(--overlay-glass-blur));</code>
      </td>
      <td>Floating headers, persistent navigation bars, and contextual controls that maintain underlying scroll awareness.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Always reference existing sub-atomic tokens (`--shadow-*`, `--z-*`, `--color-*`) when declaring surface elevations. Do not introduce arbitrary box-shadow, blur, or z-index values in component stylesheets.

### Solid Surface Implementation

```css
.card-elevated {
  background: var(--custom-bg, var(--color-card-bg));
  border: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--anim-fast) var(--ease-fluid),
              transform var(--anim-fast) var(--ease-fluid);
}

.card-elevated:hover {
  z-index: var(--z-above);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

```

### Glassmorphic Elevated Floating Surface Implementation

```css
.floating-toolbar {
  position: sticky;
  top: 0;
  z-index: var(--z-fixed);
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
  border-bottom: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
  box-shadow: var(--shadow-sm);
}

```

## High Contrast & Accessibility Overrides

Under high-contrast accessibility mode (`.a11y-high-contrast`), subtle elevation shadows and glass blurs are suppressed in favor of explicit high-visibility borders to ensure clear structural separation.

```css
/* High Contrast surface elevation override */
:host([a11y-high-contrast]) .card-elevated,
:host([a11y-high-contrast]) .floating-toolbar {
  background: var(--color-bg) !important;
  box-shadow: var(--shadow-none) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: var(--border-width-medium) var(--border-style-solid) var(--color-black) !important;
}

```

## Best Practices

* **Light Source Direction**: All elevation shadows adhere to a top-down virtual light source for visual coherence across stacked components.
* **Z-Index Discipline**: Never set manual integer `z-index` values (e.g., `z-index: 9999`). Always map surface depth directly to `--z-*` tokens (`var(--z-dropdown)`, `var(--z-modal)`).
* **High-Contrast Fallbacks**: Always strip subtle box-shadows (`--shadow-none`) and apply explicit borders (`--border-width-medium`) when `:host([a11y-high-contrast])` is active.
* **Performance Awareness**: Use translucent glass surfaces (`backdrop-filter`) sparingly on persistent or large structural elements to maintain fast rendering performance on low-power devices.
```

---

## Path: src/stories/sub-atomic/Surfaceography/surfaceography.css

```
:root {
  /* Surface Elevation Variables */
  --surface-canvas: var(--color-bg);
  --surface-card: var(--color-card-bg);
  --surface-raised: var(--color-bg);
  --surface-overlay: var(--color-bg);
  --surface-glass: var(--overlay-glass-bg);
  --surface-modal: var(--color-bg);

  /* Surface Shadow Mapping */
  --surface-shadow-level-0: var(--shadow-none);
  --surface-shadow-level-1: var(--shadow-sm);
  --surface-shadow-level-2: var(--shadow-md);
  --surface-shadow-level-3: var(--shadow-lg);
  --surface-shadow-level-4: var(--shadow-md);
  --surface-shadow-level-5: var(--shadow-xl);
}

/* Surface Utility Classes */
.surface-canvas {
  background-color: var(--surface-canvas);
}

.surface-card {
  background-color: var(--surface-card);
  border: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
  box-shadow: var(--surface-shadow-level-1);
}

.surface-raised {
  background-color: var(--surface-raised);
  border: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
  box-shadow: var(--surface-shadow-level-2);
}

.surface-overlay {
  background-color: var(--surface-overlay);
  box-shadow: var(--surface-shadow-level-3);
  z-index: var(--z-dropdown);
}

.surface-glass {
  background: var(--surface-glass);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
  border-bottom: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
}

.surface-modal {
  background-color: var(--surface-modal);
  box-shadow: var(--surface-shadow-level-5);
  border-radius: var(--radius-lg);
  z-index: var(--z-modal);
}
```

---

## Path: src/stories/sub-atomic/index.css

```
/* This file acts as a single entry point for all foundational design tokens. */

@import './sub-atomic/choreography/choreography.css';
@import './typography.css';
@import './spacing.css';
@import './animations.css';
@import './overlays.css';
@import './accessibility.css';
```

---

## Path: src/stories/sub-atomic/Sizography/Sizography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Sizography" />

# Sizography

The Sizography system governs fixed structural dimensions across Valence. While Spatialography handles gaps, padding, and margins, Sizography establishes component height standards, icon bounding boxes, and container max-width constraints to guarantee predictable geometry across layouts.

<br />

## Height Tokens

Component height tokens standardise form inputs, buttons, chips, and table row dimensions to ensure interactive controls align predictably on horizontal grids.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>XS Height</strong></td>
      <td>`var(--size-height-xs)`</td>
      <td>`24px`</td>
      <td>Micro-controls, inline tags, compact badges.</td>
    </tr>
    <tr>
      <td><strong>Small Height</strong></td>
      <td>`var(--size-height-sm)`</td>
      <td>`32px`</td>
      <td>Compact buttons, dense table inputs, pagination controls.</td>
    </tr>
    <tr>
      <td><strong>Medium Height</strong></td>
      <td>`var(--size-height-md)`</td>
      <td>`40px`</td>
      <td>Default control height (standard buttons, form inputs, selects).</td>
    </tr>
    <tr>
      <td><strong>Large Height</strong></td>
      <td>`var(--size-height-lg)`</td>
      <td>`48px`</td>
      <td>Prominent CTA buttons, search inputs, mobile-friendly touch targets.</td>
    </tr>
    <tr>
      <td><strong>XL Height</strong></td>
      <td>`var(--size-height-xl)`</td>
      <td>`56px`</td>
      <td>Hero action controls, large modal action footers.</td>
    </tr>
  </tbody>
</table>

<br />

## Icon Size Tokens

Icon tokens specify explicit bounding-box dimensions for vector icons and avatars.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Small Icon</strong></td>
      <td>`var(--size-icon-sm)`</td>
      <td>`16px`</td>
      <td>Inline text icons, micro-badges, dense list actions.</td>
    </tr>
    <tr>
      <td><strong>Medium Icon</strong></td>
      <td>`var(--size-icon-md)`</td>
      <td>`20px`</td>
      <td>Standard button icons, input status indicators.</td>
    </tr>
    <tr>
      <td><strong>Large Icon</strong></td>
      <td>`var(--size-icon-lg)`</td>
      <td>`24px`</td>
      <td>Default standalone icon size (navigation items, headers).</td>
    </tr>
    <tr>
      <td><strong>XL Icon</strong></td>
      <td>`var(--size-icon-xl)`</td>
      <td>`32px`</td>
      <td>Feature card illustrations, empty-state indicators.</td>
    </tr>
  </tbody>
</table>

<br />

## Container Max-Width Tokens

Container constraints define maximum surface widths to enforce readable line lengths and responsive content layouts.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>XS Max Width</strong></td>
      <td>`var(--size-max-width-xs)`</td>
      <td>`320px`</td>
      <td>Popover menus, mobile drawers, narrow cards.</td>
    </tr>
    <tr>
      <td><strong>SM Max Width</strong></td>
      <td>`var(--size-max-width-sm)`</td>
      <td>`480px`</td>
      <td>Modal dialogs, authentication cards, focused forms.</td>
    </tr>
    <tr>
      <td><strong>MD Max Width</strong></td>
      <td>`var(--size-max-width-md)`</td>
      <td>`768px`</td>
      <td>Reading columns, documentation bodies, step wizards.</td>
    </tr>
    <tr>
      <td><strong>LG Max Width</strong></td>
      <td>`var(--size-max-width-lg)`</td>
      <td>`1024px`</td>
      <td>Standard page content containers, dashboard views.</td>
    </tr>
    <tr>
      <td><strong>XL Max Width</strong></td>
      <td>`var(--size-max-width-xl)`</td>
      <td>`1280px`</td>
      <td>Wide-screen layouts, data grid viewports.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Reference size tokens whenever declaring explicit widths or heights to guarantee visual uniformity across components.

### Form & Control Sizing

```css
.input-standard {
  height: var(--size-height-md);
  max-width: var(--size-max-width-sm);
}

.button-hero {
  height: var(--size-height-xl);
}

.button-hero ds-icon {
  --icon-size: var(--size-icon-lg);
}
```

## Layout Constraints
```css 
.article-container {
  width: 100%;
  max-width: var(--size-max-width-md);
  margin-inline: auto;
}

.dialog-surface {
  width: 100%;
  max-width: var(--size-max-width-sm);
}
```

## Best Practices
- Touch Target Accessibility: Use a minimum control height of `--size-height-lg` (48px) or `--size-height-md` (40px) on mobile-first interactive elements to satisfy WCAG touch target recommendations. 
- Heights vs. Min-Heights: Use height for fixed interactive controls (e.g., buttons, text inputs), but prefer min-height when applied to containers that may wrap text dynamically.
- Separation of Concerns: Never substitute spacing variables (`--space-*`) for component dimensions; use `--size-*` tokens for explicit width/height constraints.
```

---

## Path: src/stories/sub-atomic/Sizography/sizography.css

```
:root {
  /* Component Height Scale */
  --size-height-xs: 24px;
  --size-height-sm: 32px;
  --size-height-md: 40px;
  --size-height-lg: 48px;
  --size-height-xl: 56px;

  /* Icon Bounds Scale */
  --size-icon-sm: 16px;
  --size-icon-md: 20px;
  --size-icon-lg: 24px;
  --size-icon-xl: 32px;

  /* Container & Surface Max-Width Constraints */
  --size-max-width-xs: 320px;
  --size-max-width-sm: 480px;
  --size-max-width-md: 768px;
  --size-max-width-lg: 1024px;
  --size-max-width-xl: 1280px;
}
```

---

## Path: src/stories/sub-atomic/Layoutography/Layoutography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Layoutography" />

# Layoutography

The Layoutography system defines structural layout primitives, flow direction rules, grid alignments, and container constraints across Valence. By combining spatial scale tokens (`Spatialography`) and responsive breakpoints (`Gridography`), Layoutography provides standard architectural patterns for organizing UI components into cohesive views and composite molecules.

<br />

## Layout Primitives Overview

Valence standardizes layout construction around four primary structural layout primitives.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Primitive</th>
      <th style={{ textAlign: 'left' }}>Layout Pattern</th>
      <th style={{ textAlign: 'left' }}>Primary Tokens</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Stack</strong></td>
      <td>Vertical linear layout flow (flex-column)</td>
      <td><code>gap: var(--space-*)</code></td>
      <td>Form fields, card bodies, stacked content sections, sidebars.</td>
    </tr>
    <tr>
      <td><strong>Cluster</strong></td>
      <td>Horizontal wrapping flow (flex-row + wrap)</td>
      <td><code>gap: var(--space-*)</code></td>
      <td>Button groups, tag clouds, metadata chips, breadcrumbs.</td>
    </tr>
    <tr>
      <td><strong>Grid</strong></td>
      <td>Two-dimensional responsive column alignment</td>
      <td><code>var(--grid-columns-*)</code>, <code>var(--grid-gutter)</code></td>
      <td>Dashboard cards, media galleries, multi-column forms.</td>
    </tr>
    <tr>
      <td><strong>Dock / Sticky Footer</strong></td>
      <td>Fixed or persistent spatial anchoring</td>
      <td><code>var(--z-fixed)</code>, <code>var(--size-height-*)</code></td>
      <td>Fixed navigation bars, sticky action footers, media control bars.</td>
    </tr>
  </tbody>
</table>

<br />

## Container Max-Width Constraints

Layout containers use `Sizography` maximum width constraints to enforce readable line lengths and centered viewport bounds.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Container Class</th>
      <th style={{ textAlign: 'left' }}>CSS Variable Token</th>
      <th style={{ textAlign: 'left' }}>Max Width</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.container-xs</code></td>
      <td><code>var(--size-max-width-xs)</code></td>
      <td><code>320px</code></td>
      <td>Popover menus, mobile drawers, narrow cards.</td>
    </tr>
    <tr>
      <td><code>.container-sm</code></td>
      <td><code>var(--size-max-width-sm)</code></td>
      <td><code>480px</code></td>
      <td>Modal dialogs, authentication forms, focused cards.</td>
    </tr>
    <tr>
      <td><code>.container-md</code></td>
      <td><code>var(--size-max-width-md)</code></td>
      <td><code>768px</code></td>
      <td>Reading columns, case study content, step wizards.</td>
    </tr>
    <tr>
      <td><code>.container-lg</code></td>
      <td><code>var(--size-max-width-lg)</code></td>
      <td><code>1024px</code></td>
      <td>Standard application viewports and dashboard grids.</td>
    </tr>
    <tr>
      <td><code>.container-xl</code></td>
      <td><code>var(--size-max-width-xl)</code></td>
      <td><code>1280px</code></td>
      <td>Wide desktop views and full data grid screens.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines & CSS Implementations

Always rely on standardized spatial variables (`--space-*`) and grid variables when constructing component or page layouts. Avoid arbitrary margin or padding pixel overrides.

### 1. Vertical Stack Primitive (`.layout-stack`)

```css
.layout-stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--space-md); /* Standard default stack gap */
}

.layout-stack-tight {
  gap: var(--space-xs);
}

.layout-stack-loose {
  gap: var(--space-xl);
}

```

### 2. Horizontal Cluster Primitive (`.layout-cluster`)

```css
.layout-cluster {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
}

.layout-cluster-between {
  justify-content: space-between;
}

```

### 3. Responsive Application Grid (`.layout-grid`)

```css
.layout-grid {
  display: grid;
  gap: var(--grid-gutter, 24px);
  grid-template-columns: repeat(var(--grid-columns-mobile, 4), 1fr);
  width: 100%;
  max-width: var(--size-max-width-lg);
  margin-inline: auto;
}

@media (min-width: 768px) {
  .layout-grid {
    grid-template-columns: repeat(var(--grid-columns-tablet, 8), 1fr);
  }
}

@media (min-width: 1024px) {
  .layout-grid {
    grid-template-columns: repeat(var(--grid-columns-desktop, 12), 1fr);
  }
}

```

### 4. Dock / Sticky Header Primitive (`.layout-dock-header`)

```css
.layout-dock-header {
  position: sticky;
  top: 0;
  z-index: var(--z-fixed);
  width: 100%;
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
  border-bottom: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
  padding: var(--space-sm) var(--space-lg);
}

```

## Reduced Motion & Accessibility Overrides

When reduced motion (`.a11y-reduce-motion`) or high contrast (`.a11y-high-contrast`) is active, layout transitions and glass backdrop blurs automatically adjust to prevent rendering bugs and preserve legibility.

```css
/* High Contrast Layout Surface Reset */
:host([a11y-high-contrast]) .layout-dock-header {
  background: var(--color-bg) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-bottom: var(--border-width-medium) var(--border-style-solid) var(--color-black) !important;
}

/* Reduced Motion Layout Alignment */
:host([a11y-reduce-motion]) .layout-stack,
:host([a11y-reduce-motion]) .layout-grid {
  transition: none !important;
}

```

## Best Practices

* **Mobile-First Responsive Design**: Always declare default layout styles for mobile screens, using `min-width` media queries to expand layout columns as viewport width grows.
* **Strict Spatial Gaps**: Use explicit `gap` properties (`var(--space-*)`) on Flexbox and Grid containers instead of applying directional `margin-bottom` or `margin-right` on child elements.
* **Centering Containers**: Use `margin-inline: auto` combined with `--size-max-width-*` to center main page content columns cleanly across screens.
* **Z-Index Layering Integrity**: Ensure fixed docks or floating toolbars reference standardized elevation variables (`var(--z-fixed)`, `var(--z-overlay)`) rather than hardcoded integer values.
```

---

## Path: src/stories/sub-atomic/Layoutography/layoutography.css

```
/* Container Max-Width Utilities */
.container-xs { width: 100%; max-width: var(--size-max-width-xs); margin-inline: auto; }
.container-sm { width: 100%; max-width: var(--size-max-width-sm); margin-inline: auto; }
.container-md { width: 100%; max-width: var(--size-max-width-md); margin-inline: auto; }
.container-lg { width: 100%; max-width: var(--size-max-width-lg); margin-inline: auto; }
.container-xl { width: 100%; max-width: var(--size-max-width-xl); margin-inline: auto; }

/* Primitive 1: Stack Layout (Vertical Flex) */
.layout-stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--space-md);
}
.layout-stack-tight { gap: var(--space-xs); }
.layout-stack-loose { gap: var(--space-xl); }

/* Primitive 2: Cluster Layout (Horizontal Wrapping Flex) */
.layout-cluster {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
}
.layout-cluster-between { justify-content: space-between; }
.layout-cluster-end { justify-content: flex-end; }

/* Primitive 3: Responsive Application Grid */
.layout-grid {
  display: grid;
  gap: var(--grid-gutter, 24px);
  grid-template-columns: repeat(var(--grid-columns-mobile, 4), 1fr);
  width: 100%;
}

@media (min-width: 768px) {
  .layout-grid {
    grid-template-columns: repeat(var(--grid-columns-tablet, 8), 1fr);
  }
}

@media (min-width: 1024px) {
  .layout-grid {
    grid-template-columns: repeat(var(--grid-columns-desktop, 12), 1fr);
  }
}

/* Primitive 4: Dock & Fixed Containers */
.layout-dock-header {
  position: sticky;
  top: 0;
  z-index: var(--z-fixed);
  width: 100%;
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
  border-bottom: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
  padding: var(--space-sm) var(--space-lg);
}

.layout-dock-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background: var(--color-bg);
  border-top: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
  padding: var(--space-md) var(--space-lg);
}
```

---

## Path: src/stories/sub-atomic/Architecture/Architecture.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Architecture" />

# Web Component Architecture

The Web Component Architecture document defines platform-wide technical standards, Shadow DOM encapsulation patterns, state management strategies, and accessibility delegation protocols across Valence components.

<br />

## Core Architectural Principles

Valence Web Components adhere to four architectural tenets to guarantee cross-browser compatibility, framework-agnostic integration, and strict design token encapsulation.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Principle</th>
      <th style={{ textAlign: 'left' }}>Implementation Standard</th>
      <th style={{ textAlign: 'left' }}>Architectural Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Shadow DOM Encapsulation</strong></td>
      <td><code>`this.attachShadow({ mode: 'open' })`</code></td>
      <td>Isolates internal DOM structure and prevents application CSS leakages.</td>
    </tr>
    <tr>
      <td><strong>Sub-Atomic Property Overrides</strong></td>
      <td><code>var(--custom-*, var(--token-*))</code></td>
      <td>Allows component instance customization without breaking design token encapsulation.</td>
    </tr>
    <tr>
      <td><strong>Root Class Reflection</strong></td>
      <td><code>MutationObserver</code> on <code>document.documentElement</code></td>
      <td>Bypasses lack of <code>:host-context()</code> support in Safari/WebKit browsers.</td>
    </tr>
    <tr>
      <td><strong>ARIA Delegation & Scrubbing</strong></td>
      <td>Attribute delegation to internal focusable nodes</td>
      <td>Prevents <code>aria-prohibited-attr</code> violations on custom element host tags.</td>
    </tr>
  </tbody>
</table>

<br />

## Shadow DOM & CSS Token Encapsulation

Components consume scoped CSS via template literal injection or imported stylesheets. CSS custom variables cascade through the Shadow root boundary, allowing global sub-atomic tokens (`--color-*`, `--space-*`, `--radius-*`) to style internal shadow trees seamlessly.

### Sub-Atomic Fallback Override Pattern

To permit one-off customizations (or Storybook Control overrides) while maintaining token fallback integrity, component styles consume fallback variables:

```css
/* Custom background override with design token default */
.button-primary {
  background: var(--custom-bg, var(--color-black));
  border-radius: var(--custom-radius, var(--radius-pill));
  border: var(--custom-border-width, var(--border-width-thin)) 
          var(--border-style-solid) 
          var(--custom-border-color, var(--color-black));
}

```

## Cross-Browser Accessibility & Theme Reflection

The CSS pseudo-class `:host-context()` is unsupported in Safari and WebKit environments. To guarantee universal compatibility across Chrome, Safari, and Firefox, Web Components observe class mutations on `document.documentElement` and reflect active accessibility modes directly onto host attributes.

### MutationObserver Sync Pattern

```javascript
_observeRootAccessibility() {
  const root = this.ownerDocument.documentElement;

  const sync = () => {
    this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
    this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
    this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
    this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
  };

  sync(); // Initial execution on mount

  this._themeObserver = new MutationObserver(sync);
  this._themeObserver.observe(root, {
    attributes: true,
    attributeFilter: ['class'],
  });
}

disconnectedCallback() {
  if (this._themeObserver) {
    this._themeObserver.disconnect();
  }
}

```

### Host Attribute Styling Pattern

Components target boolean host attributes within internal stylesheets rather than relying on `:host-context()`:

```css
/* Dark mode floating element states */
:host([a11y-dark-mode]) .variant-floating {
  background: var(--custom-bg, var(--color-player-bg, #101218)) !important;
  color: var(--color-white) !important;          
  border: var(--border-width-medium) var(--border-style-solid) var(--color-surface-border) !important;
  box-shadow: var(--shadow-none) !important;
}
:host([a11y-dark-mode]) .variant-floating:hover:not(:disabled) {
  background-color: var(--custom-hover-bg, #1C1C1E) !important;
  border-color: var(--color-white) !important;
}

/* Dyslexia mode overrides */
:host([a11y-dyslexia]) button {
  font-family: "Comic Sans MS", "Comic Sans", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
}
```

## ARIA Delegation & Host Attribute Scrubbing

When generic Web Component tags receive descriptive properties like `aria-label`, leaving these attributes on the outer host element can trigger accessibility compliance errors (`aria-prohibited-attr`).

Valence components delegate ARIA properties to internal focusable nodes and scrub the host tag during lifecycle rendering updates.

### ARIA Delegation Lifecycle Pattern

```javascript
updateAttributes() {
  const ariaLabel = this.getAttribute('aria-label');
  const disabled = this.hasAttribute('disabled');

  if (this.buttonEl) {
    this.buttonEl.disabled = disabled;
  }

  // Delegate aria-label to internal primitive and scrub host element
  if (ariaLabel) {
    if (this.buttonEl) {
      this.buttonEl.setAttribute('aria-label', ariaLabel);
    }
    this.removeAttribute('aria-label'); // Keeps outer host DOM compliant
  }
}

```

## Layout & Slot Hygiene

To prevent unwanted whitespace or layout shifts caused by empty text nodes between HTML slot tags, component template rendering strings are compressed without extraneous whitespace surrounding shadow DOM primitives:

```javascript
constructor() {
  super();
  this.attachShadow({ mode: 'open' });
  
  // Compressed template string prevents ghost text nodes inside Shadow DOM layouts
  this.shadowRoot.innerHTML = `<style>${css}</style><button type="button"><ds-icon class="btn-icon" style="display: none;"></ds-icon><slot></slot></button>`;
}

```

## Best Practices

* **Memory Management**: Always call `this._themeObserver.disconnect()` inside `disconnectedCallback()` to prevent memory leaks when components unmount.
* **Observed Attributes Syncing**: List core properties (`variant`, `disabled`, `aria-label`, `icon`) inside `static get observedAttributes()` and trigger `updateAttributes()` on change.
* **Universal Safari Support**: Never use `:host-context()`. Always reflect root accessibility modifier classes to host boolean attributes (`:host([a11y-*])`).
* **Clean Shadow DOM**: Always delegate host accessibility attributes (`aria-label`) down to native interactive primitives (`<button>`, `<input>`) and remove them from the host wrapper tag.

```

---

## Path: src/stories/sub-atomic/Shadowgraphy/shadowgraphy.css

```
:root {
  /* Box Shadow / Elevation Tokens */
  --shadow-none: none;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-inset: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
```

---

## Path: src/stories/sub-atomic/Shadowgraphy/Shadowgraphy.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Shadowgraphy" />

# Shadowgraphy

The Shadowgraphy system provides standardized box shadows to express depth, elevation, and tactile separation across UI surfaces without relying on backdrop blurs.

<br />

## Shadow Tokens

Elevation shadows establish a spatial visual hierarchy by simulating light sources over background elements.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Small Elevation</strong></td>
      <td>`var(--shadow-sm)`</td>
      <td>`0 1px 2px 0 rgba(0, 0, 0, 0.05)`</td>
      <td>Subtle lift (interactive cards on hover, clickable tiles).</td>
    </tr>
    <tr>
      <td><strong>Medium Elevation</strong></td>
      <td>`var(--shadow-md)`</td>
      <td>`0 4px 6px -1px rgba(...)`</td>
      <td>Standard floating cards, dropdown menus, flyout popovers.</td>
    </tr>
    <tr>
      <td><strong>Large Elevation</strong></td>
      <td>`var(--shadow-lg)`</td>
      <td>`0 10px 15px -3px rgba(...)`</td>
      <td>Elevated drawer panels, sticky footers, active overlays.</td>
    </tr>
    <tr>
      <td><strong>XL Elevation</strong></td>
      <td>`var(--shadow-xl)`</td>
      <td>`0 20px 25px -5px rgba(...)`</td>
      <td>High-priority dialogs, hero modals, lightboxes.</td>
    </tr>
    <tr>
      <td><strong>Inset Shadow</strong></td>
      <td>`var(--shadow-inset)`</td>
      <td>`inset 0 2px 4px 0 rgba(...)`</td>
      <td>Sunken surfaces, active/pressed button states, form inputs.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Apply box shadows to elevated surfaces to signify interactive depth. Do not mix custom shadow spread or blur values in individual CSS files.

### CSS Example

```css
.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--speed-normal) var(--ease-fluid);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.modal-dialog {
  box-shadow: var(--shadow-xl);
}
```

## Best Practices
- Directional Light Consistency: All shadow tokens assume a consistent top-down virtual light source for visual coherence.
- Combining Depth: Use --shadow-* tokens for standard solid surfaces, and reserve --overlay-glass-* (Depthography) for translucent glass surfaces.
```

---

## Path: src/stories/sub-atomic/Depthography/Depthography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Depthography" />

# Depthography

The Depthography system provides standardized backdrop blurs, surface layering, and glassmorphic elevation effects to establish depth across Valence components. Using structured translucency and blur tokens creates spatial hierarchy while maintaining contextual awareness of underlying content.

<br />

## Depth Tokens

Depth tokens define atmospheric effects, translucency ratios, and backdrop blurs used to separate spatial layers.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token Name</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Glass Background</strong></td>
      <td>`var(--overlay-glass-bg)`</td>
      <td>`rgba(0, 0, 0, 0.1)`</td>
      <td>Base surface color for translucent elements, floating headers, and popovers.</td>
    </tr>
    <tr>
      <td><strong>Glass Blur</strong></td>
      <td>`var(--overlay-glass-blur)`</td>
      <td>`6px`</td>
      <td>Defines the backdrop blur intensity for depth-based separation.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Always reference depth design tokens via CSS variables or standard utility classes to maintain consistency across elevated UI elements.

### Utility Class Implementation

For standard layout structures, apply the `.foundation-glass` utility class directly to your container components.

```css
/* Global foundation glass utility */
.foundation-glass {
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
}
```

### CSS Variable Implementation
When crafting custom Web Components or scoped styles, combine the individual variables to match specific UI requirements.
```css
.sticky-header {
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.floating-panel {
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
}
```

## Best Practices
- **Layering & Hierarchy**: Limit glassmorphic surfaces to floating or overlay elements (e.g., sticky headers, modals, context menus) to prevent visual clutter and maintain visual hierarchy.
- **Cross-Browser Compatibilit**: Always include `-webkit-backdrop-filter` alongside standard `backdrop-filter` to guarantee full support across Safari and older WebKit-based browsers.
- **Readability & Contrast**: Ensure text overlaid on translucent background layers meets WCAG AA contrast standards regardless of dynamic content scrolling beneath the surface.
```

---

## Path: src/stories/sub-atomic/Depthography/depthography.css

```
:root {
  --overlay-glass-bg: rgba(0, 0, 0, 0.1);
  --overlay-glass-blur: 6px;
}

/* Utility class for global usage if needed */
.foundation-glass {
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
}
```

---

## Path: src/stories/sub-atomic/Typography/typography.css

```
:root {
  /* Fonts */
  --font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

/* Global Typography Resets (Applies to Light DOM) */
body {
  font-family: var(--font-family);
  color: var(--color-black);
  -webkit-font-smoothing: antialiased;
}

h1 { font-weight: 500; font-size: 38px; letter-spacing: -0.04em; line-height: 0.8; }
h2 { font-weight: 600; font-size: 36px; letter-spacing: -0.02em; line-height: 1.0; }
h3 { font-weight: 600; font-size: 20px; letter-spacing: -0.02em; line-height: 1.0; }
h4 { font-weight: 250; font-size: 22px; letter-spacing: -0.04em; line-height: 0.8; color: var(--color-gray-med); }

.p1 { font-weight: 400; font-size: 18px; letter-spacing: -0.02em; line-height: 1.1; }
.p2 { font-weight: 300; font-size: 17px; letter-spacing: -0.02em; line-height: 0.8; color: var(--color-gray-med); }
```

---

## Path: src/stories/sub-atomic/Typography/Typography.mdx

```
import { Meta, Typeset } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Typography" />

# Typography

The Typography system establishes standard font families, 
scales, weights, and letter-spacing for the Valence platform. Consistent typographic hierarchy ensures readability, 
structural flow, and visual balance across all interface text elements.

<br />
## Font Families

Valence uses system font stacks for optimal performance, native feel, and legibility across all platforms. 
Because browsers don't have to fetch external web fonts (like those from Google Fonts), you 
eliminate extra HTTP requests and avoid text-rendering delays like FOUT (Flash of Unstyled Text).

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Type</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value Stack</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Sans-Serif (Primary)</strong></td>
      <td>`var(--font-family)`</td>
      <td>`-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif`</td>
    </tr>
    <tr>
      <td><strong>Monospace</strong></td>
      <td>`var(--font-mono)`</td>
      <td>`"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`</td>
    </tr>
  </tbody>
</table>

<br />

## Headings Scale

Heading styles guide user scanning and define clear visual hierarchy.

**Font Family:** `var(--font-family)`  
**Sample:** *The quick brown fox jumps over the lazy dog*

<Typeset
  fontSizes={[
    '38px',
    '36px',
    '20px',
    '22px'
  ]}
  fontWeight={500}
  sampleText="The quick brown fox jumps over the lazy dog"
  fontFamily="var(--font-family)"
/>

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Element</th>
      <th style={{ textAlign: 'left' }}>Size</th>
      <th style={{ textAlign: 'left' }}>Weight</th>
      <th style={{ textAlign: 'left' }}>Line Height</th>
      <th style={{ textAlign: 'left' }}>Letter Spacing</th>
      <th style={{ textAlign: 'left' }}>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`<h1>`</td>
      <td>`38px`</td>
      <td>`500` (Medium)</td>
      <td>`0.8`</td>
      <td>`-0.04em`</td>
      <td>Default / `--color-black`</td>
    </tr>
    <tr>
      <td>`<h2>`</td>
      <td>`36px`</td>
      <td>`600` (Semi-Bold)</td>
      <td>`1.0`</td>
      <td>`-0.02em`</td>
      <td>Default / `--color-black`</td>
    </tr>
    <tr>
      <td>`<h3>`</td>
      <td>`20px`</td>
      <td>`600` (Semi-Bold)</td>
      <td>`1.0`</td>
      <td>`-0.02em`</td>
      <td>Default / `--color-black`</td>
    </tr>
    <tr>
      <td>`<h4>`</td>
      <td>`22px`</td>
      <td>`250` (Light)</td>
      <td>`0.8`</td>
      <td>`-0.04em`</td>
      <td>`var(--color-gray-med)`</td>
    </tr>
  </tbody>
</table>

<br />

## Body & Paragraph Scale

Paragraph tokens handle core body copy, descriptions, and supporting information.

**Font Family:** `var(--font-family)`  
**Sample:** *Lio started his career as a Graphic Designer, and fell in love with the intersection of design and technology.*

<Typeset
  fontSizes={[
    '18px',
    '17px'
  ]}
  fontWeight={400}
  sampleText="Lio started his career as a Graphic Designer, and fell in love with the intersection of design and technology."
  fontFamily="var(--font-family)"
/>

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Class</th>
      <th style={{ textAlign: 'left' }}>Size</th>
      <th style={{ textAlign: 'left' }}>Weight</th>
      <th style={{ textAlign: 'left' }}>Line Height</th>
      <th style={{ textAlign: 'left' }}>Letter Spacing</th>
      <th style={{ textAlign: 'left' }}>Color / Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.p1`</td>
      <td>`18px`</td>
      <td>`400` (Regular)</td>
      <td>`1.1`</td>
      <td>`-0.02em`</td>
      <td>Primary body text, lead paragraphs, card summaries.</td>
    </tr>
    <tr>
      <td>`.p2`</td>
      <td>`17px`</td>
      <td>`300` (Light)</td>
      <td>`0.8`</td>
      <td>`-0.02em`</td>
      <td>Secondary description text (`var(--color-gray-med)`).</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Typography resets are automatically applied to the Light DOM `body` tag. Use standard semantic HTML elements (`<h1>` - `<h4>`) or structural classes (`.p1`, `.p2`) when building Web Components.

### Basic Implementation

```html
<h1>Main Dashboard Header</h1>
<h2>Section Title</h2>
<h3>Sub-section Header</h3>
<h4 style="color: var(--color-gray-med);">Supporting Subtitle</h4>

<p class="p1">
  Lio started his career as a Graphic Designer, and fell in love with the intersection of design and technology.
</p>

<p class="p2">
  He holds a NN/g UX Certification, a postgrad degree in User Experience, and is currently pursuing a Master's in Computer Science at BSU with a focus on HCI.
</p>
```

## CSS Variable Usage
```css
.custom-title {
  font-family: var(--font-family);
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 0.8;
}

.code-snippet {
  font-family: var(--font-mono);
}
```

## Best Practices
- Semantic Hierarchy: Maintain logical heading depth (`<h1>` down to `<h4>`). Avoid skipping heading levels solely for visual sizing.
- Font Rendering: WebKit antialiasing (`-webkit-font-smoothing: antialiased`) is applied globally to maintain clean vector rendering across high-DPI and Retina displays.
- Color Contrast: Standard heading text renders against `--color-black`. For muted subtitles (`h4`, `.p2`), verify contrast compliance against light and dark background surfaces.

> **Note**: Differences in character widths and glyph sizing across various operating systems can affect how text flows, making complex, pixel-perfect designs harder to maintain.
```

---

## Path: src/stories/sub-atomic/Choreography/Choreography.mdx

```
import { Meta, Controls } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Choreography" />

# Choreography

The Choreography system provides standardized easing curves and timing values to bring fluid, responsive motion to Valence components. Using consistent motion principles ensures transitions feel purposeful, deliberate, and delightful across the entire platform.

<br />

## Easing Tokens

Easing functions dictate standard acceleration and deceleration curves for regular UI transitions.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Curve</th>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Description / Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Standard Ease</strong></td>
      <td>`var(--ease-standard)`</td>
      <td>`ease`</td>
      <td>Default CSS transition curve. Good for simple state changes.</td>
    </tr>
    <tr>
      <td><strong>Fluid Ease</strong></td>
      <td>`var(--ease-fluid)`</td>
      <td>`cubic-bezier(0.16, 1, 0.3, 1)`</td>
      <td>Starts fast and gently decelerates toward the end position. Ideal for modals, panels, and primary transitions.</td>
    </tr>
  </tbody>
</table>
*Hover over the cards to compare standard vs. fluid deceleration curves:*

<div style={{ display: 'flex', gap: '16px', margin: '20px 0', flexWrap: 'wrap' }}>
  <div 
    style={{
      padding: '20px 24px',
      background: '#f4f6f8',
      borderRadius: '8px',
      border: '1px solid #e1e4e8',
      cursor: 'pointer',
      width: '200px',
      transition: 'transform var(--anim-normal) var(--ease-standard)',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <strong style={{ fontSize: '14px' }}>Standard Ease</strong>
    <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}><code>var(--ease-standard)</code></p>
  </div>

  <div 
    style={{
      padding: '20px 24px',
      background: '#f4f6f8',
      borderRadius: '8px',
      border: '1px solid #e1e4e8',
      cursor: 'pointer',
      width: '200px',
      transition: 'transform var(--anim-normal) var(--ease-fluid)',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <strong style={{ fontSize: '14px' }}>Fluid Ease</strong>
    <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}><code>var(--ease-fluid)</code></p>
  </div>
</div>

<br />

## Physics & Motion Tokens

Physics curves mimic real-world mechanical behaviors or continuous motion.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Type</th>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Description / Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Spring Physics</strong></td>
      <td>`var(--anim-spring)`</td>
      <td>`cubic-bezier(0.34, 1.56, 0.64, 1)`</td>
      <td>A bouncy, overshooting curve mimicking natural physics. Great for micro-interactions and toggles.</td>
    </tr>
    <tr>
      <td><strong>Linear</strong></td>
      <td>`var(--anim-linear)`</td>
      <td>`linear`</td>
      <td>Constant speed throughout without acceleration. Continuous looping animations (e.g., loading spinners).</td>
    </tr>
  </tbody>
</table>

*Hover over the Spring card or watch the Linear spinner:*

<style>{`
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`}</style>

<div style={{ display: 'flex', gap: '16px', margin: '20px 0', alignItems: 'stretch', flexWrap: 'wrap' }}>
  {/* Spring Card */}
  <div 
    style={{
      padding: '16px 20px',
      background: '#f4f6f8',
      borderRadius: '8px',
      border: '1px solid #e1e4e8',
      cursor: 'pointer',
      width: '200px',
      height: '84px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyCenter: 'center',
      transition: 'transform var(--anim-fast) var(--anim-spring)',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <strong style={{ fontSize: '14px' }}>Spring Bounce</strong>
    <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}><code>var(--anim-spring)</code></p>
  </div>

  {/* Linear Spinner Card */}
  <div 
    style={{
      padding: '16px 20px',
      background: '#f4f6f8',
      borderRadius: '8px',
      border: '1px solid #e1e4e8',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      width: '200px',
      height: '84px',
      boxSizing: 'border-box',
    }}
  >
    <div 
      style={{
        width: '20px',
        height: '20px',
        minWidth: '20px',
        border: '3px solid #ccc',
        borderTopColor: '#0052cc',
        borderRadius: '50%',
        animation: 'spin 1s var(--anim-linear) infinite',
      }} 
    />
    <div>
      <strong style={{ fontSize: '14px', display: 'block', lineHeight: '1.2' }}>Linear</strong>
      <span style={{ fontSize: '12px', color: '#666' }}>Continuous loop</span>
    </div>
  </div>
</div>



<br />

## Duration Tokens

Duration tokens control the speed and timeframe of an animation from start to finish. Pair these values with easing curves to keep interface timing predictable.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Fast Speed</strong></td>
      <td>`var(--anim-fast)`</td>
      <td>`0.2s`</td>
      <td>Immediate micro-interactions (hover states, active feedback, tooltips).</td>
    </tr>
    <tr>
      <td><strong>Normal Speed</strong></td>
      <td>`var(--anim-normal)`</td>
      <td>`0.3s`</td>
      <td>Standard UI state transitions (dropdowns, accordions, toast notifications).</td>
    </tr>
    <tr>
      <td><strong>Slow Speed</strong></td>
      <td>`var(--anim-slow)`</td>
      <td>`0.4s`</td>
      <td>Large layout shifts (panel slides, modal entrances, page transitions).</td>
    </tr>
  </tbody>
</table>


*Hover over each card to feel the speed difference (`0.2s` vs `0.3s` vs `0.4s`):*

<div style={{ display: 'flex', gap: '16px', margin: '20px 0', flexWrap: 'wrap' }}>
  <div 
    style={{
      padding: '20px 24px',
      background: '#f4f6f8',
      borderRadius: '8px',
      border: '1px solid #e1e4e8',
      cursor: 'pointer',
      width: '160px',
      transition: 'transform var(--anim-fast) var(--ease-fluid)',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <strong style={{ fontSize: '14px' }}>Fast Speed</strong>
    <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}><code>0.2s</code></p>
  </div>

  <div 
    style={{
      padding: '20px 24px',
      background: '#f4f6f8',
      borderRadius: '8px',
      border: '1px solid #e1e4e8',
      cursor: 'pointer',
      width: '160px',
      transition: 'transform var(--anim-normal) var(--ease-fluid)',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <strong style={{ fontSize: '14px' }}>Normal Speed</strong>
    <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}><code>0.3s</code></p>
  </div>

  <div 
    style={{
      padding: '20px 24px',
      background: '#f4f6f8',
      borderRadius: '8px',
      border: '1px solid #e1e4e8',
      cursor: 'pointer',
      width: '160px',
      transition: 'transform var(--anim-slow) var(--ease-fluid)',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <strong style={{ fontSize: '14px' }}>Slow Speed</strong>
    <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}><code>0.4s</code></p>
  </div>
</div>

<br />

## Usage Guidelines

Always combine choreography tokens in standard CSS `transition` or `animation` shorthand properties. Do not hardcode custom `cubic-bezier` curves or timing values in individual components.

### CSS Example

```css
.card {
  /* Transition transform property using standard duration and fluid easing */
  transition: transform var(--anim-normal) var(--ease-fluid);
}

.card:hover {
  transform: translateY(-4px);
}

.button-toggle {
  /* Use spring physics for interactive feedback */
  transition: transform var(--anim-fast) var(--anim-spring);
}
```

## Keyframe Animation Example

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  animation: spin var(--anim-slow) var(--anim-linear) infinite;
}
```

## Reduced Motion Integration

When `.a11y-reduce-motion` is active on `document.documentElement`, all choreography timing tokens and scale transformations automatically reset to instant values to prevent vestibular triggers:

* `--component-transition` evaluates to `all 0s linear !important`
* `--btn-active-scale`, `--btn-hover-scale`, and `--btn-hover-scale-lg` evaluate to `1`
* Global `transition-duration` and `animation-duration` are forced to `0s` (This bulletproofs the UI against Safari/WebKit bugs that fail to parse `transition: none`).

This ensures interactive components respect user accessibility preferences automatically without requiring custom `@media (prefers-reduced-motion)` blocks in every single component.

## Best Practices
Purposeful Motion: Avoid animating elements unnecessarily. Every transition should communicate a state change or visual hierarchy shift to the user.
Accessibility (html.a11y-reduce-motion): Respect user accessibility settings by disabling or simplifying movement when reduced motion is requested.
```

---

## Path: src/stories/sub-atomic/Choreography/choreography.css

```
:root { 
  /* Timing */ 
  --anim-fast: 0.2s; 
  --anim-normal: 0.3s; 
  --anim-slow: 0.4s; 
  
  /* Physics */ 
  --anim-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy spring */ 
  --anim-linear: linear; 

  /* Speeds & Easing */
  --ease-standard: ease;
  --ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);

  /* Component Tokens (For Shadow DOM piercing) */
  --component-transition: all var(--anim-normal) var(--ease-fluid);
  
}
```

---

## Path: src/stories/sub-atomic/Accessibility/accessibility.css

```
/* ==========================================================================
   SIMPLIFIED DARK MODE
   ========================================================================== */
html.a11y-dark-mode {
  --color-bg: var(--color-player-bg);
  --color-surface: #1C1C1E;
  --color-surface-border: rgba(255, 255, 255, 0.12);
  
  --color-black: #FFFFFF;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #F5F5F5;
  --color-text-muted: #B2B2B2;
  
  --color-card-bg: var(--color-surface);
  --color-card-border: var(--color-surface-border);
  --color-kbd-border: rgba(255, 255, 255, 0.2);
}

/* ==========================================================================
   WCAG AAA HIGH CONTRAST MODE (BINARY 21:1 CONTRAST)
   ========================================================================== */
html.a11y-high-contrast {
  --color-bg: #000000;
  --color-surface: #000000;
  --color-surface-border: #FFFFFF;
  
  --color-black: #FFFFFF;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #FFFFFF;
  --color-text-muted: #FFFFFF;
  
  --color-gray-dark: #FFFFFF;
  --color-gray-med: #FFFFFF;
  --color-gray-light: #FFFFFF;
  
  --color-card-bg: #000000;
  --color-card-border: #FFFFFF;
  --border-width-thin: 2px;
  --border-width-medium: 3px;
  
  --color-kbd-border: #FFFFFF;
  --color-tooltip-kbd-border: #FFFFFF;
}

/* ==========================================================================
   FORCED COLORS / SYSTEM HIGH CONTRAST MODE
   ========================================================================== */
html.a11y-forced-colors {
  /* Override custom colors with System CSS Keywords */
  --color-bg: Canvas;
  --color-surface: Canvas;
  --color-text-primary: CanvasText;
  --color-text-secondary: CanvasText;
  --color-text-muted: GrayText;
  
  --color-card-bg: Canvas;
  --color-card-border: CanvasText;
  --color-surface-border: CanvasText;
  --border-width-thin: 1px;
  
  --a11y-focus-outline: 3px solid Highlight;
  --a11y-focus-offset: 2px;
}

/* ==========================================================================
   TYPOGRAPHY MODIFIERS
   ========================================================================== */
html.a11y-large-text {
  --font-scale-multiplier: 1.25;
}
html.a11y-large-text h1 { font-size: 48px !important; }
html.a11y-large-text h2 { font-size: 40px !important; }
html.a11y-large-text h3 { font-size: 28px !important; }
html.a11y-large-text .p1 { font-size: 22px !important; }
html.a11y-large-text .p2 { font-size: 20px !important; }

html.a11y-dyslexia * {
  font-family: "Comic Sans MS", "Comic Sans", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
}

/* ==========================================================================
   MOTION SUPPRESSION
   ========================================================================== */
html.a11y-reduce-motion {
  --component-transition: all 0s linear !important; 
  --btn-active-scale: 1; 
  --btn-hover-scale: 1; 
  --btn-hover-scale-lg: 1; 
}

html.a11y-reduce-motion *,
html.a11y-reduce-motion *::before,
html.a11y-reduce-motion *::after { 
  transition-duration: 0s !important;
  transition-delay: 0s !important;
  animation-duration: 0s !important;
  animation-delay: 0s !important;
  scroll-behavior: auto !important; 
}

/* ==========================================================================
   HIGH VISIBILITY FOCUS MODE
   ========================================================================== */
html.a11y-focus-mode {
  --a11y-focus-outline: 4px solid var(--color-accent);
  --a11y-focus-offset: 4px;
  --preview-focus-outline: 4px solid var(--color-accent);
}
```

---

## Path: src/stories/sub-atomic/Accessibility/Accessibility.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Accessibility" />

# Accessibility

The Accessibility system provides global theme overrides, high-contrast tokens, typography adjustments, motion suppressions, and focus indicators across Valence. Applied as root-level modifier classes on the `<html>` element, these accessibility features ensure the platform remains inclusive, WCAG AA/AAA compliant, and adaptable to individual user preferences.

<br />

## Color & Contrast System

To eliminate theme complexity and prevent color transition drift, theme overrides alter four core semantic roles (`--color-bg`, `--color-surface`, `--color-text-primary`, and `--color-surface-border`) rather than individual component primitives.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Modifier Class</th>
      <th style={{ textAlign: 'left' }}>Overridden Tokens</th>
      <th style={{ textAlign: 'left' }}>Values</th>
      <th style={{ textAlign: 'left' }}>Compliance & Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.a11y-dark-mode</code></td>
      <td>
        <code>--color-bg</code><br />
        <code>--color-surface</code><br />
        <code>--color-text-primary</code><br />
        <code>--color-text-secondary</code><br />
        <code>--color-surface-border</code>
      </td>
      <td>
        <code>#101218</code><br />
        <code>#1C1C1E</code><br />
        <code>#FFFFFF</code><br />
        <code>#F5F5F5</code><br />
        <code>rgba(255, 255, 255, 0.12)</code>
      </td>
      <td>WCAG AA compliant dark mode environment designed for low-light conditions and eye-strain reduction.</td>
    </tr>
    <tr>
      <td><code>.a11y-high-contrast</code></td>
      <td>
        <code>--color-bg</code><br />
        <code>--color-surface</code><br />
        <code>--color-text-primary</code><br />
        <code>--color-surface-border</code><br />
        <code>--border-width-thin</code>
      </td>
      <td>
        <code>#000000</code><br />
        <code>#000000</code><br />
        <code>#FFFFFF</code><br />
        <code>#FFFFFF</code><br />
        <code>2px</code>
      </td>
      <td>Maximum WCAG AAA binary contrast ratio (21:1) using solid white borders and black surfaces for low-vision users.</td>
    </tr>
  </tbody>
</table>

<br />

## Typography & Reading Preferences

Typography modifiers adjust scale multipliers and font families to aid users with dyslexia or low vision.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Modifier Class</th>
      <th style={{ textAlign: 'left' }}>Target Elements</th>
      <th style={{ textAlign: 'left' }}>Property Overrides</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.a11y-large-text</code></td>
      <td><code>h1</code>, <code>h2</code>, <code>h3</code>, <code>.p1</code>, <code>.p2</code></td>
      <td>
        <code>font-size: 48px / 40px / 28px / 22px / 20px</code><br />
        <code>--font-scale-multiplier: 1.25</code>
      </td>
      <td>Increases baseline typography hierarchy by 25% across heading and body levels for improved legibility.</td>
    </tr>
    <tr>
      <td><code>.a11y-dyslexia</code></td>
      <td><code>*</code> (All elements)</td>
      <td>
        <code>font-family: "Comic Sans MS", cursive, sans-serif</code><br />
        <code>letter-spacing: 0.05em</code><br />
        <code>word-spacing: 0.1em</code>
      </td>
      <td>Applies informal, heavily weighted letterforms and increased character/word spacing to assist dyslexic readers.</td>
    </tr>
  </tbody>
</table>

<br />

## Motion & Focus States

Motion and focus state modifiers allow users to suppress vestibulocochlear motion triggers and enforce high-visibility keyboard focus indicators.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Modifier Class</th>
      <th style={{ textAlign: 'left' }}>CSS Variables / Properties</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.a11y-reduce-motion</code></td>
      <td>
        <code>--component-transition</code><br />
        <code>--btn-active-scale</code>, <code>--btn-hover-scale</code><br />
        <code>animation-duration</code>, <code>transition-duration</code><br />
        <code>scroll-behavior</code>
      </td>
      <td>
        <code>all 0s linear !important</code><br />
        <code>1</code><br />
        <code>0s !important</code><br />
        <code>auto !important</code>
      </td>
      <td>Forces a 0-second duration on all keyframe animations, transitions, and smooth scrolling for motion sensitivity (preventing WebKit/Safari drop bugs).</td>
    </tr>
    <tr>
      <td><code>.a11y-focus-mode</code></td>
      <td>
        <code>--a11y-focus-outline</code><br />
        <code>--a11y-focus-offset</code><br />
        <code>--preview-focus-outline</code>
      </td>
      <td>
        <code>4px solid var(--color-accent)</code><br />
        <code>4px</code><br />
        <code>4px solid var(--color-accent)</code>
      </td>
      <td>Forces prominent 4px high-visibility focus rings on all interactive components during keyboard navigation.</td>
    </tr>
  </tbody>
</table>

> **Note**: `--preview-focus-outline` is strictly for previewing focus states inside Storybook iframe viewports.

<br />

### Screen Reader Live Region Debugging (`.a11y-show-live-regions`)

Dynamic UI announcements (such as toast notifications, form validation summaries, and status updates) rely on `aria-live`, `role="alert"`, or `role="status"` to inform assistive technology users of page changes without shifting focus.

Because live regions are non-visual by nature, enabling `.a11y-show-live-regions` in Storybook draws a **2px dashed pink outline** (`#ff007f`) around all live region containers and overlays a programmatic label showing the active politeness setting (`aria-live="polite"` vs `aria-live="assertive"`).

```html
<!-- Example rendered live region under debugger mode -->
<div role="status" aria-live="polite" class="toast-container">
  <!-- Highlighted with 2px dashed #ff007f outline and "📢 ARIA-LIVE (polite)" badge -->
  Profile updated successfully.
</div>
``` 
<br />

## Usage Guidelines

Accessibility modifier classes are applied directly to the root `<html>` node (`document.documentElement`). Multiple accessibility modifiers can be active simultaneously (e.g., combining `.a11y-dark-mode` with `.a11y-large-text` and `.a11y-reduce-motion`).

### Toggling Accessibility Modes in JavaScript

```javascript
// Enable Dark Mode & Large Text Mode
document.documentElement.classList.add('a11y-dark-mode', 'a11y-large-text');

// Enable High-Visibility Focus Mode
document.documentElement.classList.add('a11y-focus-mode');

// Disable Reduced Motion
document.documentElement.classList.remove('a11y-reduce-motion');

```

## Cross-Browser Web Component Support

CSS pseudo-class `:host-context()` is unsupported in WebKit (Safari / iOS) and causes style rules to fail silently. To achieve universal compatibility across Chrome, Safari, and Firefox, Web Components observe accessibility classes on `document.documentElement` using a `MutationObserver` and reflect them down as boolean attributes onto host elements (`<ds-button a11y-dark-mode>`).

> CSS within the Shadow DOM then targets standard `:host([a11y-*])` attribute selectors.

### Synchronizing Root Accessibility to Host Attributes

Web Components set up an observer to reflect root modifier classes across all six system states automatically:

```javascript
_observeRootAccessibility() {
  const root = this.ownerDocument.documentElement;

  const sync = () => {
    this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
    this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
    this.toggleAttribute('a11y-large-text', root.classList.contains('a11y-large-text'));
    this.toggleAttribute('a11y-dyslexia', root.classList.contains('a11y-dyslexia'));
    this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
    this.toggleAttribute('a11y-focus-mode', root.classList.contains('a11y-focus-mode'));
  };

  sync(); // Initial execution on mount

  this._themeObserver = new MutationObserver(sync);
  this._themeObserver.observe(root, {
    attributes: true,
    attributeFilter: ['class'],
  });
}

```

### Targeting Accessibility States in Component CSS

Target host attributes inside internal component stylesheets rather than using `:host-context()`:

```css
/* Dark mode primary button state transition */
:host([a11y-dark-mode]) .variant-primary {
  background: var(--custom-bg, var(--color-white));
  color: var(--color-player-bg, #101218);
}
:host([a11y-dark-mode]) .variant-primary:hover:not(:disabled) {
  background-color: var(--custom-hover-bg, var(--color-gray-xlight));
}

/* High Contrast mode interactive inversion on hover */
:host([a11y-high-contrast]) .variant-secondary:hover:not(:disabled),
:host([a11y-high-contrast]) .variant-floating:hover:not(:disabled) {
  background: #FFFFFF !important;
  color: #000000 !important;
  border-color: #FFFFFF !important;
}

/* Dyslexia mode typography overrides */
:host([a11y-dyslexia]) button {
  font-family: "Comic Sans MS", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
}
```

Target host attributes inside internal component stylesheets rather than using `:host-context()`:

```css
/* High Contrast floating surface override */
:host([a11y-high-contrast]) .variant-floating {
  background: transparent !important;
  color: var(--color-black) !important;
  border: var(--border-width-medium) var(--border-style-solid) var(--color-black) !important;
  box-shadow: var(--shadow-none) !important;
}

/* Dyslexia mode typography overrides */
:host([a11y-dyslexia]) button {
  font-family: "Comic Sans MS", cursive, sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
}

```

### Supporting Focus Tokens in Web Components

```css
button:focus-visible {
  outline: var(--a11y-focus-outline, 3px solid var(--color-accent));
  outline-offset: var(--a11y-focus-offset, 2px);
}

```

### Supporting Reduced Motion in Custom Styles

```css
button {
  transition: var(--component-transition, transform var(--anim-fast) var(--ease-fluid));
}

/* Reduced motion scale safety */
button:hover {
  transform: scale(var(--btn-hover-scale, 1.02));
}

```

## ARIA Attribute Delegation & Host Scrubbing

To prevent markup compliance violations (`aria-prohibited-attr`) on generic custom elements, components acting as structural wrappers for interactive native primitives must ingest and delegate accessibility properties.

When a component receives an `aria-label` or similar descriptive property, it mirrors the value to its focusable internal shadow node and scrubs it from the host tag before rendering finishes:

```javascript
if (ariaLabel) {
  this.buttonEl.setAttribute('aria-label', ariaLabel);
  this.removeAttribute('aria-label'); // Keeps outer host markup compliant
}

```

## Color Vision Deficiency & Low Vision Simulation

The Storybook environment includes SVG color matrix transformation filters that allow designers and developers to verify visual contrast and state distinctions for users with color vision deficiencies.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Deficiency Mode</th>
      <th style={{ textAlign: 'left' }}>Root Class</th>
      <th style={{ textAlign: 'left' }}>Underlying SVG Filter / CSS</th>
      <th style={{ textAlign: 'left' }}>Visual Impact & Audit Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Deuteranopia</strong></td>
      <td><code>.a11y-cb-deuteranopia</code></td>
      <td><code>filter: url('#deuteranopia')</code></td>
      <td>Green weakness (~5% of males). Verifies red/green state indicators do not rely solely on hue.</td>
    </tr>
    <tr>
      <td><strong>Protanopia</strong></td>
      <td><code>.a11y-cb-protanopia</code></td>
      <td><code>filter: url('#protanopia')</code></td>
      <td>Red weakness (~2.5% of males). Ensures red alerts and error borders maintain luminance contrast.</td>
    </tr>
    <tr>
      <td><strong>Tritanopia</strong></td>
      <td><code>.a11y-cb-tritanopia</code></td>
      <td><code>filter: url('#tritanopia')</code></td>
      <td>Blue weakness (rare). Verifies blue accents and focus rings remain distinct from dark gray backgrounds.</td>
    </tr>
    <tr>
      <td><strong>Achromatopsia</strong></td>
      <td><code>.a11y-cb-achromatopsia</code></td>
      <td><code>filter: grayscale(100%)</code></td>
      <td>Total colorblindness. Tests that all state changes rely on iconography, shape, or text labels—never color alone.</td>
    </tr>
    <tr>
      <td><strong>Low Vision / Blur</strong></td>
      <td><code>.a11y-cb-blur</code></td>
      <td><code>filter: blur(2px)</code></td>
      <td>Simulates cataracts or low visual acuity. Verifies target size separation and structural clarity.</td>
    </tr>
  </tbody>
</table>
<br />

## Keyboard Interaction & Testing Best Practices

When building custom Web Components that act as interactive widgets (`role="checkbox"`, `role="button"`):

* **Single Source of Truth**: Prefer listening to `keydown` events to catch `Space` and `Enter` keypresses, calling `e.preventDefault()` to prevent standard page scrolling.
* **Testing in Storybook**: When writing Storybook `play` functions for Web Components in iframe environments, prefer using `fireEvent.keyDown(component, { key: ' ' })` over `userEvent.keyboard(' ')`. This ensures the event reaches the element directly regardless of active window focus and avoids synthetic double-click event simulation.
<br />

## Windows Forced Colors Mode & High Contrast System Overrides

When Forced Colors Mode (such as Windows High Contrast Mode) is enabled via OS settings or simulated in Storybook (`forcedColors: true`), the browser overrides custom author colors, background fills, and CSS custom properties with system palette colors (`Canvas`, `CanvasText`, `Highlight`, `ButtonText`, etc.).

### System Color Keyword Mapping

Components must maintain clear visual boundaries and text contrast under Forced Colors Mode without breaking when standard background colors are stripped.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>System Color Keyword</th>
      <th style={{ textAlign: 'left' }}>Default Rendering</th>
      <th style={{ textAlign: 'left' }}>Component Target Area</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Canvas</code></td>
      <td>System background color (e.g., Pitch Black or Pure White)</td>
      <td>Card, modal, and popover background fills.</td>
    </tr>
    <tr>
      <td><code>CanvasText</code></td>
      <td>System primary text color</td>
      <td>Headings, body copy, and icons.</td>
    </tr>
    <tr>
      <td><code>Highlight</code></td>
      <td>System selected / active highlight color</td>
      <td>Selected tab indicators, active states, and focus rings.</td>
    </tr>
    <tr>
      <td><code>HighlightText</code></td>
      <td>System text color rendered over Highlight background</td>
      <td>Active button text and selected menu item copy.</td>
    </tr>
    <tr>
      <td><code>ButtonText</code></td>
      <td>System button text color</td>
      <td>Interactive control labels.</td>
    </tr>
    <tr>
      <td><code>GrayText</code></td>
      <td>System disabled element text color</td>
      <td>Disabled buttons, muted captions, and inactive form fields.</td>
    </tr>
  </tbody>
</table>

<br />

### Common Causes of "Disappearing" Components

If a component vanishes or loses its structure when Forced Colors Mode is toggled:

1. **Missing Transparent Borders**: In Forced Colors Mode, background colors are flattened to `Canvas`. Elements like cards or input fields without a `border` property become invisible.
   * **Fix**: Declare a transparent border on the default element state (`border: 1px solid transparent`). In forced colors mode, the system converts `transparent` borders to `CanvasText` borders automatically!
2. **Icons relying on CSS Fill instead of `currentColor`**: SVGs using static hex codes vanish or clash against high-contrast canvases.
   * **Fix**: Ensure SVG icons use `stroke: currentColor` or `fill: currentColor`.
3. **Focus Rings using `box-shadow`**: Forced Colors Mode strips all `box-shadow` styles.
   * **Fix**: Always use native `outline` or `:focus-visible` with `outline: 3px solid transparent` so the browser renders system focus indicators.

<br />

### Component CSS Pattern for Forced Colors Compatibility

Add forced color rules to your Web Component stylesheets under `:host([a11y-forced-colors])` or `@media (forced-colors: active)`:

```css
/* 1. Base control structure (always include transparent borders) */
.button,
.card-container,
.input-control {
  border: var(--border-width-thin) var(--border-style-solid) transparent;
}

/* 2. Forced Colors Mode Overrides */
:host([a11y-forced-colors]) .button,
@media (forced-colors: active) {
  /* Use system keywords so elements don't collapse into the canvas */
  .card-container {
    background-color: Canvas !important;
    color: CanvasText !important;
    border-color: CanvasText !important;
  }

  .button-primary {
    background-color: Highlight !important;
    color: HighlightText !important;
    border-color: Highlight !important;
  }

  .button:disabled,
  :host([disabled]) .button {
    color: GrayText !important;
    border-color: GrayText !important;
    opacity: 1 !important; /* Opacity can cause illegibility in high contrast */
  }

  /* Ensure focus rings remain visible when box-shadow is stripped */
  .button:focus-visible {
    outline: 3px solid Highlight !important;
    outline-offset: 2px;
  }
}
```
## Best Practices

* **Root Level Activation**: Always attach `a11y-*` classes to `document.documentElement` (`<html>`) so CSS custom variable cascading propagates reliably into all Shadow DOM and Light DOM trees.
* **Cross-Browser Shadow DOM**: Avoid `:host-context()`. Use host attribute reflection (`:host([a11y-*])`) via `MutationObserver` for universal browser support (especially Safari).
* **Focus Indicators**: Never set `outline: none` on focusable controls without providing a high-contrast fallback that honors `--a11y-focus-outline`.
* **System Preference Syncing**: Wire runtime toggles to listen to native OS media queries like `(prefers-reduced-motion: reduce)` and `(prefers-color-scheme: dark)` as baseline defaults.

```

---

## Path: src/stories/sub-atomic/Opacityography/Opacityography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Opacityography" />

# Opacityography

The Opacityography system regulates alpha transparency values to communicate interaction states, disabled conditions, and structural hierarchy.

<br />

## Opacity Tokens

Opacity tokens standardise visual transparency across components, overlays, and interactive states.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Solid</strong></td>
      <td>`var(--opacity-solid)`</td>
      <td>`1`</td>
      <td>Fully opaque elements and active content layers.</td>
    </tr>
    <tr>
      <td><strong>High</strong></td>
      <td>`var(--opacity-high)`</td>
      <td>`0.85`</td>
      <td>Prominent secondary content and high-visibility overlays.</td>
    </tr>
    <tr>
      <td><strong>Medium</strong></td>
      <td>`var(--opacity-medium)`</td>
      <td>`0.6`</td>
      <td>Muted body copy, passive icons, secondary UI elements.</td>
    </tr>
    <tr>
      <td><strong>Low / Disabled</strong></td>
      <td>`var(--opacity-disabled)`</td>
      <td>`0.38`</td>
      <td>Disabled interactive elements, non-actionable controls.</td>
    </tr>
    <tr>
      <td><strong>Faint</strong></td>
      <td>`var(--opacity-faint)`</td>
      <td>`0.12`</td>
      <td>Subtle hover fills, backdrop tints, active row highlights.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Apply opacity tokens for stateful component changes such as hover, active, or disabled modifiers.

### CSS Example

```css
.button:disabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
}

.table-row:hover {
  background-color: rgba(0, 0, 0, var(--opacity-faint));
}
```
## Best Practices
- Contrast Maintenance: Avoid applying opacity below --opacity-medium (0.6) on primary text elements to preserve legibility and accessibility contrast standards.
- Disabled State Standard: Maintain a uniform disabled state across all form controls and buttons by using --opacity-disabled (0.38).
```

---

## Path: src/stories/sub-atomic/Opacityography/opacityography.css

```
:root {
  /* Opacity Tokens */
  --opacity-solid: 1;
  --opacity-high: 0.85;
  --opacity-medium: 0.6;
  --opacity-low: 0.38;
  --opacity-faint: 0.12;
  --opacity-disabled: 0.38;
  --opacity-transparent: 0;
}
```

---

## Path: src/stories/sub-atomic/Curvography/curvography.css

```
:root {
  /* Border Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 100px;
  --radius-circle: 50%;
}
```

---

## Path: src/stories/sub-atomic/Curvography/Curvography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Curvography" />

# Curvography

The Curvography system defines standardized border-radius tokens across Valence. Regulating corner rounding soft-softens visual geometry, establishes structural hierarchy, and reinforces consistent tactile feedback for interactive UI components.

<br />

## Border Radii Tokens

Border radius tokens control corner rounding to soften visual geometry and reinforce the visual feel of interactive elements.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Token Name</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Small Radius</strong></td>
      <td>`var(--radius-sm)`</td>
      <td>`4px`</td>
      <td>Subtle corner rounding (checkboxes, tags, tooltips).</td>
    </tr>
    <tr>
      <td><strong>Medium Radius</strong></td>
      <td>`var(--radius-md)`</td>
      <td>`8px`</td>
      <td>Standard component rounding (inputs, small buttons, cards).</td>
    </tr>
    <tr>
      <td><strong>Large Radius</strong></td>
      <td>`var(--radius-lg)`</td>
      <td>`16px`</td>
      <td>Container components (modals, large cards, popovers).</td>
    </tr>
    <tr>
      <td><strong>XL Radius</strong></td>
      <td>`var(--radius-xl)`</td>
      <td>`24px`</td>
      <td>Distinctive layout containers and feature cards.</td>
    </tr>
    <tr>
      <td><strong>Pill</strong></td>
      <td>`var(--radius-pill)`</td>
      <td>`100px`</td>
      <td>Pill-shaped elements (badges, action buttons, toggle switches).</td>
    </tr>
    <tr>
      <td><strong>Circle</strong></td>
      <td>`var(--radius-circle)`</td>
      <td>`50%`</td>
      <td>Fully circular elements (avatars, round icon buttons, status dots).</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Apply border-radius tokens to ensure component geometry matches visual hierarchy. Do not hardcode static pixel values for corner rounding in scoped styles.

### Component Implementation

```css
.button {
  border-radius: var(--radius-md);
}

.modal-dialog {
  border-radius: var(--radius-lg);
}

.status-badge {
  border-radius: var(--radius-pill);
}

.user-avatar {
  border-radius: var(--radius-circle);
}
```

## Sub-Atomic Property Overrides

Components accept `--custom-radius` overrides while preserving design token fallbacks:

```css
.button {
  /* Uses --custom-radius if defined; defaults to design token */
  border-radius: var(--custom-radius, var(--radius-pill));
}
```

## Best Practices
- **Nested Radii Hierarchy**: When nesting rounded containers inside one another, match or scale down inner radii (`--radius-sm` inside `--radius-md`) to avoid unnatural visual overlaps.
- **Consistency across States**: Avoid altering `border-radius` dynamically on hover/active states unless explicitly designing morphing controls.
- **Pill vs. Circle Usage**: Use `--radius-pill` for fluid width containers like buttons and tags; reserve `--radius-circle` exclusively for fixed 1:1 aspect ratio elements.
```

---

## Path: src/stories/sub-atomic/Stateography/Stateography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Stateography" />

# Stateography

The Stateography system governs interactive behavior, visual state transitions, and accessibility attribute mapping across Valence components. Standardizing state representation ensures predictable user interactions, seamless Shadow DOM attribute reflection, and full compliance with WCAG AA/AAA guidelines.

<br />

## Interactive State Scale

Valence components support six standardized interaction states to provide immediate visual feedback for user actions.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>State</th>
      <th style={{ textAlign: 'left' }}>CSS Selector / Variable</th>
      <th style={{ textAlign: 'left' }}>Visual Behavior / Token Fallback</th>
      <th style={{ textAlign: 'left' }}>Usage Guidelines</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Rest (Default)</strong></td>
      <td><code>:host</code> / baseline element</td>
      <td>Default component tokens (e.g., <code>var(--color-black)</code>, <code>var(--opacity-solid)</code>).</td>
      <td>Unengaged resting state of an interactive control.</td>
    </tr>
    <tr>
      <td><strong>Hover</strong></td>
      <td><code>:hover:not(:disabled)</code></td>
      <td><code>var(--custom-hover-bg, rgba(0, 0, 0, var(--opacity-faint)))</code></td>
      <td>Pointer cursor feedback when hovering over interactive targets.</td>
    </tr>
    <tr>
      <td><strong>Active / Pressed</strong></td>
      <td><code>:active:not(:disabled)</code></td>
      <td><code>transform: scale(var(--btn-active-scale, 0.95))</code></td>
      <td>Tactile push/press feedback during mouse or touch down events.</td>
    </tr>
    <tr>
      <td><strong>Focus (Keyboard)</strong></td>
      <td><code>:focus-visible</code></td>
      <td>
        <code>outline: var(--a11y-focus-outline, 3px solid var(--color-accent))</code><br />
        <code>outline-offset: var(--a11y-focus-offset, 2px)</code>
      </td>
      <td>High-visibility focus indicator reserved exclusively for keyboard navigation.</td>
    </tr>
    <tr>
      <td><strong>Disabled</strong></td>
      <td><code>:disabled</code> / <code>:host([disabled])</code></td>
      <td><code>opacity: var(--opacity-disabled, 0.38); cursor: not-allowed !important;</code></td>
      <td>Non-actionable state suppressing interactive pointer actions while rendering <code>cursor: not-allowed</code>.</td>
    </tr>
    <tr>
      <td><strong>Loading / Busy</strong></td>
      <td><code>:host([loading])</code> / <code>[aria-busy="true"]</code></td>
      <td>Spinner replacement or translucent mask; pointer interaction locked.</td>
      <td>Asynchronous processing state awaiting server response or async completion.</td>
    </tr>
  </tbody>
</table>

<br />

## Dark Mode & High Contrast Interactive States

In addition to Light Mode defaults, components must explicitly declare accessible hover and active state transitions under dark and high-contrast environments to preserve visual contrast and affordance.

### Dark Mode State Scale (`:host([a11y-dark-mode])`)

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Variant</th>
      <th style={{ textAlign: 'left' }}>Rest State</th>
      <th style={{ textAlign: 'left' }}>Hover State (<code>:hover:not(:disabled)</code>)</th>
      <th style={{ textAlign: 'left' }}>Active State (<code>:active:not(:disabled)</code>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Primary</strong></td>
      <td><code>bg: var(--color-white)</code><br /><code>text: #101218</code></td>
      <td><code>bg: var(--color-gray-xlight)</code></td>
      <td><code>bg: var(--color-gray-light)</code></td>
    </tr>
    <tr>
      <td><strong>Secondary</strong></td>
      <td><code>bg: transparent</code><br /><code>border: var(--color-surface-border)</code></td>
      <td><code>bg: rgba(255, 255, 255, 0.16)</code><br /><code>border: var(--color-white)</code></td>
      <td><code>bg: rgba(255, 255, 255, 0.28)</code><br /><code>border: var(--color-white)</code></td>
    </tr>
    <tr>
      <td><strong>Text / Icon</strong></td>
      <td><code>text: var(--color-text-secondary)</code></td>
      <td><code>bg: var(--color-overlay-light)</code><br /><code>text: var(--color-white)</code></td>
      <td><code>bg: rgba(255, 255, 255, 0.22)</code><br /><code>text: var(--color-white)</code></td>
    </tr>
    <tr>
      <td><strong>Floating</strong></td>
      <td><code>bg: var(--color-player-bg)</code><br /><code>text: var(--color-white)</code></td>
      <td><code>bg: #1C1C1E</code><br /><code>border: var(--color-white)</code></td>
      <td><code>bg: #323232</code><br /><code>border: var(--color-white)</code></td>
    </tr>
  </tbody>
</table>

### High Contrast Mode State Scale (`:host([a11y-high-contrast])`)

High Contrast Mode guarantees binary 21:1 WCAG AAA contrast ratio using solid fill inversions and explicit outline rings.

```css
/* High Contrast Primary State Colors (Solid Inversion) */
:host([a11y-high-contrast]) .variant-primary {
  background: #FFFFFF !important;
  color: #000000 !important;
  border: var(--border-width-medium) var(--border-style-solid) #FFFFFF !important;
  box-shadow: var(--shadow-none) !important;
}
:host([a11y-high-contrast]) .variant-primary:hover:not(:disabled) {
  background: #000000 !important;
  color: #FFFFFF !important;
  border-color: #FFFFFF !important;
  outline: 2px solid #FFFFFF !important;
  outline-offset: 1px;
}
:host([a11y-high-contrast]) .variant-primary:active:not(:disabled) {
  background: #FFFFFF !important;
  color: #000000 !important;
  outline: 4px solid #FFFFFF !important;
  outline-offset: 2px;
}

/* High Contrast Hover (Inverse Fill) */
:host([a11y-high-contrast]) .variant-secondary:hover:not(:disabled),
:host([a11y-high-contrast]) .variant-text:hover:not(:disabled),
:host([a11y-high-contrast]) .variant-icon:hover:not(:disabled),
:host([a11y-high-contrast]) .variant-floating:hover:not(:disabled) {
  background: #FFFFFF !important;
  color: #000000 !important;
  border-color: #FFFFFF !important;
}

/* High Contrast Disabled State */
:host([a11y-high-contrast]) button:disabled,
:host([a11y-high-contrast][disabled]) button {
  opacity: 0.5 !important;
  border-style: dashed !important;
  border-color: #FFFFFF !important;
  color: #FFFFFF !important;
  background: transparent !important;
}

```

## Accessibility & ARIA State Mapping

Interactive states must be reflected semantically to assistive technologies via standardized ARIA attributes and host-level DOM attributes.

## Usage Guidelines

Always construct Web Component stylesheets using state-aware design tokens and fallback variables. Ensure state changes incorporate choreography timing tokens.

### Component CSS State Implementation

```css
/* Ensure the host tag itself displays cursor: not-allowed when disabled */
:host([disabled]) {
  cursor: not-allowed !important;
}

/* Base resting structure */
button {
  background: var(--custom-bg, var(--color-black));
  transition: var(--component-transition, 
              transform var(--anim-fast) var(--ease-fluid),
              background-color var(--anim-fast) var(--ease-fluid),
              opacity var(--anim-fast) var(--ease-fluid));
}

/* Hover state override */
button:hover:not(:disabled) {
  background-color: var(--custom-hover-bg, rgba(0, 0, 0, var(--opacity-faint)));
}

/* Active / Pressed state feedback */
button:active:not(:disabled) {
  transform: scale(var(--btn-active-scale, 0.95));
  background-color: var(--custom-active-bg, rgba(0, 0, 0, 0.18));
}

/* Focus-visible ring */
button:focus-visible {
  outline: var(--a11y-focus-outline, 3px solid var(--color-accent));
  outline-offset: var(--a11y-focus-offset, 2px);
  border-radius: var(--radius-sm);
}

/* Disabled state */
button:disabled,
:host([disabled]) button {
  opacity: var(--opacity-disabled, 0.38);
  cursor: not-allowed !important;
}


```

## Shadow DOM Attribute Reflection & State Synchronization

Because pseudo-classes like `:host-context()` are unsupported in WebKit/Safari, Web Components must observe global document modifier classes and reflect them directly onto host state attributes.

### JavaScript State Synchronization Pattern

```javascript
export class BaseComponent extends HTMLElement {
  connectedCallback() {
    this._observeRootAccessibility();
    this.updateAttributes();
  }

  _observeRootAccessibility() {
    const root = this.ownerDocument.documentElement;
    const sync = () => {
      this.toggleAttribute('a11y-dark-mode', root.classList.contains('a11y-dark-mode'));
      this.toggleAttribute('a11y-high-contrast', root.classList.contains('a11y-high-contrast'));
      this.toggleAttribute('a11y-reduce-motion', root.classList.contains('a11y-reduce-motion'));
    };

    sync();
    this._themeObserver = new MutationObserver(sync);
    this._themeObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  updateAttributes() {
    const ariaLabel = this.getAttribute('aria-label');
    const disabled = this.hasAttribute('disabled');

    if (this.internalControl) {
      this.internalControl.disabled = disabled;
    }

    // ARIA Label Delegation & Host Scrubbing Pattern
    if (ariaLabel && this.internalControl) {
      this.internalControl.setAttribute('aria-label', ariaLabel);
      this.removeAttribute('aria-label'); // Scrub host to prevent duplicate or prohibited attributes
    }
  }
}


```

## Sub-Atomic Property Overrides

Stateography allows runtime hover and active customizations using sub-atomic variable overrides:

```css
.variant-interactive {
  /* Dynamic hover and active background overrides with token fallbacks */
  background-color: var(--custom-bg, var(--color-black));
}

.variant-interactive:hover:not(:disabled) {
  background-color: var(--custom-hover-bg, var(--color-gray-dark));
}

.variant-interactive:active:not(:disabled) {
  background-color: var(--custom-active-bg, var(--color-black));
}


```

## Best Practices

* **Explicit Focus Isolation**: Never use `:focus` alone for interactive outlines; rely on `:focus-visible` so mouse clicks do not trigger focus rings while preserving keyboard visibility.
* **Disabled Cursor Preservation**: Avoid `pointer-events: none` on internal interactive primitives (`<button>`) so the browser can capture mouse hover and display `cursor: not-allowed !important;`. Native `disabled` attributes automatically prevent click and keypress execution.
* **Host Scrubbing**: When accepting accessible labels on custom element host wrappers, delegate the attribute to the internal native primitive and scrub the host tag.
* **Motion Suppression Compliance**: Ensure active scale transforms (e.g., `--btn-active-scale`) evaluate to `1` when `.a11y-reduce-motion` is active.
```

---

## Path: src/stories/sub-atomic/Gridography/Gridography.mdx

```
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Sub-atomic/Gridography" />

# Gridography

The Gridography system establishes responsive screen breakpoints, column counts, and layout gutters across screen sizes.

<br />

## Breakpoint Tokens

Breakpoint tokens define standard media query thresholds for fluid, multi-device layouts.

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left' }}>Breakpoint</th>
      <th style={{ textAlign: 'left' }}>CSS Variable</th>
      <th style={{ textAlign: 'left' }}>Value</th>
      <th style={{ textAlign: 'left' }}>Target Device / Viewport</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Mobile Small (XS)</strong></td>
      <td>`var(--breakpoint-xs)`</td>
      <td>`320px`</td>
      <td>Compact smartphone viewports.</td>
    </tr>
    <tr>
      <td><strong>Mobile Large (SM)</strong></td>
      <td>`var(--breakpoint-sm)`</td>
      <td>`640px`</td>
      <td>Large mobile devices in portrait or landscape.</td>
    </tr>
    <tr>
      <td><strong>Tablet (MD)</strong></td>
      <td>`var(--breakpoint-md)`</td>
      <td>`768px`</td>
      <td>Tablets and small portrait screens.</td>
    </tr>
    <tr>
      <td><strong>Laptop (LG)</strong></td>
      <td>`var(--breakpoint-lg)`</td>
      <td>`1024px`</td>
      <td>Standard laptop viewports and landscape tablets.</td>
    </tr>
    <tr>
      <td><strong>Desktop (XL)</strong></td>
      <td>`var(--breakpoint-xl)`</td>
      <td>`1280px`</td>
      <td>High-resolution desktop displays.</td>
    </tr>
    <tr>
      <td><strong>Wide Desktop (XXL)</strong></td>
      <td>`var(--breakpoint-xxl)`</td>
      <td>`1536px`</td>
      <td>Ultra-wide monitors and large desktop layouts.</td>
    </tr>
  </tbody>
</table>

<br />

## Usage Guidelines

Use grid column variables and standard media query targets to structure responsive application layouts.

### CSS Example

```css
.layout-grid {
  display: grid;
  gap: var(--grid-gutter);
  grid-template-columns: repeat(var(--grid-columns-mobile), 1fr);
}

@media (min-width: 768px) {
  .layout-grid {
    grid-template-columns: repeat(var(--grid-columns-tablet), 1fr);
  }
}

@media (min-width: 1024px) {
  .layout-grid {
    grid-template-columns: repeat(var(--grid-columns-desktop), 1fr);
  }
}
```

## Best Practices
- Mobile-First Queries: Always write baseline styles for small screens, using min-width media queries to scale layouts up as screen width increases.
- Consistent Gutters: Stick to --grid-gutter (24px) for grid element spacing to ensure consistent rhythm across screens.
```

---

## Path: src/stories/sub-atomic/Gridography/gridography.css

```
:root {
  /* Responsive Viewport Breakpoints */
  --breakpoint-xs: 320px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-xxl: 1536px;

  /* Grid Layout Tokens */
  --grid-columns-mobile: 4;
  --grid-columns-tablet: 8;
  --grid-columns-desktop: 12;
  --grid-gutter: 24px;
}
```

---


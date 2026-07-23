import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,i as n,l as r,m as i,r as a}from"./blocks-CqftkxY0.js";import{a as o}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as s}from"./mdx-react-shim-BIjp612k.js";function c(e){let i={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r,{title:`Sub-atomic/Chromography`}),`
`,(0,u.jsx)(i.h1,{id:`chromography`,children:`Chromography`}),`
`,(0,u.jsx)(i.p,{children:`The Chromography system forms the core visual foundation of Valence. It is a curated set of colors exposed as CSS Custom Properties (design tokens) to ensure strict consistency, accessibility, and theming capabilities across all components and applications.`}),`
`,(0,u.jsx)(i.h2,{id:`semantic-role-tokens-theme-aware`,children:`Semantic Role Tokens (Theme Aware)`}),`
`,(0,u.jsxs)(i.p,{children:[`These are the primary tokens components should consume. They automatically adjust across `,(0,u.jsx)(i.strong,{children:`Light Mode`}),`, `,(0,u.jsx)(i.strong,{children:`Dark Mode`}),`, and `,(0,u.jsx)(i.strong,{children:`High Contrast Mode`}),` without breaking component-level logic.`]}),`
`,(0,u.jsxs)(n,{children:[(0,u.jsx)(a,{title:`Backgrounds & Surfaces`,subtitle:`Core UI canvas, container surfaces, and borders`,colors:{"--color-bg":`#FFFFFF`,"--color-surface":`#F2F2F7`,"--color-surface-border":`rgba(0, 0, 0, 0.08)`}}),(0,u.jsx)(a,{title:`Text & Foreground Content`,subtitle:`Primary headings, body text, and muted copy`,colors:{"--color-text-primary":`#000000`,"--color-text-secondary":`#323232`,"--color-text-muted":`#777777`}})]}),`
`,(0,u.jsx)(i.h2,{id:`primitive-palette`,children:`Primitive Palette`}),`
`,(0,u.jsx)(i.p,{children:`Immutable baseline colors used to build semantic roles and specialized states.`}),`
`,(0,u.jsxs)(n,{children:[(0,u.jsx)(a,{title:`Base Primitives`,subtitle:`Static absolute black, white, and player canvas`,colors:{"--color-white":`#FFFFFF`,"--color-black":`#000000`,"--color-player-bg":`#101218`}}),(0,u.jsx)(a,{title:`Grayscale Scale`,subtitle:`Raw grayscale primitives`,colors:{"--color-gray-dark":`#323232`,"--color-gray-med":`#777777`,"--color-gray-light":`#B2B2B2`,"--color-gray-xlight":`#D9D9D9`}}),(0,u.jsx)(a,{title:`Semantic Feedback & Accents`,subtitle:`Action triggers, states, and feedback indicators`,colors:{"--color-accent":`#2B71F0`,"--color-success":`#34C759`,"--color-error":`#FF3B30`,"--color-error-alt":`#D73A49`}}),(0,u.jsx)(a,{title:`Overlays & Glass`,subtitle:`Layering surfaces, backdrop blur accents, and modals`,colors:{"--color-overlay-dark":`rgba(0, 0, 0, 0.85)`,"--color-overlay-light":`rgba(255, 255, 255, 0.1)`,"--color-glass-bg":`rgba(235, 235, 240, 0.6)`}})]}),`
`,(0,u.jsx)(i.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,u.jsxs)(i.p,{children:[`When implementing styles in Web Components or application stylesheets, `,(0,u.jsx)(i.strong,{children:`always reference semantic role variables directly`}),` (`,(0,u.jsx)(i.code,{children:`--color-text-primary`}),`, `,(0,u.jsx)(i.code,{children:`--color-surface`}),`, `,(0,u.jsx)(i.code,{children:`--color-bg`}),`) rather than hardcoding primitive hex or RGB values.`]}),`
`,(0,u.jsx)(i.h3,{id:`basic-implementation`,children:`Basic Implementation`}),`
`,(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:`language-css`,children:`.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-surface-border);
  color: var(--color-text-primary);
}

.button-primary {
  background-color: var(--color-text-primary);
  color: var(--color-bg);
}
`})}),`
`,(0,u.jsx)(i.h2,{id:`sub-atomic-property-overrides`,children:`Sub-Atomic Property Overrides`}),`
`,(0,u.jsx)(i.p,{children:`To allow one-off background color customizations (or Storybook control overrides) without breaking token encapsulation, components consume background tokens using fallback variables:`}),`
`,(0,u.jsx)(i.pre,{children:(0,u.jsx)(i.code,{className:`language-css`,children:`.variant-primary {
  /* Uses --custom-bg if defined; otherwise defaults to --color-text-primary */
  background: var(--custom-bg, var(--color-text-primary));
}
`})}),`
`,(0,u.jsx)(i.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,u.jsxs)(i.ul,{children:[`
`,(0,u.jsx)(i.li,{children:`Semantic Priority: Prefer --color-text-primary and --color-surface over hardcoded --color-black or --color-white to ensure automatic dark mode and high-contrast compliance.`}),`
`,(0,u.jsx)(i.li,{children:`Feedback Standards: Use --color-error and --color-success exclusively for feedback, validation, and status updates—never purely for decorative accenting.`}),`
`,(0,u.jsx)(i.li,{children:`Accessibility (Contrast): Text rendered over --color-bg or custom container backgrounds maintains a contrast ratio meeting WCAG 2.1/2.2 AA guidelines (4.5:1 ratio for normal body text, 3:1 for large text).`}),`
`]})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=o(),s(),i()}))();export{l as default};
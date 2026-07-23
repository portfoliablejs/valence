import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Surfaceography`}),`
`,(0,c.jsx)(r.h1,{id:`elevations--surfaces`,children:`Elevations & Surfaces`}),`
`,(0,c.jsxs)(r.p,{children:[`The Elevation system (also referred to as Surfaceography) defines spatial depth, surface hierarchy, and elevation layers across Valence interfaces. By pairing background surfaces with `,(0,c.jsx)(r.code,{children:`Shadowgraphy`}),` (box-shadows), `,(0,c.jsx)(r.code,{children:`Depthography`}),` (glass blurs), and `,(0,c.jsx)(r.code,{children:`Spatialography`}),` (z-index tokens), components maintain clear tactile separation and visual context across different visual layers.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`surface-elevation-levels`,children:`Surface Elevation Levels`}),`
`,(0,c.jsx)(r.p,{children:`Valence components occupy six discrete elevation levels. Standardizing surface tokens ensures consistent depth perception and predictable stacking contexts across applications.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Elevation Level`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Surface Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Shadow Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Z-Index Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Level 0 (Canvas)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-bg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--shadow-none)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`auto`})}),(0,c.jsx)(`td`,{children:`Baseline application viewport canvas and primary page layout background.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Level 1 (Card / Surface)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-card-bg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--shadow-sm)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--z-base)`})}),(0,c.jsx)(`td`,{children:`Embedded cards, table rows, static containers, and content blocks.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Level 2 (Raised / Floating)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-bg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--shadow-md)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--z-above)`})}),(0,c.jsx)(`td`,{children:`Interactive floating action buttons, elevated cards on hover, and active tiles.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Level 3 (Overlay / Dropdown)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-bg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--shadow-lg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--z-dropdown)`})}),(0,c.jsx)(`td`,{children:`Context menus, select dropdowns, autocomplete panels, and tooltips.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Level 4 (Sticky / Fixed)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--overlay-glass-bg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--shadow-md)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--z-fixed)`})}),(0,c.jsx)(`td`,{children:`Sticky navigation headers, persistent bottom action bars, and floating toolbars.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Level 5 (Modal / Dialog)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--color-bg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--shadow-xl)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--z-modal)`})}),(0,c.jsx)(`td`,{children:`High-priority dialogs, modal windows, alert overlays, and slide-over drawers.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`glassmorphic-vs-solid-surfaces`,children:`Glassmorphic vs. Solid Surfaces`}),`
`,(0,c.jsx)(r.p,{children:`Elevations combine traditional shadow drop-shadows with backdrop blurs depending on surface opacity and atmospheric depth needs.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Surface Style`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable Combination`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Best For`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Solid Surface`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`background: var(--color-bg);`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`box-shadow: var(--shadow-md);`})]}),(0,c.jsx)(`td`,{children:`Standard dialogs, popovers, and opaque content cards where content below should be fully masked.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Glass Surface`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`background: var(--overlay-glass-bg);`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`backdrop-filter: blur(var(--overlay-glass-blur));`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`code`,{children:`-webkit-backdrop-filter: blur(var(--overlay-glass-blur));`})]}),(0,c.jsx)(`td`,{children:`Floating headers, persistent navigation bars, and contextual controls that maintain underlying scroll awareness.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsxs)(r.p,{children:[`Always reference existing sub-atomic tokens (`,(0,c.jsx)(r.code,{children:`--shadow-*`}),`, `,(0,c.jsx)(r.code,{children:`--z-*`}),`, `,(0,c.jsx)(r.code,{children:`--color-*`}),`) when declaring surface elevations. Do not introduce arbitrary box-shadow, blur, or z-index values in component stylesheets.`]}),`
`,(0,c.jsx)(r.h3,{id:`solid-surface-implementation`,children:`Solid Surface Implementation`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.card-elevated {
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

`})}),`
`,(0,c.jsx)(r.h3,{id:`glassmorphic-elevated-floating-surface-implementation`,children:`Glassmorphic Elevated Floating Surface Implementation`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.floating-toolbar {
  position: sticky;
  top: 0;
  z-index: var(--z-fixed);
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
  border-bottom: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
  box-shadow: var(--shadow-sm);
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`high-contrast--accessibility-overrides`,children:`High Contrast & Accessibility Overrides`}),`
`,(0,c.jsxs)(r.p,{children:[`Under high-contrast accessibility mode (`,(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`), subtle elevation shadows and glass blurs are suppressed in favor of explicit high-visibility borders to ensure clear structural separation.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* High Contrast surface elevation override */
:host([a11y-high-contrast]) .card-elevated,
:host([a11y-high-contrast]) .floating-toolbar {
  background: var(--color-bg) !important;
  box-shadow: var(--shadow-none) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: var(--border-width-medium) var(--border-style-solid) var(--color-black) !important;
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Light Source Direction`}),`: All elevation shadows adhere to a top-down virtual light source for visual coherence across stacked components.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Z-Index Discipline`}),`: Never set manual integer `,(0,c.jsx)(r.code,{children:`z-index`}),` values (e.g., `,(0,c.jsx)(r.code,{children:`z-index: 9999`}),`). Always map surface depth directly to `,(0,c.jsx)(r.code,{children:`--z-*`}),` tokens (`,(0,c.jsx)(r.code,{children:`var(--z-dropdown)`}),`, `,(0,c.jsx)(r.code,{children:`var(--z-modal)`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`High-Contrast Fallbacks`}),`: Always strip subtle box-shadows (`,(0,c.jsx)(r.code,{children:`--shadow-none`}),`) and apply explicit borders (`,(0,c.jsx)(r.code,{children:`--border-width-medium`}),`) when `,(0,c.jsx)(r.code,{children:`:host([a11y-high-contrast])`}),` is active.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Performance Awareness`}),`: Use translucent glass surfaces (`,(0,c.jsx)(r.code,{children:`backdrop-filter`}),`) sparingly on persistent or large structural elements to maintain fast rendering performance on low-power devices.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
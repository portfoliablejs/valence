import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Layoutography`}),`
`,(0,c.jsx)(r.h1,{id:`layoutography`,children:`Layoutography`}),`
`,(0,c.jsxs)(r.p,{children:[`The Layoutography system defines structural layout primitives, flow direction rules, grid alignments, and container constraints across Valence. By combining spatial scale tokens (`,(0,c.jsx)(r.code,{children:`Spatialography`}),`) and responsive breakpoints (`,(0,c.jsx)(r.code,{children:`Gridography`}),`), Layoutography provides standard architectural patterns for organizing UI components into cohesive views and composite molecules.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`layout-primitives-overview`,children:`Layout Primitives Overview`}),`
`,(0,c.jsx)(r.p,{children:`Valence standardizes layout construction around four primary structural layout primitives.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Primitive`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Layout Pattern`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Primary Tokens`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Stack`})}),(0,c.jsx)(`td`,{children:`Vertical linear layout flow (flex-column)`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`gap: var(--space-*)`})}),(0,c.jsx)(`td`,{children:`Form fields, card bodies, stacked content sections, sidebars.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Cluster`})}),(0,c.jsx)(`td`,{children:`Horizontal wrapping flow (flex-row + wrap)`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`gap: var(--space-*)`})}),(0,c.jsx)(`td`,{children:`Button groups, tag clouds, metadata chips, breadcrumbs.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Grid`})}),(0,c.jsx)(`td`,{children:`Two-dimensional responsive column alignment`}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`var(--grid-columns-*)`}),`, `,(0,c.jsx)(`code`,{children:`var(--grid-gutter)`})]}),(0,c.jsx)(`td`,{children:`Dashboard cards, media galleries, multi-column forms.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Dock / Sticky Footer`})}),(0,c.jsx)(`td`,{children:`Fixed or persistent spatial anchoring`}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`var(--z-fixed)`}),`, `,(0,c.jsx)(`code`,{children:`var(--size-height-*)`})]}),(0,c.jsx)(`td`,{children:`Fixed navigation bars, sticky action footers, media control bars.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`container-max-width-constraints`,children:`Container Max-Width Constraints`}),`
`,(0,c.jsxs)(r.p,{children:[`Layout containers use `,(0,c.jsx)(r.code,{children:`Sizography`}),` maximum width constraints to enforce readable line lengths and centered viewport bounds.`]}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Container Class`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Max Width`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.container-xs`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--size-max-width-xs)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`320px`})}),(0,c.jsx)(`td`,{children:`Popover menus, mobile drawers, narrow cards.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.container-sm`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--size-max-width-sm)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`480px`})}),(0,c.jsx)(`td`,{children:`Modal dialogs, authentication forms, focused cards.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.container-md`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--size-max-width-md)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`768px`})}),(0,c.jsx)(`td`,{children:`Reading columns, case study content, step wizards.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.container-lg`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--size-max-width-lg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`1024px`})}),(0,c.jsx)(`td`,{children:`Standard application viewports and dashboard grids.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`.container-xl`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`var(--size-max-width-xl)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`1280px`})}),(0,c.jsx)(`td`,{children:`Wide desktop views and full data grid screens.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines--css-implementations`,children:`Usage Guidelines & CSS Implementations`}),`
`,(0,c.jsxs)(r.p,{children:[`Always rely on standardized spatial variables (`,(0,c.jsx)(r.code,{children:`--space-*`}),`) and grid variables when constructing component or page layouts. Avoid arbitrary margin or padding pixel overrides.`]}),`
`,(0,c.jsxs)(r.h3,{id:`1-vertical-stack-primitive-layout-stack`,children:[`1. Vertical Stack Primitive (`,(0,c.jsx)(r.code,{children:`.layout-stack`}),`)`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.layout-stack {
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

`})}),`
`,(0,c.jsxs)(r.h3,{id:`2-horizontal-cluster-primitive-layout-cluster`,children:[`2. Horizontal Cluster Primitive (`,(0,c.jsx)(r.code,{children:`.layout-cluster`}),`)`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.layout-cluster {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
}

.layout-cluster-between {
  justify-content: space-between;
}

`})}),`
`,(0,c.jsxs)(r.h3,{id:`3-responsive-application-grid-layout-grid`,children:[`3. Responsive Application Grid (`,(0,c.jsx)(r.code,{children:`.layout-grid`}),`)`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.layout-grid {
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

`})}),`
`,(0,c.jsxs)(r.h3,{id:`4-dock--sticky-header-primitive-layout-dock-header`,children:[`4. Dock / Sticky Header Primitive (`,(0,c.jsx)(r.code,{children:`.layout-dock-header`}),`)`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.layout-dock-header {
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

`})}),`
`,(0,c.jsx)(r.h2,{id:`reduced-motion--accessibility-overrides`,children:`Reduced Motion & Accessibility Overrides`}),`
`,(0,c.jsxs)(r.p,{children:[`When reduced motion (`,(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),`) or high contrast (`,(0,c.jsx)(r.code,{children:`.a11y-high-contrast`}),`) is active, layout transitions and glass backdrop blurs automatically adjust to prevent rendering bugs and preserve legibility.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* High Contrast Layout Surface Reset */
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

`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Mobile-First Responsive Design`}),`: Always declare default layout styles for mobile screens, using `,(0,c.jsx)(r.code,{children:`min-width`}),` media queries to expand layout columns as viewport width grows.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Strict Spatial Gaps`}),`: Use explicit `,(0,c.jsx)(r.code,{children:`gap`}),` properties (`,(0,c.jsx)(r.code,{children:`var(--space-*)`}),`) on Flexbox and Grid containers instead of applying directional `,(0,c.jsx)(r.code,{children:`margin-bottom`}),` or `,(0,c.jsx)(r.code,{children:`margin-right`}),` on child elements.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Centering Containers`}),`: Use `,(0,c.jsx)(r.code,{children:`margin-inline: auto`}),` combined with `,(0,c.jsx)(r.code,{children:`--size-max-width-*`}),` to center main page content columns cleanly across screens.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Z-Index Layering Integrity`}),`: Ensure fixed docks or floating toolbars reference standardized elevation variables (`,(0,c.jsx)(r.code,{children:`var(--z-fixed)`}),`, `,(0,c.jsx)(r.code,{children:`var(--z-overlay)`}),`) rather than hardcoded integer values.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
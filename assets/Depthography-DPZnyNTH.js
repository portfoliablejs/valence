import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Depthography`}),`
`,(0,c.jsx)(r.h1,{id:`depthography`,children:`Depthography`}),`
`,(0,c.jsx)(r.p,{children:`The Depthography system provides standardized backdrop blurs, surface layering, and glassmorphic elevation effects to establish depth across Valence components. Using structured translucency and blur tokens creates spatial hierarchy while maintaining contextual awareness of underlying content.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`depth-tokens`,children:`Depth Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Depth tokens define atmospheric effects, translucency ratios, and backdrop blurs used to separate spatial layers.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Token Name`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Glass Background`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--overlay-glass-bg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`rgba(0, 0, 0, 0.1)`})}),(0,c.jsx)(`td`,{children:`Base surface color for translucent elements, floating headers, and popovers.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Glass Blur`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--overlay-glass-blur)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`6px`})}),(0,c.jsx)(`td`,{children:`Defines the backdrop blur intensity for depth-based separation.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsx)(r.p,{children:`Always reference depth design tokens via CSS variables or standard utility classes to maintain consistency across elevated UI elements.`}),`
`,(0,c.jsx)(r.h3,{id:`utility-class-implementation`,children:`Utility Class Implementation`}),`
`,(0,c.jsxs)(r.p,{children:[`For standard layout structures, apply the `,(0,c.jsx)(r.code,{children:`.foundation-glass`}),` utility class directly to your container components.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`/* Global foundation glass utility */
.foundation-glass {
  background: var(--overlay-glass-bg);
  backdrop-filter: blur(var(--overlay-glass-blur));
  -webkit-backdrop-filter: blur(var(--overlay-glass-blur));
}
`})}),`
`,(0,c.jsx)(r.h3,{id:`css-variable-implementation`,children:`CSS Variable Implementation`}),`
`,(0,c.jsx)(r.p,{children:`When crafting custom Web Components or scoped styles, combine the individual variables to match specific UI requirements.`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.sticky-header {
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
`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Layering & Hierarchy`}),`: Limit glassmorphic surfaces to floating or overlay elements (e.g., sticky headers, modals, context menus) to prevent visual clutter and maintain visual hierarchy.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Cross-Browser Compatibilit`}),`: Always include `,(0,c.jsx)(r.code,{children:`-webkit-backdrop-filter`}),` alongside standard `,(0,c.jsx)(r.code,{children:`backdrop-filter`}),` to guarantee full support across Safari and older WebKit-based browsers.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Readability & Contrast`}),`: Ensure text overlaid on translucent background layers meets WCAG AA contrast standards regardless of dynamic content scrolling beneath the surface.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
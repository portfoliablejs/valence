import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Shadowgraphy`}),`
`,(0,c.jsx)(r.h1,{id:`shadowgraphy`,children:`Shadowgraphy`}),`
`,(0,c.jsx)(r.p,{children:`The Shadowgraphy system provides standardized box shadows to express depth, elevation, and tactile separation across UI surfaces without relying on backdrop blurs.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`shadow-tokens`,children:`Shadow Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Elevation shadows establish a spatial visual hierarchy by simulating light sources over background elements.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Small Elevation`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--shadow-sm)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0 1px 2px 0 rgba(0, 0, 0, 0.05)`})}),(0,c.jsx)(`td`,{children:`Subtle lift (interactive cards on hover, clickable tiles).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Medium Elevation`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--shadow-md)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0 4px 6px -1px rgba(...)`})}),(0,c.jsx)(`td`,{children:`Standard floating cards, dropdown menus, flyout popovers.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Large Elevation`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--shadow-lg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0 10px 15px -3px rgba(...)`})}),(0,c.jsx)(`td`,{children:`Elevated drawer panels, sticky footers, active overlays.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`XL Elevation`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--shadow-xl)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0 20px 25px -5px rgba(...)`})}),(0,c.jsx)(`td`,{children:`High-priority dialogs, hero modals, lightboxes.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Inset Shadow`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--shadow-inset)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`inset 0 2px 4px 0 rgba(...)`})}),(0,c.jsx)(`td`,{children:`Sunken surfaces, active/pressed button states, form inputs.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsx)(r.p,{children:`Apply box shadows to elevated surfaces to signify interactive depth. Do not mix custom shadow spread or blur values in individual CSS files.`}),`
`,(0,c.jsx)(r.h3,{id:`css-example`,children:`CSS Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--speed-normal) var(--ease-fluid);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.modal-dialog {
  box-shadow: var(--shadow-xl);
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Directional Light Consistency: All shadow tokens assume a consistent top-down virtual light source for visual coherence.`}),`
`,(0,c.jsx)(r.li,{children:`Combining Depth: Use --shadow-* tokens for standard solid surfaces, and reserve --overlay-glass-* (Depthography) for translucent glass surfaces.`}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Opacityography`}),`
`,(0,c.jsx)(r.h1,{id:`opacityography`,children:`Opacityography`}),`
`,(0,c.jsx)(r.p,{children:`The Opacityography system regulates alpha transparency values to communicate interaction states, disabled conditions, and structural hierarchy.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`opacity-tokens`,children:`Opacity Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Opacity tokens standardise visual transparency across components, overlays, and interactive states.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Solid`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--opacity-solid)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`1`})}),(0,c.jsx)(`td`,{children:`Fully opaque elements and active content layers.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`High`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--opacity-high)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0.85`})}),(0,c.jsx)(`td`,{children:`Prominent secondary content and high-visibility overlays.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Medium`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--opacity-medium)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0.6`})}),(0,c.jsx)(`td`,{children:`Muted body copy, passive icons, secondary UI elements.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Low / Disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--opacity-disabled)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0.38`})}),(0,c.jsx)(`td`,{children:`Disabled interactive elements, non-actionable controls.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Faint`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--opacity-faint)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0.12`})}),(0,c.jsx)(`td`,{children:`Subtle hover fills, backdrop tints, active row highlights.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsx)(r.p,{children:`Apply opacity tokens for stateful component changes such as hover, active, or disabled modifiers.`}),`
`,(0,c.jsx)(r.h3,{id:`css-example`,children:`CSS Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.button:disabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
}

.table-row:hover {
  background-color: rgba(0, 0, 0, var(--opacity-faint));
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Contrast Maintenance: Avoid applying opacity below --opacity-medium (0.6) on primary text elements to preserve legibility and accessibility contrast standards.`}),`
`,(0,c.jsx)(r.li,{children:`Disabled State Standard: Maintain a uniform disabled state across all form controls and buttons by using --opacity-disabled (0.38).`}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
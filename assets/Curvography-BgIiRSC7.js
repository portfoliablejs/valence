import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Curvography`}),`
`,(0,c.jsx)(r.h1,{id:`curvography`,children:`Curvography`}),`
`,(0,c.jsx)(r.p,{children:`The Curvography system defines standardized border-radius tokens across Valence. Regulating corner rounding soft-softens visual geometry, establishes structural hierarchy, and reinforces consistent tactile feedback for interactive UI components.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`border-radii-tokens`,children:`Border Radii Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Border radius tokens control corner rounding to soften visual geometry and reinforce the visual feel of interactive elements.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Token Name`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Small Radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-sm)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`4px`})}),(0,c.jsx)(`td`,{children:`Subtle corner rounding (checkboxes, tags, tooltips).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Medium Radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-md)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`8px`})}),(0,c.jsx)(`td`,{children:`Standard component rounding (inputs, small buttons, cards).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Large Radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-lg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`16px`})}),(0,c.jsx)(`td`,{children:`Container components (modals, large cards, popovers).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`XL Radius`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-xl)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`24px`})}),(0,c.jsx)(`td`,{children:`Distinctive layout containers and feature cards.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Pill`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-pill)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`100px`})}),(0,c.jsx)(`td`,{children:`Pill-shaped elements (badges, action buttons, toggle switches).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Circle`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--radius-circle)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`50%`})}),(0,c.jsx)(`td`,{children:`Fully circular elements (avatars, round icon buttons, status dots).`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsx)(r.p,{children:`Apply border-radius tokens to ensure component geometry matches visual hierarchy. Do not hardcode static pixel values for corner rounding in scoped styles.`}),`
`,(0,c.jsx)(r.h3,{id:`component-implementation`,children:`Component Implementation`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.button {
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
`})}),`
`,(0,c.jsx)(r.h2,{id:`sub-atomic-property-overrides`,children:`Sub-Atomic Property Overrides`}),`
`,(0,c.jsxs)(r.p,{children:[`Components accept `,(0,c.jsx)(r.code,{children:`--custom-radius`}),` overrides while preserving design token fallbacks:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.button {
  /* Uses --custom-radius if defined; defaults to design token */
  border-radius: var(--custom-radius, var(--radius-pill));
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Nested Radii Hierarchy`}),`: When nesting rounded containers inside one another, match or scale down inner radii (`,(0,c.jsx)(r.code,{children:`--radius-sm`}),` inside `,(0,c.jsx)(r.code,{children:`--radius-md`}),`) to avoid unnatural visual overlaps.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Consistency across States`}),`: Avoid altering `,(0,c.jsx)(r.code,{children:`border-radius`}),` dynamically on hover/active states unless explicitly designing morphing controls.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Pill vs. Circle Usage`}),`: Use `,(0,c.jsx)(r.code,{children:`--radius-pill`}),` for fluid width containers like buttons and tags; reserve `,(0,c.jsx)(r.code,{children:`--radius-circle`}),` exclusively for fixed 1:1 aspect ratio elements.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
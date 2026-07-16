import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Borderography`}),`
`,(0,c.jsx)(r.h1,{id:`borderography`,children:`Borderography`}),`
`,(0,c.jsx)(r.p,{children:`The Borderography system defines standardized border widths and line styles across components. Paired with Curvography (border radii), it completes the structural framing of Valence interfaces.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`border-width--style-tokens`,children:`Border Width & Style Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Border tokens manage outlines, structural dividers, focus rings, and card encasements.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Thin Border`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-thin)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`1px`})}),(0,c.jsx)(`td`,{children:`Standard card outlines, table borders, input fields, dividers.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Medium Border`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-medium)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`2px`})}),(0,c.jsx)(`td`,{children:`Selected states, tab highlights, active input rings.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Thick Border`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-width-thick)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`4px`})}),(0,c.jsx)(`td`,{children:`Accessibility focus rings, prominent status banners.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Solid Style`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-style-solid)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`solid`})}),(0,c.jsx)(`td`,{children:`Default border rendering across standard UI elements.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Dashed Style`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--border-style-dashed)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`dashed`})}),(0,c.jsx)(`td`,{children:`File upload drop zones, placeholder containers.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsx)(r.p,{children:`Use standard border shorthand or explicit border variables when constructing component styles.`}),`
`,(0,c.jsx)(r.h3,{id:`css-example`,children:`CSS Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.card {
  border: var(--border-width-thin) var(--border-style-solid) var(--color-card-border);
}

.dropzone {
  border: var(--border-width-medium) var(--border-style-dashed) var(--color-gray-med);
}

.button:focus-visible {
  outline: var(--border-width-thick) var(--border-style-solid) var(--color-accent);
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`sub-atomic-property-overrides`,children:`Sub-Atomic Property Overrides`}),`
`,(0,c.jsx)(r.p,{children:`For dynamic border customization in molecules or story controls, components reference custom border variables before defaulting to design tokens:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.card {
  border: var(--custom-border-width, var(--border-width-thin)) 
          var(--border-style-solid) 
          var(--custom-border-color, var(--color-card-border));
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Explicit Thickness: Always use --border-width-thin (1px) for internal dividing lines and structural cards to keep UI geometry sharp and clean.`}),`
`,(0,c.jsx)(r.li,{children:`Focus Rings: Standardize active accessibility focus indicators around --border-width-thick (4px) for clear keyboard visibility.`}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
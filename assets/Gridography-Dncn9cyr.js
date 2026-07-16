import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Gridography`}),`
`,(0,c.jsx)(r.h1,{id:`gridography`,children:`Gridography`}),`
`,(0,c.jsx)(r.p,{children:`The Gridography system establishes responsive screen breakpoints, column counts, and layout gutters across screen sizes.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`breakpoint-tokens`,children:`Breakpoint Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Breakpoint tokens define standard media query thresholds for fluid, multi-device layouts.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Breakpoint`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Target Device / Viewport`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Mobile Small (XS)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--breakpoint-xs)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`320px`})}),(0,c.jsx)(`td`,{children:`Compact smartphone viewports.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Mobile Large (SM)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--breakpoint-sm)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`640px`})}),(0,c.jsx)(`td`,{children:`Large mobile devices in portrait or landscape.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Tablet (MD)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--breakpoint-md)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`768px`})}),(0,c.jsx)(`td`,{children:`Tablets and small portrait screens.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Laptop (LG)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--breakpoint-lg)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`1024px`})}),(0,c.jsx)(`td`,{children:`Standard laptop viewports and landscape tablets.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Desktop (XL)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--breakpoint-xl)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`1280px`})}),(0,c.jsx)(`td`,{children:`High-resolution desktop displays.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Wide Desktop (XXL)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--breakpoint-xxl)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`1536px`})}),(0,c.jsx)(`td`,{children:`Ultra-wide monitors and large desktop layouts.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsx)(r.p,{children:`Use grid column variables and standard media query targets to structure responsive application layouts.`}),`
`,(0,c.jsx)(r.h3,{id:`css-example`,children:`CSS Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.layout-grid {
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
`})}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Mobile-First Queries: Always write baseline styles for small screens, using min-width media queries to scale layouts up as screen width increases.`}),`
`,(0,c.jsx)(r.li,{children:`Consistent Gutters: Stick to --grid-gutter (24px) for grid element spacing to ensure consistent rhythm across screens.`}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
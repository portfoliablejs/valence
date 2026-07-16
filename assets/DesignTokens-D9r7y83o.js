import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,f as n,l as r,m as i}from"./blocks-Bsfr4ULa.js";import{a}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as o}from"./mdx-react-shim-BTSxVohn.js";function s(e){let i={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{title:`Getting Started/Design Tokens`}),`
`,(0,l.jsx)(n,{children:`Design Tokens`}),`
`,(0,l.jsx)(i.p,{children:`Design tokens are the foundational, indivisible values of our visual language. They are defined as CSS Custom Properties and are used by all components to ensure consistency. You should also use these tokens in your application for any custom styling.`}),`
`,(0,l.jsx)(i.h2,{id:`colors`,children:`Colors`}),`
`,(0,l.jsx)(i.p,{children:`Our color palette is divided into base, grayscale, and semantic colors. To use a color token in your CSS:`}),`
`,(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:`language-css`,children:`.my-custom-element {
  background-color: var(--color-card-bg);
  color: var(--color-accent);
}
`})}),`
`,(0,l.jsx)(i.h2,{id:`spacing--radii`,children:`Spacing & Radii`}),`
`,(0,l.jsx)(i.p,{children:`We use a consistent 8-point based spacing scale for margins, padding, and layout. Radii are used for rounding corners.`}),`
`,(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:`language-css`,children:`.my-card {
  padding: var(--space-lg); /* 16px */
  margin-bottom: var(--space-xxl); /* 32px */
  border-radius: var(--radius-md); /* 8px */
}
`})}),`
`,(0,l.jsx)(i.h2,{id:`typography`,children:`Typography`}),`
`,(0,l.jsx)(i.p,{children:`The typography scale defines the font families, sizes, and weights used throughout the application. While components handle their own typography, you can use these tokens for slotted content or custom elements.`}),`
`,(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:`language-css`,children:`.my-custom-text {
  font-family: var(--font-family-base);
  font-size: var(--font-size-md);
}
`})}),`
`,(0,l.jsx)(i.h2,{id:`animations`,children:`Animations`}),`
`,(0,l.jsx)(i.p,{children:`Animation tokens provide consistent timing and easing curves for transitions and motion.`}),`
`,(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:`language-css`,children:`.my-interactive-element {
  transition: transform var(--anim-normal) var(--anim-ease);
}
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=a(),o(),i()}))();export{c as default};
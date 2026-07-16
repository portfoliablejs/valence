import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Getting Started/Theming & Accessibility`}),`
`,(0,c.jsx)(r.h1,{id:`theming--accessibility`,children:`Theming & Accessibility`}),`
`,(0,c.jsxs)(r.p,{children:[`Valence is designed with theming and accessibility at its core. The entire system can adapt its appearance based on global classes applied to the `,(0,c.jsx)(r.code,{children:`<html>`}),` element.`]}),`
`,(0,c.jsxs)(r.p,{children:[`This allows the consuming application (`,(0,c.jsx)(r.code,{children:`portfoliable`}),`) to control the visual theme for all components from a single, central place.`]}),`
`,(0,c.jsx)(r.h2,{id:`dark-mode`,children:`Dark Mode`}),`
`,(0,c.jsxs)(r.p,{children:[`To enable Dark Mode across all components, add the `,(0,c.jsx)(r.code,{children:`a11y-dark-mode`}),` class to the `,(0,c.jsx)(r.code,{children:`<html>`}),` tag. This will automatically activate the dark theme variants for all color tokens. Components will update their appearance without any additional configuration.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<html class="a11y-dark-mode">
  ...
</html>
`})}),`
`,(0,c.jsx)(r.h2,{id:`high-contrast-mode`,children:`High Contrast Mode`}),`
`,(0,c.jsxs)(r.p,{children:[`For users who require higher contrast, add the `,(0,c.jsx)(r.code,{children:`a11y-high-contrast`}),` class to the `,(0,c.jsx)(r.code,{children:`<html>`}),` tag. This theme uses a pure black and white palette with enhanced borders to meet contrast requirements. It will automatically override Dark Mode if both are present.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<html class="a11y-high-contrast">
  ...
</html>
`})}),`
`,(0,c.jsx)(r.h2,{id:`large-text`,children:`Large Text`}),`
`,(0,c.jsxs)(r.p,{children:[`To increase the base font size across the application, add the `,(0,c.jsx)(r.code,{children:`a11y-large-text`}),` class. This applies a multiplier to foundational font sizes, making text more readable. Components that use rem or em units will scale accordingly.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<html class="a11y-large-text">
  ...
</html>
`})}),`
`,(0,c.jsx)(r.h3,{id:`other-accessibility-modes`,children:`Other Accessibility Modes`}),`
`,(0,c.jsx)(r.p,{children:`Valence also supports several other modes for enhanced accessibility:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`a11y-reduce-motion`}),`: Disables all non-essential animations and transitions.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`a11y-dyslexia`}),`: Applies a dyslexia-friendly font across all components and content.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`a11y-focus-mode`}),`: Provides a highly visible, consistent focus ring on all interactive elements for keyboard users.`]}),`
`]}),`
`,(0,c.jsx)(r.h2,{id:`implementation`,children:`Implementation`}),`
`,(0,c.jsxs)(r.p,{children:[`Your application's main controller should be responsible for toggling these classes on the `,(0,c.jsx)(r.code,{children:`<html>`}),` element based on user preferences stored in localStorage.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r,u as i}from"./blocks-Bsfr4ULa.js";import{a}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as o}from"./mdx-react-shim-BTSxVohn.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Getting Started/Installation & Usage`}),`
`,(0,l.jsx)(r.h1,{id:`installation--usage`,children:`Installation & Usage`}),`
`,(0,l.jsxs)(r.p,{children:[`Integrating Valence into your project is designed to be straightforward. As a package of native Web Components, although it was built specifically with the `,(0,l.jsx)(r.code,{children:`portfoliable`}),` open-source application in mind, it can be used in any HTML-based environment.`]}),`
`,(0,l.jsx)(r.h2,{id:`installation`,children:`Installation`}),`
`,(0,l.jsxs)(r.p,{children:[`First, add the Valence package to your project. If you are developing locally, you can use `,(0,l.jsx)(r.code,{children:`npm link`}),` or a local file path. For a published package, you would use:`]}),`
`,(0,l.jsx)(i,{code:`npm install valence-ds`,language:`bash`}),`
`,(0,l.jsx)(r.h2,{id:`importing-the-library`,children:`Importing the Library`}),`
`,(0,l.jsx)(r.p,{children:`To make the components available in your application, you need to import the main library entry point. This single import registers all the components and foundational styles.`}),`
`,(0,l.jsxs)(r.p,{children:[`In your main JavaScript file (e.g., `,(0,l.jsx)(r.code,{children:`main.js`}),` or `,(0,l.jsx)(r.code,{children:`App.js`}),`):`]}),`
`,(0,l.jsx)(i,{code:`import 'valence-ds';`,language:`js`}),`
`,(0,l.jsxs)(r.p,{children:[`This will automatically load the necessary CSS design tokens and define all custom elements like `,(0,l.jsx)(r.code,{children:`<ds-button>`}),`, `,(0,l.jsx)(r.code,{children:`<ds-header>`}),`, etc., making them ready to use in your HTML.`]}),`
`,(0,l.jsx)(r.h2,{id:`using-a-component`,children:`Using a Component`}),`
`,(0,l.jsx)(r.p,{children:`Once imported, you can use the components directly in your HTML like any standard element.`}),`
`,(0,l.jsx)(r.p,{children:`For example, to use a button and an icon:`}),`
`,(0,l.jsx)(i,{code:`
<ds-button variant="primary" icon="play">
Play Video
</ds-button>

<ds-icon name="share" size="24"></ds-icon>
`,language:`html`}),`
`,(0,l.jsx)(r.h3,{id:`passing-data`,children:`Passing Data`}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Simple Data (Strings, Numbers):`}),` Pass data using standard HTML attributes.`,`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-html`,children:`<ds-pill label="Repository" />
`})}),`
`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Boolean States:`}),` Use the presence or absence of an attribute to indicate a boolean `,(0,l.jsx)(r.code,{children:`true`}),` state.`,`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-html`,children:`<ds-toggle checked></ds-toggle>
`})}),`
`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:`Complex Data (Arrays, Objects):`}),` For complex data, it's best to set the data via a JavaScript property on the element.`,`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-js`,children:`const myHeader = document.querySelector('ds-header');
myHeader.menuItems = [
  { id: 'case-1', label: 'First Case' },
  { id: 'case-2', label: 'Second Case' }
];
`})}),`
`]}),`
`]}),`
`,(0,l.jsx)(r.h2,{id:`handling-events`,children:`Handling Events`}),`
`,(0,l.jsxs)(r.p,{children:[`Valence components communicate with your application by dispatching standard `,(0,l.jsx)(r.code,{children:`CustomEvent`}),`. All events are prefixed with `,(0,l.jsx)(r.code,{children:`ds-`}),` for clarity.`]}),`
`,(0,l.jsxs)(r.p,{children:[`You can listen for these events using `,(0,l.jsx)(r.code,{children:`addEventListener`}),`:`]}),`
`,(0,l.jsx)(i,{code:`
const modeToggle = document.querySelector('ds-mode-toggle');

modeToggle.addEventListener('ds-mode-change', (event) => {
console.log('New mode selected:', event.detail.mode);
// Your application logic here...
});
`,language:`js`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=a(),o(),r()}))();export{c as default};
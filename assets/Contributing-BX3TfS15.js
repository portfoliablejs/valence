import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Contributing/Open-source`}),`
`,(0,c.jsx)(r.h1,{id:`contributing-to-valence`,children:`Contributing to Valence`}),`
`,(0,c.jsx)(r.p,{children:`Thank you for your interest in contributing to Valence! As an open-source project, we welcome contributions from the community to help us build a robust, accessible, and powerful Design System.`}),`
`,(0,c.jsx)(r.p,{children:`Whether you're fixing a bug, proposing a new feature, or improving documentation, your help is valuable.`}),`
`,(0,c.jsx)(r.h2,{id:`how-to-contribute`,children:`How to Contribute`}),`
`,(0,c.jsx)(r.p,{children:`We use a standard GitHub-based workflow. If you're new to open-source, here's a general overview of the process:`}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Find an Issue:`}),` Look for open issues on our `,(0,c.jsx)(r.a,{href:`https://github.com/schimanko/valence`,rel:`nofollow`,children:`GitHub repository`}),`. Issues labeled `,(0,c.jsx)(r.code,{children:`good first issue`}),` are a great place to start.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Fork the Repository:`}),` Create your own copy of the project to work on.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Create a Branch:`}),` Create a new branch for your changes, named descriptively (e.g., `,(0,c.jsx)(r.code,{children:`feat/add-toast-component`}),` or `,(0,c.jsx)(r.code,{children:`fix/header-focus-bug`}),`).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Develop Locally:`}),` Make your changes. Be sure to run Storybook locally to test your components in isolation.`,`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-bash`,children:`npm run storybook
`})}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Commit Your Changes:`}),` Follow our commit message conventions (see below).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Submit a Pull Request (PR):`}),` Push your branch to your fork and open a PR against the `,(0,c.jsx)(r.code,{children:`main`}),` branch of the Valence repository. Provide a clear description of the changes you've made.`]}),`
`]}),`
`,(0,c.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,c.jsx)(r.p,{children:`To ensure consistency and quality, please adhere to the following guidelines:`}),`
`,(0,c.jsx)(r.h3,{id:`code-style`,children:`Code Style`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`We follow standard JavaScript and CSS conventions, enforced by Prettier and ESLint (configuration to be added).`}),`
`,(0,c.jsx)(r.li,{children:`All components must be native Web Components with encapsulated styles (Shadow DOM).`}),`
`,(0,c.jsx)(r.li,{children:`Prioritize clarity and maintainability. Add comments for complex or non-obvious logic.`}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`component-structure`,children:`Component Structure`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`Follow the `,(0,c.jsx)(r.strong,{children:`Atomic Design`}),` principles established in the project.`]}),`
`,(0,c.jsxs)(r.li,{children:[`Every new component must have its own directory within `,(0,c.jsx)(r.code,{children:`src/stories/`}),` under the appropriate category (atoms, molecules, organisms).`]}),`
`,(0,c.jsxs)(r.li,{children:[`Each component directory must include:`,`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`Component.js`}),`: The component class definition.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`component.css`}),`: The component's encapsulated styles.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`Component.stories.js`}),`: Storybook stories covering all variants and states.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`All contributions must meet `,(0,c.jsx)(r.strong,{children:`WCAG 2.1 AA`}),` standards.`]}),`
`,(0,c.jsx)(r.li,{children:`Interactive components must be fully keyboard-navigable.`}),`
`,(0,c.jsx)(r.li,{children:`Use semantic HTML and appropriate WAI-ARIA roles.`}),`
`,(0,c.jsx)(r.li,{children:`Test your changes with a screen reader (e.g., VoiceOver, NVDA) where applicable.`}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`commit-messages`,children:`Commit Messages`}),`
`,(0,c.jsxs)(r.p,{children:[`We use the `,(0,c.jsx)(r.a,{href:`https://www.conventionalcommits.org/`,rel:`nofollow`,children:`Conventional Commits`}),` specification. This helps us automate changelogs and makes the project history easy to read. Your commit messages should be structured as follows: `,(0,c.jsx)(r.code,{children:`\\<type\\>[\\<optional scope\\>]: \\<description\\>`}),` for commit messages.`]}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:`Common types:`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`feat`}),`: A new feature.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`fix`}),`: A bug fix.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`docs`}),`: Documentation only changes.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`style`}),`: Changes that do not affect the meaning of the code (white-space, formatting, etc).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`refactor`}),`: A code change that neither fixes a bug nor adds a feature.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`chore`}),`: Changes to the build process or auxiliary tools.`]}),`
`]}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:`Example:`}),`
`,(0,c.jsx)(r.code,{children:`feat(button): add new 'floating' variant`})]}),`
`,(0,c.jsx)(r.h2,{id:`connect`,children:`Connect`}),`
`,(0,c.jsx)(r.p,{children:`If you have questions, ideas, or just want to connect, you can find the project's sole founder here:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`GitHub:`}),` `,(0,c.jsx)(r.a,{href:`https://github.com/schimanko`,rel:`nofollow`,children:`schimanko`})]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`LinkedIn:`}),` `,(0,c.jsx)(r.a,{href:`https://linkedin.com/in/lioschimanko`,rel:`nofollow`,children:`Lio Schimanko`})]}),`
`]}),`
`,(0,c.jsx)(r.p,{children:`This`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
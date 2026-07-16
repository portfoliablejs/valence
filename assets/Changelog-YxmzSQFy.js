import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,d as n,l as r,m as i}from"./blocks-Bsfr4ULa.js";import{a}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as o}from"./mdx-react-shim-BTSxVohn.js";function s(e){let i={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{title:`Getting Started/Changelog`}),`
`,(0,l.jsx)(i.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,l.jsxs)(i.p,{children:[`All notable changes to the `,(0,l.jsx)(i.strong,{children:`Valence`}),` design system will be documented in this file.`]}),`
`,(0,l.jsxs)(i.p,{children:[`The format is based on `,(0,l.jsx)(i.a,{href:`https://keepachangelog.com/en/1.0.0/`,rel:`nofollow`,children:`Keep a Changelog`}),`, and this project adheres to `,(0,l.jsx)(i.a,{href:`https://semver.org/spec/v2.0.0.html`,rel:`nofollow`,children:`Semantic Versioning`}),`.`]}),`
`,(0,l.jsx)(i.hr,{}),`
`,(0,l.jsx)(i.h2,{id:`unreleased`,children:`[Unreleased]`}),`
`,(0,l.jsx)(i.h3,{id:`added`,children:`Added`}),`
`,(0,l.jsxs)(i.ul,{children:[`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:`<ds-gallery>`}),` Organism:`]}),` New component to manage the home screen's horizontal gallery, encapsulating drag and wheel-scroll physics.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:`<ds-frame>`}),` Atom:`]}),` New foundational component for displaying media within a device mockup (e.g., `,(0,l.jsx)(i.code,{children:`iphone-17`}),`) or a simple aspect-ratio container (e.g., `,(0,l.jsx)(i.code,{children:`16:9`}),`).`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:`CONTRIBUTING.mdx`}),`:`]}),` Added a comprehensive guide for new contributors to the Storybook documentation.`]}),`
`]}),`
`,(0,l.jsx)(i.h3,{id:`changed`,children:`Changed`}),`
`,(0,l.jsxs)(i.ul,{children:[`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Architectural Shift:`}),` Re-classified `,(0,l.jsx)(i.code,{children:`Summary`}),` (formerly `,(0,l.jsx)(i.code,{children:`AiSummary`}),`), `,(0,l.jsx)(i.code,{children:`ComboCard`}),`, and `,(0,l.jsx)(i.code,{children:`GalleryItem`}),` from Organisms to Molecules to better align with Atomic Design principles.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:`<ds-toast>`}),` (formerly `,(0,l.jsx)(i.code,{children:`<ds-resume-toast>`}),`):`]}),` Refactored the component to be universal, now accepting slotted content for broader use cases like tutorial prompts.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:`<ds-audio-player>`}),`:`]}),` Enhanced with new controls for "Hide on Scroll" and "Auto-scroll" functionality, dispatching `,(0,l.jsx)(i.code,{children:`ds-audio-hide-toggle`}),` and `,(0,l.jsx)(i.code,{children:`ds-audio-autoscroll-toggle`}),` events.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:`<ds-gallery-item>`}),`:`]}),` Simplified to use the new `,(0,l.jsx)(i.code,{children:`<ds-frame>`}),` component, removing all internal device-specific styling and logic.`]}),`
`]}),`
`,(0,l.jsx)(i.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,l.jsxs)(i.ul,{children:[`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Storybook Booleans:`}),` Corrected the `,(0,l.jsx)(i.code,{children:`render`}),` function in `,(0,l.jsx)(i.code,{children:`GalleryItem.stories.js`}),` to properly handle boolean attributes, ensuring Storybook controls work as expected.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Storybook Viewport:`}),` Fixed an issue in `,(0,l.jsx)(i.code,{children:`VideoPlayer.stories.js`}),` where the preview iframe would collapse by wrapping the component in a container with a defined height.`]}),`
`]}),`
`,(0,l.jsx)(i.hr,{}),`
`,(0,l.jsx)(i.h2,{id:`100---2024-xx-xx`,children:`[1.0.0] - 2024-XX-XX`}),`
`,(0,l.jsx)(n,{children:`Initial Release`}),`
`,(0,l.jsx)(i.h3,{id:`added-1`,children:`Added`}),`
`,(0,l.jsxs)(i.ul,{children:[`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Initial Component Library:`}),` First stable release of all foundational atoms, molecules, and organisms, including:`,`
`,(0,l.jsxs)(i.ul,{children:[`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Foundations:`}),` Colors, Typography, Spacing, Animations, Overlays, Accessibility themes.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Atoms:`}),` Button, Check, Divider, Icon, Kbd, Loader, Pill, Tab, Toggle, Tooltip.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Molecules:`}),` AudioPlayer, Breadcrumb, ItemRow, MetricCard, SearchInput, VideoControls.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Organisms:`}),` Header, Modal, VideoPlayer, CaseSlide.`]}),`
`]}),`
`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:`Storybook Documentation:`}),` Initial setup of interactive documentation for all components.`]}),`
`,(0,l.jsxs)(i.li,{children:[(0,l.jsxs)(i.strong,{children:[(0,l.jsx)(i.code,{children:`portfoliable`}),` Integration:`]}),` First successful integration with the `,(0,l.jsx)(i.code,{children:`portfoliable`}),` consumer application.`]}),`
`]}),`
`,(0,l.jsx)(i.hr,{}),`
`,(0,l.jsx)(i.p,{children:(0,l.jsxs)(i.em,{children:[`This changelog serves as a high-level overview. For detailed changes, please refer to the commit history on our `,(0,l.jsx)(i.a,{href:`https://github.com/schimanko/valence`,rel:`nofollow`,children:`GitHub repository`}),`.`]})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=a(),o(),i()}))();export{c as default};
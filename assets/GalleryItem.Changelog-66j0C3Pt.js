import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Molecules/Gallery Item [v1.2.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`120---2026-07-23`,children:`[1.2.0] - 2026-07-23`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`thumbnail-frame-controls--iphone-12-defaults`,children:`Thumbnail Frame Controls & iPhone 12 Defaults`}),`
`,(0,c.jsxs)(r.p,{children:[`This release removes the forced `,(0,c.jsx)(r.code,{children:`custom-only`}),` thumbnail mode in `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),`, exposes full frame-selector props, and organizes Storybook controls into clear categories with iPhone 12 defaults.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`summary-of-changes`,children:`Summary of Changes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Classification`}),(0,c.jsx)(`th`,{children:`Scope / Context`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`GalleryItem.js`})}),(0,c.jsxs)(`td`,{children:[`Removed forced `,(0,c.jsx)(r.code,{children:`custom-only`}),` from child `,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),` and enabled full frame rendering mode by default.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`GalleryItem.js`})}),(0,c.jsxs)(`td`,{children:[`Added thumbnail passthrough attributes: `,(0,c.jsx)(r.code,{children:`thumb-category`}),`, `,(0,c.jsx)(r.code,{children:`thumb-brand`}),`, `,(0,c.jsx)(r.code,{children:`thumb-model`}),`, `,(0,c.jsx)(r.code,{children:`thumb-color`}),`, and optional `,(0,c.jsx)(r.code,{children:`thumb-device-src`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`GalleryItem.stories.js`})}),(0,c.jsx)(`td`,{children:`Exposed thumbnail frame controls in story args and grouped controls by category (Content, Thumbnail Frame, Layout, State, Pills).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`GalleryItem.stories.js`})}),(0,c.jsx)(`td`,{children:`Set default frame values to Apple iPhone 12 (mobile/apple/Apple iPhone 12/Black).`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Thumbnail Frame Props:`}),` Story + component now expose device frame selection inputs for catalog-driven rendering.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`changed`,children:`Changed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Default Device:`}),` Updated default framed thumbnail presentation to Apple iPhone 12.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Story Controls Taxonomy:`}),` Reorganized controls into distinct contributor-friendly groups.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`110---2026-07-23`,children:`[1.1.0] - 2026-07-23`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`thumbnail-composition-update`,children:`Thumbnail Composition Update`}),`
`,(0,c.jsxs)(r.p,{children:[`This release updates `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),` to compose the shared `,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),` atom instead of rendering a local image wrapper, and adds dedicated architecture/changelog documentation for maintainers.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`summary-of-changes-1`,children:`Summary of Changes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Classification`}),(0,c.jsx)(`th`,{children:`Scope / Context`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`GalleryItem.js`})}),(0,c.jsxs)(`td`,{children:[`Replaced local thumbnail wrapper/image composition with `,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),` (`,(0,c.jsx)(r.code,{children:`custom-only`}),`) as the render surface.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`gallery-item.css`})}),(0,c.jsxs)(`td`,{children:[`Updated thumbnail styles to target the `,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),` host and preserve hover, focus, and active interaction feedback.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Fixed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`locked visuals`})}),(0,c.jsx)(`td`,{children:`Locked-state blur is now applied to the shared thumbnail host consistently with protected-card behavior.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`component docs`})}),(0,c.jsxs)(`td`,{children:[`Added architecture and changelog MDX coverage for `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),` to align with Valence molecule documentation standards.`]})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added-1`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Architecture Documentation:`}),` Introduced `,(0,c.jsx)(r.code,{children:`GalleryItem.Architecture.mdx`}),` covering API, event contract, interaction model, and CSS hooks.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Changelog Coverage:`}),` Added component-level release notes with scoped, classified updates.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`changed-1`,children:`Changed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Thumbnail Surface:`}),` Gallery cards now pass `,(0,c.jsx)(r.code,{children:`thumb-src`}),` into `,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),` via `,(0,c.jsx)(r.code,{children:`screen-image`}),` and preserve ratio/height constraints.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Interaction Layer:`}),` Existing click/keyboard select behavior remains on the same gallery thumbnail surface semantics.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Shared Thumbnail Consistency:`}),` Gallery items now rely on the design system's thumbnail atom for image rendering behavior rather than duplicating local image mechanics.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-21`,children:`[1.0.0] - 2026-07-21`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsxs)(r.p,{children:[`Initial release of the `,(0,c.jsx)(r.code,{children:`ds-gallery-item`}),` molecule for case study card previews, lock-state redaction, and optional metadata pills.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added-2`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Gallery Item Molecule:`}),` Added `,(0,c.jsx)(r.code,{children:`<ds-gallery-item>`}),` with title, short description, read-time, lock icon, and pills support.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Selection Event:`}),` Added `,(0,c.jsx)(r.code,{children:`ds-case-select`}),` custom event for host-level case navigation.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Protected State Support:`}),` Added `,(0,c.jsx)(r.code,{children:`is-protected`}),` and `,(0,c.jsx)(r.code,{children:`is-unlocked`}),` behavior for locked/unlocked rendering.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-gallery-item>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
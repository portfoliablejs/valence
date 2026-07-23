import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/Thumbnail [v1.1.0]/Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog`,children:`Changelog`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`110---2026-07-23`,children:`[1.1.0] - 2026-07-23`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`performance--fidelity-update`,children:`Performance & Fidelity Update`}),`
`,(0,c.jsxs)(r.p,{children:[`This release moves `,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),` to a manifest-first geometry pipeline for smoother rendering in animation-heavy layouts, while refining inner-corner fitting and anti-fringe edge handling for rounded hardware bezels.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`summary-of-changes`,children:`Summary of Changes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Classification`}),(0,c.jsx)(`th`,{children:`Scope / Context`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`build pipeline`})}),(0,c.jsxs)(`td`,{children:[`Introduced `,(0,c.jsx)(r.code,{children:`scripts/generate-thumbnail-manifest.js`}),` to precompute per-device bounds, `,(0,c.jsx)(r.code,{children:`screenRadius`}),`, and `,(0,c.jsx)(r.code,{children:`edgeBleed`}),` into `,(0,c.jsx)(r.code,{children:`thumbnail-manifest.generated.js`}),`.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Thumbnail.js`})}),(0,c.jsx)(`td`,{children:`Switched to manifest-first geometry resolution using stable source-path keys with URL/name fallback lookup compatibility.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Changed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`runtime geometry fallback`})}),(0,c.jsx)(`td`,{children:`Kept alpha analyzer as a lightweight idle-time fallback only when manifest data is missing or incomplete.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Fixed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`thumbnail edge quality`})}),(0,c.jsxs)(`td`,{children:[`Added anti-fringe `,(0,c.jsx)(r.code,{children:`edgeBleed`}),` application to reduce white seams on semi-transparent alpha edges.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Fixed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`rounded screen fitting`})}),(0,c.jsx)(`td`,{children:`Refined corner detection heuristics for round inner bezels, improving fit on Apple-style devices.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Manifest Generator:`}),` New build step to precompute screen window geometry from AVIF alpha data.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Precomputed Manifest Import:`}),` Thumbnail now loads generated manifest data by default.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Prebuild Hook:`}),` `,(0,c.jsx)(r.code,{children:`prebuild`}),` now runs manifest generation before export generation.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`changed`,children:`Changed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Render Path:`}),` Production renders now rely on precomputed geometry, removing the heavy runtime path in normal cases.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Manifest Lookup:`}),` Uses source-path keyed entries with URL/base-name fallback for resilience.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Alpha Edge Fringing:`}),` Slight edge expansion closes visible white borders around inner bezels.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Inner Radius Fidelity:`}),` Radius inference tuned for better rounded-corner matches.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`100---2026-07-20`,children:`[1.0.0] - 2026-07-20`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`initial-release`,children:`Initial Release`}),`
`,(0,c.jsxs)(r.p,{children:[`The stable debut of the presentational hardware bezel mockup frame and clipping screen thumbnail (`,(0,c.jsx)(r.code,{children:`ds-thumbnail`}),`) featuring automated canvas-driven masking, unconstrained flat fallback options, and root class accessibility syncing.`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`summary-of-changes-1`,children:`Summary of Changes`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Classification`}),(0,c.jsx)(`th`,{children:`Scope / Context`}),(0,c.jsx)(`th`,{children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-thumbnail`})}),(0,c.jsx)(`td`,{children:`Initial stable release of mockup frame wrapper with globed AVIF asset matching.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ds-thumbnail`})}),(0,c.jsx)(`td`,{children:`Designed an integrated runtime Auto-Masking canvas flood-fill engine to clip screen screenshots to hardware boundaries.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Added`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`_observeRootAccessibility`})}),(0,c.jsx)(`td`,{children:`Sets up dynamic document root class observer syncing visual settings.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`Fixed`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(r.code,{children:`Thumbnail.js`}),` & `,(0,c.jsx)(r.code,{children:`thumbnail.css`})]}),(0,c.jsxs)(`td`,{children:[`Remapped custom style parameters to standardized `,(0,c.jsx)(r.code,{children:`--ds-thumbnail-*`}),` design tokens instead of generic `,(0,c.jsx)(r.code,{children:`--custom-*`}),` variables.`]})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h3,{id:`added-1`,children:`Added`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Device Frame Mockup Atom:`}),` Created `,(0,c.jsx)(r.code,{children:`<ds-thumbnail>`}),` serving as a high-fidelity hardware bezel.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Dynamic Auto-Masking Engine:`}),` Built-in dev canvas scanner calculating transparent pixel fields and deploying CSS mask properties.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Root Class Syncing:`}),` MutationObserver on document roots reflects global setting cascades downstream as host element boolean flags.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Thematic Overrides:`}),` Bound bounding container max-width, max-height, and clipping border-radius to the standard `,(0,c.jsx)(r.code,{children:`--ds-thumbnail-*`}),` naming standard.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Storybook Workspace:`}),` Configured complete interactive Controls and detailed CSF3 stories inside `,(0,c.jsx)(r.code,{children:`Thumbnail.stories.js`}),`.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`fixed-1`,children:`Fixed`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Sub-Atomic Story Mapping:`}),` Synchronized Storybook override controllers to output precise `,(0,c.jsx)(r.code,{children:`--ds-thumbnail-max-height`}),`, `,(0,c.jsx)(r.code,{children:`--ds-thumbnail-max-width`}),`, and `,(0,c.jsx)(r.code,{children:`--ds-thumbnail-screen-radius`}),` custom styles.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`This changelog is specific to the `,(0,c.jsx)(r.code,{children:`<ds-thumbnail>`}),` component. For design system global releases, refer to the main `,(0,c.jsx)(r.a,{href:`?path=/docs/getting-started-changelog--docs`,children:`Getting Started/Changelog`}),`.`]})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
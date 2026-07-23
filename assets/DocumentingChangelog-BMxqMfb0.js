import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Contributing/Documenting: Changelog`}),`
`,(0,c.jsx)(r.h1,{id:`changelog-documentation-standards`,children:`Changelog Documentation Standards`}),`
`,(0,c.jsx)(r.p,{children:`This document defines the orientation and structure for authoring component changelog documents in Valence. Changelogs should help designers, developers, and contributors understand what changed, why it changed, and how it affects the component.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`1-purpose-of-a-changelog`,children:`1. Purpose of a Changelog`}),`
`,(0,c.jsx)(r.p,{children:`Every component with a stable public surface area should have a dedicated changelog document alongside its Storybook documentation. Changelogs are intended to:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`record release milestones and notable updates;`}),`
`,(0,c.jsx)(r.li,{children:`summarize user-facing changes in clear language;`}),`
`,(0,c.jsx)(r.li,{children:`support design system maintainers during audits and reviews;`}),`
`,(0,c.jsx)(r.li,{children:`provide a consistent history for future contributors.`}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`2-file-placement--naming`,children:`2. File Placement & Naming`}),`
`,(0,c.jsx)(r.p,{children:`Changelog files should follow the component's storybook location and use a predictable naming pattern:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`File pattern: `,(0,c.jsx)(r.code,{children:`[ComponentName].Changelog.mdx`})]}),`
`,(0,c.jsxs)(r.li,{children:[`Storybook title pattern: `,(0,c.jsx)(r.code,{children:`[Tier]/[ComponentName] [vX.Y.Z]/Changelog`})]}),`
`]}),`
`,(0,c.jsx)(r.p,{children:`Example:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.a,{href:`src/stories/molecules/Breadcrumb/Breadcrumb.Changelog.mdx`,children:`src/stories/molecules/Breadcrumb/Breadcrumb.Changelog.mdx`})}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.a,{href:`src/stories/molecules/CaseNavigator/CaseNavigator.Changelog.mdx`,children:`src/stories/molecules/CaseNavigator/CaseNavigator.Changelog.mdx`})}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`3-required-structure`,children:`3. Required Structure`}),`
`,(0,c.jsx)(r.p,{children:`A changelog should be concise, scannable, and structured around release intent.`}),`
`,(0,c.jsx)(r.h3,{id:`recommended-sections`,children:`Recommended Sections`}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:`Version Header`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`Use a heading such as `,(0,c.jsx)(r.code,{children:`## [1.0.0] - YYYY-MM-DD`}),`.`]}),`
`,(0,c.jsx)(r.li,{children:`Include the release date.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:`Release Summary`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Open with a short paragraph describing the release theme.`}),`
`,(0,c.jsx)(r.li,{children:`Highlight whether the release is an initial release, a stabilization pass, or a fix-focused update.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:`Summary of Changes`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Use a table when the changelog includes several distinct updates.`}),`
`,(0,c.jsx)(r.li,{children:`Columns should be: Classification, Scope / Context, Description.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:`Added / Fixed / Changed / Removed`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Group related updates under clear headings.`}),`
`,(0,c.jsx)(r.li,{children:`Keep bullets short and direct.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(r.li,{children:[`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:`Reference Note`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`If relevant, link back to the global changelog for cross-system release context.`}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`4-writing-guidelines`,children:`4. Writing Guidelines`}),`
`,(0,c.jsx)(r.h3,{id:`tone`,children:`Tone`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Use clear, neutral, and release-oriented language.`}),`
`,(0,c.jsx)(r.li,{children:`Prefer plain English over internal jargon.`}),`
`,(0,c.jsx)(r.li,{children:`Focus on outcome and impact rather than implementation detail alone.`}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`classification`,children:`Classification`}),`
`,(0,c.jsx)(r.p,{children:`Use standard labels consistently:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`Added`}),` for new capabilities or features`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`Fixed`}),` for bug fixes and compliance corrections`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`Changed`}),` for behavior or API adjustments`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`Removed`}),` for deprecated or retired functionality`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`scope`,children:`Scope`}),`
`,(0,c.jsx)(r.p,{children:`Mention the affected component, file, or subsystem when useful. Examples:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`ds-button`})}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`CaseNavigator.js`})}),`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.code,{children:`_observeRootAccessibility`})}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`avoid`,children:`Avoid`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`vague statements without context;`}),`
`,(0,c.jsx)(r.li,{children:`duplicate bullets that repeat the same point;`}),`
`,(0,c.jsx)(r.li,{children:`overly verbose implementation notes unless they matter to the user.`}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`5-mdx-template`,children:`5. MDX Template`}),`
`,(0,c.jsx)(r.p,{children:`Use the template below as a starting point for new component changelog documents.`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-mdx`,children:`import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Molecules/[ComponentName] [v1.0.0]/Changelog" />

# Changelog

<br />

## [1.0.0] - YYYY-MM-DD

<br />

### Initial Release

A short summary of the component release and its key purpose.

<br />

### Summary of Changes

<table>
  <thead>
    <tr>
      <th>Classification</th>
      <th>Scope / Context</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Added</td>
      <td>ds-[component-name]</td>
      <td>Added the initial stable release of the component.</td>
    </tr>
  </tbody>
</table>

<br />

### Added
- **Feature Name:** Added a new capability or experience.

### Fixed
- **Issue Name:** Resolved a bug, validation issue, or accessibility concern.

---

*This changelog is specific to the component. For design system global releases, refer to the main Getting Started changelog.*
`})}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`6-checklist-for-a-complete-changelog`,children:`6. Checklist for a Complete Changelog`}),`
`,(0,c.jsx)(r.p,{children:`Before publishing or merging a changelog, confirm that it:`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`[ ] uses a clear version heading and date;`}),`
`,(0,c.jsx)(r.li,{children:`[ ] explains the release purpose in one short summary;`}),`
`,(0,c.jsx)(r.li,{children:`[ ] groups changes under consistent classifications;`}),`
`,(0,c.jsx)(r.li,{children:`[ ] mentions impacted component or scope clearly;`}),`
`,(0,c.jsx)(r.li,{children:`[ ] avoids unresolved or placeholder wording;`}),`
`,(0,c.jsx)(r.li,{children:`[ ] remains readable for both contributors and downstream consumers.`}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
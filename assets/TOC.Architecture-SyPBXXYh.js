import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-CqftkxY0.js";import{a as i}from"./chunk-W22LQPXL-DcocAtLX.js";import{t as a}from"./mdx-react-shim-BIjp612k.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Atoms/TOC [v1.1.0]/Architecture`}),`
`,(0,c.jsx)(r.h1,{id:`ds-toc`,children:(0,c.jsx)(r.code,{children:`ds-toc`})}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-toc`}),` component is a `,(0,c.jsx)(r.strong,{children:`controlled`}),` Atom designed to render an Apple-like document minimap strip that expands into a floating navigation overlay (`,(0,c.jsx)(r.code,{children:`ds-contextual-menu`}),`). It automatically scans document heading elements (`,(0,c.jsx)(r.code,{children:`<h1>`}),`–`,(0,c.jsx)(r.code,{children:`4>`}),`), monitors scrolling via `,(0,c.jsx)(r.code,{children:`IntersectionObserver`}),`, highlights active content sections, and provides smooth programmatic scroll navigation.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsx)(r.h3,{id:`unidirectional-data-flow`,children:`Unidirectional Data Flow`}),`
`,(0,c.jsxs)(r.p,{children:[`The component strictly adheres to the `,(0,c.jsx)(r.strong,{children:`State In / Events Out`}),` pattern:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`State In (Attributes / Properties):`}),` The host binds `,(0,c.jsx)(r.code,{children:`opened`}),`, `,(0,c.jsx)(r.code,{children:`title-text`}),`, `,(0,c.jsx)(r.code,{children:`target-selector`}),`, `,(0,c.jsx)(r.code,{children:`max-height`}),`, `,(0,c.jsx)(r.code,{children:`aria-label`}),`, or programmatically injects an array of `,(0,c.jsx)(r.code,{children:`items`}),` heading objects downstream.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Events Out:`}),` Selecting a section heading dispatches a composed `,(0,c.jsx)(r.code,{children:`ds-toc-select`}),` custom event with heading metadata. Selecting the "Scroll to top" option dispatches `,(0,c.jsx)(r.code,{children:`ds-toc-scroll-top`}),`.`]}),`
`]}),`
`,(0,c.jsx)(`mermaid-diagram`,{chart:`
flowchart TD
    subgraph Host["Host Application / Document Page"]
        direction TB
        Headings["DOM Headings (h1 - h4)"]
        App["App Controller / Viewport"]
    end

    subgraph WebComp["ds-toc (Shadow DOM Boundary)"]
        TocComp["ds-toc"]
        Minimap["Minimap Strip (.minimap-strip)"]
        MenuOverlay["ds-contextual-menu (.toc-menu)"]
    end

    Headings -->|"1. Scanned by target-selector"| TocComp
    App -->|"2. State In: opened / items / title-text"| TocComp
    TocComp -->|"3. Renders Apple-style Lines"| Minimap
    TocComp -->|"4. Maps Headings to Option Rows"| MenuOverlay

    MenuOverlay -->|"5. Emits ds-toc-select / ds-toc-scroll-top"| App

    %% Styling
    style Host fill:#f8fafc,stroke:#94a3b8,stroke-width:2px,color:#0f172a
    style WebComp fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style Headings fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style App fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style TocComp fill:#ffffff,stroke:#93c5fd,color:#1e3a8a
    style Minimap fill:#ffffff,stroke:#cbd5e1,color:#0f172a
    style MenuOverlay fill:#ffffff,stroke:#cbd5e1,color:#0f172a
`}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`slot-architecture`,children:`Slot Architecture`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`ds-toc`}),` component completely encapsulates its internal DOM structure. It projects no public `,(0,c.jsx)(r.code,{children:`<slot>`}),` elements to ensure the Apple-style minimap strip and popover menu maintain strict positioning alignment and padding rules.`]}),`
`,(0,c.jsx)(r.h3,{id:`slot-hierarchy-table`,children:`Slot Hierarchy Table`}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Slot Name`}),(0,c.jsx)(`th`,{children:`Type / Allowed Children`}),(0,c.jsx)(`th`,{children:`Description`}),(0,c.jsx)(`th`,{children:`Fallback Behavior`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`default`})}),(0,c.jsx)(`td`,{children:`None`}),(0,c.jsxs)(`td`,{children:[`Encapsulated internal layout. Renders `,(0,c.jsx)(r.code,{children:`.minimap-strip`}),` lines and nested `,(0,c.jsx)(r.code,{children:`<ds-contextual-menu>`}),`.`]}),(0,c.jsxs)(`td`,{children:[`Generates empty minimap and menu until headings are scanned or `,(0,c.jsx)(r.code,{children:`items`}),` are injected.`]})]})})]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`data-model`,children:`Data Model`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-typescript`,children:`export interface DsTocHeadingItem {
  id: string;
  label: string;
  text?: string;
  level: 1 | 2 | 3 | 4;
  active?: boolean;
  selected?: boolean;
}

export interface DsTocState {
  items: DsTocHeadingItem[];
  opened: boolean;
  targetSelector: string;
  titleText: string;
  maxHeight: string;
  ariaLabel?: string;
}

export interface DsTocSubAtomicHooks {
  '--ds-toc-position'?: string;
  '--ds-toc-top'?: string;
  '--ds-toc-right'?: string;
  '--ds-toc-bottom'?: string;
  '--ds-toc-left'?: string;
  '--ds-toc-transform'?: string;
  '--ds-toc-max-height'?: string;
  '--ds-toc-line-color'?: string;
  '--ds-toc-line-active-color'?: string;
  '--ds-toc-line-height'?: string;
  '--ds-toc-line-gap'?: string;
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
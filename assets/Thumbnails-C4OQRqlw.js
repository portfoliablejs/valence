import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Thumbnails`}),`
`,(0,c.jsx)(r.h1,{id:`thumbnail`,children:`Thumbnail`}),`
`,(0,c.jsxs)(r.p,{children:[`The Thumbnail component (`,(0,c.jsx)(r.code,{children:`<ds-thumbnail>`}),`) is a framework-agnostic Web Component designed to showcase application screenshots, responsive designs, and portfolio projects inside physical device mockups (phones, laptops, tablets, wearables, and TVs).`]}),`
`,(0,c.jsx)(r.p,{children:`It uses a 2-layer Shadow DOM architecture combined with an automated canvas flood-fill mask generator that dynamically clips screen images to device bezels with subpixel precision.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`architecture-overview`,children:`Architecture Overview`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`<ds-thumbnail>`}),` maintains two independent visual layers inside its Shadow DOM:`]}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Screen Cover Layer (`,(0,c.jsx)(r.code,{children:`.screen-cover`}),`, z-index: 1):`]}),` The background image provided via the `,(0,c.jsx)(r.code,{children:`screen-image`}),` attribute.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Device Frame Layer (`,(0,c.jsx)(r.code,{children:`.device-image`}),`, z-index: 2):`]}),` The physical device frame overlay (`,(0,c.jsx)(r.code,{children:`.avif`}),` asset from `,(0,c.jsx)(r.code,{children:`DEVICE_CATALOG`}),`).`]}),`
`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{children:`
+------------------------------------------+
|  .frame-container                        |
|                                          |
|  +------------------------------------+  |
|  |  .device-image (Z-Index: 2)        |  |  <- Physical Bezel Overlay
|  |  +------------------------------+  |  |
|  |  |  .screen-cover (Z-Index: 1)  |  |  |  <- Clipped & Bounded Screenshot
|  |  |  (Clipped by generated mask) |  |  |
|  |  +------------------------------+  |  |
|  +------------------------------------+  |
+------------------------------------------+

`})}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`attributes--component-api`,children:`Attributes & Component API`}),`
`,(0,c.jsxs)(r.p,{children:[`The `,(0,c.jsx)(r.code,{children:`<ds-thumbnail>`}),` component accepts the following attributes for frame selection, image binding, and state control:`]}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Attribute`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Type`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Default`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Description`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`category`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`String`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`'mobile'`})}),(0,c.jsxs)(`td`,{children:[`Device category from catalog (e.g., `,(0,c.jsx)(`code`,{children:`mobile`}),`, `,(0,c.jsx)(`code`,{children:`desktop`}),`, `,(0,c.jsx)(`code`,{children:`tablet`}),`, `,(0,c.jsx)(`code`,{children:`wearable`}),`, `,(0,c.jsx)(`code`,{children:`television`}),`).`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`brand`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`String`})}),(0,c.jsx)(`td`,{children:`First brand in category`}),(0,c.jsxs)(`td`,{children:[`Brand ecosystem filter (e.g., `,(0,c.jsx)(`code`,{children:`apple`}),`, `,(0,c.jsx)(`code`,{children:`samsung`}),`, `,(0,c.jsx)(`code`,{children:`google`}),`).`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`model`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`String`})}),(0,c.jsx)(`td`,{children:`First model in brand`}),(0,c.jsxs)(`td`,{children:[`Specific device model (e.g., `,(0,c.jsx)(`code`,{children:`Apple iPhone 13`}),`, `,(0,c.jsx)(`code`,{children:`Apple MacBook Pro`}),`).`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`color`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`String`})}),(0,c.jsx)(`td`,{children:`First available color`}),(0,c.jsxs)(`td`,{children:[`Device body finish variant matching catalog assets (e.g., `,(0,c.jsx)(`code`,{children:`Midnight`}),`, `,(0,c.jsx)(`code`,{children:`Space Grey`}),`).`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`screen-image`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`URL String`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`''`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`strong`,{children:`Mandatory.`}),` The project screenshot URL rendered inside the device display bounds.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`custom-only`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`Boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`false`})}),(0,c.jsx)(`td`,{children:`Cancels the device frame overlay entirely and presents unconstrained image card styling with shadows and radii.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`max-height`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`CSS Dimension`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`'100%'`})}),(0,c.jsxs)(`td`,{children:[`Constraint height setting `,(0,c.jsx)(r.code,{children:`--custom-max-height`}),` to prevent large desktop mockups from overflowing viewports.`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`Boolean`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`false`})}),(0,c.jsxs)(`td`,{children:[`Reduces opacity (`,(0,c.jsx)(r.code,{children:`var(--opacity-disabled)`}),`) and locks pointer events (`,(0,c.jsx)(r.code,{children:`cursor: not-allowed`}),`).`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`aria-label`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`String`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`'Thumbnail Mockup'`})}),(0,c.jsx)(`td`,{children:`Delegated accessibility label. Automatically scrubbed from host tag to prevent DOM compliance violations.`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`dual-performance-architecture-editor-vs-production`,children:`Dual-Performance Architecture (Editor vs. Production)`}),`
`,(0,c.jsxs)(r.p,{children:[`To ensure high rendering speeds across live preview editors and hosted static portfolios, `,(0,c.jsx)(r.code,{children:`<ds-thumbnail>`}),` supports a hybrid execution pipeline:`]}),`
`,(0,c.jsx)(r.h3,{id:`1-dev--editor-mode-live-canvas-processing`,children:`1. Dev / Editor Mode (Live Canvas Processing)`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Runs the automated perimeter flood-fill algorithm in real time when swapping devices or colors.`}),`
`,(0,c.jsxs)(r.li,{children:[`Performs `,(0,c.jsx)(r.strong,{children:`2px mask dilation`}),` into the inner bezel to eliminate subpixel anti-aliasing alpha gaps around curved corners and straight edges.`]}),`
`,(0,c.jsxs)(r.li,{children:[`Generates lightweight, temporary memory Blob URLs via `,(0,c.jsx)(r.code,{children:`URL.createObjectURL(blob)`}),` instead of heavy Base64 strings to prevent main-thread memory spikes during editing sessions.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`2-production-mode-zero-latency-manifest-lookup`,children:`2. Production Mode (Zero-Latency Manifest Lookup)`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[`When building/exporting portfolios, a build script pre-calculates bounds and mask metadata into a `,(0,c.jsx)(r.code,{children:`thumbnail-manifest.json`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[`At runtime, `,(0,c.jsx)(r.code,{children:`<ds-thumbnail>`}),` checks `,(0,c.jsx)(r.code,{children:`window.__THUMBNAIL_MANIFEST__`}),` or `,(0,c.jsx)(r.code,{children:`registerDeviceManifest()`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Result:`}),` `,(0,c.jsx)(r.strong,{children:`0ms canvas execution time`}),` on production page loads, bypassing canvas loops entirely.`]}),`
`]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`sub-atomic-property-overrides`,children:`Sub-Atomic Property Overrides`}),`
`,(0,c.jsx)(r.p,{children:`Components accept sub-atomic variable overrides for dynamic layout constraints and fallback styling:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`ds-thumbnail {
  /* Override maximum dimensions */
  --custom-max-width: 600px;
  --custom-max-height: 400px;

  /* Custom corner radius fallback when [custom-only] is active */
  --custom-screen-radius: var(--radius-lg);
}

`})}),`
`,(0,c.jsx)(r.h2,{id:`implementation-examples`,children:`Implementation Examples`}),`
`,(0,c.jsx)(r.h3,{id:`1-standard-mobile-device-framing`,children:`1. Standard Mobile Device Framing`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<ds-thumbnail
  category="mobile"
  brand="apple"
  model="Apple iPhone 13"
  color="Midnight"
  screen-image="[https://my-domain.com/assets/app-screenshot.png](https://my-domain.com/assets/app-screenshot.png)"
  max-height="500px">
</ds-thumbnail>

`})}),`
`,(0,c.jsx)(r.h3,{id:`2-desktop-mockup-in-single-page-application-spa`,children:`2. Desktop Mockup in Single Page Application (SPA)`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<ds-thumbnail
  category="desktop"
  brand="apple"
  model="Apple MacBook Pro"
  color="Space Grey"
  screen-image="[https://my-domain.com/assets/dashboard.png](https://my-domain.com/assets/dashboard.png)"
  max-height="400px">
</ds-thumbnail>

`})}),`
`,(0,c.jsx)(r.h3,{id:`3-production-manifest-injection-zero-latency-load`,children:`3. Production Manifest Injection (Zero-Latency Load)`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<script type="module">
  import { registerDeviceManifest } from './Thumbnail.js';

  // Register pre-generated bounds at app startup
  registerDeviceManifest({
    "/src/stories/assets/mockups/mobile/apple/iPhone-13/Midnight.avif": {
      bounds: { top: 11.2, left: 4.8, width: 90.4, height: 77.6 }
    }
  });
<\/script>

<ds-thumbnail
  category="mobile"
  model="Apple iPhone 13"
  screen-image="/uploads/portfolio-screen.png">
</ds-thumbnail>

`})}),`
`,(0,c.jsx)(r.h3,{id:`4-custom-image-only-frame-cancellation`,children:`4. Custom Image Only (Frame Cancellation)`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-html`,children:`<ds-thumbnail
  custom-only
  screen-image="[https://my-domain.com/assets/design-preview.png](https://my-domain.com/assets/design-preview.png)"
  max-height="350px">
</ds-thumbnail>

`})}),`
`,(0,c.jsx)(r.h2,{id:`accessibility--system-syncing`,children:`Accessibility & System Syncing`}),`
`,(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:`<ds-thumbnail>`}),` integrates with platform-wide accessibility controls via root attribute syncing:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`High Contrast Mode (`,(0,c.jsx)(r.code,{children:`:host([a11y-high-contrast])`}),`):`]}),` Disables filters and blurs, enforcing clear high-visibility borders around the frame and screen cover.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Forced Colors Mode (`,(0,c.jsx)(r.code,{children:`@media (forced-colors: active)`}),`):`]}),` Suppresses forced color adjustments on image layers to prevent browser canvas flattening from destroying screen artwork.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Reduced Motion Mode (`,(0,c.jsx)(r.code,{children:`:host([a11y-reduce-motion])`}),`):`]}),` Suppresses CSS scale and transform transitions during state updates or view resizing.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Focus States (`,(0,c.jsx)(r.code,{children:`:focus-visible`}),`):`]}),` Enforces high-visibility focus indicators (`,(0,c.jsx)(r.code,{children:`var(--a11y-focus-outline)`}),`) around active frames during keyboard navigation.`]}),`
`]}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Layer Preservation:`}),` Never flatten screen images and device mockups into a single composite image file. Keeping them as separate DOM layers preserves crispness on 4K/Retina displays, enables GPU acceleration during view resizes, and maintains accessibility.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Viewport Scaling:`}),` Always pass a `,(0,c.jsx)(r.code,{children:`max-height`}),` attribute (or set `,(0,c.jsx)(r.code,{children:`--custom-max-height`}),`) on desktop and television mockups to prevent large assets from pushing adjacent content out of view.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Build Optimization:`}),` Pre-generate device bounds using `,(0,c.jsx)(r.code,{children:`exportPortfolioDeviceManifest()`}),` during static site builds to ensure instant page rendering on hosted production portfolios.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`Touch Target & Focus:`}),` Ensure interactive thumbnails inside cards include explicit `,(0,c.jsx)(r.code,{children:`aria-label`}),` descriptors for screen readers.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
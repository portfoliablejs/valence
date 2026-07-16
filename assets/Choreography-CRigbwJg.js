import{i as e}from"./preload-helper-CT_b8DTk.js";import{E as t,l as n,m as r}from"./blocks-Bsfr4ULa.js";import{a as i}from"./chunk-W22LQPXL-BtQT2dfc.js";import{t as a}from"./mdx-react-shim-BTSxVohn.js";function o(e){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Sub-atomic/Choreography`}),`
`,(0,c.jsx)(r.h1,{id:`choreography`,children:`Choreography`}),`
`,(0,c.jsx)(r.p,{children:`The Choreography system provides standardized easing curves and timing values to bring fluid, responsive motion to Valence components. Using consistent motion principles ensures transitions feel purposeful, deliberate, and delightful across the entire platform.`}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`easing-tokens`,children:`Easing Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Easing functions dictate standard acceleration and deceleration curves for regular UI transitions.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Curve`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Description / Best For`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Standard Ease`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--ease-standard)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`ease`})}),(0,c.jsx)(`td`,{children:`Default CSS transition curve. Good for simple state changes.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Fluid Ease`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--ease-fluid)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`cubic-bezier(0.16, 1, 0.3, 1)`})}),(0,c.jsx)(`td`,{children:`Starts fast and gently decelerates toward the end position. Ideal for modals, panels, and primary transitions.`})]})]})]}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.em,{children:`Hover over the cards to compare standard vs. fluid deceleration curves:`})}),`
`,(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,margin:`20px 0`,flexWrap:`wrap`},children:[(0,c.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#f4f6f8`,borderRadius:`8px`,border:`1px solid #e1e4e8`,cursor:`pointer`,width:`200px`,transition:`transform var(--anim-normal) var(--ease-standard)`},onMouseEnter:e=>e.currentTarget.style.transform=`translateY(-8px)`,onMouseLeave:e=>e.currentTarget.style.transform=`translateY(0)`,children:[(0,c.jsx)(`strong`,{style:{fontSize:`14px`},children:`Standard Ease`}),(0,c.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:`#666`},children:(0,c.jsx)(`code`,{children:`var(--ease-standard)`})})]}),(0,c.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#f4f6f8`,borderRadius:`8px`,border:`1px solid #e1e4e8`,cursor:`pointer`,width:`200px`,transition:`transform var(--anim-normal) var(--ease-fluid)`},onMouseEnter:e=>e.currentTarget.style.transform=`translateY(-8px)`,onMouseLeave:e=>e.currentTarget.style.transform=`translateY(0)`,children:[(0,c.jsx)(`strong`,{style:{fontSize:`14px`},children:`Fluid Ease`}),(0,c.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:`#666`},children:(0,c.jsx)(`code`,{children:`var(--ease-fluid)`})})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`physics--motion-tokens`,children:`Physics & Motion Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Physics curves mimic real-world mechanical behaviors or continuous motion.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Type`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Description / Best For`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Spring Physics`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--anim-spring)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`cubic-bezier(0.34, 1.56, 0.64, 1)`})}),(0,c.jsx)(`td`,{children:`A bouncy, overshooting curve mimicking natural physics. Great for micro-interactions and toggles.`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Linear`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--anim-linear)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`linear`})}),(0,c.jsx)(`td`,{children:`Constant speed throughout without acceleration. Continuous looping animations (e.g., loading spinners).`})]})]})]}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsx)(r.em,{children:`Hover over the Spring card or watch the Linear spinner:`})}),`
`,(0,c.jsx)(`style`,{children:`
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`}),`
`,(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,margin:`20px 0`,alignItems:`stretch`,flexWrap:`wrap`},children:[(0,c.jsxs)(`div`,{style:{padding:`16px 20px`,background:`#f4f6f8`,borderRadius:`8px`,border:`1px solid #e1e4e8`,cursor:`pointer`,width:`200px`,height:`84px`,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,justifyCenter:`center`,transition:`transform var(--anim-fast) var(--anim-spring)`},onMouseEnter:e=>e.currentTarget.style.transform=`scale(1.05)`,onMouseLeave:e=>e.currentTarget.style.transform=`scale(1)`,children:[(0,c.jsx)(`strong`,{style:{fontSize:`14px`},children:`Spring Bounce`}),(0,c.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:`#666`},children:(0,c.jsx)(`code`,{children:`var(--anim-spring)`})})]}),(0,c.jsxs)(`div`,{style:{padding:`16px 20px`,background:`#f4f6f8`,borderRadius:`8px`,border:`1px solid #e1e4e8`,display:`flex`,alignItems:`center`,gap:`12px`,width:`200px`,height:`84px`,boxSizing:`border-box`},children:[(0,c.jsx)(`div`,{style:{width:`20px`,height:`20px`,minWidth:`20px`,border:`3px solid #ccc`,borderTopColor:`#0052cc`,borderRadius:`50%`,animation:`spin 1s var(--anim-linear) infinite`}}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`strong`,{style:{fontSize:`14px`,display:`block`,lineHeight:`1.2`},children:`Linear`}),(0,c.jsx)(`span`,{style:{fontSize:`12px`,color:`#666`},children:`Continuous loop`})]})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`duration-tokens`,children:`Duration Tokens`}),`
`,(0,c.jsx)(r.p,{children:`Duration tokens control the speed and timeframe of an animation from start to finish. Pair these values with easing curves to keep interface timing predictable.`}),`
`,(0,c.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Token`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`CSS Variable`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Value`}),(0,c.jsx)(`th`,{style:{textAlign:`left`},children:`Usage Guidelines`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Fast Speed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--anim-fast)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0.2s`})}),(0,c.jsx)(`td`,{children:`Immediate micro-interactions (hover states, active feedback, tooltips).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Normal Speed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--anim-normal)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0.3s`})}),(0,c.jsx)(`td`,{children:`Standard UI state transitions (dropdowns, accordions, toast notifications).`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Slow Speed`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`var(--anim-slow)`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r.code,{children:`0.4s`})}),(0,c.jsx)(`td`,{children:`Large layout shifts (panel slides, modal entrances, page transitions).`})]})]})]}),`
`,(0,c.jsx)(r.p,{children:(0,c.jsxs)(r.em,{children:[`Hover over each card to feel the speed difference (`,(0,c.jsx)(r.code,{children:`0.2s`}),` vs `,(0,c.jsx)(r.code,{children:`0.3s`}),` vs `,(0,c.jsx)(r.code,{children:`0.4s`}),`):`]})}),`
`,(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,margin:`20px 0`,flexWrap:`wrap`},children:[(0,c.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#f4f6f8`,borderRadius:`8px`,border:`1px solid #e1e4e8`,cursor:`pointer`,width:`160px`,transition:`transform var(--anim-fast) var(--ease-fluid)`},onMouseEnter:e=>e.currentTarget.style.transform=`translateY(-6px)`,onMouseLeave:e=>e.currentTarget.style.transform=`translateY(0)`,children:[(0,c.jsx)(`strong`,{style:{fontSize:`14px`},children:`Fast Speed`}),(0,c.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:`#666`},children:(0,c.jsx)(`code`,{children:`0.2s`})})]}),(0,c.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#f4f6f8`,borderRadius:`8px`,border:`1px solid #e1e4e8`,cursor:`pointer`,width:`160px`,transition:`transform var(--anim-normal) var(--ease-fluid)`},onMouseEnter:e=>e.currentTarget.style.transform=`translateY(-6px)`,onMouseLeave:e=>e.currentTarget.style.transform=`translateY(0)`,children:[(0,c.jsx)(`strong`,{style:{fontSize:`14px`},children:`Normal Speed`}),(0,c.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:`#666`},children:(0,c.jsx)(`code`,{children:`0.3s`})})]}),(0,c.jsxs)(`div`,{style:{padding:`20px 24px`,background:`#f4f6f8`,borderRadius:`8px`,border:`1px solid #e1e4e8`,cursor:`pointer`,width:`160px`,transition:`transform var(--anim-slow) var(--ease-fluid)`},onMouseEnter:e=>e.currentTarget.style.transform=`translateY(-6px)`,onMouseLeave:e=>e.currentTarget.style.transform=`translateY(0)`,children:[(0,c.jsx)(`strong`,{style:{fontSize:`14px`},children:`Slow Speed`}),(0,c.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:`12px`,color:`#666`},children:(0,c.jsx)(`code`,{children:`0.4s`})})]})]}),`
`,(0,c.jsx)(`br`,{}),`
`,(0,c.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage Guidelines`}),`
`,(0,c.jsxs)(r.p,{children:[`Always combine choreography tokens in standard CSS `,(0,c.jsx)(r.code,{children:`transition`}),` or `,(0,c.jsx)(r.code,{children:`animation`}),` shorthand properties. Do not hardcode custom `,(0,c.jsx)(r.code,{children:`cubic-bezier`}),` curves or timing values in individual components.`]}),`
`,(0,c.jsx)(r.h3,{id:`css-example`,children:`CSS Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`.card {
  /* Transition transform property using standard duration and fluid easing */
  transition: transform var(--anim-normal) var(--ease-fluid);
}

.card:hover {
  transform: translateY(-4px);
}

.button-toggle {
  /* Use spring physics for interactive feedback */
  transition: transform var(--anim-fast) var(--anim-spring);
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`keyframe-animation-example`,children:`Keyframe Animation Example`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-css`,children:`@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  animation: spin var(--anim-slow) var(--anim-linear) infinite;
}
`})}),`
`,(0,c.jsx)(r.h2,{id:`reduced-motion-integration`,children:`Reduced Motion Integration`}),`
`,(0,c.jsxs)(r.p,{children:[`When `,(0,c.jsx)(r.code,{children:`.a11y-reduce-motion`}),` is active on `,(0,c.jsx)(r.code,{children:`document.documentElement`}),`, all choreography timing tokens and scale transformations automatically reset to instant values to prevent vestibular triggers:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`--component-transition`}),` evaluates to `,(0,c.jsx)(r.code,{children:`all 0s linear !important`})]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`--btn-active-scale`}),`, `,(0,c.jsx)(r.code,{children:`--btn-hover-scale`}),`, and `,(0,c.jsx)(r.code,{children:`--btn-hover-scale-lg`}),` evaluate to `,(0,c.jsx)(r.code,{children:`1`})]}),`
`,(0,c.jsxs)(r.li,{children:[`Global `,(0,c.jsx)(r.code,{children:`transition-duration`}),` and `,(0,c.jsx)(r.code,{children:`animation-duration`}),` are forced to `,(0,c.jsx)(r.code,{children:`0s`}),` (This bulletproofs the UI against Safari/WebKit bugs that fail to parse `,(0,c.jsx)(r.code,{children:`transition: none`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(r.p,{children:[`This ensures interactive components respect user accessibility preferences automatically without requiring custom `,(0,c.jsx)(r.code,{children:`@media (prefers-reduced-motion)`}),` blocks in every single component.`]}),`
`,(0,c.jsx)(r.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,c.jsx)(r.p,{children:`Purposeful Motion: Avoid animating elements unnecessarily. Every transition should communicate a state change or visual hierarchy shift to the user.
Accessibility (html.a11y-reduce-motion): Respect user accessibility settings by disabling or simplifying movement when reduced motion is requested.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=i(),a(),r()}))();export{s as default};
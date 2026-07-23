import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./MetricCard-Cs1lcyIF.js";import{t as i}from"./Summary-Cy68rjLC.js";var a,o,s,c,l,u,d,f=e((()=>{n(),i(),r(),a={title:`Molecules/Summary`,component:`ds-summary`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Stateless presentational molecule for summaries and key insights featuring audio-player glassmorphic styling, controllable metrics toggle, and fully configurable slotted metric card grids.`}}},argTypes:{text:{name:`text`,control:`text`,description:`Primary summary body text string.`,table:{category:`Core`}},active:{name:`active`,control:`boolean`,description:`Triggers the dynamic AI typing animation sequence.`,table:{category:`Core`,defaultValue:{summary:`false`}}},labelHeader:{name:`label-header`,control:`text`,description:`Localizable header label string.`,table:{category:`Core`,defaultValue:{summary:`Summary`}}},showMetrics:{name:`show-metrics`,control:`boolean`,description:`Toggles visibility of the slotted metric cards grid.`,table:{category:`Core`,defaultValue:{summary:`true`}}},metric1Value:{name:`Metric 1 Value`,control:`text`,description:`Value for metric card 1.`,table:{category:`SLOTTED METRIC 1`}},metric1Label:{name:`Metric 1 Label`,control:`text`,description:`Label for metric card 1.`,table:{category:`SLOTTED METRIC 1`}},metric1Variant:{name:`Metric 1 Variant`,control:{type:`select`},options:[`default`,`success`,`accent`,`warning`,`error`],table:{category:`SLOTTED METRIC 1`}},metric1Treatment:{name:`Metric 1 Treatment`,control:{type:`inline-radio`},options:[`border-left`,`surface`,`minimal`],table:{category:`SLOTTED METRIC 1`}},metric2Value:{name:`Metric 2 Value`,control:`text`,description:`Value for metric card 2.`,table:{category:`SLOTTED METRIC 2`}},metric2Label:{name:`Metric 2 Label`,control:`text`,description:`Label for metric card 2.`,table:{category:`SLOTTED METRIC 2`}},metric2Variant:{name:`Metric 2 Variant`,control:{type:`select`},options:[`default`,`success`,`accent`,`warning`,`error`],table:{category:`SLOTTED METRIC 2`}},metric2Icon:{name:`Metric 2 Icon`,control:`text`,description:`Icon for metric card 2.`,table:{category:`SLOTTED METRIC 2`}},metric3Value:{name:`Metric 3 Value`,control:`text`,description:`Value for metric card 3.`,table:{category:`SLOTTED METRIC 3`}},metric3Label:{name:`Metric 3 Label`,control:`text`,description:`Label for metric card 3.`,table:{category:`SLOTTED METRIC 3`}},metric4Value:{name:`Metric 4 Value`,control:`text`,description:`Value for metric card 4.`,table:{category:`SLOTTED METRIC 4`}},metric4Label:{name:`Metric 4 Label`,control:`text`,description:`Label for metric card 4.`,table:{category:`SLOTTED METRIC 4`}},"--ds-summary-bg":{name:`--ds-summary-bg`,control:`color`,description:`Overrides background container surface color.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-summary-border-color":{name:`--ds-summary-border-color`,control:`color`,description:`Overrides summary container border color.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-summary-header-color":{name:`--ds-summary-header-color`,control:`color`,description:`Overrides header title text color.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-summary-text-color":{name:`--ds-summary-text-color`,control:`color`,description:`Overrides summary body text color.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-summary-padding":{name:`--ds-summary-padding`,control:`text`,description:`Overrides internal summary container padding.`,table:{category:`SUB-ATOMIC PROPS`}}},args:{text:`Holofante lab required a scalable post-sale portal to align clients. This solution introduced self-service scheduling and real-time tracking, vastly reducing operational overhead and account management blind spots.`,active:!1,labelHeader:`Summary`,showMetrics:!0,metric1Value:`18 → 5.3`,metric1Label:`Days to first deliverable`,metric1Variant:`success`,metric1Treatment:`border-left`,metric2Value:`10h+`,metric2Label:`Weekly hours recovered`,metric2Variant:`accent`,metric2Icon:`check-circle`,metric3Value:`100%`,metric3Label:`UI Consistency`,metric4Value:`< 2s`,metric4Label:`UI Latency`},render:e=>t`
      <ds-summary
        style=${[e[`--ds-summary-bg`]?`--ds-summary-bg: ${e[`--ds-summary-bg`]};`:``,e[`--ds-summary-border-color`]?`--ds-summary-border-color: ${e[`--ds-summary-border-color`]};`:``,e[`--ds-summary-header-color`]?`--ds-summary-header-color: ${e[`--ds-summary-header-color`]};`:``,e[`--ds-summary-text-color`]?`--ds-summary-text-color: ${e[`--ds-summary-text-color`]};`:``,e[`--ds-summary-padding`]?`--ds-summary-padding: ${e[`--ds-summary-padding`]};`:``].filter(Boolean).join(` `)||void 0}
        text=${e.text||``}
        active=${e.active?`true`:`false`}
        label-header=${e.labelHeader||`Summary`}
        show-metrics=${e.showMetrics?`true`:`false`}>
        ${e.showMetrics?t`
          <ds-metric-card
            value=${e.metric1Value||`18 → 5.3`}
            label=${e.metric1Label||`Days to first deliverable`}
            variant=${e.metric1Variant||`success`}
            treatment=${e.metric1Treatment||`border-left`}>
          </ds-metric-card>
          <ds-metric-card
            value=${e.metric2Value||`10h+`}
            label=${e.metric2Label||`Weekly hours recovered`}
            variant=${e.metric2Variant||`accent`}
            icon=${e.metric2Icon||`check-circle`}>
          </ds-metric-card>
          <ds-metric-card
            value=${e.metric3Value||`100%`}
            label=${e.metric3Label||`UI Consistency`}>
          </ds-metric-card>
          <ds-metric-card
            value=${e.metric4Value||`< 2s`}
            label=${e.metric4Label||`UI Latency`}>
          </ds-metric-card>
        `:``}
      </ds-summary>
    `},o={args:{text:`Holofante lab required a scalable post-sale portal to align clients. This solution introduced self-service scheduling and real-time tracking, vastly reducing operational overhead.`,active:!1,labelHeader:`Summary`,showMetrics:!0}},s={args:{text:`The platform automation reduced design handoff latency by 70% across three engineering teams.`,showMetrics:!0}},c={args:{text:`Real-time telemetry and automated component auditing cut delivery cycle times in half.`,active:!0,showMetrics:!0}},l={args:{labelHeader:`Executive Brief`,text:`Projected operational savings exceed $2.4M annually following design system consolidation.`,showMetrics:!0}},u={args:{text:`Holofante lab required a scalable post-sale portal to align clients. Operational overhead was reduced significantly without additional headcount.`,showMetrics:!1}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Holofante lab required a scalable post-sale portal to align clients. This solution introduced self-service scheduling and real-time tracking, vastly reducing operational overhead.',
    active: false,
    labelHeader: 'Summary',
    showMetrics: true
  }
}`,...o.parameters?.docs?.source},description:{story:`Default summary state with slotted metrics visible in main preview iframe`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'The platform automation reduced design handoff latency by 70% across three engineering teams.',
    showMetrics: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Story for the `text` property",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Real-time telemetry and automated component auditing cut delivery cycle times in half.',
    active: true,
    showMetrics: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Story for the `active` property (triggers typing animation sequence)",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    labelHeader: 'Executive Brief',
    text: 'Projected operational savings exceed $2.4M annually following design system consolidation.',
    showMetrics: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Story for the `label-header` property",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Holofante lab required a scalable post-sale portal to align clients. Operational overhead was reduced significantly without additional headcount.',
    showMetrics: false
  }
}`,...u.parameters?.docs?.source},description:{story:"Story for the `show-metrics` property (disabling slotted metric card grid)",...u.parameters?.docs?.description}}},d=[`Default`,`Text`,`Active`,`LabelHeader`,`ShowMetricsDisabled`]}));f();export{c as Active,o as Default,l as LabelHeader,u as ShowMetricsDisabled,s as Text,d as __namedExportsOrder,a as default,f as t};
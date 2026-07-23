import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./MetricCard-Cs1lcyIF.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=e((()=>{n(),r(),i={title:`Atoms/Metric Card [v1.0.0]`,component:`ds-metric-card`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Stateless presentational atom for summary indicators, statistics, KPIs, and case study highlights.`}}},argTypes:{value:{name:`value`,control:`text`,description:`Primary metric value or statistical figure.`,table:{category:`Core`}},label:{name:`label`,control:`text`,description:`Descriptive subtitle or category label.`,table:{category:`Core`}},prefix:{name:`prefix`,control:`text`,description:`Optional currency or direction symbol before value (e.g. $, +).`,table:{category:`Core`}},suffix:{name:`suffix`,control:`text`,description:`Optional unit or percentage symbol after value (e.g. %, h+).`,table:{category:`Core`}},variant:{name:`variant`,control:{type:`select`},options:[`default`,`success`,`accent`,`warning`,`error`],description:`Semantic indicator border color variant.`,table:{category:`Core`,defaultValue:{summary:`default`}}},treatment:{name:`treatment`,control:{type:`inline-radio`},options:[`border-left`,`surface`,`minimal`],description:`Surface rendering style and container framing.`,table:{category:`Core`,defaultValue:{summary:`border-left`}}},size:{name:`size`,control:{type:`inline-radio`},options:[`sm`,`md`,`lg`],description:`Density scale and typography sizing.`,table:{category:`Core`,defaultValue:{summary:`md`}}},trend:{name:`trend`,control:{type:`select`},options:[null,`up`,`down`,`neutral`],description:`Directional indicator arrow rendered next to metric value.`,table:{category:`Core`}},icon:{name:`icon`,control:`text`,description:`Optional sub-atomic icon name rendered beside the label.`,table:{category:`Core`}},"--ds-metric-card-border-color":{name:`--ds-metric-card-border-color`,control:`color`,description:`Overrides left indicator border color.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-metric-card-bg":{name:`--ds-metric-card-bg`,control:`color`,description:`Overrides card container background surface.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-metric-card-padding":{name:`--ds-metric-card-padding`,control:`text`,description:`Overrides internal container padding.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-metric-card-value-color":{name:`--ds-metric-card-value-color`,control:`color`,description:`Overrides primary metric value text color.`,table:{category:`SUB-ATOMIC PROPS`}},"--ds-metric-card-label-color":{name:`--ds-metric-card-label-color`,control:`color`,description:`Overrides metric label text color.`,table:{category:`SUB-ATOMIC PROPS`}}},args:{value:`18 → 5.3`,label:`Days to first deliverable`,variant:`default`,treatment:`border-left`,size:`md`},render:e=>t`
      <ds-metric-card
        style=${[e[`--ds-metric-card-border-color`]?`--ds-metric-card-border-color: ${e[`--ds-metric-card-border-color`]};`:``,e[`--ds-metric-card-bg`]?`--ds-metric-card-bg: ${e[`--ds-metric-card-bg`]};`:``,e[`--ds-metric-card-padding`]?`--ds-metric-card-padding: ${e[`--ds-metric-card-padding`]};`:``,e[`--ds-metric-card-value-color`]?`--ds-metric-card-value-color: ${e[`--ds-metric-card-value-color`]};`:``,e[`--ds-metric-card-label-color`]?`--ds-metric-card-label-color: ${e[`--ds-metric-card-label-color`]};`:``].filter(Boolean).join(` `)||void 0}
        value=${e.value||``}
        label=${e.label||``}
        prefix=${e.prefix||``}
        suffix=${e.suffix||``}
        variant=${e.variant||`default`}
        treatment=${e.treatment||`border-left`}
        size=${e.size||`md`}
        trend=${e.trend||``}
        icon=${e.icon||``}>
      </ds-metric-card>
    `},a={args:{value:`18 → 5.3`,label:`Days to first deliverable`}},o={args:{value:`99.9%`,label:`Uptime SLA`}},s={args:{value:`2.4s`,label:`Average Page Load Time`}},c={args:{prefix:`$`,value:`2.4M`,label:`Annual Cost Savings`}},l={args:{value:`70`,suffix:`%`,label:`Latency Reduction`}},u={args:{variant:`default`,value:`18 → 5.3`,label:`Default Variant`}},d={args:{variant:`success`,value:`70%`,label:`Success Variant`}},f={args:{variant:`accent`,value:`+$2.4M`,label:`Accent Variant`}},p={args:{variant:`warning`,value:`10h+`,label:`Warning Variant`}},m={args:{variant:`error`,value:`45%`,label:`Error Variant`}},h={args:{treatment:`border-left`,value:`100%`,label:`Border-Left Treatment`}},g={args:{treatment:`surface`,variant:`success`,value:`< 2s`,label:`Surface Treatment`}},_={args:{treatment:`minimal`,value:`10h+`,label:`Minimal Treatment`}},v={args:{size:`sm`,value:`100%`,label:`Small Size`}},y={args:{size:`md`,value:`18 → 5.3`,label:`Medium Size`}},b={args:{size:`lg`,treatment:`surface`,variant:`accent`,value:`70%`,label:`Large Size`}},x={args:{variant:`success`,trend:`up`,prefix:`+`,value:`2.4`,suffix:`M`,label:`Trend Up`}},S={args:{variant:`success`,trend:`down`,value:`70`,suffix:`%`,label:`Trend Down`}},C={args:{variant:`default`,trend:`neutral`,value:`2.0`,suffix:`s`,label:`Trend Neutral`}},w={args:{variant:`accent`,value:`10`,suffix:`h+`,label:`Weekly hours recovered`,icon:`check-circle`}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: '18 → 5.3',
    label: 'Days to first deliverable'
  }
}`,...a.parameters?.docs?.source},description:{story:`Default metric card state`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: '99.9%',
    label: 'Uptime SLA'
  }
}`,...o.parameters?.docs?.source},description:{story:"Story for the `value` property",...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: '2.4s',
    label: 'Average Page Load Time'
  }
}`,...s.parameters?.docs?.source},description:{story:"Story for the `label` property",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: '$',
    value: '2.4M',
    label: 'Annual Cost Savings'
  }
}`,...c.parameters?.docs?.source},description:{story:"Story for the `prefix` property",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: '70',
    suffix: '%',
    label: 'Latency Reduction'
  }
}`,...l.parameters?.docs?.source},description:{story:"Story for the `suffix` property",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    value: '18 → 5.3',
    label: 'Default Variant'
  }
}`,...u.parameters?.docs?.source},description:{story:'Story for `variant="default"`',...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    value: '70%',
    label: 'Success Variant'
  }
}`,...d.parameters?.docs?.source},description:{story:'Story for `variant="success"`',...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    value: '+$2.4M',
    label: 'Accent Variant'
  }
}`,...f.parameters?.docs?.source},description:{story:'Story for `variant="accent"`',...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    value: '10h+',
    label: 'Warning Variant'
  }
}`,...p.parameters?.docs?.source},description:{story:'Story for `variant="warning"`',...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    value: '45%',
    label: 'Error Variant'
  }
}`,...m.parameters?.docs?.source},description:{story:'Story for `variant="error"`',...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    treatment: 'border-left',
    value: '100%',
    label: 'Border-Left Treatment'
  }
}`,...h.parameters?.docs?.source},description:{story:'Story for `treatment="border-left"`',...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    treatment: 'surface',
    variant: 'success',
    value: '< 2s',
    label: 'Surface Treatment'
  }
}`,...g.parameters?.docs?.source},description:{story:'Story for `treatment="surface"`',...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    treatment: 'minimal',
    value: '10h+',
    label: 'Minimal Treatment'
  }
}`,..._.parameters?.docs?.source},description:{story:'Story for `treatment="minimal"`',..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    value: '100%',
    label: 'Small Size'
  }
}`,...v.parameters?.docs?.source},description:{story:'Story for `size="sm"`',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    value: '18 → 5.3',
    label: 'Medium Size'
  }
}`,...y.parameters?.docs?.source},description:{story:'Story for `size="md"`',...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    treatment: 'surface',
    variant: 'accent',
    value: '70%',
    label: 'Large Size'
  }
}`,...b.parameters?.docs?.source},description:{story:'Story for `size="lg"`',...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    trend: 'up',
    prefix: '+',
    value: '2.4',
    suffix: 'M',
    label: 'Trend Up'
  }
}`,...x.parameters?.docs?.source},description:{story:'Story for `trend="up"`',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    trend: 'down',
    value: '70',
    suffix: '%',
    label: 'Trend Down'
  }
}`,...S.parameters?.docs?.source},description:{story:'Story for `trend="down"`',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    trend: 'neutral',
    value: '2.0',
    suffix: 's',
    label: 'Trend Neutral'
  }
}`,...C.parameters?.docs?.source},description:{story:'Story for `trend="neutral"`',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    value: '10',
    suffix: 'h+',
    label: 'Weekly hours recovered',
    icon: 'check-circle'
  }
}`,...w.parameters?.docs?.source},description:{story:"Story for the `icon` property",...w.parameters?.docs?.description}}},T=[`Default`,`Value`,`Label`,`Prefix`,`Suffix`,`VariantDefault`,`VariantSuccess`,`VariantAccent`,`VariantWarning`,`VariantError`,`TreatmentBorderLeft`,`TreatmentSurface`,`TreatmentMinimal`,`SizeSmall`,`SizeMedium`,`SizeLarge`,`TrendUp`,`TrendDown`,`TrendNeutral`,`Icon`]}));E();export{a as Default,w as Icon,s as Label,c as Prefix,b as SizeLarge,y as SizeMedium,v as SizeSmall,l as Suffix,h as TreatmentBorderLeft,_ as TreatmentMinimal,g as TreatmentSurface,S as TrendDown,C as TrendNeutral,x as TrendUp,o as Value,f as VariantAccent,u as VariantDefault,m as VariantError,d as VariantSuccess,p as VariantWarning,T as __namedExportsOrder,i as default,E as t};
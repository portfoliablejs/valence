import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./ComboTabs-CFXqO44L.js";var i,a,o,s;e((()=>{n(),r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Molecules/ComboTabs`,tags:[`autodocs`],args:{onTabChange:i()},render:e=>(setTimeout(()=>{let t=document.querySelector(`ds-combo-tabs`);t&&(t.tabs=e.tabs)},0),t`
      <ds-combo-tabs @ds-tab-change="${t=>e.onTabChange(t.detail.activeId)}"></ds-combo-tabs>
    `)},o={args:{tabs:[{id:`tab-dashboard`,label:`Project Dashboard`},{id:`tab-history`,label:`Project History`},{id:`tab-download`,label:`Secure Download`}]}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'tab-dashboard',
      label: 'Project Dashboard'
    }, {
      id: 'tab-history',
      label: 'Project History'
    }, {
      id: 'tab-download',
      label: 'Secure Download'
    }]
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`]}))();export{o as Default,s as __namedExportsOrder,a as default};
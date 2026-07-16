import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./SearchInput-cNgg58kK.js";var i,a,o,s,c;e((()=>{n(),r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Molecules/SearchInput`,tags:[`autodocs`],argTypes:{expanded:{control:`boolean`},placeholder:{control:`text`}},args:{onInput:i()},render:e=>t`
    <div style="padding: 40px; background: var(--color-glass-bg, #EBEBF0); border-radius: 100px; display: inline-block;">
      <ds-search-input 
        expanded="${e.expanded}" 
        placeholder="${e.placeholder}"
        @ds-search-input="${t=>e.onInput(t.detail.value)}">
      </ds-search-input>
    </div>
  `},o={args:{expanded:!1,placeholder:`Search cases...`}},s={args:{expanded:!0,placeholder:`Search cases...`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false,
    placeholder: 'Search cases...'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    placeholder: 'Search cases...'
  }
}`,...s.parameters?.docs?.source}}},c=[`Collapsed`,`Expanded`]}))();export{o as Collapsed,s as Expanded,c as __namedExportsOrder,a as default};
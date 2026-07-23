import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";import{n as a,t as o}from"./Iconography-BuyAuTgT.js";var s,c,l,u,d,f,p,m=e((()=>{n(),i(),a(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Atoms/Icon [v1.0.0]`,component:`ds-icon`,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{name:{name:`name`,description:`Select icon identifier from base registry names.`,control:{type:`select`},options:Object.keys(o),table:{category:`Core`,defaultValue:{summary:`search`}}},variant:{name:`variant`,description:`Global toggle switching between outline vector paths and solid fills.`,control:{type:`select`},options:[`outline`,`fill`],table:{category:`Core`,defaultValue:{summary:`outline`}}},size:{name:`size`,description:`Bounding box dimension in pixels (maps to size attribute).`,control:{type:`number`},table:{category:`Core`,defaultValue:{summary:`24`}}},color:{name:`color`,description:`Sets text color on host element for CSS inheritance.`,control:`color`,table:{category:`Core`,defaultValue:{summary:`currentColor`}}},strokeWidth:{name:`strokeWidth`,description:`Sub-atomic override for vector stroke weight (--ds-icon-stroke-width).`,control:{type:`range`,min:1,max:4,step:.5},table:{category:`SUB-ATOMIC PROPS`}},stroke:{name:`stroke`,description:`Sub-atomic override for vector stroke color (--ds-icon-stroke).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`}},fill:{name:`fill`,description:`Sub-atomic override for vector interior fill color (--ds-icon-fill).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`}},customSize:{name:`customSize`,description:`Sub-atomic override for bounding box size geometry (--ds-icon-size).`,control:`text`,table:{category:`SUB-ATOMIC PROPS`}}},render:e=>{let n=[e.strokeWidth?`--ds-icon-stroke-width: ${e.strokeWidth};`:``,e.stroke?`--ds-icon-stroke: ${e.stroke};`:``,e.fill?`--ds-icon-fill: ${e.fill};`:``,e.customSize?`--ds-icon-size: ${e.customSize};`:``].join(` `).trim();return t`
      <ds-icon
        name=${r(e.name)}
        variant=${r(e.variant)}
        size=${r(e.size)}
        color=${r(e.color)}
        style=${r(n||void 0)}>
      </ds-icon>
    `}},l={args:{name:`search`,variant:`outline`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-icon`);await t(`Verify Shadow DOM component mount`,async()=>{s(n).toBeTruthy();let e=n.shadowRoot.querySelector(`svg`);s(e).toBeTruthy(),s(e.getAttribute(`aria-hidden`)).toBe(`true`)})}},u={args:{name:`bookmark`,variant:`fill`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-icon`);await t(`Verify host attribute reflection for filled variant`,async()=>{s(n.getAttribute(`variant`)).toBe(`fill`)})}},d={args:{name:`bookmark`,variant:`outline`,strokeWidth:2.5,stroke:`#ff5722`,fill:`#ffe0b2`,customSize:`48px`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-icon`);await t(`Verify sub-atomic custom CSS variables inject properly onto host inline styles`,async()=>{let e=n.getAttribute(`style`);s(e).toContain(`--ds-icon-stroke-width: 2.5;`),s(e).toContain(`--ds-icon-stroke: #ff5722;`),s(e).toContain(`--ds-icon-fill: #ffe0b2;`),s(e).toContain(`--ds-icon-size: 48px;`)})}},f={render:e=>t`
    <div style="
      padding: 16px;
      background: var(--color-black, #000);
      color: var(--color-white, #fff);
      display: inline-flex;
      align-items: center;
      gap: 12px;
      border-radius: 8px;
    ">
      <span>Container Text</span>
      <ds-icon 
        name=${r(e.name)} 
        variant=${r(e.variant)}>
      </ds-icon>
    </div>
  `,args:{name:`lock-closed`,variant:`outline`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'search',
    variant: 'outline'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const icon = canvasElement.querySelector('ds-icon');
    await step('Verify Shadow DOM component mount', async () => {
      expect(icon).toBeTruthy();
      const svg = icon.shadowRoot.querySelector('svg');
      expect(svg).toBeTruthy();
      expect(svg.getAttribute('aria-hidden')).toBe('true');
    });
  }
}`,...l.parameters?.docs?.source},description:{story:`Standard Outlined Icon state.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'bookmark',
    variant: 'fill'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const icon = canvasElement.querySelector('ds-icon');
    await step('Verify host attribute reflection for filled variant', async () => {
      expect(icon.getAttribute('variant')).toBe('fill');
    });
  }
}`,...u.parameters?.docs?.source},description:{story:`Solid Filled Variant state (switches geometry and fills automatically).`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'bookmark',
    variant: 'outline',
    strokeWidth: 2.5,
    stroke: '#ff5722',
    fill: '#ffe0b2',
    customSize: '48px'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const icon = canvasElement.querySelector('ds-icon');
    await step('Verify sub-atomic custom CSS variables inject properly onto host inline styles', async () => {
      const styleAttr = icon.getAttribute('style');
      expect(styleAttr).toContain('--ds-icon-stroke-width: 2.5;');
      expect(styleAttr).toContain('--ds-icon-stroke: #ff5722;');
      expect(styleAttr).toContain('--ds-icon-fill: #ffe0b2;');
      expect(styleAttr).toContain('--ds-icon-size: 48px;');
    });
  }
}`,...d.parameters?.docs?.source},description:{story:`Sub-atomic token style override configuration demonstrating all custom hooks.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <div style="
      padding: 16px;
      background: var(--color-black, #000);
      color: var(--color-white, #fff);
      display: inline-flex;
      align-items: center;
      gap: 12px;
      border-radius: 8px;
    ">
      <span>Container Text</span>
      <ds-icon 
        name=\${ifDefined(args.name)} 
        variant=\${ifDefined(args.variant)}>
      </ds-icon>
    </div>
  \`,
  args: {
    name: 'lock-closed',
    variant: 'outline'
  }
}`,...f.parameters?.docs?.source},description:{story:`Test for container color cascading and forced-colors hover compatibility.`,...f.parameters?.docs?.description}}},p=[`Default`,`FilledVariant`,`CustomStyled`,`ContainerInheritance`]}));m();export{f as ContainerInheritance,d as CustomStyled,l as Default,u as FilledVariant,p as __namedExportsOrder,c as default,m as t};
import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{r,t as i}from"./if-defined-2H52cT6K.js";import{t as a}from"./Divider-BuLgpbB-.js";var o,s,c,l,u,d,f=e((()=>{n(),i(),a(),{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`Atoms/Divider [v1.0.0]`,component:`ds-divider`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`A static structural layout atom used to separate content blocks horizontally or vertically. It correctly delegates semantic accessibility primitives and handles custom token style overrides.`}}},decorators:[e=>t`
      <div class="canvas-buffer" style="
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
        width: 300px;
        height: 120px;
      ">
        ${e()}
      </div>
    `],argTypes:{orientation:{name:`orientation`,description:`Determines the structural orientation layout axis.`,control:{type:`select`},options:[`horizontal`,`vertical`],table:{category:`Component: Core`,defaultValue:{summary:`horizontal`}}},ariaLabel:{name:`ariaLabel`,description:`Crucial accessibility label delegated directly to internal primitives to keep host clean.`,control:`text`,table:{category:`Component: Core`}},color:{name:`color`,description:`Sub-atomic modifier overriding default line stroke color (--ds-divider-color).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--color-card-border)`}}},thickness:{name:`thickness`,description:`Sub-atomic modifier overriding default line thickness geometry (--ds-divider-thickness).`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--border-width-thin)`}}},margin:{name:`margin`,description:`Sub-atomic modifier overriding default spatial spacing bounds (--ds-divider-margin).`,control:`text`,table:{category:`SUB-ATOMIC PROPS`,defaultValue:{summary:`var(--space-md) 0`}}}},render:e=>{let n=[e.color?`--ds-divider-color: ${e.color};`:``,e.thickness?`--ds-divider-thickness: ${e.thickness};`:``,e.margin?`--ds-divider-margin: ${e.margin};`:``].join(` `).trim();return t`
      <ds-divider
        orientation=${e.orientation||`horizontal`}
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}>
      </ds-divider>
    `}},c={args:{orientation:`horizontal`,ariaLabel:`Section break`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-divider`);await t(`Verify structural attributes pass cleanly and host scrubbing executes flawlessly`,async()=>{o(n.getAttribute(`orientation`)).toBe(`horizontal`),o(n.getAttribute(`aria-label`)).toBeNull()}),await t(`Verify inner shadow layout primitives receive delegated accessibility attributes`,async()=>{let e=n.shadowRoot.querySelector(`.divider-root`)||n.shadowRoot.firstElementChild;o(e.getAttribute(`aria-label`)).toBe(`Section break`),o(e.getAttribute(`aria-orientation`)).toBe(`horizontal`),o(e.getAttribute(`role`)).toBe(`separator`)})}},l={args:{orientation:`vertical`,ariaLabel:`Content separator`},decorators:[e=>t`
      <div style="display: flex; align-items: center; gap: 16px; height: 100%; width: 100%; justify-content: center;">
        <span>Left Block</span>
        ${e()}
        <span>Right Block</span>
      </div>
    `],play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-divider`);await t(`Verify vertical orientation maps cleanly to internal primitives`,async()=>{o(n.getAttribute(`orientation`)).toBe(`vertical`);let e=n.shadowRoot.querySelector(`.divider-root`)||n.shadowRoot.firstElementChild;o(e.getAttribute(`aria-orientation`)).toBe(`vertical`)})}},u={args:{orientation:`horizontal`,color:`var(--color-accent)`,thickness:`var(--border-width-medium)`,margin:`var(--space-xl) 0`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-divider`);await t(`Verify sub-atomic custom CSS variables inject properly onto host inline styles`,async()=>{let e=n.getAttribute(`style`);o(e).toContain(`--ds-divider-color: var(--color-accent);`),o(e).toContain(`--ds-divider-thickness: var(--border-width-medium);`),o(e).toContain(`--ds-divider-margin: var(--space-xl) 0;`)})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    ariaLabel: 'Section break'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-divider');
    await step('Verify structural attributes pass cleanly and host scrubbing executes flawlessly', async () => {
      expect(component.getAttribute('orientation')).toBe('horizontal');
      expect(component.getAttribute('aria-label')).toBeNull();
    });
    await step('Verify inner shadow layout primitives receive delegated accessibility attributes', async () => {
      const primitive = component.shadowRoot.querySelector('.divider-root') || component.shadowRoot.firstElementChild;
      expect(primitive.getAttribute('aria-label')).toBe('Section break');
      expect(primitive.getAttribute('aria-orientation')).toBe('horizontal');
      expect(primitive.getAttribute('role')).toBe('separator');
    });
  }
}`,...c.parameters?.docs?.source},description:{story:`Standard baseline story setup validating content passing, tracking variables, and operational interaction logic.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    ariaLabel: 'Content separator'
  },
  decorators: [Story => html\`
      <div style="display: flex; align-items: center; gap: 16px; height: 100%; width: 100%; justify-content: center;">
        <span>Left Block</span>
        \${Story()}
        <span>Right Block</span>
      </div>
    \`],
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-divider');
    await step('Verify vertical orientation maps cleanly to internal primitives', async () => {
      expect(component.getAttribute('orientation')).toBe('vertical');
      const primitive = component.shadowRoot.querySelector('.divider-root') || component.shadowRoot.firstElementChild;
      expect(primitive.getAttribute('aria-orientation')).toBe('vertical');
    });
  }
}`,...l.parameters?.docs?.source},description:{story:`Vertical orientation setup used to visually separate inline or side-by-side content items.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    color: 'var(--color-accent)',
    thickness: 'var(--border-width-medium)',
    margin: 'var(--space-xl) 0'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const component = canvasElement.querySelector('ds-divider');
    await step('Verify sub-atomic custom CSS variables inject properly onto host inline styles', async () => {
      const styleAttr = component.getAttribute('style');
      expect(styleAttr).toContain('--ds-divider-color: var(--color-accent);');
      expect(styleAttr).toContain('--ds-divider-thickness: var(--border-width-medium);');
      expect(styleAttr).toContain('--ds-divider-margin: var(--space-xl) 0;');
    });
  }
}`,...u.parameters?.docs?.source},description:{story:`Sub-atomic style override configuration demonstrating custom token mapping for color, thickness, and margin.`,...u.parameters?.docs?.description}}},d=[`Horizontal`,`Vertical`,`CustomStyled`]}));f();export{u as CustomStyled,c as Horizontal,l as Vertical,d as __namedExportsOrder,s as default,f as t};
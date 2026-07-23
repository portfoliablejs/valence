import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{n as r,t as i}from"./Thumbnail-xr-fiF6Q.js";var a,o,s,c,l,u,d;e((()=>{n(),r(),{expect:a}=__STORYBOOK_MODULE_TEST__,{useArgs:o}=__STORYBOOK_MODULE_PREVIEW_API__,s={title:`Atoms/Thumbnail [v1.1.0]`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"A prototype thumbnail frame. Mandates a `screen-image` that sits below the device frame layer. Features a `custom-only` fallback to cancel the frame entirely."}}},decorators:[(e,t)=>{let[n,r]=o(),a=Object.keys(i),s=a.includes(n.category)?n.category:a[0]||`mobile`,c=i[s]||{},l=Object.keys(c),u=l.includes(n.brand)?n.brand:l[0]||``,d=c[u]||{},f=Object.keys(d),p=f.includes(n.model)?n.model:f[0]||``,m=d[p]||{},h=Object.keys(m.colors||{}),g=h.includes(n.color)?n.color:h[0]||``;return t.argTypes&&(t.argTypes.category&&(t.argTypes.category.options=a),t.argTypes.brand&&(t.argTypes.brand.options=l),t.argTypes.model&&(t.argTypes.model.options=f),t.argTypes.color&&(t.argTypes.color.options=h)),(n.category!==s||n.brand!==u||n.model!==p||n.color!==g)&&r({category:s,brand:u,model:p,color:g}),e()}],argTypes:{category:{name:`category`,control:{type:`select`},options:Object.keys(i),description:`Form factor category (mobile, desktop, tablet, television, wearable).`,table:{category:`Frame Selection`}},brand:{name:`brand`,control:{type:`select`},description:`Brand ecosystem filter (dynamically filters model options).`,table:{category:`Frame Selection`}},model:{name:`model`,control:{type:`select`},description:`Specific device model from the avif catalog.`,table:{category:`Frame Selection`}},color:{name:`color`,control:{type:`select`},description:`Device body color/variant matching the physical file tree.`,table:{category:`Frame Selection`}},screenImage:{name:`screen-image`,control:{type:`text`},description:`The mandatory image rendered beneath the device frame transparent window.`,table:{category:`Screen Content`,type:{summary:`URL`}}},customOnly:{name:`custom-only`,control:{type:`boolean`},description:`Cancels the device frame entirely, allowing the screen-image to dictate scale and boundaries.`,table:{category:`Screen Content`,defaultValue:{summary:`false`}}},maxHeight:{name:`max-height`,control:{type:`text`},description:`Constraint sizing to prevent massive desktop mockup overflow.`,table:{category:`Sizing & State`,defaultValue:{summary:`100%`}}},disabled:{name:`disabled`,control:{type:`boolean`},table:{category:`Sizing & State`,defaultValue:{summary:`false`}}}},args:{category:`mobile`,brand:`apple`,model:`Apple iPhone 13`,color:`Midnight`,customOnly:!1,screenImage:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`,maxHeight:`600px`},render:e=>t`
    <ds-thumbnail
      category="${e.category}"
      brand="${e.brand}"
      model="${e.model}"
      color="${e.color}"
      ?custom-only="${e.customOnly}"
      ?disabled="${e.disabled}"
      screen-image="${e.screenImage}"
      max-height="${e.maxHeight}"
    ></ds-thumbnail>
  `},c={args:{category:`mobile`,brand:`apple`,model:`Apple iPhone 13`,color:`Midnight`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-thumbnail`);await t(`Verify image cover exists beneath the frame`,async()=>{let e=n.shadowRoot.querySelector(`.screen-cover`);a(e.getAttribute(`src`)).toBeTruthy()})}},l={args:{category:`desktop`,brand:`apple`,model:`Apple MacBook Pro`,color:`Space Grey`,maxHeight:`400px`}},u={args:{customOnly:!0,screenImage:`https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop`,maxHeight:`400px`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-thumbnail`);await t(`Verify device frame is hidden when custom-only is active`,async()=>{let e=n.shadowRoot.querySelector(`.device-image`),t=window.getComputedStyle(e);a(t.display).toBe(`none`)})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    category: 'mobile',
    brand: 'apple',
    model: 'Apple iPhone 13',
    color: 'Midnight'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const thumbnail = canvasElement.querySelector('ds-thumbnail');
    await step('Verify image cover exists beneath the frame', async () => {
      const screenCover = thumbnail.shadowRoot.querySelector('.screen-cover');
      expect(screenCover.getAttribute('src')).toBeTruthy();
    });
  }
}`,...c.parameters?.docs?.source},description:{story:`Standard setup featuring an iPhone 13 frame overlaying a mandatory background image.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    category: 'desktop',
    brand: 'apple',
    model: 'Apple MacBook Pro',
    color: 'Space Grey',
    maxHeight: '400px'
  }
}`,...l.parameters?.docs?.source},description:{story:`Desktop MacBook Pro mockup story.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    customOnly: true,
    screenImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop',
    maxHeight: '400px'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const thumbnail = canvasElement.querySelector('ds-thumbnail');
    await step('Verify device frame is hidden when custom-only is active', async () => {
      const deviceImg = thumbnail.shadowRoot.querySelector('.device-image');
      const computedStyle = window.getComputedStyle(deviceImg);
      expect(computedStyle.display).toBe('none');
    });
  }
}`,...u.parameters?.docs?.source},description:{story:"Demonstrates the `custom-only` cancellation property.\nHides the `.avif` device frame and presents only the unconstrained screen image cover.",...u.parameters?.docs?.description}}},d=[`DefaultMobileFrame`,`DesktopMacBook`,`CustomImageOnly`]}))();export{u as CustomImageOnly,c as DefaultMobileFrame,l as DesktopMacBook,d as __namedExportsOrder,s as default};
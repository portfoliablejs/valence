import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./GalleryItem-DoPz6Em9.js";var i,a,o,s,c,l,u;e((()=>{n(),r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Molecules/GalleryItem`,tags:[`autodocs`],argTypes:{title:{control:`text`},shortDesc:{control:`text`},readTime:{control:`text`},aspectRatio:{control:{type:`select`},options:[``,`1:1`,`16:9`,`4:3`],description:`Optional. Defaults to portrait if not set.`},isProtected:{control:`boolean`},isUnlocked:{control:`boolean`},hasVideo:{control:`boolean`},hasRepo:{control:`boolean`},hasLive:{control:`boolean`}},args:{onSelect:i()},render:e=>t`
      <div style="padding: 40px; display: flex; justify-content: center; background: var(--color-bg); height: 600px; align-items: center;">
        <ds-gallery-item 
          style="--device-h-gallery: 450px;" 
          title="${e.title}"
          short-desc="${e.shortDesc}"
          read-time="${e.readTime}"
          thumb-src="/holofante.avif"
          aspect-ratio="${e.aspectRatio}"
          ?is-protected="${e.isProtected}"
          ?is-unlocked="${e.isUnlocked}"
          ?has-video="${e.hasVideo}"
          ?has-repo="${e.hasRepo}"
          ?has-live="${e.hasLive}"
          @ds-case-select="${e.onSelect}">
        </ds-gallery-item>
      </div>
    `},o={args:{title:`Agentic AI Design`,shortDesc:`A project with a default portrait aspect ratio.`,readTime:`3 min`,aspectRatio:``,hasVideo:!0,hasRepo:!0,hasLive:!0,isProtected:!1,isUnlocked:!1}},s={args:{title:`Square Project`,shortDesc:`A project best viewed in a 1:1 aspect ratio.`,readTime:`2 min`,aspectRatio:`1:1`,hasVideo:!1,hasRepo:!0,hasLive:!1,isProtected:!1,isUnlocked:!1}},c={args:{title:`Top Secret Project`,shortDesc:`This content is protected.`,readTime:`1 min`,aspectRatio:`16:9`,hasVideo:!1,hasRepo:!1,hasLive:!1,isProtected:!0,isUnlocked:!1}},l={args:{title:`Top Secret Project`,shortDesc:`This content is now unlocked.`,readTime:`1 min`,aspectRatio:`16:9`,hasVideo:!0,hasRepo:!0,hasLive:!1,isProtected:!0,isUnlocked:!0}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Agentic AI Design',
    shortDesc: 'A project with a default portrait aspect ratio.',
    readTime: '3 min',
    aspectRatio: '',
    hasVideo: true,
    hasRepo: true,
    hasLive: true,
    isProtected: false,
    isUnlocked: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Square Project',
    shortDesc: 'A project best viewed in a 1:1 aspect ratio.',
    readTime: '2 min',
    aspectRatio: '1:1',
    hasVideo: false,
    hasRepo: true,
    hasLive: false,
    isProtected: false,
    isUnlocked: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Top Secret Project',
    shortDesc: 'This content is protected.',
    readTime: '1 min',
    aspectRatio: '16:9',
    hasVideo: false,
    hasRepo: false,
    hasLive: false,
    isProtected: true,
    isUnlocked: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Top Secret Project',
    shortDesc: 'This content is now unlocked.',
    readTime: '1 min',
    aspectRatio: '16:9',
    hasVideo: true,
    hasRepo: true,
    hasLive: false,
    isProtected: true,
    isUnlocked: true
  }
}`,...l.parameters?.docs?.source}}},u=[`DefaultPortrait`,`SquareFrame`,`Protected`,`Unlocked`]}))();export{o as DefaultPortrait,c as Protected,s as SquareFrame,l as Unlocked,u as __namedExportsOrder,a as default};
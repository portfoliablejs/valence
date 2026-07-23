import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{n as r,t as i}from"./Thumbnail-xr-fiF6Q.js";import{t as a}from"./GalleryItem-C4V72iOe.js";var o,s,c,l,u,d,f,p;e((()=>{n(),r(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,{useArgs:s}=__STORYBOOK_MODULE_PREVIEW_API__,c={title:`Molecules/Gallery Item [v1.2.0]`,tags:[`autodocs`],parameters:{docs:{description:{component:"`ds-gallery-item` is a composite preview card molecule that combines a configurable `ds-thumbnail`, case metadata, lock-state behavior, and optional action pills. Use controls to switch frame devices, toggle content visibility, and simulate protected/unlocked states."}}},decorators:[(e,t)=>{let[n,r]=s(),a=Object.keys(i),o=a.includes(n.thumbCategory)?n.thumbCategory:a[0]||`mobile`,c=i[o]||{},l=Object.keys(c),u=l.includes(n.thumbBrand)?n.thumbBrand:l[0]||``,d=c[u]||{},f=Object.keys(d),p=f.includes(n.thumbModel)?n.thumbModel:f.includes(`Apple iPhone 12`)?`Apple iPhone 12`:f[0]||``,m=d[p]||{},h=Object.keys(m.colors||{}),g=h.includes(n.thumbColor)?n.thumbColor:h[0]||``;return t.argTypes&&(t.argTypes.thumbCategory&&(t.argTypes.thumbCategory.options=a),t.argTypes.thumbBrand&&(t.argTypes.thumbBrand.options=l),t.argTypes.thumbModel&&(t.argTypes.thumbModel.options=f),t.argTypes.thumbColor&&(t.argTypes.thumbColor.options=h)),(n.thumbCategory!==o||n.thumbBrand!==u||n.thumbModel!==p||n.thumbColor!==g)&&r({thumbCategory:o,thumbBrand:u,thumbModel:p,thumbColor:g}),e()}],argTypes:{title:{control:`text`,table:{category:`Content`}},shortDesc:{control:`text`,table:{category:`Content`}},readTime:{control:`text`,table:{category:`Content`}},thumbSrc:{control:`text`,table:{category:`Content`},description:`Image rendered inside the selected device frame.`},showTitle:{control:`boolean`,table:{category:`Content Visibility`}},showShortDesc:{control:`boolean`,table:{category:`Content Visibility`}},showReadTime:{control:`boolean`,table:{category:`Content Visibility`}},showThumbnail:{control:`boolean`,table:{category:`Content Visibility`}},thumbCategory:{control:{type:`select`},options:Object.keys(i),table:{category:`Thumbnail Frame`},description:`Thumbnail catalog category.`},thumbBrand:{control:{type:`select`},options:[],table:{category:`Thumbnail Frame`},description:`Device brand in thumbnail catalog.`},thumbModel:{control:{type:`select`},options:[],table:{category:`Thumbnail Frame`},description:`Device model used for the frame.`},thumbColor:{control:{type:`select`},options:[],table:{category:`Thumbnail Frame`},description:`Color variant for the selected model.`},thumbDeviceSrc:{control:`text`,table:{category:`Thumbnail Frame`},description:`Optional direct frame URL override; leave empty to use catalog selection.`},thumbCustomOnly:{control:`boolean`,table:{category:`Thumbnail Frame`},description:`When true, forces Thumbnail custom-only mode and hides the device frame.`},aspectRatio:{control:{type:`select`},options:[``,`1:1`,`16:9`,`4:3`],description:`Optional. Defaults to portrait if not set.`,table:{category:`Layout`}},isProtected:{control:`boolean`,table:{category:`State`}},isUnlocked:{control:`boolean`,table:{category:`State`}},hasVideo:{control:`boolean`,table:{category:`Pills`}},hasRepo:{control:`boolean`,table:{category:`Pills`}},hasLive:{control:`boolean`,table:{category:`Pills`}}},args:{onSelect:o(),thumbCustomOnly:!1,showTitle:!0,showShortDesc:!0,showReadTime:!0,showThumbnail:!0},render:e=>t`
      <div style="padding: 0 50px; display: flex; justify-content: center; background: transparent; min-height: 600px; width: 100%; box-sizing: border-box; align-items: center;">
        <ds-gallery-item 
          style="--device-h-gallery: 450px;" 
          title="${e.title}"
          short-desc="${e.shortDesc}"
          read-time="${e.readTime}"
          thumb-src="${e.thumbSrc}"
          thumb-category="${e.thumbCategory}"
          thumb-brand="${e.thumbBrand}"
          thumb-model="${e.thumbModel}"
          thumb-color="${e.thumbColor}"
          thumb-device-src="${e.thumbDeviceSrc}"
          ?thumb-custom-only="${e.thumbCustomOnly}"
          show-title="${e.showTitle}"
          show-short-desc="${e.showShortDesc}"
          show-read-time="${e.showReadTime}"
          show-thumbnail="${e.showThumbnail}"
          aspect-ratio="${e.aspectRatio}"
          ?is-protected="${e.isProtected}"
          ?is-unlocked="${e.isUnlocked}"
          ?has-video="${e.hasVideo}"
          ?has-repo="${e.hasRepo}"
          ?has-live="${e.hasLive}"
          @ds-case-select="${e.onSelect}">
        </ds-gallery-item>
      </div>
    `},l={parameters:{docs:{description:{story:`Default gallery card in portrait mode using an Apple iPhone 12 frame with all primary metadata and pills visible.`}}},args:{title:`Agentic AI Design`,shortDesc:`A project with a default portrait aspect ratio.`,readTime:`3 min`,thumbSrc:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`,thumbCategory:`mobile`,thumbBrand:`apple`,thumbModel:`Apple iPhone 12`,thumbColor:`Black`,thumbDeviceSrc:``,thumbCustomOnly:!1,showTitle:!0,showShortDesc:!0,showReadTime:!0,showThumbnail:!0,aspectRatio:``,hasVideo:!0,hasRepo:!0,hasLive:!0,isProtected:!1,isUnlocked:!1}},u={parameters:{docs:{description:{story:`Demonstrates the same gallery content constrained to a 1:1 thumbnail ratio while preserving frame and metadata behavior.`}}},args:{title:`Square Project`,shortDesc:`A project best viewed in a 1:1 aspect ratio.`,readTime:`2 min`,thumbSrc:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`,thumbCategory:`mobile`,thumbBrand:`apple`,thumbModel:`Apple iPhone 12`,thumbColor:`Blue`,thumbDeviceSrc:``,thumbCustomOnly:!1,showTitle:!0,showShortDesc:!0,showReadTime:!0,showThumbnail:!0,aspectRatio:`1:1`,hasVideo:!1,hasRepo:!0,hasLive:!1,isProtected:!1,isUnlocked:!1}},d={parameters:{docs:{description:{story:`Shows protected-state redaction: title/description are masked, read time is hidden, and action pills are suppressed.`}}},args:{title:`Top Secret Project`,shortDesc:`This content is protected.`,readTime:`1 min`,thumbSrc:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`,thumbCategory:`mobile`,thumbBrand:`apple`,thumbModel:`Apple iPhone 12`,thumbColor:`Green`,thumbDeviceSrc:``,thumbCustomOnly:!1,showTitle:!0,showShortDesc:!0,showReadTime:!0,showThumbnail:!0,aspectRatio:`16:9`,hasVideo:!1,hasRepo:!1,hasLive:!1,isProtected:!0,isUnlocked:!1}},f={parameters:{docs:{description:{story:`Represents an unlocked protected case where lock-open state restores readable metadata and optional action pills.`}}},args:{title:`Top Secret Project`,shortDesc:`This content is now unlocked.`,readTime:`1 min`,thumbSrc:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop`,thumbCategory:`mobile`,thumbBrand:`apple`,thumbModel:`Apple iPhone 12`,thumbColor:`White`,thumbDeviceSrc:``,thumbCustomOnly:!1,showTitle:!0,showShortDesc:!0,showReadTime:!0,showThumbnail:!0,aspectRatio:`16:9`,hasVideo:!0,hasRepo:!0,hasLive:!1,isProtected:!0,isUnlocked:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default gallery card in portrait mode using an Apple iPhone 12 frame with all primary metadata and pills visible.'
      }
    }
  },
  args: {
    title: 'Agentic AI Design',
    shortDesc: 'A project with a default portrait aspect ratio.',
    readTime: '3 min',
    thumbSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    thumbCategory: 'mobile',
    thumbBrand: 'apple',
    thumbModel: 'Apple iPhone 12',
    thumbColor: 'Black',
    thumbDeviceSrc: '',
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
    aspectRatio: '',
    hasVideo: true,
    hasRepo: true,
    hasLive: true,
    isProtected: false,
    isUnlocked: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the same gallery content constrained to a 1:1 thumbnail ratio while preserving frame and metadata behavior.'
      }
    }
  },
  args: {
    title: 'Square Project',
    shortDesc: 'A project best viewed in a 1:1 aspect ratio.',
    readTime: '2 min',
    thumbSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    thumbCategory: 'mobile',
    thumbBrand: 'apple',
    thumbModel: 'Apple iPhone 12',
    thumbColor: 'Blue',
    thumbDeviceSrc: '',
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
    aspectRatio: '1:1',
    hasVideo: false,
    hasRepo: true,
    hasLive: false,
    isProtected: false,
    isUnlocked: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows protected-state redaction: title/description are masked, read time is hidden, and action pills are suppressed.'
      }
    }
  },
  args: {
    title: 'Top Secret Project',
    shortDesc: 'This content is protected.',
    readTime: '1 min',
    thumbSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    thumbCategory: 'mobile',
    thumbBrand: 'apple',
    thumbModel: 'Apple iPhone 12',
    thumbColor: 'Green',
    thumbDeviceSrc: '',
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
    aspectRatio: '16:9',
    hasVideo: false,
    hasRepo: false,
    hasLive: false,
    isProtected: true,
    isUnlocked: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Represents an unlocked protected case where lock-open state restores readable metadata and optional action pills.'
      }
    }
  },
  args: {
    title: 'Top Secret Project',
    shortDesc: 'This content is now unlocked.',
    readTime: '1 min',
    thumbSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    thumbCategory: 'mobile',
    thumbBrand: 'apple',
    thumbModel: 'Apple iPhone 12',
    thumbColor: 'White',
    thumbDeviceSrc: '',
    thumbCustomOnly: false,
    showTitle: true,
    showShortDesc: true,
    showReadTime: true,
    showThumbnail: true,
    aspectRatio: '16:9',
    hasVideo: true,
    hasRepo: true,
    hasLive: false,
    isProtected: true,
    isUnlocked: true
  }
}`,...f.parameters?.docs?.source}}},p=[`DefaultPortrait`,`SquareFrame`,`Protected`,`Unlocked`]}))();export{l as DefaultPortrait,d as Protected,u as SquareFrame,f as Unlocked,p as __namedExportsOrder,c as default};
import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{t as r}from"./Subtitle-D9o3C4M1.js";import{t as i}from"./VideoControls-Wrcn_Uii.js";var a,o,s,c;e((()=>{n(),i(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Molecules/VideoControls`,tags:[`autodocs`],parameters:{backgrounds:{default:`dark`}},argTypes:{playing:{control:`boolean`},muted:{control:`boolean`},ccEnabled:{control:`boolean`},speed:{control:`text`}},args:{onAction:a()}},s={args:{playing:!1,muted:!1,ccEnabled:!0,speed:`1X`},render:e=>t`
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 80vh; position: relative;">
        
        <!-- Dynamic Subtitle Atom -->
        <div style="position: absolute; bottom: 100px; width: 100%;">
          <ds-subtitle 
            text="This is a dynamically rendered subtitle track." 
            visible="${e.ccEnabled}">
          </ds-subtitle>
        </div>

        <!-- Video Controls -->
        <ds-video-controls 
          playing="${e.playing}"
          muted="${e.muted}"
          cc-enabled="${e.ccEnabled}"
          speed="${e.speed}"
          @ds-video-action="${t=>{e.onAction(t.detail.action);let n=t.target,r=n.parentElement.querySelector(`ds-subtitle`);if(t.detail.action===`play-pause`){let e=n.getAttribute(`playing`)===`true`;n.setAttribute(`playing`,(!e).toString())}if(t.detail.action===`mute`){let e=n.getAttribute(`muted`)===`true`;n.setAttribute(`muted`,(!e).toString())}if(t.detail.action===`cc`){let e=n.getAttribute(`cc-enabled`)===`true`;n.setAttribute(`cc-enabled`,(!e).toString()),r&&r.setAttribute(`visible`,(!e).toString())}if(t.detail.action===`speed`){let e=n.getAttribute(`speed`),t=e===`1X`?`1.5X`:e===`1.5X`?`2X`:`1X`;n.setAttribute(`speed`,t)}}}">
        </ds-video-controls>

      </div>
    `},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    playing: false,
    muted: false,
    ccEnabled: true,
    speed: '1X'
  },
  render: args => {
    // Pure DOM state management for the Storybook preview
    const handleAction = e => {
      args.onAction(e.detail.action); // Log to Storybook Actions tab

      const controls = e.target;
      const container = controls.parentElement;
      const subtitle = container.querySelector('ds-subtitle');
      if (e.detail.action === 'play-pause') {
        const isPlaying = controls.getAttribute('playing') === 'true';
        controls.setAttribute('playing', (!isPlaying).toString());
      }
      if (e.detail.action === 'mute') {
        const isMuted = controls.getAttribute('muted') === 'true';
        controls.setAttribute('muted', (!isMuted).toString());
      }
      if (e.detail.action === 'cc') {
        const isCC = controls.getAttribute('cc-enabled') === 'true';
        controls.setAttribute('cc-enabled', (!isCC).toString());
        if (subtitle) subtitle.setAttribute('visible', (!isCC).toString());
      }
      if (e.detail.action === 'speed') {
        const currentSpeed = controls.getAttribute('speed');
        const nextSpeed = currentSpeed === '1X' ? '1.5X' : currentSpeed === '1.5X' ? '2X' : '1X';
        controls.setAttribute('speed', nextSpeed);
      }
    };
    return html\`
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 80vh; position: relative;">
        
        <!-- Dynamic Subtitle Atom -->
        <div style="position: absolute; bottom: 100px; width: 100%;">
          <ds-subtitle 
            text="This is a dynamically rendered subtitle track." 
            visible="\${args.ccEnabled}">
          </ds-subtitle>
        </div>

        <!-- Video Controls -->
        <ds-video-controls 
          playing="\${args.playing}"
          muted="\${args.muted}"
          cc-enabled="\${args.ccEnabled}"
          speed="\${args.speed}"
          @ds-video-action="\${handleAction}">
        </ds-video-controls>

      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}},c=[`Interactive`]}))();export{s as Interactive,c as __namedExportsOrder,o as default};
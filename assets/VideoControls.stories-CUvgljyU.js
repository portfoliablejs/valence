import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{r,t as i}from"./if-defined-CceMvhO9.js";import{t as a}from"./VideoControls-CI8YiUds.js";var o,s,c,l,u,d,f,p,m;e((()=>{n(),i(),a(),{fn:o,userEvent:s,fireEvent:c,expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Molecules/Video Controls [v1.0.0]`,tags:[`autodocs`],parameters:{backgrounds:{default:`dark`},docs:{description:{component:"The `ds-video-controls` component aggregates an overlay configuration layout block of circular buttons and tooltip notifications designed explicitly to handle playback coordination on compact canvas media surfaces."}}},argTypes:{playing:{control:`boolean`,description:`Sets the play/pause visualization state downstream.`,table:{category:`Core & Variant Controls`}},muted:{control:`boolean`,description:`Configures active volume mute visualization.`,table:{category:`Core & Variant Controls`}},ccEnabled:{name:`cc-enabled`,control:`boolean`,description:`Toggles active highlighting for text overlays.`,table:{category:`Core & Variant Controls`}},speed:{control:`text`,description:`Sets the active speed rate gauge string.`,table:{category:`Core & Variant Controls`}},labelPlay:{name:`label-play`,control:`text`,description:`Translation string allocated to the Play button trigger description.`,table:{category:`Localization`}},labelPause:{name:`label-pause`,control:`text`,description:`Translation string allocated to the Pause button trigger description.`,table:{category:`Localization`}},labelCcOn:{name:`label-cc-on`,control:`text`,description:`Translation string allocated to captions when active.`,table:{category:`Localization`}},labelCcOff:{name:`label-cc-off`,control:`text`,description:`Translation string allocated to captions when resting.`,table:{category:`Localization`}},labelMute:{name:`label-mute`,control:`text`,description:`Translation string applied to the active mute toggle.`,table:{category:`Localization`}},labelUnmute:{name:`label-unmute`,control:`text`,description:`Translation string applied to the resting unmute toggle.`,table:{category:`Localization`}},labelSpeed:{name:`label-speed`,control:`text`,description:`Translation string prefix applied to the speed gauge state tracker.`,table:{category:`Localization`}},labelReturn:{name:`label-return`,control:`text`,description:`Translation string allocated to the navigation escape trigger.`,table:{category:`Localization`}}},args:{onAction:o()}},d=e=>t`
    <ds-video-controls 
      playing="${e.playing}"
      muted="${e.muted}"
      cc-enabled="${e.ccEnabled}"
      speed="${e.speed}"
      label-play="${r(e.labelPlay)}"
      label-pause="${r(e.labelPause)}"
      label-cc-on="${r(e.labelCcOn)}"
      label-cc-off="${r(e.labelCcOff)}"
      label-mute="${r(e.labelMute)}"
      label-unmute="${r(e.labelUnmute)}"
      label-speed="${r(e.labelSpeed)}"
      label-return="${r(e.labelReturn)}"
      @ds-video-action="${t=>{e.onAction(t.detail.action);let n=t.target;if(t.detail.action===`play-pause`){let e=n.getAttribute(`playing`)===`true`;n.setAttribute(`playing`,(!e).toString())}if(t.detail.action===`mute`){let e=n.getAttribute(`muted`)===`true`;n.setAttribute(`muted`,(!e).toString())}if(t.detail.action===`cc`){let e=n.getAttribute(`cc-enabled`)===`true`;n.setAttribute(`cc-enabled`,(!e).toString())}if(t.detail.action===`speed`){let e=n.getAttribute(`speed`)||`1X`,t=e===`1X`?`1.5X`:e===`1.5X`?`2X`:`1X`;n.setAttribute(`speed`,t)}}}">
    </ds-video-controls>
  `,f={args:{playing:!1,muted:!1,ccEnabled:!0,speed:`1X`},parameters:{docs:{description:{story:`Default implementation rendering the video toolbar as a vertical floating menu panel block suitable for large desktop application layouts.`}}},render:e=>t`
    <div style="display: flex; justify-content: center; align-items: center; height: 25vh;">
      ${d(e)}
    </div>
  `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-video-controls`),r=n.shadowRoot,i=r.getElementById(`btn-play`),a=r.getElementById(`btn-speed`);await t(`Confirm structural interaction feedback on pointer targets`,async()=>{await s.hover(i)}),await t(`Verify keyboard tab sequence capture within nested control trees`,async()=>{i.focus(),l(r.activeElement).toBe(i)}),await t(`Verify standard state switching updates across control actions`,async()=>{c.keyDown(i,{key:` `,code:`Space`,keyCode:32}),await s.click(i),l(n.getAttribute(`playing`)).toBe(`true`),await s.click(a),l(n.getAttribute(`speed`)).toBe(`1.5X`)})}},p={args:{...f.args,ccEnabled:!1},parameters:{viewport:{defaultViewport:`mobile1`},docs:{description:{story:`Renders the component using Storybook's explicit mobile device emulation mode. This shrinks the parent viewport canvas to force trigger the responsive horizontal bar layouts and confirms that contextual tooltips are disabled.`}}},render:e=>t`
    <div style="display: flex; justify-content: center; align-items: center; height: 25vh; width: 100%;">
      ${d(e)}
    </div>
  `},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    playing: false,
    muted: false,
    ccEnabled: true,
    speed: '1X'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default implementation rendering the video toolbar as a vertical floating menu panel block suitable for large desktop application layouts.'
      }
    }
  },
  render: args => html\`
    <div style="display: flex; justify-content: center; align-items: center; height: 25vh;">
      \${baseRenderTemplate(args)}
    </div>
  \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const controlsMolecule = canvasElement.querySelector('ds-video-controls');
    const shadowBoundary = controlsMolecule.shadowRoot;
    const playBtn = shadowBoundary.getElementById('btn-play');
    const speedBtn = shadowBoundary.getElementById('btn-speed');
    await step('Confirm structural interaction feedback on pointer targets', async () => {
      await userEvent.hover(playBtn);
    });
    await step('Verify keyboard tab sequence capture within nested control trees', async () => {
      playBtn.focus();
      expect(shadowBoundary.activeElement).toBe(playBtn);
    });
    await step('Verify standard state switching updates across control actions', async () => {
      fireEvent.keyDown(playBtn, {
        key: ' ',
        code: 'Space',
        keyCode: 32
      });
      await userEvent.click(playBtn);
      expect(controlsMolecule.getAttribute('playing')).toBe('true');
      await userEvent.click(speedBtn);
      expect(controlsMolecule.getAttribute('speed')).toBe('1.5X');
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Desktop.args,
    ccEnabled: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Renders the component using Storybook\\'s explicit mobile device emulation mode. This shrinks the parent viewport canvas to force trigger the responsive horizontal bar layouts and confirms that contextual tooltips are disabled.'
      }
    }
  },
  render: args => html\`
    <div style="display: flex; justify-content: center; align-items: center; height: 25vh; width: 100%;">
      \${baseRenderTemplate(args)}
    </div>
  \`
}`,...p.parameters?.docs?.source}}},m=[`Desktop`,`Mobile`]}))();export{f as Desktop,p as Mobile,m as __namedExportsOrder,u as default};
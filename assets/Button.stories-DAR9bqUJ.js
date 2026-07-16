import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{r,t as i}from"./if-defined-2H52cT6K.js";import{t as a}from"./Button-BPRmLUND.js";import{t as o}from"./Tooltip-DSc1R1lO.js";var s,c,l,u,d,f,p,m,h,g,_,v=e((()=>{n(),i(),a(),o(),{fn:s,expect:c,within:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Atoms/Button [v1.0.0]`,component:`ds-button`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"`ds-button` is Valence's multi-use resource. It can be used in a wide variety of contexts, and particularly inside the `portfoliable` environment it has recommendations regarding its use. This component can be seen in a variety of molecules, such as `ds-breadcrumb`, `ds-video-player` and many more."}}},decorators:[e=>t`
      <div style="
        padding: 30px; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        box-sizing: border-box;
      ">
        ${e()}
      </div>
    `],argTypes:{variant:{name:`variant`,description:`Select the visual style and functional variant.`,control:{type:`select`},options:[`primary`,`secondary`,`text`,`icon`,`floating`],table:{category:`Button`,subcategory:`Core`,defaultValue:{summary:`primary`}}},label:{name:`label`,description:`The text content for the button (Ignored in icon-only variant).`,control:`text`,table:{category:`Button`,subcategory:`Core`}},ariaLabel:{name:`ariaLabel`,description:`Essential for accessibility on icon-only buttons.`,control:`text`,table:{category:`Button`,subcategory:`Core`}},disabled:{name:`disabled`,description:`If true, the button is non-interactive.`,control:`boolean`,table:{category:`Button`,subcategory:`Core`,defaultValue:{summary:`false`}}},hasIcon:{name:`hasIcon`,description:`Toggle to enable or disable the icon rendering.`,control:`boolean`,table:{category:`Button`,subcategory:`Icon`,defaultValue:{summary:`false`}}},icon:{name:`icon`,description:`The name of the icon to display.`,control:`text`,if:{arg:`hasIcon`},table:{category:`Button`,subcategory:`Icon`}},iconVariant:{name:`iconVariant`,description:`Select icon variant style (outline or fill).`,control:{type:`select`},options:[`outline`,`fill`],if:{arg:`hasIcon`},table:{category:`Button`,subcategory:`Icon`,defaultValue:{summary:`outline`}}},iconPosition:{name:`iconPosition`,description:`Position of the icon relative to the text label.`,control:`radio`,options:[`left`,`right`],if:{arg:`hasIcon`},table:{category:`Button`,subcategory:`Icon`,defaultValue:{summary:`left`}}},showTooltip:{name:`showTooltip`,description:`Toggle whether to render the tooltip component in the DOM.`,control:`boolean`,table:{category:`Tooltip`,subcategory:`Config`,defaultValue:{summary:`true`}}},tooltipVisible:{name:`tooltipVisible`,description:`Force the tooltip to remain visible without needing to hover.`,control:`boolean`,table:{category:`Tooltip`,subcategory:`Config`,defaultValue:{summary:`false`}}},tooltipText:{name:`tooltipText`,description:`The message body rendered inside the tooltip container.`,control:`text`,if:{arg:`showTooltip`},table:{category:`Tooltip`,subcategory:`Config`}},tooltipPosition:{name:`tooltipPosition`,description:`Determines which direction the tooltip anchors relative to the button.`,control:{type:`select`},options:[`top`,`bottom`,`left`,`right`],if:{arg:`showTooltip`},table:{category:`Tooltip`,subcategory:`Config`,defaultValue:{summary:`top`}}},tooltipShowKbd:{name:`tooltipShowKbd`,description:`The exclusive toggle switch to activate or deactivate the shortcut key indicator.`,control:`boolean`,if:{arg:`showTooltip`},table:{category:`Tooltip`,subcategory:`KBD Config`,defaultValue:{summary:`false`}}},tooltipKbdLabel:{name:`tooltipKbdLabel`,description:`Select the standard shortcut modifier function key.`,control:{type:`select`},options:[`⌥ Option`,`⎇ Alt`,`⇧ Shift`,`⌘ Cmd`,`Ctrl`,`Esc`,`Backspace`],if:{arg:`tooltipShowKbd`},table:{category:`Tooltip`,subcategory:`KBD Config`}},tooltipKbdShowPlus:{name:`tooltipKbdShowPlus`,description:`Toggles a combination plus operator inside the shortcut layout matrix.`,control:`boolean`,if:{arg:`tooltipShowKbd`},table:{category:`Tooltip`,subcategory:`KBD Config`,defaultValue:{summary:`false`}}},tooltipKbdKey:{name:`tooltipKbdKey`,description:`The secondary alphanumeric action key bound to multi-key shortcut sequences.`,control:`text`,if:{arg:`tooltipKbdShowPlus`},table:{category:`Tooltip`,subcategory:`KBD Config`}},tooltipRadius:{name:`tooltipRadius`,description:`Sub-atomic control to override the tooltip corner bounding geometry.`,control:`text`,if:{arg:`showTooltip`},table:{category:`Tooltip`,subcategory:`Sub-Atomic Props`,defaultValue:{summary:`var(--radius-md)`}}},tooltipBackgroundColor:{name:`tooltipBackgroundColor`,description:`Sub-atomic control to alter the backdrop surface color mask.`,control:`color`,if:{arg:`showTooltip`},table:{category:`Tooltip`,subcategory:`Sub-Atomic Props`,defaultValue:{summary:`var(--color-overlay-dark)`}}},radius:{name:`radius`,description:`Define a custom border-radius override (--btn-radius).`,control:`text`,table:{category:`SUB-ATOMIC PROPS`}},backgroundColor:{name:`backgroundColor`,description:`Override default background color (--btn-bg).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`}},borderWidth:{name:`borderWidth`,description:`CSS value for border width (--btn-border-width).`,control:`text`,table:{category:`SUB-ATOMIC PROPS`}},borderColor:{name:`borderColor`,description:`CSS value for border color (--btn-border-color).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`}},hoverBackgroundColor:{name:`hoverBackgroundColor`,description:`Override hover state background color (--btn-hover-bg).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`}},activeBackgroundColor:{name:`activeBackgroundColor`,description:`Override active state background color (--btn-active-bg).`,control:`color`,table:{category:`SUB-ATOMIC PROPS`}},onClick:{name:`onClick`,description:`Fires when clicked. View output in the Storybook "Actions" tab.`,action:`clicked`,table:{category:`SUB-ATOMIC PROPS`,subcategory:`Events`}}},render:e=>{let n=[e.radius?`--btn-radius: ${e.radius};`:``,e.backgroundColor?`--btn-bg: ${e.backgroundColor};`:``,e.borderWidth?`--btn-border-width: ${e.borderWidth};`:``,e.borderColor?`--btn-border-color: ${e.borderColor};`:``,e.hoverBackgroundColor?`--btn-hover-bg: ${e.hoverBackgroundColor};`:``,e.activeBackgroundColor?`--btn-active-bg: ${e.activeBackgroundColor};`:``].join(` `).trim(),i=[e.tooltipRadius?`--tooltip-radius: ${e.tooltipRadius};`:``,e.tooltipBackgroundColor?`--tooltip-bg: ${e.tooltipBackgroundColor};`:``].join(` `).trim();return t`
      <div class="story-wrapper" style="position: relative; display: inline-flex;">
        <ds-button 
          variant=${e.variant}
          aria-label=${r(e.ariaLabel)}
          ?disabled=${e.disabled}
          icon=${r(e.hasIcon?e.icon:void 0)}
          icon-position=${r(e.hasIcon?e.iconPosition:void 0)}
          icon-variant=${r(e.hasIcon?e.iconVariant:void 0)}
          style=${r(n||void 0)}
          @click=${e.onClick}>
          ${e.variant!==`icon`&&e.variant!==`floating`?e.label:``}
        </ds-button>
        
        ${e.showTooltip?t`
              <ds-tooltip 
                text=${r(e.tooltipText)} 
                position=${r(e.tooltipPosition)}
                ?visible=${e.tooltipVisible}
                ?show-kbd=${e.tooltipShowKbd}
                kbd-label=${r(e.tooltipKbdLabel)}
                ?kbd-show-plus=${e.tooltipKbdShowPlus}
                kbd-key=${r(e.tooltipKbdKey)}
                style=${r(i||void 0)}>
              </ds-tooltip>
            `:``}
      </div>
    `}},f={args:{variant:`primary`,label:`Play Video`,hasIcon:!0,icon:`play`,iconVariant:`outline`,iconPosition:`left`,showTooltip:!0,tooltipVisible:!1,tooltipText:`Initiates video playback`,tooltipPosition:`top`,tooltipShowKbd:!0,tooltipKbdLabel:`⇧ Shift`,tooltipKbdShowPlus:!0,tooltipKbdKey:`p`},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-button`),r=e.querySelector(`ds-tooltip`);await t(`Verify initial tooltip state is hidden`,async()=>{c(r.hasAttribute(`visible`)).toBe(!1)}),await t(`Hover button to show tooltip`,async()=>{await u.hover(n),c(r.hasAttribute(`visible`)).toBe(!0)}),await t(`Unhover button to hide tooltip`,async()=>{await u.unhover(n),c(r.hasAttribute(`visible`)).toBe(!1)}),await t(`Click the primary button`,async()=>{await u.click(n)})}},p={args:{variant:`secondary`,label:`Repository`,hasIcon:!0,icon:`link`,iconPosition:`right`,showTooltip:!0,tooltipVisible:!1,tooltipText:`View project repo`,tooltipPosition:`bottom`,tooltipShowKbd:!1},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-button`),r=e.querySelector(`ds-tooltip`);await t(`Verify right-side icon position attribute`,async()=>{c(n.getAttribute(`icon-position`)).toBe(`right`)}),await t(`Focus button via keyboard to trigger tooltip`,async()=>{n.shadowRoot.querySelector(`button`).focus(),c(document.activeElement).toBe(n),c(r.hasAttribute(`visible`)).toBe(!0)}),await t(`Blur button to dismiss tooltip`,async()=>{n.shadowRoot.querySelector(`button`).blur(),c(r.hasAttribute(`visible`)).toBe(!1)})}},m={args:{variant:`text`,label:`Learn More`,hasIcon:!1,showTooltip:!1},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-button`),r=e.querySelector(`ds-tooltip`);await t(`Verify tooltip is NOT rendered in DOM`,async()=>{c(r).toBeNull()}),await t(`Verify text content`,async()=>{c(n.textContent.trim()).toBe(`Learn More`)}),await t(`Click the text button`,async()=>{await u.click(n)})}},h={args:{variant:`icon`,hasIcon:!0,icon:`share`,ariaLabel:`Share content`,showTooltip:!0,tooltipVisible:!1,tooltipText:`Share content`,tooltipPosition:`right`,tooltipShowKbd:!1},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-button`),r=e.querySelector(`ds-tooltip`);await t(`Verify accessibility aria-label is delegated to internal button`,async()=>{let e=n.shadowRoot.querySelector(`button`);c(e.getAttribute(`aria-label`)).toBe(`Share content`)}),await t(`Verify outer host element has scrubbed the prohibited attribute`,async()=>{c(n.getAttribute(`aria-label`)).toBeNull()}),await t(`Verify internal text label is hidden`,async()=>{c(n.textContent.trim()).toBe(``)}),await t(`Hover to reveal tooltip`,async()=>{await u.hover(n),c(r.hasAttribute(`visible`)).toBe(!0)})}},g={args:{variant:`floating`,hasIcon:!0,icon:`play`,ariaLabel:`Go Back`,showTooltip:!0,tooltipVisible:!1,tooltipText:`Play Video`,tooltipPosition:`left`,tooltipShowKbd:!0,tooltipKbdLabel:`Esc`,tooltipKbdShowPlus:!1},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-button`),r=e.querySelector(`ds-tooltip`);await t(`Verify standard floating attributes`,async()=>{c(n.getAttribute(`variant`)).toBe(`floating`),c(r.getAttribute(`position`)).toBe(`left`),c(r.hasAttribute(`show-kbd`)).toBe(!0)}),await t(`Click the floating action button`,async()=>{await u.click(n)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: 'Play Video',
    hasIcon: true,
    icon: 'play',
    iconVariant: 'outline',
    iconPosition: 'left',
    showTooltip: true,
    tooltipVisible: false,
    tooltipText: 'Initiates video playback',
    tooltipPosition: 'top',
    tooltipShowKbd: true,
    tooltipKbdLabel: '⇧ Shift',
    tooltipKbdShowPlus: true,
    tooltipKbdKey: 'p'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Verify initial tooltip state is hidden', async () => {
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });
    await step('Hover button to show tooltip', async () => {
      await userEvent.hover(button);
      expect(tooltip.hasAttribute('visible')).toBe(true);
    });
    await step('Unhover button to hide tooltip', async () => {
      await userEvent.unhover(button);
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });
    await step('Click the primary button', async () => {
      await userEvent.click(button);
    });
  }
}`,...f.parameters?.docs?.source},description:{story:`The Primary Button is mainly used as a Call-to-Action inside the Case Reader View, 
leading the user towards the Video Player View.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Repository',
    hasIcon: true,
    icon: 'link',
    iconPosition: 'right',
    showTooltip: true,
    tooltipVisible: false,
    tooltipText: 'View project repo',
    tooltipPosition: 'bottom',
    tooltipShowKbd: false
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Verify right-side icon position attribute', async () => {
      expect(button.getAttribute('icon-position')).toBe('right');
    });
    await step('Focus button via keyboard to trigger tooltip', async () => {
      const internalButton = button.shadowRoot.querySelector('button');
      internalButton.focus();
      expect(document.activeElement).toBe(button);
      expect(tooltip.hasAttribute('visible')).toBe(true);
    });
    await step('Blur button to dismiss tooltip', async () => {
      const internalButton = button.shadowRoot.querySelector('button');
      internalButton.blur();
      expect(tooltip.hasAttribute('visible')).toBe(false);
    });
  }
}`,...p.parameters?.docs?.source},description:{story:"Also known as ye-ol-reliable, this little fellow is seen across the entire `portfoliable` user interface.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    label: 'Learn More',
    hasIcon: false,
    showTooltip: false
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Verify tooltip is NOT rendered in DOM', async () => {
      expect(tooltip).toBeNull();
    });
    await step('Verify text content', async () => {
      expect(button.textContent.trim()).toBe('Learn More');
    });
    await step('Click the text button', async () => {
      await userEvent.click(button);
    });
  }
}`,...m.parameters?.docs?.source},description:{story:`Great companions for long paragraphs and standalone blocks of text, and not so great attention-grabbers.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    hasIcon: true,
    icon: 'share',
    ariaLabel: 'Share content',
    showTooltip: true,
    tooltipVisible: false,
    tooltipText: 'Share content',
    tooltipPosition: 'right',
    tooltipShowKbd: false
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Verify accessibility aria-label is delegated to internal button', async () => {
      const internalButton = button.shadowRoot.querySelector('button');
      expect(internalButton.getAttribute('aria-label')).toBe('Share content');
    });
    await step('Verify outer host element has scrubbed the prohibited attribute', async () => {
      expect(button.getAttribute('aria-label')).toBeNull();
    });
    await step('Verify internal text label is hidden', async () => {
      expect(button.textContent.trim()).toBe('');
    });
    await step('Hover to reveal tooltip', async () => {
      await userEvent.hover(button);
      expect(tooltip.hasAttribute('visible')).toBe(true);
    });
  }
}`,...h.parameters?.docs?.source},description:{story:"Inside `portfoliable`, used for Sharing case studies across social networks and generating unique URLs.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'floating',
    hasIcon: true,
    icon: 'play',
    ariaLabel: 'Go Back',
    showTooltip: true,
    tooltipVisible: false,
    tooltipText: 'Play Video',
    tooltipPosition: 'left',
    tooltipShowKbd: true,
    tooltipKbdLabel: 'Esc',
    tooltipKbdShowPlus: false
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const button = canvasElement.querySelector('ds-button');
    const tooltip = canvasElement.querySelector('ds-tooltip');
    await step('Verify standard floating attributes', async () => {
      expect(button.getAttribute('variant')).toBe('floating');
      expect(tooltip.getAttribute('position')).toBe('left');
      expect(tooltip.hasAttribute('show-kbd')).toBe(true);
    });
    await step('Click the floating action button', async () => {
      await userEvent.click(button);
    });
  }
}`,...g.parameters?.docs?.source},description:{story:"A circular, elevated button for critical, persistent actions, as seen in `ds-video-controls`.",...g.parameters?.docs?.description}}},_=[`PrimaryButton`,`SecondaryButton`,`Text`,`IconOnly`,`Floating`]}));v();export{g as Floating,h as IconOnly,f as PrimaryButton,p as SecondaryButton,m as Text,_ as __namedExportsOrder,d as default,v as t};
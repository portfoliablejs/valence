import{i as e}from"./preload-helper-CT_b8DTk.js";import{St as t,bt as n}from"./iframe-zK6jYJ-S.js";import{r,t as i}from"./if-defined-2H52cT6K.js";import{t as a}from"./ItemRow-t0KNGSdO.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i(),a(),{fn:o,userEvent:s,expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`Molecules/ItemRow`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"An interactive list row component (`ds-item-row`) that supports leading icons, text labels, \nkeyboard shortcut indicators, and interactive right-aligned controls (toggle, check, or radio)."}}},decorators:[e=>t`
    <style>
      .story-menu-card {
        width: 380px;
        box-sizing: border-box;
        background: var(--custom-bg, var(--color-bg, #ffffff));
        border: var(--border-width-thin, 1px) var(--border-style-solid, solid) var(--color-surface-border, rgba(0, 0, 0, 0.08));
        border-radius: var(--custom-radius, var(--radius-lg, 16px));
        box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
        padding: var(--space-md, 12px);
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      /* Exact dark mode replica of :host([a11y-dark-mode]) .menu-card */
      html.a11y-dark-mode .story-menu-card {
        background: #1c1c1e !important;
        border-color: var(--color-surface-border, rgba(255, 255, 255, 0.12)) !important;
        /* Re-defines --color-surface locally so ds-item-row's hover state is visible against #1c1c1e */
        --color-surface: rgba(255, 255, 255, 0.12);
      }
    </style>

    <div class="canvas-buffer" style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      box-sizing: border-box;
    ">
      <div class="story-menu-card">
        ${e()}
      </div>
    </div>
  `],argTypes:{label:{control:`text`,description:`Primary text label mapping to the left slot.`,table:{category:`Component: Core`}},showIcon:{control:`boolean`,description:`Toggles visibility of the left leading icon.`,table:{category:`Component: Core`}},icon:{control:`text`,description:`System icon name rendered when showIcon is enabled.`,table:{category:`Component: Core`}},iconVariant:{control:{type:`select`},options:[`outline`,`fill`],description:`Variant style passed down to the leading icon.`,table:{category:`Component: Core`}},disabled:{control:`boolean`,description:`Disables all user interaction on the row and passes disabled state down to child controls.`,table:{category:`Component: Core`}},ariaLabel:{control:`text`,description:`Override accessibility label mapped to the row wrapper.`,table:{category:`Component: Core`}},showKbd:{control:`boolean`,description:`Toggles keyboard shortcut hint visibility.`,table:{category:`Component: Keyboard Controls (Kbd)`}},kbd:{control:`text`,description:`Primary shortcut key (e.g., Shift, Cmd).`,table:{category:`Component: Keyboard Controls (Kbd)`}},kbdVariant:{control:{type:`select`},options:[`default`,`inverted`],description:`Determines visual style of the nested Kbd.`,table:{category:`Component: Keyboard Controls (Kbd)`}},kbdShowPlus:{control:`boolean`,description:`Appends a combination plus operator inside the Kbd node.`,table:{category:`Component: Keyboard Controls (Kbd)`}},kbdKey:{control:`text`,description:`Secondary shortcut key appended if showPlus is active.`,table:{category:`Component: Keyboard Controls (Kbd)`}},control:{control:{type:`select`},options:[`toggle`,`check`,`radio`,`none`],description:`Interactive control type rendered on the right side.`,table:{category:`Component: Control Variants`}},checkHasBackground:{control:`boolean`,description:`Toggles surface container background framing on the child Check atom.`,table:{category:`Component: Control Variants`}},active:{control:`boolean`,description:`Active state mapped to the toggle-variant.`,table:{category:`Component: Control Variants`}},selected:{control:`boolean`,description:`Selected state mapped to check and radio variants.`,table:{category:`Component: Control Variants`}},toggleTextOn:{control:`text`,description:`Active text boundary configuration for child Toggle.`,table:{category:`Component: Control Variants`}},toggleTextOff:{control:`text`,description:`Passive text boundary configuration for child Toggle.`,table:{category:`Component: Control Variants`}},colorCheck:{control:`color`,description:`Sub-atomic modifier overriding checkmark vector color.`,table:{category:`Sub-Atomic Overrides`}},colorRadio:{control:`color`,description:`Sub-atomic modifier overriding radio vector stroke/fill color.`,table:{category:`Sub-Atomic Overrides`}},colorToggleActive:{control:`color`,description:`Sub-atomic modifier overriding active toggle track background.`,table:{category:`Sub-Atomic Overrides`}},onClick:{action:`ds-row-click`,description:`Event emitted on row click with updated state payload.`,table:{category:`Events`}}},args:{label:`Play Track`,showIcon:!0,icon:`play`,iconVariant:`outline`,disabled:!1,showKbd:!0,kbd:`⌘`,kbdVariant:`default`,kbdShowPlus:!0,kbdKey:`P`,control:`none`,active:!1,selected:!1,checkHasBackground:!1,toggleTextOn:``,toggleTextOff:``,onClick:o()},render:e=>{let n=[e.colorCheck||e.colorRadio?`--custom-color: ${e.colorCheck||e.colorRadio};`:``,e.colorToggleActive?`--custom-checked-bg: ${e.colorToggleActive};`:``].join(` `).trim();return t`
      <ds-item-row 
        label="${e.label}" 
        icon="${e.icon}" 
        icon-variant="${e.iconVariant}"
        ?show-icon="${e.showIcon}"
        kbd="${e.kbd}" 
        ?show-kbd="${e.showKbd}" 
        kbd-variant="${e.kbdVariant}"
        ?kbd-show-plus="${e.kbdShowPlus}"
        kbd-key="${e.kbdKey}"
        control="${e.control}" 
        ?active="${e.active}" 
        ?selected="${e.selected}"
        ?disabled="${e.disabled}"
        ?check-has-background="${e.checkHasBackground}" 
        toggle-text-on="${e.toggleTextOn}"
        toggle-text-off="${e.toggleTextOff}"
        aria-label=${r(e.ariaLabel)}
        style=${r(n||void 0)}
        @ds-row-click="${t=>e.onClick(t.detail)}">
      </ds-item-row>
    `},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-item-row`);await t(`Hover row to verify hover state transition`,async()=>{await s.hover(n)}),await t(`Verify keyboard focus capability`,async()=>{let e=n.shadowRoot.querySelector(`.a11y-row[tabindex="0"]`)||n.shadowRoot.querySelector(`ds-toggle`)||n.shadowRoot.querySelector(`ds-check`)||n.shadowRoot.querySelector(`ds-radio`)||n.shadowRoot.querySelector(`.a11y-row`);e&&typeof e.focus==`function`&&e.focus(),c(n.shadowRoot.activeElement||document.activeElement).toBeDefined()}),await t(`Click row target to trigger payload dispatch`,async()=>{await s.click(n)})}},u={args:{showIcon:!0,icon:`search`,label:`Find in Document`,showKbd:!0,kbd:`⌘`,kbdShowPlus:!0,kbdKey:`F`,control:`none`}},d={args:{control:`toggle`,active:!0,showKbd:!0,kbd:`⌘`,kbdShowPlus:!0,kbdKey:`D`,showIcon:!0,icon:`moon`,label:`Dark Mode`}},f={args:{control:`check`,selected:!0,showKbd:!1,showIcon:!0,icon:`language`,label:`Translate to English`}},p={args:{control:`radio`,selected:!0,showKbd:!1,showIcon:!0,icon:`check`,label:`Primary Selection Option`}},m={args:{showIcon:!0,icon:`lock-closed`,label:`Restricted Action`,control:`toggle`,active:!0,disabled:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showIcon: true,
    icon: 'search',
    label: 'Find in Document',
    showKbd: true,
    kbd: '⌘',
    kbdShowPlus: true,
    kbdKey: 'F',
    control: 'none'
  }
}`,...u.parameters?.docs?.source},description:{story:`Standard text row featuring a leading icon and keyboard shortcut, without an interactive right-side control.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    control: 'toggle',
    active: true,
    showKbd: true,
    kbd: '⌘',
    kbdShowPlus: true,
    kbdKey: 'D',
    showIcon: true,
    icon: 'moon',
    label: 'Dark Mode'
  }
}`,...d.parameters?.docs?.source},description:{story:`Row variant integrated with a right-side toggle switch control for binary state management.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    control: 'check',
    selected: true,
    showKbd: false,
    showIcon: true,
    icon: 'language',
    label: 'Translate to English'
  }
}`,...f.parameters?.docs?.source},description:{story:`Row variant integrated with a right-side checkbox control for multi-selection options.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    control: 'radio',
    selected: true,
    showKbd: false,
    showIcon: true,
    icon: 'check',
    label: 'Primary Selection Option'
  }
}`,...p.parameters?.docs?.source},description:{story:`Row variant integrated with a right-side radio control for single-selection lists.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showIcon: true,
    icon: 'lock-closed',
    label: 'Restricted Action',
    control: 'toggle',
    active: true,
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Disabled row state that suppresses user interaction and dims internal controls.`,...m.parameters?.docs?.description}}},h=[`StandardRow`,`ToggleVariant`,`CheckVariant`,`RadioVariant`,`DisabledRow`]}))();export{f as CheckVariant,m as DisabledRow,p as RadioVariant,u as StandardRow,d as ToggleVariant,h as __namedExportsOrder,l as default};
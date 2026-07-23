import{i as e}from"./preload-helper-CT_b8DTk.js";import{Ct as t,bt as n}from"./iframe-DInCeyBe.js";import{t as r}from"./CaseNavigator-BWAs9KtW.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{n(),r(),{fn:i,userEvent:a,expect:o}=__STORYBOOK_MODULE_TEST__,s=[{id:`cassi-wrist`,title:`UX on Wrist`,snippet:`...ased on projects developed at cassi, identify which mobile features would add ma...`},{id:`cassi-redesign`,title:`US$400k Redesign`,snippet:`...nce upon a time, the cassi health insurance app served 229,000 mobile u...`}],c={title:`Molecules/Case Navigator [v1.0.0]`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"The `ds-case-navigator` is a composite molecule designed for sequential case study navigation, inline autocomplete search filtering, and global keyboard shortcut orchestration."}}},decorators:[e=>t`
      <div style="padding: 180px 40px 40px 40px; display: flex; justify-content: center; align-items: center; min-height: 250px;">
        ${e()}
      </div>
    `],argTypes:{currentIndex:{control:{type:`number`,min:0},description:`Zero-based index of the currently active case.`,table:{category:`Core`,defaultValue:{summary:`0`}}},totalCases:{control:{type:`number`,min:1},description:`Total number of case study items.`,table:{category:`Core`,defaultValue:{summary:`1`}}},searchExpanded:{control:`boolean`,description:`Expands the inline search input.`,table:{category:`Core`,defaultValue:{summary:`false`}}},value:{control:`text`,description:`Text query pre-typed inside search input.`,table:{category:`Core`}},disabled:{control:`boolean`,description:`Disables all user interactions.`,table:{category:`Core`,defaultValue:{summary:`false`}}},placeholder:{control:`text`,description:`Localized placeholder text displayed inside search input.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Search cases...`}}},labelPrev:{control:`text`,description:`Localized text label for the Previous button.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Previous`}}},labelNext:{control:`text`,description:`Localized text label for the Next button.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Next`}}},tooltipSearch:{control:`text`,description:`Localized tooltip text for the Search trigger button.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Search`}}},tooltipCloseSearch:{control:`text`,description:`Localized tooltip text for the Search close button.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Close search`}}},tooltipPrev:{control:`text`,description:`Localized tooltip text for the Previous Case button.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Previous case`}}},tooltipNext:{control:`text`,description:`Localized tooltip text for the Next Case button.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Next case`}}},searchAriaLabel:{control:`text`,description:`Accessible ARIA label for the Search button and input.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Search cases`}}},prevAriaLabel:{control:`text`,description:`Accessible ARIA label for the Previous button.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Previous case`}}},nextAriaLabel:{control:`text`,description:`Accessible ARIA label for the Next button.`,table:{category:`Localization & Accessibility`,defaultValue:{summary:`Next case`}}},kbdSearchLabel:{control:`text`,description:`Keyboard shortcut label for Search.`,table:{category:`Keyboard Shortcuts`,defaultValue:{summary:`S`}}},kbdSearchKey:{control:`text`,description:`Secondary key for Search combination shortcut.`,table:{category:`Keyboard Shortcuts`}},kbdSearchShowPlus:{control:`boolean`,description:`Toggles + operator for Search combination shortcut.`,table:{category:`Keyboard Shortcuts`,defaultValue:{summary:`false`}}},kbdCloseSearchLabel:{control:`text`,description:`Keyboard shortcut label for Close Search.`,table:{category:`Keyboard Shortcuts`,defaultValue:{summary:`X`}}},kbdCloseSearchKey:{control:`text`,description:`Secondary key for Close Search combination shortcut.`,table:{category:`Keyboard Shortcuts`}},kbdCloseSearchShowPlus:{control:`boolean`,description:`Toggles + operator for Close Search combination shortcut.`,table:{category:`Keyboard Shortcuts`,defaultValue:{summary:`false`}}},kbdPrevLabel:{control:`text`,description:`Keyboard shortcut label for Previous Case.`,table:{category:`Keyboard Shortcuts`,defaultValue:{summary:`←`}}},kbdPrevKey:{control:`text`,description:`Secondary key for Previous Case combination shortcut.`,table:{category:`Keyboard Shortcuts`}},kbdPrevShowPlus:{control:`boolean`,description:`Toggles + operator for Previous Case combination shortcut.`,table:{category:`Keyboard Shortcuts`,defaultValue:{summary:`false`}}},kbdNextLabel:{control:`text`,description:`Keyboard shortcut label for Next Case.`,table:{category:`Keyboard Shortcuts`,defaultValue:{summary:`→`}}},kbdNextKey:{control:`text`,description:`Secondary key for Next Case combination shortcut.`,table:{category:`Keyboard Shortcuts`}},kbdNextShowPlus:{control:`boolean`,description:`Toggles + operator for Next Case combination shortcut.`,table:{category:`Keyboard Shortcuts`,defaultValue:{summary:`false`}}},customBg:{control:`color`,name:`--ds-case-navigator-bg`,description:`Sub-atomic override for main container background surface.`,table:{category:`SUB-ATOMIC PROPS`}},customMenuBg:{control:`color`,name:`--ds-case-navigator-menu-bg`,description:`Sub-atomic override for autocomplete popover background surface.`,table:{category:`SUB-ATOMIC PROPS`}},customRadius:{control:`text`,name:`--ds-case-navigator-radius`,description:`Sub-atomic override for container border radius.`,table:{category:`SUB-ATOMIC PROPS`}},customBorderColor:{control:`color`,name:`--ds-case-navigator-border-color`,description:`Sub-atomic override for container border line color.`,table:{category:`SUB-ATOMIC PROPS`}},customPadding:{control:`text`,name:`--ds-case-navigator-padding`,description:`Sub-atomic override for uniform container padding.`,table:{category:`SUB-ATOMIC PROPS`}},onCaseSelect:{action:`ds-case-select`,table:{category:`Event Listeners`}},onCasePrev:{action:`ds-case-prev`,table:{category:`Event Listeners`}},onCaseNext:{action:`ds-case-next`,table:{category:`Event Listeners`}},onSearchInput:{action:`ds-search-input`,table:{category:`Event Listeners`}},onSearchSelect:{action:`ds-search-select`,table:{category:`Event Listeners`}}},args:{currentIndex:1,totalCases:3,searchExpanded:!1,placeholder:`Search cases...`,labelPrev:`Previous`,labelNext:`Next`,tooltipSearch:`Search`,tooltipCloseSearch:`Close search`,tooltipPrev:`Previous case`,tooltipNext:`Next case`,searchAriaLabel:`Search cases`,prevAriaLabel:`Previous case`,nextAriaLabel:`Next case`,kbdSearchLabel:`S`,kbdSearchShowPlus:!1,kbdCloseSearchLabel:`X`,kbdCloseSearchShowPlus:!1,kbdPrevLabel:`←`,kbdPrevShowPlus:!1,kbdNextLabel:`→`,kbdNextShowPlus:!1,disabled:!1,onCaseSelect:i(),onCasePrev:i(),onCaseNext:i(),onSearchInput:i(),onSearchSelect:i()},render:e=>{let t=document.createElement(`ds-case-navigator`);t.setAttribute(`current-index`,e.currentIndex.toString()),t.setAttribute(`total-cases`,e.totalCases.toString()),e.placeholder&&t.setAttribute(`placeholder`,e.placeholder),e.labelPrev&&t.setAttribute(`label-prev`,e.labelPrev),e.labelNext&&t.setAttribute(`label-next`,e.labelNext),e.tooltipSearch&&t.setAttribute(`tooltip-search`,e.tooltipSearch),e.tooltipCloseSearch&&t.setAttribute(`tooltip-close-search`,e.tooltipCloseSearch),e.tooltipPrev&&t.setAttribute(`tooltip-prev`,e.tooltipPrev),e.tooltipNext&&t.setAttribute(`tooltip-next`,e.tooltipNext),e.searchAriaLabel&&t.setAttribute(`search-aria-label`,e.searchAriaLabel),e.prevAriaLabel&&t.setAttribute(`prev-aria-label`,e.prevAriaLabel),e.nextAriaLabel&&t.setAttribute(`next-aria-label`,e.nextAriaLabel),e.kbdSearchLabel&&t.setAttribute(`kbd-search-label`,e.kbdSearchLabel),e.kbdSearchKey&&t.setAttribute(`kbd-search-key`,e.kbdSearchKey),e.kbdSearchShowPlus&&t.setAttribute(`kbd-search-show-plus`,``),e.kbdCloseSearchLabel&&t.setAttribute(`kbd-close-search-label`,e.kbdCloseSearchLabel),e.kbdCloseSearchKey&&t.setAttribute(`kbd-close-search-key`,e.kbdCloseSearchKey),e.kbdCloseSearchShowPlus&&t.setAttribute(`kbd-close-search-show-plus`,``),e.kbdPrevLabel&&t.setAttribute(`kbd-prev-label`,e.kbdPrevLabel),e.kbdPrevKey&&t.setAttribute(`kbd-prev-key`,e.kbdPrevKey),e.kbdPrevShowPlus&&t.setAttribute(`kbd-prev-show-plus`,``),e.kbdNextLabel&&t.setAttribute(`kbd-next-label`,e.kbdNextLabel),e.kbdNextKey&&t.setAttribute(`kbd-next-key`,e.kbdNextKey),e.kbdNextShowPlus&&t.setAttribute(`kbd-next-show-plus`,``),e.searchExpanded&&t.setAttribute(`search-expanded`,`true`),e.value&&t.setAttribute(`value`,e.value),e.disabled&&t.setAttribute(`disabled`,`true`);let n=[];return e.customBg&&n.push(`--ds-case-navigator-bg: ${e.customBg}`),e.customMenuBg&&n.push(`--ds-case-navigator-menu-bg: ${e.customMenuBg}`),e.customRadius&&n.push(`--ds-case-navigator-radius: ${e.customRadius}`),e.customBorderColor&&n.push(`--ds-case-navigator-border-color: ${e.customBorderColor}`),e.customPadding&&n.push(`--ds-case-navigator-padding: ${e.customPadding}`),n.length>0&&t.setAttribute(`style`,n.join(`; `)),t.results=s,t.addEventListener(`ds-case-select`,t=>e.onCaseSelect(t.detail)),t.addEventListener(`ds-case-prev`,t=>e.onCasePrev(t.detail)),t.addEventListener(`ds-case-next`,t=>e.onCaseNext(t.detail)),t.addEventListener(`ds-search-input`,t=>e.onSearchInput(t.detail)),t.addEventListener(`ds-search-select`,t=>e.onSearchSelect(t.detail)),t}},l={parameters:{docs:{description:{story:`Default interactive state of the case navigator with search expansion and play test verification suite.`}}},args:{currentIndex:1,totalCases:3},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-case-navigator`),r=n.shadowRoot.querySelector(`.btn-case-search`);await t(`Verify search button expands input and sets accessible name`,async()=>{await a.click(r),o(n.getAttribute(`search-expanded`)).toBe(`true`);let e=n.shadowRoot.querySelector(`.case-search-input`);o(e.getAttribute(`aria-label`)).toBe(`Search cases`)}),await t(`Type query to trigger autocomplete menu`,async()=>{let e=n.shadowRoot.querySelector(`.case-search-input`);await a.type(e,`cassi`);let t=n.shadowRoot.querySelector(`.autocomplete-menu`);o(t.classList.contains(`visible`)).toBe(!0)})}},u={parameters:{docs:{description:{story:"Navigator positioning at the first case study (`currentIndex = 0`), automatically disabling the Previous navigation button."}}},args:{currentIndex:0,totalCases:3}},d={parameters:{docs:{description:{story:"Navigator positioning at the final case study (`currentIndex = totalCases - 1`), automatically disabling the Next navigation button."}}},args:{currentIndex:2,totalCases:3}},f={parameters:{docs:{description:{story:"Single case setup (`totalCases = 1`), resulting in disabled states for both Previous and Next navigation controls."}}},args:{currentIndex:0,totalCases:1}},p={parameters:{docs:{description:{story:`Demonstrates the inline search input in its expanded state, hiding the adjacent navigation controls.`}}},args:{currentIndex:1,totalCases:3,searchExpanded:!0}},m={parameters:{docs:{description:{story:`Shows active search query filtering results displayed inside the floating autocomplete suggestions popover with term highlighting.`}}},args:{currentIndex:1,totalCases:3,searchExpanded:!0,value:`cassi`}},h={parameters:{docs:{description:{story:"Configures custom multi-key shortcut combinations (`⌘ Cmd + f`, `⌘ Cmd + ←`, `⌘ Cmd + →`) rendered inside action tooltips."}}},args:{currentIndex:1,totalCases:3,kbdSearchLabel:`⌘ Cmd`,kbdSearchShowPlus:!0,kbdSearchKey:`f`,kbdPrevLabel:`⌘ Cmd`,kbdPrevShowPlus:!0,kbdPrevKey:`←`,kbdNextLabel:`⌘ Cmd`,kbdNextShowPlus:!0,kbdNextKey:`→`}},g={parameters:{docs:{description:{story:`Demonstrates customized localized text strings for action labels, input placeholders, tooltips, and keyboard shortcut keys.`}}},args:{currentIndex:1,totalCases:3,labelPrev:`Anterior`,labelNext:`Próximo`,placeholder:`Buscar casos...`,tooltipSearch:`Buscar`,tooltipCloseSearch:`Fechar busca`,tooltipPrev:`Caso anterior`,tooltipNext:`Próximo caso`,kbdSearchLabel:`F`,kbdCloseSearchLabel:`X`,kbdPrevLabel:`A`,kbdNextLabel:`D`}},_={parameters:{docs:{description:{story:`Fully disabled component state where search input, navigation action buttons, and keyboard shortcut listeners are non-interactive.`}}},args:{currentIndex:1,totalCases:3,disabled:!0}},v={parameters:{docs:{description:{story:"Design token customizations using sub-atomic CSS custom properties (`--ds-case-navigator-*`) for background colors, borders, radius, and padding."}}},args:{currentIndex:1,totalCases:3,customBg:`#101218`,customBorderColor:`#2B71F0`,customRadius:`12px`,customPadding:`4px 16px`}},y={parameters:{docs:{description:{story:"Automated interaction test verifying focus management and keydown triggers (`Space` / `Enter`) on navigation controls."}}},args:{currentIndex:1,totalCases:3},play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`ds-case-navigator`),r=n.shadowRoot.querySelector(`.btn-next-case`);await t(`Focus next button via Tab and activate via Space/Enter`,async()=>{r.shadowRoot&&r.shadowRoot.querySelector(`button`)?r.shadowRoot.querySelector(`button`).focus():r.focus(),await a.keyboard(`[Space]`),o(n.getAttribute(`current-index`)).toBe(`2`)})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default interactive state of the case navigator with search expansion and play test verification suite.'
      }
    }
  },
  args: {
    currentIndex: 1,
    totalCases: 3
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const navigator = canvasElement.querySelector('ds-case-navigator');
    const searchBtn = navigator.shadowRoot.querySelector('.btn-case-search');
    await step('Verify search button expands input and sets accessible name', async () => {
      await userEvent.click(searchBtn);
      expect(navigator.getAttribute('search-expanded')).toBe('true');
      const input = navigator.shadowRoot.querySelector('.case-search-input');
      expect(input.getAttribute('aria-label')).toBe('Search cases');
    });
    await step('Type query to trigger autocomplete menu', async () => {
      const input = navigator.shadowRoot.querySelector('.case-search-input');
      await userEvent.type(input, 'cassi');
      const menu = navigator.shadowRoot.querySelector('.autocomplete-menu');
      expect(menu.classList.contains('visible')).toBe(true);
    });
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Navigator positioning at the first case study (\`currentIndex = 0\`), automatically disabling the Previous navigation button.'
      }
    }
  },
  args: {
    currentIndex: 0,
    totalCases: 3
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Navigator positioning at the final case study (\`currentIndex = totalCases - 1\`), automatically disabling the Next navigation button.'
      }
    }
  },
  args: {
    currentIndex: 2,
    totalCases: 3
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Single case setup (\`totalCases = 1\`), resulting in disabled states for both Previous and Next navigation controls.'
      }
    }
  },
  args: {
    currentIndex: 0,
    totalCases: 1
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the inline search input in its expanded state, hiding the adjacent navigation controls.'
      }
    }
  },
  args: {
    currentIndex: 1,
    totalCases: 3,
    searchExpanded: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows active search query filtering results displayed inside the floating autocomplete suggestions popover with term highlighting.'
      }
    }
  },
  args: {
    currentIndex: 1,
    totalCases: 3,
    searchExpanded: true,
    value: 'cassi'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Configures custom multi-key shortcut combinations (\`⌘ Cmd + f\`, \`⌘ Cmd + ←\`, \`⌘ Cmd + →\`) rendered inside action tooltips.'
      }
    }
  },
  args: {
    currentIndex: 1,
    totalCases: 3,
    kbdSearchLabel: '⌘ Cmd',
    kbdSearchShowPlus: true,
    kbdSearchKey: 'f',
    kbdPrevLabel: '⌘ Cmd',
    kbdPrevShowPlus: true,
    kbdPrevKey: '←',
    kbdNextLabel: '⌘ Cmd',
    kbdNextShowPlus: true,
    kbdNextKey: '→'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates customized localized text strings for action labels, input placeholders, tooltips, and keyboard shortcut keys.'
      }
    }
  },
  args: {
    currentIndex: 1,
    totalCases: 3,
    labelPrev: 'Anterior',
    labelNext: 'Próximo',
    placeholder: 'Buscar casos...',
    tooltipSearch: 'Buscar',
    tooltipCloseSearch: 'Fechar busca',
    tooltipPrev: 'Caso anterior',
    tooltipNext: 'Próximo caso',
    kbdSearchLabel: 'F',
    kbdCloseSearchLabel: 'X',
    kbdPrevLabel: 'A',
    kbdNextLabel: 'D'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Fully disabled component state where search input, navigation action buttons, and keyboard shortcut listeners are non-interactive.'
      }
    }
  },
  args: {
    currentIndex: 1,
    totalCases: 3,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Design token customizations using sub-atomic CSS custom properties (\`--ds-case-navigator-*\`) for background colors, borders, radius, and padding.'
      }
    }
  },
  args: {
    currentIndex: 1,
    totalCases: 3,
    customBg: '#101218',
    customBorderColor: '#2B71F0',
    customRadius: '12px',
    customPadding: '4px 16px'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Automated interaction test verifying focus management and keydown triggers (\`Space\` / \`Enter\`) on navigation controls.'
      }
    }
  },
  args: {
    currentIndex: 1,
    totalCases: 3
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const navigator = canvasElement.querySelector('ds-case-navigator');
    const btnNext = navigator.shadowRoot.querySelector('.btn-next-case');
    await step('Focus next button via Tab and activate via Space/Enter', async () => {
      if (btnNext.shadowRoot && btnNext.shadowRoot.querySelector('button')) {
        btnNext.shadowRoot.querySelector('button').focus();
      } else {
        btnNext.focus();
      }
      await userEvent.keyboard('[Space]');
      expect(navigator.getAttribute('current-index')).toBe('2');
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`FirstCaseDisabledPrev`,`LastCaseDisabledNext`,`SingleCaseBothDisabled`,`SearchExpanded`,`WithAutocompleteResults`,`MultiKeyShortcutCombos`,`CustomLocalization`,`Disabled`,`SubAtomicOverrides`,`KeyboardInteractionTest`]}));x();export{g as CustomLocalization,l as Default,_ as Disabled,u as FirstCaseDisabledPrev,y as KeyboardInteractionTest,d as LastCaseDisabledNext,h as MultiKeyShortcutCombos,p as SearchExpanded,f as SingleCaseBothDisabled,v as SubAtomicOverrides,m as WithAutocompleteResults,b as __namedExportsOrder,c as default,x as t};
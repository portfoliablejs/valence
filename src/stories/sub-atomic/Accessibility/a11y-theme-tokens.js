import accessibilityCss from './accessibility.css?raw';

const A11Y_THEME_SELECTOR_BY_MODE = {
  darkMode: 'html.a11y-dark-mode',
  highContrast: 'html.a11y-high-contrast',
  forcedColors: 'html.a11y-forced-colors'
};

function stripCssComments(cssText) {
  return String(cssText || '').replace(/\/\*[\s\S]*?\*\//g, '');
}

function extractCssBlock(cssText, selector) {
  const source = stripCssComments(cssText);
  const selectorPattern = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = source.match(new RegExp(`${selectorPattern}\\s*\\{([\\s\\S]*?)\\}`, 'm'));
  return match?.[1] || '';
}

function parseCssCustomProperties(blockText) {
  return String(blockText || '')
    .split(';')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .reduce((accumulator, entry) => {
      const separatorIndex = entry.indexOf(':');
      if (separatorIndex === -1) {
        return accumulator;
      }

      const propertyName = entry.slice(0, separatorIndex).trim();
      const propertyValue = entry.slice(separatorIndex + 1).trim();
      if (propertyName.startsWith('--') && propertyValue) {
        accumulator[propertyName] = propertyValue;
      }
      return accumulator;
    }, {});
}

function parseA11yThemeOverrides(cssText) {
  return Object.fromEntries(
    Object.entries(A11Y_THEME_SELECTOR_BY_MODE).map(([mode, selector]) => [
      mode,
      parseCssCustomProperties(extractCssBlock(cssText, selector))
    ])
  );
}

export const A11Y_THEME_OVERRIDES = parseA11yThemeOverrides(accessibilityCss);

export const A11Y_THEME_TOKEN_KEYS = [
  ...new Set(
    Object.values(A11Y_THEME_OVERRIDES).flatMap((overrideMap) => Object.keys(overrideMap || {}))
  )
];
/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  // 📄 Renames the auto-generated documentation tab/sidebar item from "Docs" to "Overview"
  docs: {
    autodocs: 'tag',
    defaultName: 'Overview',
  },

  features: {
    // 🚫 Completely removes the background feature/addon
    backgrounds: false,
  },

  "framework": "@storybook/web-components-vite"
};
export default config;
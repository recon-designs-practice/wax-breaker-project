import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    'storybook-addon-react-router-v6'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  refs: {
    'components': {
      title: 'Be-Ubiquitous',
      url: 'http://localhost:6002/'
    }
  },
  docs: {
    autodocs: true,
    defaultName: 'Docs'
  },
  staticDirs: ["../public"],
};
export default config;

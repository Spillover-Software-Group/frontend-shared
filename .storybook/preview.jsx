import { withThemeByClassName } from "@storybook/addon-themes";

import '../src/styles.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {},
    }
  },

  decorators: [
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],

  tags: ["autodocs"],
};

export default preview;

import defaultTheme from "tailwindcss/defaultTheme";
import tailwindAnimatePlugin from "tailwindcss-animate";
import racPlugin from "tailwindcss-react-aria-components";

import {
  isolateInsideOfContainer,
  scopedPreflightStyles
} from 'tailwindcss-scoped-preflight';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{js,jsx}'],
  important: '.sfs-isolate',
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        spillover: {
          100: '#D28078',
          200: '#C86A63',
          300: '#BE544E',
          400: '#B33C38',
          500: '#A71E22',
          600: '#91191C',
          700: '#7B1316',
          800: '#660E11',
          900: '#52090B',
        }
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        title: ["Roboto Condensed", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.6rem", { lineHeight: "1" }],
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "3xl": ["1.88rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [
    scopedPreflightStyles({ isolationStrategy: isolateInsideOfContainer('.sfs-isolate') }),
    racPlugin,
    tailwindAnimatePlugin
  ],
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
import cls from "./src/helpers/cls";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        cabinet: ["var(--font-cabinet)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        17: 68,
      },
      colors: {
        "base-border-color": colors.black,
        text: {
          headline: "#fff",
          DEFAULT: "#fff",
          disabled: "#c3c5c4",
        },
        "primary-bg": {
          DEFAULT: "#3e3e42",
          50: "#EDEDEE",
          100: "#D8D8DA",
          200: "#B0B0B5",
          300: "#898990",
          400: "#636369",
          500: "#3E3E42",
          600: "#313135",
          700: "#252527",
          800: "#19191A",
          900: "#0C0C0D",
          950: "#070708",
        },
        primary: {
          50: "#E2F3FD",
          100: "#C5E8FC",
          200: "#8BD0F9",
          300: "#4CB7F5",
          400: "#12A0F2",
          500: "#0A7BBD",
          DEFAULT: "#0A7BBD",
          600: "#086296",
          700: "#06496F",
          800: "#04334D",
          900: "#021927",
          950: "#010D13",
        },
        secondary: {
          50: "#F4FAFD",
          100: "#E9F4FB",
          200: "#C7E5F5",
          300: "#A6D5EF",
          400: "#63B5E3",
          500: "#2095D7",
          DEFAULT: "#2095D7",
          600: "#1D86C2",
          700: "#135981",
          800: "#0E4361",
          900: "#0A2D41",
        },
      },
      width: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      height: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      minWidth: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      minHeight: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    ({ addBase }) => {
      addBase({
        ".border-base": {
          [`@apply ${cls("border-2 border-base-border-color")} !important`]: {},
        },
        ".border-base-t": {
          [`@apply ${cls("border-base-border-color border-t-2")} !important`]: {},
        },
        ".border-base-r": {
          [`@apply ${cls("border-base-border-color border-r-2")} !important`]: {},
        },
        ".border-base-b": {
          [`@apply ${cls("border-base-border-color border-b-2")} !important`]: {},
        },
        ".border-base-l": {
          [`@apply ${cls("border-base-border-color border-l-2")} !important`]: {},
        },
        ".container": {
          [`@apply ${cls("px-6 py-28 mx-auto max-w-7xl", "xs:px-12")} !important`]: {},
        },
      });
    },
  ],
  important: true,
};

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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        17: 68,
      },
      colors: {
        "base-border-color": colors.black,
        text: {
          headline: "#1D1D1D",
          DEFAULT: "#1D1D1D",
          disabled: "#c3c5c4",
        },
        primaryBg: {
          DEFAULT: "#e3e3ff",
        },
        primary: {
          50: "#F4F7FC",
          100: "#E8EEFA",
          200: "#C6D5F2",
          300: "#A3BBEB",
          400: "#5F89DB",
          500: "#1A56CC",
          DEFAULT: "#7575c8",
          600: "#174DB8",
          700: "#10347A",
          800: "#0C275C",
          900: "#081A3D",
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
          [`@apply ${cls("border-base-border-color border-t-2")} !important`]:
            {},
        },
        ".border-base-r": {
          [`@apply ${cls("border-base-border-color border-r-2")} !important`]:
            {},
        },
        ".border-base-b": {
          [`@apply ${cls("border-base-border-color border-b-2")} !important`]:
            {},
        },
        ".border-base-l": {
          [`@apply ${cls("border-base-border-color border-l-2")} !important`]:
            {},
        },
        ".container": {
          [`@apply ${cls(
            "px-6 py-28 mx-auto max-w-7xl",
            "xs:px-12"
          )} !important`]: {},
        },
      });
    },
  ],
  important: true,
};

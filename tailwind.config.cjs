const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}", "./public/**/*.html"],
  theme: {
    screens: {
      print: { raw: "print" },
      sm: "640px",
      md: "833px",
      lg: "1080px",
    },
    extend: {
      fontFamily: {
        jost: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "0.65rem",
        sm: "0.75rem",
        base: "0.85rem",
        md: "0.9375rem",
        lg: "1.0625rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "2.75rem",
      },
      lineHeight: {
        snug: "1.35",
      },
      maxWidth: {
        letter: "66rem",
      },
      height: {
        letter: "85.9375rem",
      },
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#dbe4ff",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a5f",
        },
        gray: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },
    },
  },
  plugins: [],
};

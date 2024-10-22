import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        "background-dark": "var(--background-dark)",
        "background-secondary": "var(--background-secondary)",
        "background-secondary-dark": "var(--background-secondary-dark)",
        primary: "var(--foreground)",
        "primary-dark": "var(--foreground-dark)",
        secondary: "var(--foreground-secondary)",
        "secondary-dark": "var(--foreground-secondary-dark)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      keyframes: {
        popout: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        fadein: {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        popout: "popout 0.4s 0.6s ease backwards",
        fadein: "fadein .6s both",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
export default config;

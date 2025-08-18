import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/assets/css/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Roboto", "sans-serif"],
      },
      colors: {
        //? Primary brand colors
        primary: "#0070f3",
        secondary: "#ff4081",
        accent: "#f5a623",

        //? Status colors
        success: "#4caf50",
        warning: "#ffc107",
        error: "#f44336",

        //? Neutral grays
        "light-gray": "#f6f6f6",
        "dark-gray": "#333333",

        //? Custom portfolio colors
        onyx: "#2b2b2b",
        jet: "#383838",
        "eerie-black-1": "#212121",
        "eerie-black-2": "#1f1f1f",
        "smoky-black": "#121212",
        "white-1": "#ffffff",
        "white-2": "#fafafa",

        //? Accent colors
        highlight: "#2ecc71", //? Main highlight color
        "highlight-50": "#e8f8f0",
        "highlight-100": "#d1f2e1",
        "highlight-200": "#a3e5c3",
        "highlight-300": "#75d8a5",
        "highlight-400": "#47cb87",
        "highlight-500": "#2ecc71", //? Main highlight
        "highlight-600": "#25a35a",
        "highlight-700": "#1c7a43",
        "highlight-800": "#13512c",
        "highlight-900": "#0a2815",
        "light-gray-70": "#d6d6d6",
        "bittersweet-shimmer": "#d63384",

        //? Transparent colors for overlays and shadows
        "black-10": "rgba(0, 0, 0, 0.1)",
        "black-15": "rgba(0, 0, 0, 0.15)",
        "black-25": "rgba(0, 0, 0, 0.25)",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-75": "rgba(0, 0, 0, 0.75)",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-11": "rgba(255, 255, 255, 0.11)",
        "white-15": "rgba(255, 255, 255, 0.15)",

        //? Dark text color from globals.css
        "text-dark": "rgb(17, 24, 39)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

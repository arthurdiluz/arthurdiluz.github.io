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
      screens: {
        xs: "450px",
        sm: "580px",
        md: "768px",
        lg: "1024px",
        xl: "1250px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        jet: "#383838",
        onyx: "#2b2b2b",
        "eerie-black-1": "#212121",
        "eerie-black-2": "#1f1f1f",
        "smoky-black": "#121212",
        "white-1": "#ffffff",
        "white-2": "#fafafa",
        highlight: "#2ecc71",
        "highlight-dark": "#25a35a",
        "light-gray": "#d6d6d6",
        "light-gray-70": "rgba(214, 214, 214, 0.7)",
        "bittersweet-shimmer": "#d63384",
        "black-10": "rgba(0, 0, 0, 0.1)",
        "black-15": "rgba(0, 0, 0, 0.15)",
        "black-25": "rgba(0, 0, 0, 0.25)",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-75": "rgba(0, 0, 0, 0.75)",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-11": "rgba(255, 255, 255, 0.11)",
        "white-15": "rgba(255, 255, 255, 0.15)",
      },
      backgroundImage: {
        "gradient-onyx": "linear-gradient(to bottom right, #404040 3%, #303030 97%)",
        "gradient-jet":
          "linear-gradient(135deg, rgba(43,43,43,0.251) 0%, rgba(28,28,28,0) 100%), #212121",
        "gradient-highlight-1":
          "linear-gradient(135deg, #2ecc71 0%, rgba(46,204,113,0) 50%)",
        "gradient-highlight-2":
          "linear-gradient(135deg, rgba(46,204,113,0.251) 0%, rgba(46,204,113,0) 59.86%), #212121",
        "border-gradient-onyx":
          "linear-gradient(to bottom right, #404040 0%, rgba(64, 64, 64, 0) 50%)",
        "text-gradient-highlight": "linear-gradient(to right, #2ecc71, #25a35a)",
      },
      boxShadow: {
        1: "-4px 8px 24px rgba(0, 0, 0, 0.25)",
        2: "0 16px 30px rgba(0, 0, 0, 0.25)",
        3: "0 16px 40px rgba(0, 0, 0, 0.25)",
        4: "0 25px 50px rgba(0, 0, 0, 0.15)",
        5: "0 24px 80px rgba(0, 0, 0, 0.25)",
      },
      transitionDuration: {
        250: "250ms",
        500: "500ms",
      },
      transitionTimingFunction: {
        standard: "ease",
        "in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;

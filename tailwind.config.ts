import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { barlow: ["Barlow Condensed", "sans-serif"] },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        wibu: {
          50: "#fbaf23",
          100: "#fbb83b",
          200: "#dc2626",
          300: "#0ea5e9",
          400: "#020617",
          500: "#3b82f6",
          600: "#007aff",
          700: "#111827",
        },
      },
      screens: {
        "responsive-2xl": "1800px",
        // => @media (min-width: 640px) { ... }
        "responsive-xl": "1500px",
        // => @media (min-width: 640px) { ... }
        "responsive-lg": "1280px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;

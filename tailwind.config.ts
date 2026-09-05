import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f8fc",
          100: "#dceef7",
          200: "#b3daee",
          300: "#86c4e4",
          400: "#53abd9",
          500: "#2a98d0",
          600: "#0284c7",
          700: "#026ca3",
          800: "#015783",
          900: "#014567",
        },
        accent: {
          50: "#f0f9f8",
          100: "#ddf0ee",
          200: "#b6dfdb",
          300: "#8bccc6",
          400: "#5ab6ae",
          500: "#34a59b",
          600: "#0d9488",
          700: "#0b7970",
          800: "#09625a",
          900: "#074d47",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Cambria", "Georgia", "serif"],
      },
      boxShadow: {
        "glow-brand": "0 0 36px -6px rgba(2,132,199,0.5)",
        "glow-accent": "0 0 32px -6px rgba(13,148,136,0.45)",
        "glow-green": "0 0 30px -6px rgba(22,163,74,0.45)",
        "glow-red": "0 0 30px -6px rgba(220,38,38,0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

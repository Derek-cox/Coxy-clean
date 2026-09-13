import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy, pulled from the mascot's leggings in logo-full.png.
        brand: {
          50: "#f2f5fa",
          100: "#e3e9f4",
          200: "#c4d0e6",
          300: "#9aadd3",
          400: "#6a83b8",
          500: "#47609c",
          600: "#334a80",
          700: "#283a66",
          800: "#1d2b4d",
          900: "#141e38",
          950: "#0c1425",
        },
        // Gold, pulled from the mascot's gloves and apron.
        accent: {
          50: "#fdf9ec",
          100: "#faf0cd",
          200: "#f4df97",
          300: "#edc95a",
          400: "#e7b42e",
          500: "#d99d17",
          600: "#bd7d12",
          700: "#975c13",
          800: "#7c4a17",
          900: "#683e18",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Cambria", "Georgia", "serif"],
      },
      boxShadow: {
        "glow-brand": "0 18px 40px -18px rgba(29,43,77,0.55)",
        "glow-gold": "0 18px 40px -16px rgba(231,180,46,0.55)",
        lift: "0 22px 45px -22px rgba(20,30,56,0.45)",
        tile: "0 2px 10px -4px rgba(20,30,56,0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

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
          50: "#f2f2f4",
          100: "#e1e0e5",
          200: "#bebdc8",
          300: "#9895a6",
          400: "#6d6981",
          500: "#4a4564",
          600: "#282246",
          700: "#211c39",
          800: "#1a162e",
          900: "#151224",
        },
        accent: {
          50: "#fefbf0",
          100: "#fcf5db",
          200: "#f8eab2",
          300: "#f4dd85",
          400: "#efcf52",
          500: "#ecc329",
          600: "#e8b800",
          700: "#be9700",
          800: "#997900",
          900: "#796000",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
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

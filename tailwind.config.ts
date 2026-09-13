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
        // Italian flag green (#008C45 at 600) — the primary. Carries
        // buttons, links, icon accents, dark sections, and heading ink.
        brand: {
          50: "#edf7f1",
          100: "#d4ecdf",
          200: "#a9d9bf",
          300: "#75c199",
          400: "#42a673",
          500: "#1a8f57",
          600: "#008c45",
          700: "#00713a",
          800: "#045c31",
          900: "#064a29",
          950: "#032b18",
        },
        // Italian flag red (#CD212A at 600) — the supporting accent. Used
        // in small doses: eyebrows, badges, stars, and CTAs on green.
        accent: {
          50: "#fdf3f3",
          100: "#fbe3e4",
          200: "#f6c5c8",
          300: "#ef989e",
          400: "#e5636b",
          500: "#d93b45",
          600: "#cd212a",
          700: "#ac1a22",
          800: "#8d181e",
          900: "#76181d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Cambria", "Georgia", "serif"],
      },
      boxShadow: {
        "glow-brand": "0 18px 40px -18px rgba(4,92,49,0.55)",
        "glow-accent": "0 18px 40px -16px rgba(205,33,42,0.45)",
        lift: "0 22px 45px -22px rgba(3,43,24,0.42)",
        tile: "0 2px 10px -4px rgba(3,43,24,0.18)",
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

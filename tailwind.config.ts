import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)"
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(15, 23, 42, 0.45)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;

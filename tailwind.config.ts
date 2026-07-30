import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          primary: "#2E7D32",
          dark: "#1B5E20",
          accent: "#F9A825",
          bg: "#F8FAF8",
          text: "#212121",
          light: "#E8F5E9",
          border: "#E0E0E0",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(46, 125, 50, 0.08)",
        "glass-hover": "0 12px 40px 0 rgba(46, 125, 50, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
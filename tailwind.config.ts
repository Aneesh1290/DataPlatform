import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forsythia: "var(--color-forsythia)",
        nocturnal: "var(--color-nocturnal)",
        arctic: "var(--color-arctic)",
        "mystic-mint": "var(--color-mystic-mint)",
        "deep-saffron": "var(--color-deep-saffron)",
        "oceanic-noir": "var(--color-oceanic-noir)",
      },
      fontFamily: {
        "jetbrains-mono": ["var(--font-jetbrains-mono)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;

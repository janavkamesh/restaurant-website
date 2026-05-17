import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: "#FAFAF7",
        banana: "#F2E8D6",
        mint: "#EAF3EE",
        curry: "#2A5C3F",
        forest: "#1A2E1E",
        gold: "#D4A853",
        chilli: "#7A3520",
        sage: "#4A6B52",
        "sage-light": "#B8C9BC",
        border: "#E2D9C6",
        veg: "#2A5C3F",
        nonveg: "#7A3520",
        whatsapp: "#25D366",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        space: ["var(--font-space)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

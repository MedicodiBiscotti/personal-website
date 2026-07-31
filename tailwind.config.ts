import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
// @ts-ignore
import heropatternsPlugin from "tailwindcss-hero-patterns";
// @ts-ignore
import heropatterns from "tailwindcss-hero-patterns/src/patterns";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    heroPatterns: {
      topography: heropatterns.topography,
    },
    heroPatternsShades: ["200", "900"],
    heroPatternsColors: ["pink"],
    heroPatternsOpacities: ["25"],
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono Regular", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [typography, heropatternsPlugin],
};
export default config;

import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        italic: ["Inter Variable Italic", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono Regular", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [typography],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-10vh)", opacity: "1" },
          "100%": { transform: "translateY(110vh)", opacity: "0" },
        },
      },
      animation: {
        fall: "fall var(--fall-duration, 3s) linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;

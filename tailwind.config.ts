import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bbb)",
        foreground: "var(--fff)",
      },
      screens: {
        xs: '420px',
        sm: '576px',
        md: '768px',
        lg: '910px',
        xl: '1024px'
      },
    },
  },
  plugins: [],
} satisfies Config;

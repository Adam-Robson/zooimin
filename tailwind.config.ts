import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'blue-50': '#eff6ff',
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

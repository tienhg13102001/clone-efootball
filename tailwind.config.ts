import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tenada: ["Tenada"],
        GmarketSans: ["GmarketSans"],
      },
      dropShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 1)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 1)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xxs: "390px",
        xs: "430px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "32px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config

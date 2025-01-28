import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "320px", // Custom screen untuk mobile
      sm: "640px",
      md: "768px",
      tablet: "1024px", // Tambahkan ukuran kustom "tablet"
      lg: "1280px", // Kembalikan default lg
      xl: "1536px",
    },
    extend: {
      colors: {
        theme: {
          orange: "#E29123",
          red: "#D42F04",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

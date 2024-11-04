import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#ADD8E6',
        'brand-green': '#008000',
        'brand-white': '#FFFFFF',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      fontFamily: {
        arabic: ["var(--font-arabic)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config;

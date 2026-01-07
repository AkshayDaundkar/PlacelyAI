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
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ['v-sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        bold: ['"GT Walsheim"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'gradient-blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-orange-red': 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
        'gradient-green-blue': 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f97316 0%, #3b82f6 100%)',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
        'gradient': '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08)',
        'gradient-hover': '0 12px 40px rgba(0, 0, 0, 0.16), 0 6px 16px rgba(0, 0, 0, 0.12)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
export default config;


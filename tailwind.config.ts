import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81"
        }
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(60% 60% at 50% 10%, rgba(99,102,241,0.25) 0%, rgba(16,185,129,0.15) 40%, rgba(15,23,42,0) 70%)"
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "text-slide": {
          "0%, 16%": { transform: "translateY(0%)" },
          "20%, 36%": { transform: "translateY(-16.66%)" },
          "40%, 56%": { transform: "translateY(-33.33%)" },
          "60%, 76%": { transform: "translateY(-50%)" },
          "80%, 96%": { transform: "translateY(-66.66%)" },
          "100%": { transform: "translateY(-83.33%)" },
        },
      },
      animation: {
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

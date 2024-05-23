import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 4s infinite",
      },
    },
    keyframes: {
      blob: {
        "0%": {
          transform: scale(1),
        },
        "33%": {
          transform: scale(1.2),
        },
        "66%": {
          transform: scale(0.8),
        },
        "100%": {
          transform: scale(1),
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

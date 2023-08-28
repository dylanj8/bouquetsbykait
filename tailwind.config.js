/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        alex: ["Alex Brush", "cursive"],
      },
      colors: {
        "main-color": "#dabc94",
      },
    },
  },
  plugins: [],
};

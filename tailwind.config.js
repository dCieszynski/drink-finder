/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        castoro: ["Castoro", "serif"],
        "castoro-titling": ["Castoro Titling, cursive"],
      },
      colors: {
        "background-from": "#511c7b",
        "background-to": "#003c68",
        dark: "#222222",
        "active-yellow": "#f8cb5a",
      },
    },
  },
  plugins: [],
};

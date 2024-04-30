/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [ "light", "sunset"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
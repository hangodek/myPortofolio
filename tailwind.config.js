/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animationDuration: {
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
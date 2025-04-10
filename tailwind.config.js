/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

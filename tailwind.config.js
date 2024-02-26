/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      pink: "#fdf2f8",
      rose: "#ffe4e6",
      fuchisa: "#FDE2EC",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      // pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      red: "#fee2e2",
      white: "#f8fafc",
      greentwo: "#15803d",
      black: "#020617",
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};

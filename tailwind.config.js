/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: {
        "angular": "#d2002f",
        "bootstrap": "#6e10ea",
        "react": "#5ccfee",
        "nodejs": "#81b640",
        "tailwind": "#35b3eb",
        "mysql": "#1c4863",
      },
      backgroundImage: {
        "cardGradient": "linear-gradient(to bottom, transparent, #000)",
      },
      borderColor: {
        "selectedCard": "#FF3D00"
      }
    },
  },
  plugins: [],
}

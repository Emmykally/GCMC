/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#6495ED",
        secondary: "#FFD700",
        tertiary: "#A58CFF",
        beta: "#808080",
        sponsor: "#F5F5F5",
        dark: "#FF5733"
      }
    },
  },
  plugins: [],
}


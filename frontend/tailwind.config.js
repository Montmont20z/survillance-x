/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        source: ["Source Code Pro", 'sans-serif'],
        lato: ["Lato", 'sans-serif'],
        inter: ["Inter", 'mono'],
      },
    },
  },
  plugins: [],
}


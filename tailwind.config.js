/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'blue' : {
          500 :  "#543EE0"

        }
      }
    },
  },
  plugins: [],
}


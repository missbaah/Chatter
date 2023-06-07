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

        },
        'black' : {
          100 : "#D0D0D0",
          400 : "#626262",
          500 : "#000000",
        }
      }
    },
  },
  plugins: [],
}


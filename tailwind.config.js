/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"]
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0,0,0,1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
      }
    },
  },
  plugins: [],
}


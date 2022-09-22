/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(1vw)' },
          '100%': { transform: 'translateX(1vw)' }
        },
      },
      animation: {
        'slide-right': 'slide 3s',
      },
    },
  },
  plugins: [require("daisyui")],
}

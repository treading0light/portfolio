/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0)' }
        },
      },
      animation: {
        'slide-right': 'slide 3s ease-in-out',
      },
    },
  },
  plugins: [require("daisyui")],
}

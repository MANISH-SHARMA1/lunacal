/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": "inset 0px 4.96px 12.4px 2.48px #00000040",
        "custom-1": "4px 5px 30px 5px rgba(16, 18, 19, 1)",
        "custom-2": "-5px -3px 30px -10px rgba(150, 190, 231, 1)",
        "custom-3": "13.49px 16.87px 67.47px 8.43px rgba(10, 10, 10, 1)",
        "custom-4": "-8.43px -16.87px 50.6px -16.87px rgba(72, 91, 113, 1)",
        "custom-5": "5.67px 5.67px 3.78px 0px rgba(0, 0, 0, 0.4)",
      },
      gap: {
        "custom-105": "105px",
        "custom-1.38": "1.38px",
      },
    },
  },
  plugins: [],
};

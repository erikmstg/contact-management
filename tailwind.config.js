/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fill: {
        icon: "#8083A3",
      },
      colors: {
        gray: {
          primary: "#8083A3",
        },
      },
    },
  },
  plugins: [
    function plugin({ addUtilities }) {
      const utilities = {
        ".bg-primary": { "background-color": "#FAF9FF" },
      };
      addUtilities(utilities);
    },
  ],
};

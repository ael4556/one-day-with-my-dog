/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Thai Looped", "sans-serif"],
      },
      /*fontFamily: {
        mali: ["Mali", "regular"],
      },*/
    },
  },
  plugins: [],
};

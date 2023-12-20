/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-1": "url('/Images/cover.jpg')",
        "cover-2": "url('/Images/cover2.jpg')",
      },
    },
  },
  plugins: [],
};

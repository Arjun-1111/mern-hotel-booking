/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "5rem",
      },
    },
  },
  plugins: [],
};

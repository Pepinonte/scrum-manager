/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        "5px": "5px",
        "50px": "50px",
        "100px": "100px",
        "200px": "200px",
      },
      brightness: {
        15: ".15",
        25: ".25",
        175: "1.75",
      },
    },
  },
  plugins: [],
};

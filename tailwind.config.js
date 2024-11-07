/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0e0927",
        "custom-violet": "#0d0921",
      },
      padding: {
        "9/16": "56.25%", // 16:9 aspect ratio
      },
    },
  },
  plugins: [],
};

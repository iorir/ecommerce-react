/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        "128": "40rem",
      },
      maxHeight:{
        "130":"45rem",
      }
      
    },
  },
  plugins: [],
};

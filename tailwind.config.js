/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "login-pink": "#F6609A",
        "faint-pink": "#FFA2C6",
      },
      fontFamily: {
        SB: ["SBaggroL"],
      },
    },
  },
  plugins: [],
};

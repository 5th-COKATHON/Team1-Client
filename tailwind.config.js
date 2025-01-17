/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "login-pink": "#F6609A",
        "faint-pink": "#FFA2C6",
        "create-sky": "#DDF0FB",
      },
      fontFamily: {
        SB: ["SBaggroL"],
        Pretendard: ["Pretendard-Bold"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          to: { opacity: '0' },
        },
      },
      animation: {
        typing: 'blink 1s infinite',
      },
      colors: {
        "login-pink": "#F6609A",
        "faint-pink": "#FFA2C6",
        "devil-purple": "#7C3BF6",
      },
      fontFamily: {
        SB: ["SBaggroL"],
      },
    },
  },
  plugins: [],
};

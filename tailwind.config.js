/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mdCustom': '765px',
      },
      keyframes: {
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        unwarp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        flipXReverse: {
          '0%': { transform: 'rotateX(-50deg)' },
          '20%': { transform: 'rotateX(90deg)' },
          '50%': { transform: 'rotateX(-180deg)' },
          '100%': { transform: 'rotateX(90deg)' },
        },
      },
      animation: {
        fadeInSlow: "fadeInSlow 2.5s ease forwards",
        unwarp: "unwarp 2.5s ease forwards",
        'flip-x-reverse': 'flipXReverse 2s ease-in-out backwards',
      },
      transformOrigin: {
        'bottom-center': 'bottom center',
      },
    },
  },
  plugins: [],
}

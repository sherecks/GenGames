/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Georgia"'],
      },
      width: {
        '128': '36rem',
        '132': '62rem',
      }
    },
  },
  plugins: [],
}


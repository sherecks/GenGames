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
      },
      colors: {
        cor1: '#171a21',
        cor2: '#66c0f4',
        cor3: '#1b2838',
        cor4: '#2a475e',
        cor5: '#c7d5e0',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}


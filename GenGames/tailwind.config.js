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
        '62': '28rem',
        '64': '32rem',
        '68': '40rem',
        '132': '62rem',
      },
      colors: {
        cor1: '#33aa83',
        cor2: '#4ebf9c',
        cor3: '#69d5b4',
        cor4: '#000000',
        cor5: '#41e9ae',
      },
      backgroundImage: {
        'back': "url('./back.jpg')",
      },
    },
  },
  plugins: [],
}


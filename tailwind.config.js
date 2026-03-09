/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: '#1d4ed8',
        accent:  '#d97706',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        grow: 'grow 0.8s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        grow: {
          from: { transform: 'scaleY(0)' },
          to:   { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};

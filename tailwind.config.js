/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        indigo: {
          50: '#e0f7ff',
          100: '#b3ebff',
          200: '#80deff',
          300: '#4dd0ff',
          400: '#1ac5ff',
          500: '#00bfff',
          600: '#00a8e6',
          700: '#008fcc',
          800: '#0076b3',
          900: '#005c99',
        },
      },
    },
  },
  plugins: [],
};

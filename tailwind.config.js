/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#8B1A1A',
          dark: '#6B0F0F',
          light: '#A0200F',
        },
        gold: {
          DEFAULT: '#C9920A',
          light: '#F5E6C0',
          pale: '#f5d77e',
        },
        cream: '#FFF8EE',
        'brand-dark': '#1A0A00',
        'brand-text': '#3D2200',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050816',
        'background-secondary': '#100d25',
        'text-primary': '#f1f5f9',
        'text-secondary': '#aaa6c3',
        accent: '#38bdf8',
        'accent-hover': '#0ea5e9',
        'card-bg': 'rgba(20, 18, 42, 0.8)',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'card': '0px 35px 120px -15px #211e35',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
      }
    }
  },
  plugins: [],
}

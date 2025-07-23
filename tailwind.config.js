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
        'dark-bg': '#111827',
        'dark-secondary': '#1f2937',
        'text-light': '#f0fdfa',
        'text-gray': '#9ca3af',
        'accent': '#2dd4bf',
        'accent-dark': '#0d9488'
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}

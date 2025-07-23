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
        background: '#0f172a',
        'background-secondary': '#1e293b',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        accent: '#2dd4bf',
        'accent-hover': '#5eead4',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: [],
}

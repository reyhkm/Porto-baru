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
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'card': '0px 35px 120px -15px #211e35',
        'accent': '0 0 25px #38bdf8, 0 0 50px #38bdf8',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
      animation: {
        'aurora': 'aurora 20s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      }
    }
  },
  plugins: [],
}

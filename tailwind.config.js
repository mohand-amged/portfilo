/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['var(--font-pixel)', 'monospace'],
        'primary': ['var(--font-primary)', 'sans-serif'],
        'secondary': ['var(--font-secondary)', 'sans-serif'],
      },
      colors: {
        'main': '#000000',
      },
      animation: {
        'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'grid-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
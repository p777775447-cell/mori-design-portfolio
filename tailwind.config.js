/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['"Noto Serif TC"', '"Playfair Display"', 'serif'],
      },
      colors: {
        mori: {
          light: '#F9F9F7', // Warm beige background
          dark: '#1a1a1a',  // Dark charcoal footer
          text: '#333333',  // Dark gray body text
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          800: '#292524',
          900: '#1c1917',
        }
      },
      letterSpacing: {
        widest: '.2em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
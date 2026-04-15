/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kasturi: {
          green: '#0A3622',     // Deep Indian Green
          yellow: '#FFC72C',    // Haldi Yellow
          pink: '#E83E8C',      // Gulabi Pink
          cream: '#FFF9F0',     // Warm Cream
          dark: '#041F13',      // Dark text
          lightGreen: '#134E34',
        }
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite', // Slowed down by ~30% (was 25s)
        'marquee-slow': 'marquee 52s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}

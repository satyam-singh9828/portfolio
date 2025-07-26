/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(20) 1 normal both',
        slideInUp: 'slideInUp 0.6s ease-out',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '20ch' },
        },
        slideInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

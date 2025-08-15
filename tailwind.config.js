/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          600: '#3B82F6',
          700: '#2563EB',
        },
        highlight: '#FACC15',
        text: '#0F172A',
        muted: '#475569',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'lg': 'var(--r-lg)',
      },
    },
  },
  plugins: [],
} 
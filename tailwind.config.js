/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0b0a',
        paper: '#f6f1e9',
        paperDeep: '#efe8db',
        ember: '#ff4200',
      },
      fontFamily: {
        brand: ["'Garamond Narrow'", 'Georgia', 'serif'],
        display: ["'Garamond Narrow'", 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

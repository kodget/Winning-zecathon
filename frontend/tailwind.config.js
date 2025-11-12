/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pulse-navy': 'var(--pulse-navy)',
        'pulse-teal': 'var(--pulse-teal)',
        'pulse-cyan': 'var(--pulse-cyan)',
        'pulse-pink': 'var(--pulse-pink)',
        'pulse-red': 'var(--pulse-red)',
        'pulse-dark': 'var(--pulse-dark)',
        'pulse-light': 'var(--pulse-light)',
        'primary': '#0A2540',
        'accent-green': '#00D09C',
        'neutral-light': '#F6F9FC',
        'neutral-dark': '#6B7C93',
        'background-light': '#FFFFFF',
        'background-dark': '#131a1f',
        'pulse-green': '#00B050',
        'pulse-neutral-light': '#F0F2F5',
        'pulse-neutral-dark': '#E1E3E6',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'lift': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Theme-aware colors. Values live in src/index.css and swap in dark mode.
      colors: {
        ink: token('ink'),
        paper: token('paper'),
        'paper-alt': token('paper-alt'),
        'paper-soft': token('paper-soft'),
        card: token('card'),
        body: token('body'),
        muted: token('muted'),
        faint: token('faint'),
        chip: token('chip'),
        accent: token('accent'),
        lime: '#d7f264',
        'lime-dark': '#c7e64b',
        night: '#181818',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};

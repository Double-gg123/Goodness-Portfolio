/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Theme-aware colors. Values live in src/index.css; dark is the default theme.
      colors: {
        ink: token('ink'),
        paper: token('paper'),
        'paper-alt': token('paper-alt'),
        card: token('card'),
        line: token('line'),
        body: token('body'),
        muted: token('muted'),
        faint: token('faint'),
        accent: token('accent'),
        'on-accent': token('on-accent'),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        sans: ['"Bricolage Grotesque Variable"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

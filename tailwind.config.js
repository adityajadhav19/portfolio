/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#12181C',
        inksoft: '#1B2328',
        paper: '#F1ECE1',
        paperdim: '#E7E0D0',
        amber: '#E3A63E',
        trace: '#4C8CFF',
        slate: '#8B96A0',
        slatedark: '#5B6670',
        line: 'rgba(241,236,225,0.14)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

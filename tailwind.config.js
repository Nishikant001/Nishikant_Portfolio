// tailwind.config.js
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stage: '#0b0910',
        surface: '#08070c',
        'surface-2': '#100d18',
        'ink-muted': '#a39eb3',
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Archivo Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}

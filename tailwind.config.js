/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { navy: '#102B3F', teal: '#176B68', ivory: '#F8F7F2', sage: '#DCE9E3', gold: '#C5A675', slate: '#52616B' },
    fontFamily: { serif: ['DM Serif Display', 'serif'], sans: ['DM Sans', 'sans-serif'] }
  }},
  plugins: []
}
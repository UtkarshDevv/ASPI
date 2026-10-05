/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:    '#FAF7F2',
        sand:     '#F0EBE3',
        linen:    '#E8E2D8',
        clay:     '#C2A88C',
        terracotta: '#B5795A',
        walnut:   '#5C4A3A',
        charcoal: '#2E2A23',
        espresso: '#1E1B16',
      },
      fontFamily: {
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

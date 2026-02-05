/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta del logo Pukadog: beige cálido + gris oscuro
        pukadog: {
          beige: '#F5EFE1',
          beigeDark: '#E8E0D0',
          beigeLight: '#FAF7F2',
          ink: '#333333',
          inkLight: '#555555',
          inkMuted: '#6B6B6B',
        },
        primary: {
          50: '#F5EFE1',
          100: '#E8E0D0',
          200: '#D4C9B0',
          300: '#333333',
          400: '#2d2d2d',
          500: '#333333',
          600: '#2d2d2d',
          700: '#1a1a1a',
          800: '#1a1a1a',
          900: '#0d0d0d',
        },
        secondary: {
          50: '#F5EFE1',
          100: '#E8E0D0',
          200: '#D4C9B0',
          300: '#333333',
          400: '#2d2d2d',
          500: '#333333',
          600: '#2d2d2d',
          700: '#1a1a1a',
          800: '#1a1a1a',
          900: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

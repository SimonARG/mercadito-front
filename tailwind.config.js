/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{vue,js}',
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
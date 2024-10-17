/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black' :' hsl(199, 35%, 19%)',
        'blue':  'hsl(178, 60%, 48%)',
        'yellow' :' hsl(39, 100%, 69%)',
      },
      boxShadow: {
        'custom': '-1px 3px 26px 3px #42445a',
      },
    },
  },
  plugins: [],
}

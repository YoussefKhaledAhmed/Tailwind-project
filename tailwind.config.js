/** @type {import('tailwindcss').Config} */
module.exports = {
  /* path: places where the tailwind classes are used */
  content: [
    "./src/**/*.{js,html}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container:{
      center: true
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@designbycode/tailwindcss-text-shadow')({
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowBlur: '1px',
      shadowOffsetX: '.5px',
      shadowOffsetY: '.5px',
  }),
  flowbite.plugin(),
  ],
}

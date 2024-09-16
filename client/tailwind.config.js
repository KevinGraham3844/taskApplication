/* eslint-disable quotes */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@designbycode/tailwindcss-text-shadow')({
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowBlur: "1px",
      shadowOffsetX: ".5px",
      shadowOffsetY: ".5px",
  }),
  ],
};

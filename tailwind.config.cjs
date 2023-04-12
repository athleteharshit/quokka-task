/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        story: "url('/assets/images/bg-story.jpg')",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        coco: ['cocogoose', 'sans-serif'],
        // sans: ['cocogoose', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

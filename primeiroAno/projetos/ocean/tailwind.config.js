const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        image1: "url('/img/problema.jpg')",
        image2: "url('/img/turtle.jpg')",
        image3: "url('/img/solucao.jpg')",
        image4: "url('/img/referencias.jpg')",
      },
    },
    colors: {
      verdePrimario: '#3CC7DA',
      verdeSecundario: '#0A2A33',
      branco: '#fff',
    },
    container: {
      center: true,
      padding: 'auto',
    },
  },

  darkMode: 'class',
  plugins: [nextui({ addCommonColors: true })],
};

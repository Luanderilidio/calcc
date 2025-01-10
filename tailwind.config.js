/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Anton: ["Anton"],
        Roboto: ["Roboto"],
        Inter: ["Inter"],
        Montserrat: ["Montserrat"],
      },
    },
    extend: {
      backgroundImage: {
        'imagem1': "url('../Assets/unemat.jpg')",
      },
    },
  },
 
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:'Titillium Web, sans-serif',
      },

      backgroundImage:{
        modelo: "url('https://i.imgur.com/ftECh3G.png')"
      },
      colors:{
        black:{
          700:'#353535',

        },
        white:{
          900:'#FFFFFF',
          700:'#EFEFEF'
        },
        yellow:{
          900:'#FAA500'
        }

      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:'Titillium Web, sans-serif',
        mon:'Montserrat ,sans-serif'
      },

      backgroundImage:{
        modelo: "url('https://i.imgur.com/ftECh3G.png')",
        comma: "url('https://i.imgur.com/Qoc0YF7.png')"
      },
      colors:{
        black:{
          700:'#353535',
          500:'#1C1A19',
          300:'#CCCCCC'

        },
        white:{
          900:'#FFFFFF',
          700:'#EFEFEF',
          500:'#EAE9E5'
        },
        yellow:{
          900:'#FAA500'
        },
        brown:{
          700:'#DEAC71',
          500:'#CFC9B0'
        },
        pink:{
          700:'#D37164',
        },
        blue:{
          500:'#6497D3',
          700: '#3C3B79'
        },
        red:{
          700:'#D84E4B'
        }


      }
    },
  },
  plugins: [],
}

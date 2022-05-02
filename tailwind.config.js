module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      paytone: ['"Paytone One"', 'sans-serif'],
      helvetica: ['"Helvetica Neue"', 'sans-serif'],
      azeret: ['"Azeret Mono"', 'sans-serif'],
      baloo: ['"Baloo Da 2"', 'sans-serif']
    },
    boxShadow: {
      card: '0px 3px 0px #000400',
      btn: '-2px 2px 0px #000400'
    },
    extend: {
      colors: {
        primary: '#03438D',
        secondary: '#EFECE7',
        black: {
          100: '#000400'
        },
        gray: {
          100: '#808080',
          200: '#A8B0B9',
          300: '#9B9893',
          400: '#707070'
        },
        yellow: {
          100: '#EEC32A'
        },
        red: {
          100: '#F57375'
        }
      }
    }
  },
  plugins: []
}

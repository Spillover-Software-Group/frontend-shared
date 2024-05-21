module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  prefix: 'sfs-',
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        spillover: {
          offBlack: '#222222',
          lightGray: '#DDDDDD',
          darkGray: '#666666',
          darkRed: '#561513',
          brandRed: '#A71E22',
          gray: '#AFB7BC',
          orange: '#F57200',
          cyan: '#0E7F82',
          facebook: '#4468B1',
          instagram: '#C13684',
          twitter: '#439BD6',
          sentiments: {
            star: '#F7D804',
            green: '#08A036',
            yellow: '#EFCD0B',
            red: '#C90F0F'
          }
        }
      }
    }
  },
  plugins: []
}

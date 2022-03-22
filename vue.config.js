module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  chainWebpack (config) {
    config.entry('main').add('babel-polyfill')
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  },
}

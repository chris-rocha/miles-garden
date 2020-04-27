module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/nopass/miles-garden/',
  filenameHashing: false,
  productionSourceMap: false,
  // delete HTML related webpack plugins
  chainWebpack: config => {
    // config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Miles Partnership | Marketing Destinations';
        return args;
      })
  }

}

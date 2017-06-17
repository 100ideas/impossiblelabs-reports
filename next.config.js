module.exports = {
  webpack: (config) => {
    // fuck you Tabletop-Webpack >:(
    // https://github.com/facebookincubator/create-react-app/pull/672/files
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
    return config
  }
}

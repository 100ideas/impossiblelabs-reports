module.exports = {
  webpack: (config) => {
//     // const webpack = require('webpack')
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
    return config
  }
}

// module.exports = {
//   webpack: function (config) {
//     if (config.resolve.alias) {
//       delete config.resolve.alias['net']
//       delete config.resolve.alias['tls']
//       delete config.resolve.alias['fs']
//     }
//     return config
//   }
// }

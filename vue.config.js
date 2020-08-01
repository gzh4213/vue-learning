const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://www.gzh4213.com',
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/api'
          '^/api': '/mock'
        }
      }      
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('styles', path.join(__dirname, './src/assets/styles'))
  }
}
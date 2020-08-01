const path = require('path')
const minimist = require('minimist')
const publicPaths = {
  production: '/frontend/quna',
  development: '',
  default: ''
}
const rawArgv = process.argv.splice(3)
const args = minimist(rawArgv)
console.log('mode:',args.mode)
module.exports = {
  assetsDir: 'static',
  publicPath: publicPaths[args.mode] || publicPaths.default,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.gzh4213.com',
        // target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
          // '^/api': '/mock'
        }
      }      
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles/'))
      .set('common', path.join(__dirname, './src/components/common/'))
  }
}
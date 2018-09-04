'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

//resolve函数返回根路径下的文件或文件夹
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  //返回根路径
  context: path.resolve(__dirname, '../'),
  //设置入口文件
  entry: {
    app: './src/main.js'
  },
  //出口文件
  output: {
    //根据config模块得知是根目录下的dist文件夹
    path: config.build.assetsRoot,
    filename: '[name].js',
    //公共路径，统一为“/”
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    //自动解析的扩展，js,vue,json这三种格式的文件引用时不需要加上扩展了
    extensions: ['.js', '.vue', '.json'],
    // 别名配置
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'components': resolve('src/components'),
      'pages': resolve('src/pages')
    }
  },
  module: {
    /*
    配置各种类型文件的加载器，称之为 loader
    webpack 当遇到 import ... 时，会调用这里配置的 loader 对引用的文件进行编译
    */
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        // test代表一个正则匹配。
        // use代表使用什么样的loader解析。
        // include代表在哪个目录下工作。
        // exclude代表一定不解析某个目录和文件。
        // 正则匹配
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        // 使用 url-loader, 它接受一个 limit 参数，单位为字节(byte)
        // 当文件体积小于 limit 时，url-loader 把文件转为 Data URI 的格式内联到引用的地方
        // 当文件大于 limit 时，url-loader 会调用 file - loader, 把文件储存到输出目录，并把引用的文件路径改写成输出后的路径

        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

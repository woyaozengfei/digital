'use strict'
const utils = require('./utils')
const config = require('../config')
//判断当前是否为生产环境，如果是则返回true
const isProduction = process.env.NODE_ENV === 'production'
//是否使用sourceMap，如果是生产环境就使用config文件中index.js中生产环境的配置，否则是否开发环境的配置
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

const merge = require("webpack-merge")
const productionConfig = require('./webpack.prod.conf.js')
const developmentConfig = require('./webpack.dev.conf.js')

function generateConfig(env) {
  return {
    entry: {
      app: './index.build.js'
    },
    target: 'web'
  }
}

module.exports = env => {
  const config = env === 'production' ? productionConfig : developmentConfig
  return merge(generateConfig(env), config)
};
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const distPath = path.join(__dirname, '..', 'dist')
const port = 8000

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: distPath,
    port,
    hot: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(distPath, 'index.html'),
      template: path.resolve(distPath, 'index.template.html'),
      chunks: [
        'app'
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
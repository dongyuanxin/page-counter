const path = require('path')

module.exports = {
  entry: {
    app: './src/frontend/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'vview.bundle.js'
  },
  target: 'web',
  mode: 'production'
}
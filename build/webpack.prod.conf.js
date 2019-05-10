const path = require('path')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    filename: 'page-counter.min.js'
  }
}
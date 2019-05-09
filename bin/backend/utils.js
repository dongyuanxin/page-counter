const ini = require('ini')
const path = require('path')
const os = require('os')
const fs = require('fs')

class Config {
  constructor() {
    this._path = path.resolve(os.homedir(), '.vview.ini')
  }

  read() {
    this.build()
    return ini.parse(fs.readFileSync(this._path, 'utf-8'))
  }

  write(config) {
    this.build()
    return fs.writeFileSync(
      this._path,
      ini.stringify(config)
    )
  }

  build() {
    if (!fs.existsSync(this._path)) {
      fs.closeSync(fs.openSync(this._path, 'w'))
    }
  }
}

module.exports = {
  Config,
}
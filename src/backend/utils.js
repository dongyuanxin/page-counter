const ini = require('ini')
const path = require('path')
const os = require('os')
const fs = require('fs')

class Config {
  constructor() {
    this._path =  path.resolve(os.homedir(), '.vview.ini')
  }

  read() {
    return ini.parse(fs.readFileSync(this._path, 'utf-8'))
  }

  write(config) {
    return fs.writeFileSync(
      this._path,
      ini.stringify(config)
    )
  }
}

module.exports = {
  Config,
}
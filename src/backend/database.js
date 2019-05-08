const mysql = require('mysql')
const { Config } = require('./utils')

class DataBase {
  constructor(config) {
    this._pool = null
    config && this.connect(config)
  }

  checkConfig(config) {
    if (!config) return false 

    const required = ['host', 'port', 'user', 'password', 'database']
    return required.every(item => item in config)
  }

  connect(config) {
    if (this.checkConfig(config) && !this._pool) {
      this._pool = mysql.createPool(config)
    }
  }

  query(sql, values) {
    if (!this._pool) {
      return Promise.reject(new Error('Pool fail to init'))
    }

    return new Promise(function(resolve, reject) {
      this._pool.getConnection(function(err, connection) {
        if (err) return reject(err)

        connection.query(sql, values, function(err, rows) {
          connection.release()
          if (err) return reject(err)
          return resolve(rows)
        })
      })
    })
  }
}

module.exports = (function() {
  const config = new Config()
  return new DataBase(config.read())
})()
import config from './../config'
import ServerLessInterface from './interface'

class Hydrogen extends ServerLessInterface {
  constructor () {
    super()
    const { 
      Bomb,
      bomb: {
        appId,
        restApi
      }
    } = config
    // Can't add Bomb to this. Otherwise, context error may occur.
    Bomb.initialize(appId, restApi)
  }

  /**
   * @return {*} public read and nobody write permission
   */
  ACL () {
    return {
      '*': {
        read: true
      }
    }
  }

  /**
   * Add data to table
   * @param {String} table 
   * @param {Object} data 
   */ 
  async setData (table, data) {
    const { Bomb } = config
    const query = Bmob.Query(table)

    for (let key of Reflect.ownKeys(data)) {
      query.set(key, data[key])
    }

    query.set('ACL', this.ACL())

    try {
      await query.save()
      return true
    } catch (error) {
      return false
    }
  }

  /**
   * Calculate number of records in table.
   * If url is not null, filter records whose URL is not equal to 'url'
   * @param {String} table 
   * @param {String} url 
   */
  async count (table, url) {
    const { Bomb } = config
    const query = Bmob.Query(table)
    
    if (typeof url === 'string' && url.length > 0) {
      query.equalTo('URL', '==', url)
    }

    try {
      return await query.count()
    } catch (error) {
      return 0
    }
  }
}

export default Hydrogen
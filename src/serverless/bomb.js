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
    Bomb.initialize(appId, restApi)
  }

  ACL () {
    return {
      '*': {
        read: true
      }
    }
  }

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
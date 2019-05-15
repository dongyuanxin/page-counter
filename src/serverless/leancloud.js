import config from './../config'
import ServerLessInterface from './interface'

const {
  leancloud: {
    appId,
    appKey
  },
  AV
} = config

class LeanCloud extends ServerLessInterface {
  constructor () {
    super()
    AV.init({appId, appKey})
  }

  ACL () {
    const acl = new AV.ACL()
    acl.setPublicReadAccess(true)
    acl.setPublicWriteAccess(false)
    return acl
  }

  async setData (table, data) {
    const Obj = AV.Object.extend(table)
    const obj = new Obj()
    
    for (let key of Reflect.ownKeys(data)) {
      obj.set(key, data[key])
    }
    
    obj.setACL(this.ACL())
  
    try {
      await obj.save()
      return true
    } catch (error) {
      return false
    }
  }

  async count (table, url) {
    const query = new AV.Query(table)
    if (typeof url === 'string' && url.length > 0) {
      query.equalTo('URL', url)
    }
    
    try {
      return await query.count()
    } catch (error) {
      return 0
    }
  }
}

export default LeanCloud
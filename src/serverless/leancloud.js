import config from './../config'
import ServerLessInterface from './interface'

class LeanCloud extends ServerLessInterface {
  constructor () {
    super()
    const {
      leancloud: {
        appId,
        appKey
      },
      AV
    } = config
    AV.init({appId, appKey})
    this.AV = AV
  }

  /**
   * @return {*} public read and nobody write permission
   */
  ACL () {
    const acl = new this.AV.ACL()
    acl.setPublicReadAccess(true)
    acl.setPublicWriteAccess(false)
    return acl
  }

  /**
   * Add data to table
   * @param {String} table 
   * @param {Object} data 
   */
  async setData (table, data) {
    const Obj = this.AV.Object.extend(table)
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

  /**
   * Calculate number of records in table.
   * If url is not null, filter records whose URL is not equal to 'url'
   * @param {String} table 
   * @param {String} url 
   */
  async count (table, url) {
    const query = new this.AV.Query(table)
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
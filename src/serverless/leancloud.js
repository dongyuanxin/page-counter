import config from './../config'

const {
  leancloud,
  AV
} = config

function LeanCloud() {
  const {
    appId,
    appKey
  } = leancloud

  AV.init({appId, appKey})
}

LeanCloud.prototype.ACL = function() {
  const acl = new AV.ACL()
  acl.setPublicReadAccess(true)
  acl.setPublicWriteAccess(false)
  return acl
}

LeanCloud.prototype.setData = async function(table, data) {
  const Obj = AV.Object.extend(table)
  const obj = new Obj()
  
  for (let key of Reflect.ownKeys(data)) {
    obj.set(key, data[key])
  }
  
  obj.setACL(this.ACL())

  try {
    obj.save()
    return true
  } catch (error) {
    return false
  }
}

LeanCloud.prototype.count = async function(table, url) {
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


export default LeanCloud
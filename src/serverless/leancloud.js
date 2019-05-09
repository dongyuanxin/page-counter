const config = window.VVIEW_CONFIG || {}
const AV = window.AV

function LeanCloud() {
  const {
    appId,
    appKey
  } = config

  AV.init({appId, appKey})
}

LeanCloud.prototype.setData = async function(table, data) {
  const Obj = AV.Object.extend(table)
  const obj = new Obj()
  
  for (let key of Reflect.ownKeys(data)) {
    obj.set(key, data[key])
  }

  try {
    obj.save()
    return true
  } catch (error) {
    return false
  }
}

LeanCloud.prototype.count = async function(table) {
  const query = new AV.Query(table)
  
  try {
    const count = query.count()
    return count
  } catch (error) {
    return 0
  }
}


export default LeanCloud
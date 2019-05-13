import config from './../config'

function Hydrogen() {
  const { 
    Bomb,
    bomb: {
      appId,
      restApi
    }
  } = config

  Bomb.initialize(appId, restApi)
}

Hydrogen.prototype.ACL = function () {
  return {
    '*': {
      read: true
    }
  }
}

Hydrogen.prototype.setData = async function(table, data) {
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

Hydrogen.prototype.count = async function(table, url) {
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

export default Hydrogen
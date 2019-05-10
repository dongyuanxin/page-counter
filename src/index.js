import ServerLessFactory from './serverless'
import { PowerDate } from './utils'
import config from './config'

const serverless = new ServerLessFactory('leancloud')

async function setData() {
  const date = new PowerDate()
  const data = {
    URL: window.location.pathname || '',
    UserAgent: window.navigator.userAgent,
    CreateTime: date.format(),
    CreateTimeStamp: date.now
  }

  serverless.setData(config.leancloud.table, data)
}

async function count() {
  const dom = document.querySelector('#page-counter-total-times')
  if (!dom) {
    return
  }
  
  const times = await serverless.count(config.leancloud.table)
  dom.innerHTML = times
}

export default {
  setData,
  count
}
import ServerLessFactory from './serverless'
import config from './config'
import { 
  PowerDate, 
  formatURL 
} from './utils'

const platform = config.serverless
const serverless = new ServerLessFactory(platform)

async function setData() {
  const date = new PowerDate()
  const data = {
    URL: formatURL(window.location.pathname || ''),
    UserAgent: window.navigator.userAgent,
    CreateTime: date.format(),
    CreateTimeStamp: date.now
  }

  serverless.setData(config[platform].table, data)
}

async function countTotal() {
  const dom = document.querySelector('#page-counter-total-times')
  if (!dom) {
    return
  }
  
  const times = await serverless.count(config[platform].table)
  dom.innerHTML = times + config[platform].history
}

async function countSingle() {
  const dom = document.querySelector('#page-counter-single-times')
  if (!dom) {
    return
  }

  const times = await serverless.count(config[platform].table, formatURL(window.location.pathname || ''))
  dom.innerHTML = times
}

export default {
  setData,
  countTotal,
  countSingle
}
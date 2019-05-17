import ServerLessFactory from './serverless'
import config from './config'
import { 
  PowerDate, 
  formatURL,
  copyright 
} from './utils'

copyright()

const platform = config.serverless
const serverless = new ServerLessFactory(platform)

/**
 * Push page view meta to serverless cloud database
 */
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

/**
 * Count website total views and render it to '#page-counter-total-times' DOM
 */
async function countTotal() {
  const dom = document.querySelector('#page-counter-total-times')
  if (!dom) {
    return
  }
  
  const times = await serverless.count(config[platform].table)
  dom.innerHTML = times + config[platform].history
}

/**
 * Count single page views and render it to '#page-counter-single-times' DOM
 */
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
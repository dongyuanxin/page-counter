import ServerLessFactory from './serverless'
import { PowerDate } from './utils'

const serverless = new ServerLessFactory('leancloud')

async function setData() {
  const date = new PowerDate()
  const data = {
    URL: window.location.pathname || '',
    UserAgent: window.navigator.userAgent,
    CreateTime: date.now,
    CreateTimeStamp: date.format()
  }

  serverless.setData('VVTable', data)
}

async function count() {
  const dom = document.querySelector('#vview_times')
  if (!dom) {
    return
  }
  
  const times = serverless.count('leancloud')
  dom.innerHTML = times
}

(function() {
  setData()
  count()
})()
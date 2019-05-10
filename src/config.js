const config = window.PAGE_COUNTER_CONFIG 
const AV = window.AV 

const required = {
  serverless: '',
  leancloud: {
    table: 'string',
    appId: 'string',
    appKey: 'string'
  }
}

if (!config) {
  throw new Error('Please init variable window.PAGE_COUNTER_CONFIG')
}

if (!AV) {
  throw new Error('Please import leancloud-storage sdk')
}

export default {
  AV,
  ...config
}
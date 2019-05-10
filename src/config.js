import { validator } from './utils'

const leancloudRequired = [
  {
    key: 'table',
    type: 'string',
    required: true,
    prompt: 'Please input leancloud table name'
  },
  {
    key: 'appId',
    type: 'string',
    required: true,
    prompt: 'Please input leancloud appId'
  },
  {
    key: 'appKey',
    type: 'string',
    required: true,
    prompt: 'Please input leancloud appKey'
  },
  {
    key: 'history',
    type: 'number',
    required: false,
    defaultValue: 0
  }
]

class Config {
  constructor() {}

  get AV() {
    if (!window.AV) {
      throw new Error('Please import leancloud-storage sdk')
    }

    return window.AV
  }

  get serverless() {
    if (!window.PAGE_COUNTER_CONFIG) {
      throw new Error('Please init variable window.PAGE_COUNTER_CONFIG')
    }

    return window.PAGE_COUNTER_CONFIG.serverless || 'leancloud'
  }

  get leancloud() {
    if (!window.PAGE_COUNTER_CONFIG) {
      throw new Error('Please init variable window.PAGE_COUNTER_CONFIG')
    }

    const { leancloud } = window.PAGE_COUNTER_CONFIG
    const [ valid, prompt ] = validator(leancloud, leancloudRequired)
    if (!valid) {
      throw new Error(prompt)
    }
    return window.PAGE_COUNTER_CONFIG.leancloud
  }
}

export default new Config()
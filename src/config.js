import * as Bmob from 'hydrogen-js-sdk'
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

const bombRequired = [
  {
    key: 'table',
    type: 'string',
    required: true,
    prompt: 'Please input bomb table name'
  },
  {
    key: 'appId',
    type: 'string',
    required: true,
    prompt: 'Please input bomb appId'
  },
  {
    key: 'restApi',
    type: 'string',
    required: true,
    prompt: 'Please input bomb restApi'
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

  get serverless() {
    if (!window.PAGE_COUNTER_CONFIG) {
      throw new Error('Please init variable window.PAGE_COUNTER_CONFIG')
    }

    return window.PAGE_COUNTER_CONFIG.serverless || 'leancloud'
  }

  get AV() {
    if (!window.AV) {
      throw new Error('Please import leancloud-storage sdk')
    }

    return window.AV
  }

  get Bomb() {
    if (!Bmob) {
      throw new Error('Please import hydrogen sdk')
    }

    return Bomb
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
    return leancloud
  }

  get bomb() {
    if (!window.PAGE_COUNTER_CONFIG) {
      throw new Error('Please init variable window.PAGE_COUNTER_CONFIG')
    }

    const { bomb } = window.PAGE_COUNTER_CONFIG
    const [ valid, prompt ] = validator(bomb, bombRequired)
    if (!valid) {
      throw new Error(prompt)
    }
    return bomb
  }
}

export default new Config()
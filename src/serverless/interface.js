/**
 * Abstract interface for other serverless children class
 * More platforms children class must extend this
 */
export default class ServerLessInterface {
  constructor () {}

  ACL () {
    throw new Error('Interface method "ACL" must be rewritten')
  }

  setData () {
    throw new Error('Interface method "setData" must be rewritten')
  }

  count () {
    throw new Error('Interface method "count" must be rewritten')
  }
}
import LeanCloud from './leancloud'
import Bomb from './bomb'

class ServerLessFactory {
  constructor (name) {
    name = name.toLocaleLowerCase()

    switch (name) {
      case 'leancloud':
        return new LeanCloud()
      case 'bomb':
        return new Bomb()
      default:
        throw new Error('Serverless must be one of [ leancloud, bomb ]')
    }
  }
}

export default ServerLessFactory
import LeanCloud from './leancloud'
import Bomb from './bomb'

function ServerLessFactory(name) {
  name = name.toLocaleLowerCase()

  switch (name) {
    case 'leancloud':
      return new LeanCloud()
    case 'bomb':
      return new Bomb()
    default:
      throw new Error('Serverless must be one of [leancloud]')
  }
}

export default ServerLessFactory
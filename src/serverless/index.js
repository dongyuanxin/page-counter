import LeanCloud from './leancloud'

function ServerLessFactory(name) {
  name = name.toLocaleLowerCase()

  switch (name) {
    case 'leancloud':
      return new LeanCloud()
    default:
      throw new Error('Serverless must be one of [leancloud, bomb]')
  }
}

export default ServerLessFactory
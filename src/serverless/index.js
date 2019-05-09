import LeanCloud from './leancloud'

function ServerLessFactory(name) {
  name = name.toLocaleLowerCase()

  switch (name) {
    case 'leancloud':
      return new LeanCloud()
    default:
      return null
  }
}

export default ServerLessFactory
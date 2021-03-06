import pkg from './../package.json'

/**
 * Example:
 * ```javascript
 * addZeroStr(1) // '01'
 * addZeroStr(32) // '32'
 * ```
 * @param {Number} num 
 */
function addZeroStr(num) {
  if (num < 10) {
    return '0' + num
  } else {
    return num + ''
  }
}

/**
 * Add format function to Date Object
 */
export function PowerDate() {
  const date = new Date()
  
  date.now = date.getTime() + ''

  date.format = () => {
    const year = addZeroStr(date.getFullYear()),
      month = addZeroStr(date.getMonth() + 1),
      day = addZeroStr(date.getDate()),
      hour = addZeroStr(date.getHours()),
      minute = addZeroStr(date.getMinutes()),
      second = addZeroStr(date.getSeconds())

    return `${year}/${month}/${day} ${hour}:${minute}:${second}`
  }

  return date
}

/**
 * Add '/' to url both sides
 * @param {String} url 
 */
export function formatURL(url) {
  url = url.trim()

  if (!url.startsWith('/')) {
    url = `/${url}`
  }

  if (!url.endsWith('/')) {
    url = `${url}/`
  }

  return encodeURIComponent(url)
}

/**
 * Validate obj as options requires
 * @param {Object} obj 
 * @param {Array} options 
 */
export function validator(obj, options) {
  if (!obj || !options) {
    return false
  }

  for (let opt of options) {
    const { key, required, type, defaultValue, prompt } = opt
    if (!required) {
      (!obj[key]) && (obj[key] = defaultValue)
      continue
    }
    
    if (!obj.hasOwnProperty(key)) {
      return [false, prompt || '']
    }
    if (type && (typeof obj[key] !== type)) {
      return [false, prompt || '']
    }
  }

  return [true]
}

/**
 * Print copyright in console
 */
export function copyright() {
  console.log(
    `\n%c ${pkg.name} v${pkg.version} %c` + 
    ` ${pkg.homepage} \n` , 
    'color: #fadfa3; background: #030307; padding:3px 0;', 
    ''
  )
}
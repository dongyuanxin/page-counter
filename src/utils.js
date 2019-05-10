function addZeroStr(num) {
  if (num < 10) {
    return '0' + num
  } else {
    return num + ''
  }
}

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
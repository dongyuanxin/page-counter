const fs = require('fs')
const http = require('http')
const { URL } = require('url')
const database = require('./database')

const port = 5000

const server = http.createServer(function(req, res) {
  const url = new URL(`http://127.0.0.1:${port}${req.url}`)
  const params = url.searchParams
  if (!params) {
    res.statusCode = 401
    res.end()
  } else {
    database
      .query('')
    
  }
})

server.listen(port, function() {
  console.log(`Server running at ${port}`)
})
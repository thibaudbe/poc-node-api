const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200)
  res.end('hello world\n')
}).listen(8000)

console.log('http://localhost:8000')

function handle(signal) {
  console.log(`Received ${signal}`)
  process.exit(-1)
}

process.on('SIGINT', handle)
process.on('SIGTERM', handle)

const emitter = require('./emitter')

emitter.on('two', (msg) => {
  console.log('I got the msg', msg)
})
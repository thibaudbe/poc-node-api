const emitter = require('./emitter')

emitter.on('start', (msg) => {
  emitter.emit('two', msg)
})
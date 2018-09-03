const emitter = require('./emitter')

emitter.on('one', (msg) => {
  emitter.emit('three', msg)
})
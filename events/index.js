const emitter = require('./emitter')

require('./one')
require('./two')
require('./three')

emitter.emit('start', 'Hello World !')

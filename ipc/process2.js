const ipc = require('node-ipc')

ipc.config.id = 'app2'
ipc.config.retry = 1500
ipc.config.silent = true

ipc.connectTo('server', () => {
  ipc.of.server.on('connect', () => {
    ipc.log('## connected to server ##', ipc.config.delay)
    ipc.of.server.emit('app.message', `Hello from ${ipc.config.id}`)
  })

  ipc.of.server.on('app.message', (data) => {
    console.log('app2 :', data)
  })

  ipc.of.server.on('disconnect', () => {
    ipc.log('disconnected from server')
  })

  ipc.of.server.on('kill.connection', (data) => {
    ipc.log('server requested kill.connection')
    ipc.disconnect('server')
  })
})

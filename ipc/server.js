const ipc = require('node-ipc')

ipc.config.id = 'server'
ipc.config.retry = 1500
ipc.config.silent = true

ipc.serve(() => {
  ipc.server.on('app.message', (data, socket) => {
    console.log(data)

    ipc.server.emit(socket, 'app.message', data + ' world!')
  })
})

ipc.server.start()

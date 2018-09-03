process.on('message', (msg) => {
  console.log('Message from parent:', 1, msg)
})

let counter = 0

setInterval(() => {
  if (process.send) {
    process.send({ counter: counter++ })
  }
}, 1000)

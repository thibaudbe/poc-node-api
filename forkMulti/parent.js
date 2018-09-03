const { fork } = require('child_process')

const nbs = [1,2,3]

nbs.forEach(nb => {
  const child = fork(__dirname + `/child${nb}.js`)

  child.on('message', (msg) => {
    console.log('Message from child', nb, msg)
  })

  child.send({ hello: 'world' })
})

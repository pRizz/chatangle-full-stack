// From https://github.com/SemkoDev/bolero.fun, see license https://github.com/SemkoDev/bolero.fun/blob/develop/LICENSE

const fs = require('fs')
const path = require('path')
const { Controller } = require('bolero-chatangle.lib')

let controller = null
let logDir = './current.log'
let state = {
  state: null,
  messages: [],
  settings: {}
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
})

function create (opts) {
    const { targetDir } = opts
    logDir = path.join(targetDir, 'current.log')
    controller = new Controller({ onStateChange, onMessage, targetDir })
    state.state = controller.getState()
    state.settings = controller.settings.settings
    return controller
}

function start () {
    return controller.start()
}

function stop () {
    return controller.stop()
}

function onMessage (component, message) {
  const msg = `${new Date().toISOString()} ${component}: ${message}`
  fs.appendFileSync(logDir, `${msg}\n`)
  state.messages.push(msg)
  state.messages = state.messages.splice(-3000)
  onStateChange(state.state)
  console.log(msg)
}

function onStateChange(newState) {
  state.state = newState
}

module.exports = {
  create,
  start,
  stop
}

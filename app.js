const path = require('path');
const api = require('./src/api');

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
})

const targetDir = path.join(require('os').homedir(), '.bolero')
api.create({ targetDir })

function terminate() {
    console.log("STOPPING BOLERO..")
    api.stop().then(() => {
        console.log("BOLERO STOPPED!")
        process.exit(0);
    })
}

process.on('SIGINT', terminate)
process.on('SIGTERM', terminate)

api.start()

module.exports = {}

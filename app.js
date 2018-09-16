const ora = require('ora')
const childProcess = require('child_process')
childProcess.exec('echo hello')
const spinner = ora('Loading unicorns').start()

setTimeout(() => {
  spinner.succeed()
}, 1000)

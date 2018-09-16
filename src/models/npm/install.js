const shelljs = require('shelljs')
const spinner = require('../../utils/spinner')

async function install () {
  return spinner('Install npm package', () => {
    return new Promise((resolve, reject) => {
      shelljs.exec('npm install', { silent: true }, (code, stdout, stderr) => {
        if (code === 0) {
          resolve([stdout, stderr])
        } else {
          reject(new Error(stderr))
        }
      })
    })
  })
}

module.exports = install

'use strict'

const path = require('path')
const shell = require('shelljs')

function copyFiles () {
  shell.mkdir('-p', 'src')

  const src1 = path.resolve(__dirname, '../../../templates/src/controller/')
  const dest1 = path.resolve(process.cwd(), 'src/controller/')
  shell.cp('-R', src1, dest1)

  const src2 = path.resolve(__dirname, '../../../templates/src/app.js')
  const dest2 = path.resolve(process.cwd(), 'src/app.js')
  shell.cp(src2, dest2)

  const src3 = path.resolve(__dirname, '../../../templates/src/router.js')
  const dest3 = path.resolve(process.cwd(), 'src/router.js')
  shell.cp(src3, dest3)
}

module.exports = copyFiles

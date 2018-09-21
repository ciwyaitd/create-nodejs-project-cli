'use strict'

const path = require('path')
const shell = require('shelljs')

function copyFiles () {
  const src = path.resolve(__dirname, '../../../templates/config')
  const dest = path.resolve(process.cwd(), 'config')
  shell.cp('-R', src, dest)
}

module.exports = copyFiles

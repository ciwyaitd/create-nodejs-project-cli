'use strict'

const shell = require('shelljs')
const path = require('path')

function copyFile () {
  const src = path.resolve(__dirname, '../../../templates/package.json')
  const dest = path.resolve(process.cwd(), 'package.json')
  shell.cp(src, dest)
}

module.exports = copyFile

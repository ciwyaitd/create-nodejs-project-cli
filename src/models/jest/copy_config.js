'use strict'

const shell = require('shelljs')
const path = require('path')

function copyConfig (style) {
  const dest = path.resolve(process.cwd(), 'jest.config.js')
  const src = path.resolve(__dirname, '../../../templates/jest.config.js')
  shell.cp(src, dest)
}

module.exports = copyConfig

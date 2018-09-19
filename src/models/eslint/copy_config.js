'use strict'

const shell = require('shelljs')
const path = require('path')
const styles = require('../../constants/eslint_styles')

function copyConfig (style) {
  if (style === styles.standard) {
    const dest = path.resolve(process.cwd(), '.eslintrc.json')
    const src = path.resolve(__dirname, '../../../templates/.eslintrc_standard.json')
    shell.cp(src, dest)
  } else {
    throw new Error(`No such style: ${style}`)
  }
}

module.exports = copyConfig

'use strict'

const shelljs = require('shelljs')
const cmd = require('../../utils/cmd')
const path = require('path')

function addConfig () {
  try {
    const src = path.resolve(process.cwd(), '.eslintrc.json')
    const eslint = require(src)

    if (!eslint.env) {
      eslint.env = {}
    }

    eslint.env.jest = true

    cmd(() => shelljs.exec(`echo '${JSON.stringify(eslint, null, 2)}' > .eslintrc.json`))
  } catch (err) {

  }
}

module.exports = addConfig

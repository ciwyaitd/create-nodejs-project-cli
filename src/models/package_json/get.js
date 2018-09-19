'use strict'

const path = require('path')

function get () {
  const src = path.resolve(process.cwd(), 'package.json')
  const json = require(src)
  return json
}

module.exports = get

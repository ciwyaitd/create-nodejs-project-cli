'use strict'

const env = process.env
const { name } = require('../package.json')

module.exports = {
  app: `production_${name}`,
  port: env.PORT || 9003
}

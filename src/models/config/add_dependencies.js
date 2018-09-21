'use strict'

const packageJson = require('../package_json')
const packageVersion = require('../../constants/package_version')

function addDependencies () {
  packageJson.addDependencies('config', packageVersion['config'])
}

module.exports = addDependencies

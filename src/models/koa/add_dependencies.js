'use strict'

const packageJson = require('../package_json')
const packageVersion = require('../../constants/package_version')

function addDependencies () {
  packageJson.addDependencies('koa', packageVersion['koa'])
  packageJson.addDependencies('koa-bodyparser', packageVersion['koa-bodyparser'])
  packageJson.addDependencies('koa-router', packageVersion['koa-router'])
}

module.exports = addDependencies

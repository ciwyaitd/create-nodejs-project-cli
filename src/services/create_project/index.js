'use strict'

const shelljs = require('shelljs')
const cmd = require('../../utils/cmd')
const eslint = require('../eslint')
const packageJson = require('../../models/package_json')
const npm = require('../../models/npm')
const config = require('../../models/config')
const koa = require('../koa')

async function create (name) {
  cmd(() => shelljs.mkdir(name))
  cmd(() => shelljs.cd(name))

  // package json
  packageJson.copyFile()
  packageJson.set('name', name)

  // config
  config.addDependencies()
  config.copyFiles()

  // eslint
  await eslint.prompt()

  // koa
  await koa.prompt()

  // install npm
  const result = await npm.install()
  const [infoMsg, warnMsg] = result
  if (infoMsg) console.info(infoMsg)
  if (warnMsg) console.warn(warnMsg)

  console.info('Finish.')
}

module.exports = create

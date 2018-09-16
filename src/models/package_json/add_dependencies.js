const get = require('./get')
const shelljs = require('shelljs')
const cmd = require('../../utils/cmd')

function addDependencies (key, value) {
  const json = get()

  if (!json.dependencies) {
    json.dependencies = {}
  }

  json.dependencies[key] = value

  cmd(() => shelljs.exec(`echo '${JSON.stringify(json, null, 2)}' > package.json`).code !== 0)
}

module.exports = addDependencies

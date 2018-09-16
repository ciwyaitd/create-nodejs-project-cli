const get = require('./get')
const shelljs = require('shelljs')
const cmd = require('../../utils/cmd')

function addDevDependencies (key, value) {
  const json = get()

  if (!json.devDependencies) {
    json.devDependencies = {}
  }

  json.devDependencies[key] = value

  cmd(() => shelljs.exec(`echo '${JSON.stringify(json, null, 2)}' > package.json`))
}

module.exports = addDevDependencies

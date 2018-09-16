const get = require('./get')
const shelljs = require('shelljs')
const cmd = require('../../utils/cmd')

function set (key, value) {
  const json = get()
  json[key] = value

  cmd(() => shelljs.exec(`echo '${JSON.stringify(json, null, 2)}' > package.json`))
}

module.exports = set

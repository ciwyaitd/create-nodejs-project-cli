function get () {
  const path = `${process.cwd()}/package.json`
  const json = require(path)
  return json
}

module.exports = get

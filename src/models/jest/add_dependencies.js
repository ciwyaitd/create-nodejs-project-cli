const packageJson = require('../package_json')
const packageVersion = require('../../constants/package_version')

function addDependencies () {
  packageJson.addDevDependencies('jest', packageVersion['jest'])
}

module.exports = addDependencies

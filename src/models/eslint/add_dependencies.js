const packageJson = require('../package_json')
const packageVersion = require('../../constants/package_version')
const styles = require('../../constants/eslint_styles')

function addDependencies (style) {
  if (style === styles.standard) {
    packageJson.addDevDependencies('eslint-config-standard', packageVersion['eslint-config-standard'])
    packageJson.addDevDependencies('eslint-plugin-import', packageVersion['eslint-plugin-import'])
    packageJson.addDevDependencies('eslint-plugin-node', packageVersion['eslint-plugin-node'])
    packageJson.addDevDependencies('eslint-plugin-promise', packageVersion['eslint-plugin-promise'])
    packageJson.addDevDependencies('eslint-plugin-standard', packageVersion['eslint-plugin-standard'])
    packageJson.addDevDependencies('eslint', packageVersion['eslint'])
  } else {
    throw new Error(`No such style: ${style}`)
  }
}

module.exports = addDependencies

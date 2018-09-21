const inquirer = require('inquirer')
const shelljs = require('shelljs')
const cmd = require('../../utils/cmd')
const eslint = require('../../models/eslint')
const packageJson = require('../../models/package_json')
const npm = require('../../models/npm')
const config = require('../../models/config')

async function create (name) {
  cmd(() => shelljs.mkdir(name))
  cmd(() => shelljs.cd(name))

  cmd(() => shelljs.exec('touch app.js'))

  // package json
  packageJson.copyFile()
  packageJson.set('name', name)

  // config
  config.addDependencies()
  config.copyFiles()

  // eslint
  const useEslint = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'value',
      message: 'Would you like to use eslint?',
      default: true
    }
  ])

  if (useEslint.value) {
    const eslintStyle = await inquirer.prompt([
      eslint.stylePromptList
    ])

    eslint.copyConfig(eslintStyle.value)
    eslint.addDependencies(eslintStyle.value)
  }

  // install npm
  const result = await npm.install()
  const [infoMsg, warnMsg] = result
  if (infoMsg) console.info(infoMsg)
  if (warnMsg) console.warn(warnMsg)

  console.info('Finish.')
}

module.exports = create

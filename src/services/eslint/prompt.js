'use strict'

const inquirer = require('inquirer')
const eslint = require('../../models/eslint')

async function prompt () {
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
}

module.exports = prompt

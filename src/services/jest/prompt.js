'use strict'

const inquirer = require('inquirer')
const jest = require('../../models/jest')

async function prompt () {
  const useJest = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'value',
      message: 'Would you like to use jest?',
      default: true
    }
  ])

  if (useJest.value) {
    jest.addDependencies()
    jest.copyConfig()
    jest.addConfig()
  }
}

module.exports = prompt

'use strict'

const inquirer = require('inquirer')
const koa = require('../../models/koa')

async function prompt () {
  const useKoa = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'value',
      message: 'Would you like to use koa?',
      default: true
    }
  ])

  if (useKoa.value) {
    koa.addDependencies()
    koa.copyFiles()
  }
}

module.exports = prompt

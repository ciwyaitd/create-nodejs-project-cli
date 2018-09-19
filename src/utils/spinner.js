'use strict'

const ora = require('ora')

const spinner = ora({
  color: 'green'
})

/**
 *
 * @param {*} text
 * @param {*} fn async function
 */
module.exports = async (text, fn) => {
  spinner.text = text
  spinner.start()
  try {
    const result = await fn()
    spinner.succeed()
    return result
  } catch (err) {
    spinner.fail()
    throw err
  }
}

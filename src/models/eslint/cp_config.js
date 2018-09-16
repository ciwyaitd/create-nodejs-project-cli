const fs = require('fs')
const path = require('path')
const styles = require('../../constants/eslint_styles')

function cpConfig (style) {
  return new Promise((resolve, reject) => {
    const dest = `${process.cwd()}/.eslintrc.json`
    if (style === styles.standard) {
      const src = path.resolve(__dirname, '../../../templates/.eslintrc_standard.json')
      fs.copyFile(src, dest, (err) => {
        if (err) reject(err)
        resolve()
      })
    } else {
      throw new Error(`No such style: ${style}`)
    }
  })
}

module.exports = cpConfig

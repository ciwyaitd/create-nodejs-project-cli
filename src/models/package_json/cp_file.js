const fs = require('fs')
const path = require('path')

function cpFile () {
  return new Promise((resolve, reject) => {
    const dest = `${process.cwd()}/package.json`
    const src = path.resolve(__dirname, '../../../templates/package.json')
    fs.copyFile(src, dest, (err) => {
      if (err) reject(err)
      resolve()
    })
  })
}

module.exports = cpFile

function cmd (fn) {
  const result = fn()
  if (result.code !== 0) {
    process.exit(1)
  }
}

module.exports = cmd

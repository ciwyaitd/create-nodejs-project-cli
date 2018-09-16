const program = require('commander')
const { version } = require('../package.json')

program
  .version(version, '-v, --version')
  .command('create <name>')
  .description('create a new project')
  .action((name) => {
    const create = require('../src/services/create_project')
    create(name)
  })

program.parse(process.argv)

process.on('uncaughtException', (err) => {
  console.error(err.message)
  process.exit(1)
})

process.on('unhandledRejection', (err) => {
  console.error(err.message)
  process.exit(1)
})

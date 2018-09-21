'use strict'

const config = require('config')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./router')

const app = new Koa()

app
  .use(bodyParser())
  .use(router.allowedMethods())
  .use(router.routes())

app.listen(config.port, () => {
  console.info(`${config.app} is listening on ${config.port}`)
})

module.exports = app

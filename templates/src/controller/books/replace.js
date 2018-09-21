'use strict'

async function replace (ctx) {
  ctx.status = 200
  ctx.body = {
    data: ctx.request.body
  }
}

module.exports = replace

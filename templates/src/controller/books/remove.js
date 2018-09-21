'use strict'

async function remove (ctx) {
  ctx.status = 200
  ctx.body = {
    data: ctx.request.body
  }
}

module.exports = remove

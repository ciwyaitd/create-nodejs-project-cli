'use strict'

async function create (ctx) {
  ctx.status = 201
  ctx.body = {
    data: ctx.request.body
  }
}

module.exports = create

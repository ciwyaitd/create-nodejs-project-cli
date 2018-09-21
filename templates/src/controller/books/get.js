'use strict'

async function get (ctx) {
  ctx.status = 200
  ctx.body = {
    data: [
      {
        name: 'Javascript',
        price: 10.50
      }
    ]
  }
}

module.exports = get

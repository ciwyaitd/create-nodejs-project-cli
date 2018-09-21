'use strict'

const Router = require('koa-router')
const books = require('./controller/books')

const router = new Router()

// books
router.get('/books', books.get)
router.post('/books', books.create)
router.put('/books/:book_id', books.replace)
router.delete('/books/:book_id', books.remove)

module.exports = router

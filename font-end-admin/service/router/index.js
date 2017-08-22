const router = require('koa-router')()
const api = require('../api/index')

router
.get('/', api.index)
.post('/product', api.editProduct)
.get('/product', api.getProduct)
.post('/about', api.editAbout)
.get('/about', api.getAbout)

module.exports = router

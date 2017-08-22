const logger = require('koa-logger')
const router = require('koa-router')()
const koaBody = require('koa-body')

const Koa = require('koa')
const app = module.exports = new Koa()

const About = require('./model/about')

// middleware

app.use(logger())

// route definitions

router.get('/', index)
router.post('/product', editProduct)
router.get('/product', getProduct)
router.post('/about', editAbout)
router.get('/about', getAbout)

// 注意顺序
app.use((ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Credentials', true) // 允许带上 cookie
  return next()
})
.use(koaBody({
  multipart: true,
  strict: false,
  jsonLimit: '10mb',
  formLimit: '10mb',
  textLimit: '10mb'
})) // Processing request
// .use(PluginLoader(SystemConfig.System_plugin_path))
.use(router.routes())

async function index (ctx) {
  ctx.body = {
    status: '200',
    data: '主页！'
  }
}

async function getProduct (ctx) {
  ctx.body = {
    status: '200',
    data: '成功！'
  }
}

/**
 * edit the product page
 */

async function editProduct (ctx) {
  ctx.body = {
    status: '200',
    data: '成功！'
  }
}

async function getAbout (ctx) {
  let about = await About.find({})
  ctx.body = {
    status: '200',
    data: about
  }
}

/**
 * edit the About page
 */

async function editAbout (ctx) {
  let about = new About(ctx.request.body)
  console.log(about)
  await about.save()
  ctx.body = {
    status: '200',
    data: 'success'
  }
}

// listen

if (!module.parent) {
  app.listen(3000)
  console.log('Now start API server on localhost:3000 ...')
}

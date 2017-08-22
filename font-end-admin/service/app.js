const logger = require('koa-logger')
const router = require('./router/index')
const koaBody = require('koa-body')

const Koa = require('koa')
const app = module.exports = new Koa()

// middleware

app.use(logger())

// 注意顺序
app.use((ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Credentials', true) // 允许带上 cookie
  return next()
})
.use(koaBody({
  multipart: true
})) // Processing request
// .use(PluginLoader(SystemConfig.System_plugin_path))
.use(router.routes())

// listen

if (!module.parent) {
  app.listen(3000)
  console.log('Now start API server on localhost:3000 ...')
}

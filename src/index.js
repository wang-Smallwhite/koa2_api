import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'; // 静态文件
import router from './routes/routes'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
const app = new koa()


const isDevMode = process.env.NODE_ENV === 'production' ? false : true

/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
  koaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
      // 上传目录
      uploadDir: path.join(__dirname, '../static'),
      // 保留文件扩展名
      keepExtensions: true,
    }
  }),
  statics(path.join(__dirname, '../static')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet(),
])

if (!isDevMode) {
  app.use(compress())
}



app.use(middleware)
app.use(router())

app.listen(5500)

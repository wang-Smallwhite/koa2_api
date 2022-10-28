import combineRoutes from 'koa-combine-routers'


import PublicRouter from './PublicRouter';    // 静态图片验证码
import RandomDataRouter from './RandomDataRouter';      // 返回随机数据
import LoginRouter from './LoginRouter'; // 登录

export default combineRoutes(PublicRouter, RandomDataRouter, LoginRouter)

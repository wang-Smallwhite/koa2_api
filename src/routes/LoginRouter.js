import Router from 'koa-router'
import LoginController from '../api/Login'

const router = new Router()
router.prefix('/login')
router.post('/login', LoginController.login)

export default router
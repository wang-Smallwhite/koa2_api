import Router from 'koa-router'
import upController from '../api/uploadFile'

const router = new Router()
router.prefix('/api')
router.post('/file', upController.upfile)
router.get('/getfile', upController.getfile)
export default router
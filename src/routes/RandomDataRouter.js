import Router from 'koa-router';
import RandomData from '../api/RandomData';

const router = new Router()

router.get('/getRandomData', RandomData.getRandomData)

export default router
/**
 * 随机生成 数据
 * method GET
 * query  id
*/


const faker = require('faker/locale/zh_CN')



let d = []
for (let i = 0; i < 1000; i++) {
  d.push({
    id: i,
    value: faker.lorem.paragraphs()
  })
}




class RandomData {
  constructor() {}
  async getRandomData(ctx) {
    let params = ctx.request.query
    // if(params === 1) {
      ctx.body = {
        code: 200,
        data: d,
        message: 'ok'
      }
    // }else {
      // ctx.body = {
        // code: 404,
        // data: null,
        // message: 'err'
      // }
    // }
    
  }
}

export default new RandomData()
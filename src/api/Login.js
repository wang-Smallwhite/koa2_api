const DB = require('../mysql/mysql.js')
import jsonwebtoken from 'jsonwebtoken'
import {JWT_SECRET} from '../common/index'
class Login {
  constructor() {}
  async login(ctx) {

    const user = {
      name: 'wwh'
    }
    let token = jsonwebtoken.sign(user, JWT_SECRET, {expiresIn: 60});
    ctx.body = {
      code: 200,
      token,
      created: new Date().toString(),
    }
    // console.log(ctx.request.body)
    // const db = new DB('user')
    // const q = await db.fetchRows({
    //   id: 2
    // }).then(res=>{
    //   console.log(res[0].id)
    // })
    // ctx.body = {
    //   code: 200,
    //   data: {
    //     name: 'ceshi',
    //     age: 19,
    //     token: 'jshfowiehf1902kjdjsl'
    //   },
    //   message: 'ok'
    // }
  }

  loginFun() {

    return {
      name: 'ceshi',
      age: 19,
      token: 'jshfowiehf1902kjdjsl'
    }
  }
}

export default new Login()
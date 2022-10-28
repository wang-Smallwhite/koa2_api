class Login {
  constructor() {}
  async login(ctx) {
    console.log(ctx)
    ctx.body = {
      code: 200,
      data: {
        name: 'ceshi',
        age: 19,
        token: 'jshfowiehf1902kjdjsl'
      },
      message: 'ok'
    }
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
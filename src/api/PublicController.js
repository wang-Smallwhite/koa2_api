import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({})
    
    ctx.body = {
      data: newCaptcha.data,
      text: newCaptcha.text    // 返回随机svg内容
    }
  }
}

export default new PublicController()

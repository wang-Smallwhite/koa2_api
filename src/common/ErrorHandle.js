export default (ctx, next) => {
  return next().catch((err)=>{
    if(401 == err.status) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: 'Protected resource, use Authoriztation header to get access\n',
      }
    }else {
      throw err
    }
  })
}
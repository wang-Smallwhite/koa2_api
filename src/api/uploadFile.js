const path = require('path')
const fs = require('fs')
class upFile {
  constructor() {}

  async upfile(ctx) {
    const file = ctx.request.files.file;
    const basename = path.basename(file.path);
    ctx.body = {"url": `${ctx.origin}/${basename}`}
  }
  
  async getfile(ctx) {
    const files = fs.readdirSync(path.join(__dirname, '../../static'), { encoding: 'utf8', widthFileTypes: true })
    console.log(files);
    let fileArr = []
    files.forEach(item=>{
      const basename = path.basename(item);
      fileArr.push(`${ctx.origin}/${basename}`)
    })
    ctx.body = {
      code: 200,
      result: fileArr
    }
  }
}

export default new upFile()
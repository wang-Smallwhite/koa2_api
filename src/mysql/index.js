const mysql = require('mysql');

// 获取数据库连接对象
const config = {
  host: 'localhost',
  user: 'root',
  password: 'Z*q8C>LQ+TK',
  database: 'shiqi'
}

class Pool {
  constructor() {
    this.pool = this.init();
  }

  init() {
    return mysql.createConnection(config)
  }
}

module.exports = new Pool(config);
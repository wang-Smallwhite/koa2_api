const Pool = require('./index.js');
const pool = Pool.init();


/**
 * 数据库模型
*/

class DB {
  constructor(tableName) {
    this.tableName = tableName;
    this.pool = pool;
  }

  /**
 * 数据查询接口
 * @param tableName
 * @param idJson
 * @returns {Promise<any>}
 */
  fetchRow(idJson) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `SELECT * FROM ${tableName} WHERE ?`
      pool.query(sqlMod, idJson, function (error, results) {
        if (error) {
          reject(error)
        } else {
          if (results) {
            resolve(results.pop())
          } else {
            resolve(results)
          }
        }
      })
    })
  }
  /**
     * 取数据集合
     * @param idJson
     * @returns {Promise<any>}
     */
  fetchRows(idJson) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `SELECT * FROM ${tableName} WHERE ?`
      pool.query(sqlMod, idJson, function (error, results) {
        if (error) {
          reject(error)
        } else resolve(results)
      })
    })
  }
  /**
   * 数据插入接口
   * @param tableName
   * @param rowInfo
   * @returns {Promise<any>}
   */
  insert(rowInfo) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `INSERT INTO ${tableName} SET ?`
      pool.query(sqlMod, rowInfo, function (error, result) {
        if (error) reject(error)
        else resolve(result)
      })
    })
  }

  /**
   * 数据修改接口
   * @param tableName
   * @param idJson
   * @param rowInfo
   * @returns {Promise<any>}
   */
  update(idJson, rowInfo) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `UPDATE ${tableName} SET ? WHERE ?`
      pool.query(sqlMod, [rowInfo, idJson], function (error, result) {
        if (error) reject(error)
        else resolve(result)
      })
    })
  }

  /**
   * 数据删除接口
   * @param tableName
   * @param idJson
   * @returns {Promise<any>}
   */
  remove(idJson) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `DELETE FROM ${tableName} WHERE ?`
      pool.query(sqlMod, idJson, function (error, result) {
        if (error) reject(error)
        else resolve(result)
      })
    })
  }

  /**
   * 自定义查询
   * @param sql
   * @returns {Promise<any>}
   */
  queryStr(sqlMod) {
    const { pool } = this
    return new Promise((resolve, reject) => {
      pool.query(sqlMod, function (error, result) {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }

  /**
   * 统计
   * @param idJson
   * @returns {Promise<any>}
   */
  count(idJson) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `SELECT COUNT(*) as count FROM ${tableName} WHERE ?`
      pool.query(sqlMod, idJson, function (error, result) {
        if (error) reject(error)
        else resolve(result.pop())
      })
    })
  }
}

module.exports = DB


/**
 * 引用
 * 
*/

// const DB = require('../../mysql/mysql.js')
// const db = new DB('user')
// const q = await db.fetchRows({
//   id: 2
// }).then(res => {
//   console.log(res[0].id)
// })
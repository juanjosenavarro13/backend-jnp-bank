import mysql from 'mysql'

export class DBMysql {
  private readonly connection: mysql.Connection
  private readonly host: string
  private readonly user: string
  private readonly password: string
  private readonly database: string
  private readonly config: { host: string, user: string, password: string, database: string }

  constructor () {
    this.host = process.env.MYSQLHOST ?? 'localhost'
    this.user = process.env.MYSQLUSER ?? 'root'
    this.password = process.env.MYSQLPASSWORD ?? ''
    this.database = process.env.MYSQLDATABASE ?? 'bank'
    this.connection = this.createConnection()
    this.config = { host: this.host, user: this.user, password: this.password, database: this.database }
    this.connection.connect()
  }

  getConnection () {
    console.log('✨Conexion MYSQL✨')
    return this.connection
  }

  async query <T>(sql: string): Promise<T> {
    return await new Promise((resolve, reject) => {
      this.connection.query(sql, function (err, rows) {
        if (err != null) reject(err)
        resolve(rows)
      })
    })
  }

  private createConnection () {
    return mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.database
    })
  }
}

import { DBMysql } from '../../database/mysql/aplication/mysql'
import { type UserRepository } from '../domain/user.repository'

class UserService implements UserRepository {
  private readonly connection: DBMysql
  constructor () {
    this.connection = new DBMysql()
  }

  async getUserById (id: number): Promise<any> {
    return await this.connection.query(`select * from users where id = ${id}`)
  }
}

export default new UserService()

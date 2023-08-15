import { type UserModel } from '../domain/user.model'
import { type UserRepository } from '../domain/user.repository'

export class UserService implements UserRepository {
  getUserById (id: number): UserModel {
    console.log(id)
    return {
      id: 1,
      email: 'email@email.es',
      password: '123123',
      createdAt: 'ayer',
      updatedAt: 'hoy'
    }
  }
}

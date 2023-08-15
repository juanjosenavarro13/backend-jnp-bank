import { type UserModel } from './user.model'

export interface UserRepository {
  getUserById: (id: number) => Promise<UserModel>
}

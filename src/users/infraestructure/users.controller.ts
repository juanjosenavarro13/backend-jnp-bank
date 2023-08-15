import { type Request, type Response } from 'express'
import UserService from '../aplication/user.service'

class UserController {
  async register (req: Request, res: Response) {
    const user = await UserService.getUserById(1)
    res.send(user[0])
  }
}

export default new UserController()

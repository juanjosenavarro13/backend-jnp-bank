import { type Request, type Response } from 'express'
import { UserService } from '../aplication/user.service'

class UserController {
  private readonly userService: UserService

  constructor () {
    this.userService = new UserService()
  }

  register = (req: Request, res: Response) => {
    const user = this.userService.getUserById(1)

    res.send(user)
  }
}

export default new UserController()

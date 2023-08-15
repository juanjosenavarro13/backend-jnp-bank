import { type Request, type Response } from 'express'

class UserController {
  register = (req: Request, res: Response) => {
    res.send('Hello, world! registerss')
  }
}

export default new UserController()

import express, { type Router } from 'express'
import usersController from './infraestructure/users.controller'

class UserRouter {
  public router: Router
  public path: string

  constructor () {
    this.path = '/users'
    this.router = express.Router()
    this.initializeRoutes()
  }

  private initializeRoutes () {
    this.router.get('/register', usersController.register)
  }
}

export default new UserRouter()

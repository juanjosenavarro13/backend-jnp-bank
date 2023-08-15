import express, { type Express, type Router } from 'express'
import UsersRouter from './users/users.router'

export class RouterApp {
  public path: string
  public router: Router
  private readonly app: Express

  constructor (app: Express) {
    this.path = '/'
    this.router = express.Router()
    this.app = app
    this.initializeRoutes()
  }

  private initializeRoutes () {
    this.app.use(UsersRouter.path, UsersRouter.router)
  }
}

import express, { type Express } from 'express'
import { RouterApp } from './router'

export class App {
  public app: Express
  private readonly port: number
  private readonly routerApp: RouterApp

  constructor (port?: number) {
    this.port = port ?? 3000
    this.app = express()
    this.routerApp = new RouterApp(this.app)
    this.config(this.port)
  }

  public config (port: number): void {
    this.app.set('port', port)
    this.app.use(express.json())
    this.app.use(this.routerApp.path, this.routerApp.router)
  }

  public start (): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server listening in port ${this.port}`)
    })
  }
}

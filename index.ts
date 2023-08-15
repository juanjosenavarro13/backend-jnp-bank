import dotenv from 'dotenv'
import { App } from './src/app'

dotenv.config()
const port: number = Number(process.env.PORT)
const app = new App(port ?? 3000)
app.start()

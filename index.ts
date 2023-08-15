import dotenv from 'dotenv'
import { App } from './src/app'

dotenv.config()
const app = new App(3000)
app.start()

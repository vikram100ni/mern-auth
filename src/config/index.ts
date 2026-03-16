import { config } from 'dotenv'

config()

const PORT = Number(process.env.PORT) || 5000

export const Config = {
    PORT,
}

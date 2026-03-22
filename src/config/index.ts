import { config } from 'dotenv'
config({ quiet: true })

config()

const PORT = Number(process.env.PORT) || 5000

export const Config = {
    PORT,
}

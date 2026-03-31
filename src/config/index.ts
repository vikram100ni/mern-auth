import { config } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// ✅ ESM dirname fix
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ✅ env load
const env = process.env.NODE_ENV || 'development'

config({
    path: path.resolve(__dirname, `../../.env.${env}`),
})

// ✅ validation helper
const getEnv = (key: string): string => {
    const value = process.env[key]

    if (!value) {
        throw new Error(`Missing environment variable: ${key}`)
    }

    return value
}

// ✅ final config (all safe strings)
export const Config = {
    PORT: getEnv('PORT'),
    NODE_ENV: getEnv('NODE_ENV'),

    DB_HOST: getEnv('DB_HOST'),
    DB_PORT: getEnv('DB_PORT'),
    DB_USERNAME: getEnv('DB_USERNAME'),
    DB_PASSWORD: getEnv('DB_PASSWORD'),
    DB_NAME: getEnv('DB_NAME'),
}

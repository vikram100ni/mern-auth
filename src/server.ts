import dotenv from 'dotenv'
dotenv.config({ quiet: true })
import { Config } from './config/index.js'
import app from './app.js'
import logger from './config/logger.js'

const startServer = () => {
    const PORT = Config.PORT

    try {
        app.listen(PORT, () => {
            logger.info('listening on port', { port: PORT })
        })
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

startServer()

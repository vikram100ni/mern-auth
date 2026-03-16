import { Config } from './config/index.js'
import app from './app.js'

const startServer = () => {
    const PORT = Config.PORT

    try {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

startServer()

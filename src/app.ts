import dotenv from 'dotenv'
dotenv.config({ quiet: true })
import express, {
    type NextFunction,
    type Request,
    type Response,
} from 'express'
import authRouter from './routes/auth.routes.js'
import logger from './config/logger.js'

import type { HttpError } from 'http-errors'

const app = express()

app.get('/', (req, res) => {
    res.status(201).send('welcome to auth service')
})

app.use('/auth', authRouter)

//global err handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message)
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    })
})

export default app

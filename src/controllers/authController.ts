import type { Request, Response } from 'express'

const userRegister = (req: Request, res: Response) => {
    res.status(201).json('hello')
}

export default {
    userRegister,
}

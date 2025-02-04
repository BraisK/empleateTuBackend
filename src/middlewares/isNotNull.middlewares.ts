import { Response, Request, NextFunction } from 'express'

const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'
// TODO quita el any
export const isNotNull = (req: Request, res: Response, next: NextFunction): any => {

    const { role } = req.body.user
    try {
        if (role != null) {
            next()
        } else {
            res.status(401).json({ error: 'Access denied, dont have permission' })
        }
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' })
    }
}
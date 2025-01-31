import { NextFunction, Request, Response } from "express"
import {RateService} from "../services/rate.service"

export class RateController{
    static async rate(req: Request, res: Response, next: NextFunction){
        try {
            const id = req.body.id
            const rate = req.body.rate
            const calification = await RateService.rate(id, rate)
            res.status(200).json(calification)
        } catch (error) {
            next(error)
        }
    }
    static async getRate(req: Request, res: Response, next: NextFunction){
        try {
            const id = Number(req.params.id)
            const calification = await RateService.getRate(id)
            res.status(200).json(calification)
        } catch (error) {
            next(error)
        }
    }

}
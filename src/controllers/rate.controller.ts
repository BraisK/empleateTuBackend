import { NextFunction, Request, Response } from "express"
import {RateService} from "../services/rate.service"

export class RateController{
    static async rate(req: Request, res: Response, next: NextFunction){
        try {
            const id = Number.parseInt(req.params.id)
            const {value} = req.body
            const userId = req.body.user.id
            const Offer = await RateService.rate(userId, id , value)
            res.status(200).json({message: 'offer rate successfully'})
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
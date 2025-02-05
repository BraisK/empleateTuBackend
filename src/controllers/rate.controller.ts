import { NextFunction, Request, Response } from "express"
import {RateService} from "../services/rate.service"
import { HttpException } from "../exceptions/httpException";

export class RateController{
    static async rate(req:Request, res:Response, next: NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Invalid offer ID");

            const {value} = req.body
            const userId = req.body.user.id

            await RateService.rate(userId, id, value)
            res.status(200).json({message: 'Offer rate successfully'})
        }catch(error){
            next(error)
        }
    }

    static async getRate(req:Request, res:Response, next: NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Invalid offer ID");

            await RateService.getRate(id)
            res.status(200).json({message: 'Offer rate successfully'})
        }catch(error){
            next(error)
        }
    }
    static async getMyRate(req:Request, res:Response, next: NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Invalid offer ID");
            const userId = req.body.user.id

            await RateService.getMyRate(userId,id)
            res.status(200).json({message: 'Offer rate successfully'})
        }catch(error){
            next(error)
        }
    }

}
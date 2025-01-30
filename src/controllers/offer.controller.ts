import { NextFunction, Request, Response } from "express"
import {OfferService} from "../services/offer.service"

export class OfferController{
    static async getById(req: Request, res: Response, next: NextFunction){
        try {
            const id = req.body.id
            const offer = await OfferService.getById(id)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }
    static async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const offerts =  OfferService.getAll
            res.status(200).json(offerts)
        } catch (error) {
            next(error)
        }
    }
    static async save(req: Request, res: Response, next: NextFunction){
        try {
            const offer = req.body
            await OfferService.save(offer)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }
    static async delete(req: Request, res: Response, next: NextFunction){
        try {
            const idOffer = req.params.id
            await OfferService.delete(idOffer)
            res.status(200).json(idOffer)
        } catch (error) {
            next(error)
        }
    }
    static async update(req: Request, res: Response, next: NextFunction){
        try {
            const offer = req.params.id
            const change = req.body
            await OfferService.update(offer, change)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }

}
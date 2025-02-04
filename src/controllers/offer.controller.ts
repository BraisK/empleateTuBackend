import { NextFunction, Request, Response } from "express"
import { OfferService } from "../services/offer.service"

export class OfferController {
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const offer = await OfferService.getById(id)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const offert = await OfferService.getAll()
            res.status(200).json(offert)
        } catch (error) {
            next(error)
        }
    }
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const offer = req.body
            const newOffer = await OfferService.create(offer)
            res.status(200).json(newOffer)
        } catch (error) {
            next(error)
        }
    }
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const idOffer = Number(req.params.id)
            const deleteOffer = await OfferService.delete(idOffer)
            res.status(200).json(deleteOffer)
        } catch (error) {
            next(error)
        }
    }
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const offer = Number(req.params.id)
            const change = req.body
            const updateOffer = await OfferService.update(offer, change)
            res.status(200).json(updateOffer)
        } catch (error) {
            next(error)
        }
    }

}
import { NextFunction, Request, Response } from "express"
import { CategoryService } from "../services/category.service"

export class CategoryController {
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const category = await CategoryService.getById(id)
            res.status(200).json(category)
        } catch (error) {
            next(error)
        }
    }
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const category = await CategoryService.getAll()
            res.status(200).json(category)
        } catch (error) {
            next(error)
        }
    }
    static async save(req: Request, res: Response, next: NextFunction) {
        try {
            const offer = req.body
            await CategoryService.save(offer)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }

}
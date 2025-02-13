import { Router } from "express";
import { loginValidation, offerValidation, rateValidation, registerValidation } from "../middlewares/validators.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";
import { OfferController } from "../controllers/offer.controller";
import { RateController } from "../controllers/rate.controller";
import { isAuthenticate } from "../middlewares/auth.middlewares";
import { isAdmin } from "../middlewares/isAdmin.middlewares";
const router = Router()

//API REST FULL


//GET Listar todas las ofertas localhost:3000/api/offers/?title=react&category=dam
router.get('/', isAuthenticate, OfferController.getAll)
//localhost:3000/api/offers/xxxx
router.get('/:id', isAuthenticate, OfferController.getById)
//POST añadir una oferta nueva localhost:3000/api/offers/  {body}
router.post('/', isAuthenticate, isAdmin, offerValidation, ValidationMiddleware, OfferController.create)
//DELETE Borrar una oferta localhost:3000/api/offers/XXXX  
router.delete('/:id',isAuthenticate,isAdmin, OfferController.delete)
//PUT modificar una oferta localhost:3000/api/offers/XXXX  {body}
router.put('/:id',isAuthenticate,isAdmin, offerValidation, ValidationMiddleware, OfferController.update)   

// Calificamos una oferta x   {body}
router.post('/:id/rate/',isAuthenticate, rateValidation, RateController.rate)  
// Vemos que calificación (total) se le ha data a una oferta X
router.get('/:id/rate/', isAuthenticate, RateController.getRate)



export default router
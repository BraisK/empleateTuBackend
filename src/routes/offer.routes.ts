import { Router } from "express";
import { OfferController } from "../controllers/offer.controller"
import { RateController } from "../controllers/rate.controller"
import {isAuthenticate} from "../middlewares/auth.middlewares"
import { offerValidation, rateValidation } from "../middlewares/validators.middlewares";
import { isAdmin } from "../middlewares/isAdmin.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";

const router = Router()


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

// Calificamos una oferta x {body}
router.post('/:id/rate/', isAuthenticate,rateValidation,  RateController.rate)
// Vemos que calificacion (total) se le ha dado a una oferta
router.get('/:id/rate/', isAuthenticate, RateController.getRate) 
router.get('/:id/myRate/', isAuthenticate, RateController.getMyRate) 

export default router
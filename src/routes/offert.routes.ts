import { Router } from "express";
import { OfferController } from "../controllers/offer.controller"
import { RateController } from "../controllers/rate.controller"
import {isAuthenticate} from "../middlewares/auth.middlewares"

const router = Router()


//GET Listar todas las ofertas localhost:3000/api/offerts/?title=react&category=dam
router.get('/', isAuthenticate ,OfferController.getAll)
router.get('/:id',isAuthenticate, OfferController.getById)
//POST Añadir una oferta localhost:3000/api/offerts/ {body}
router.post('/', OfferController.save)
//DELETE Borrar una oferta localhost:3000/api/offerts/XXXX
router.delete('/:id', OfferController.delete)
//PUT modificar una oferta localhost:3000/api/offerts/XXXX {body}
router.put('/:id', OfferController.update)

// Calificamos una oferta x {body}
router.post('/:id/rate/', RateController.rate)
// Vemos que calificacion (total) se le ha dado a una oferta
router.get('/:id/rate/', RateController.getRate) 

export default router
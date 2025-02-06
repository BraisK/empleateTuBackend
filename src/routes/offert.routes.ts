import { Router } from "express";
import { OfferController } from "../controllers/offer.controller"
import { RateController } from "../controllers/rate.controller"
import {isAuthenticate} from "../middlewares/auth.middlewares"
import {isNotNull} from "../middlewares/isNotNull.middlewares"

const router = Router()


//GET Listar todas las ofertas localhost:3000/api/offerts/?title=react&category=dam
router.get('/',OfferController.getAll)
router.get('/:id',isAuthenticate, OfferController.getById)
//POST Añadir una oferta localhost:3000/api/offerts/ {body}
router.post('/', isAuthenticate, OfferController.create)
//DELETE Borrar una oferta localhost:3000/api/offerts/XXXX
router.delete('/:id',isAuthenticate, OfferController.delete)
//PUT modificar una oferta localhost:3000/api/offerts/XXXX {body}
router.put('/:id',isAuthenticate, OfferController.update)

// Calificamos una oferta x {body}
router.post('/:id/rate/', isAuthenticate, RateController.rate)
// Vemos que calificacion (total) se le ha dado a una oferta
router.get('/:id/rate/', isAuthenticate, RateController.getRate) 
router.get('/:id/myRate/', isAuthenticate, RateController.getMyRate) 

export default router
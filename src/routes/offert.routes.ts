import { Router } from "express";

const router = Router()


/* //GET Listar todas las ofertas localhost:3000/api/offerts/?title=react&category=dam
router.get('/', OffertController.getAll)
//POST Añadir una oferta localhost:3000/api/offerts/ {body}
router.post('/', OffertController.save)
//DELETE Borrar una oferta localhost:3000/api/offerts/XXXX
router.delete('/:id', OffertController.delete)
//PUT modificar una oferta localhost:3000/api/offerts/XXXX {body}
router.put('/:id', OffertController.update)

// Calificamos una oferta x {body}
router.post('/:id/rate/', RateController.rate)
// Vemos que calificacion (total) se le ha dado a una oferta
router.get('/:id/rate/', RateController.getRate) */

export default router
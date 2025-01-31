import { isAuthenticate } from "../middlewares/auth.middlewares";
import { CategoryController } from "../controllers/category.controller"
import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin.middlewares";

const router = Router()


router.get('/', isAuthenticate, isAdmin ,CategoryController.getAll)
router.post('/',isAuthenticate,isAdmin, CategoryController.save)


export default router

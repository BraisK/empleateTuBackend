import { Router } from "express";
import { UserController } from "@/controllers/user.controller"
import {isAuthenticate} from "@/middlewares/auth.middlewares"

const router = Router()

router.get('/profile', isAuthenticate ,UserController.profile)

// Crea el endpoint que liste todos los usuarios de la web
// A este endpoint solo puede acceder el usuario role:admin
// Crea routes, services, middleware

export default router
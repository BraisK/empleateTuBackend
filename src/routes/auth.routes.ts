import { Router } from "express";
import {AuthController} from '../controllers/auth.controller'
import { loginValidation, registerValidation } from "../middlewares/validators.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";
const router = Router()

router.post('/login', loginValidation, ValidationMiddleware, AuthController.login)
router.post('/logout', AuthController.logout)
router.post('/register', registerValidation, ValidationMiddleware, AuthController.register)

export default router
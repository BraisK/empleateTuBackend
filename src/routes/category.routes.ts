import { isAuthenticate } from "../middlewares/auth.middlewares";
import { CategoryController } from "../controllers/category.controller";
import { Router } from "express";
import { isAdmin } from "../middlewares/isAdmin.middlewares";
import { categoryValidation } from "../middlewares/validators.middlewares";
import { ValidationMiddleware } from "../middlewares/validation.middlewares";
const router = Router();

router.get("/", isAuthenticate, CategoryController.getAll);
router.get("/:id", isAuthenticate, CategoryController.getById);
router.post("/", isAuthenticate, isAdmin, categoryValidation, ValidationMiddleware, CategoryController.create);
router.put("/:id", isAuthenticate, isAdmin, categoryValidation, ValidationMiddleware, CategoryController.update);
router.delete("/:id", isAuthenticate, isAdmin, CategoryController.delete);

export default router;
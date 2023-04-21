import { Router } from "express";
const router = Router();
import { createCategory, deleteCategory, getAllCategory, updateCategory } from "../controllers/category.controller.js";
import upload from "../middlewares/multer.js";
import validate from "../validation/validation-middleware.js";
import category from "../validation/category.validation.js";

router.post("/", validate(category), upload.single("image"), createCategory);
router.put("/:id", updateCategory);
router.get("/", getAllCategory);
router.delete("/:id", deleteCategory);

export default router;

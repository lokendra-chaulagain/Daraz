import { Router } from "express";
const router = Router();
import { createCategory, deleteCategory, getAllCategory, updateCategory } from "../controllers/category.controller.js";

router.post("/", createCategory);
router.put("/:id", updateCategory);
router.get("/", getAllCategory);
router.delete("/:id", deleteCategory);

export default router;

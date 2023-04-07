import { Router } from "express";
const router = Router();
import { createSubCategory, deleteSubCategory, getAllSubCategory, updateSubCategory } from "../controllers/subCategory.controller.js";

router.post("/", createSubCategory);
router.put("/:id", updateSubCategory);
router.get("/", getAllSubCategory);
router.delete("/:id", deleteSubCategory);

export default router;

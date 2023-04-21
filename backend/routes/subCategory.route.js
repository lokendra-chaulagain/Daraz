import { Router } from "express";
const router = Router();
import { createSubCategory, deleteSubCategory, getAllSubCategory, updateSubCategory } from "../controllers/subCategory.controller.js";
import validate from "../validation/validation-middleware.js";
import subCategory from "../validation/subCategory.validation.js";

router.post("/", validate(subCategory), createSubCategory);
router.put("/:id", updateSubCategory);
router.get("/", getAllSubCategory);
router.delete("/:id", deleteSubCategory);

export default router;

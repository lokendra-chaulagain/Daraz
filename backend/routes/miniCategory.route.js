import { Router } from "express";
const router = Router();
import { createMiniCategory, deleteMiniCategory, getAllMiniCategory, getMiniCategoryBySlug, updateMiniCategory } from "../controllers/miniCategory.controller.js";
import validate from "../validation/validation-middleware.js";
import miniCategory from "../validation/miniCategory.validation.js";
import upload from "../middlewares/multer.js";

router.post("/", upload.single("image"), createMiniCategory);
router.patch("/:id", upload.single("image"), updateMiniCategory);
router.get("/", getAllMiniCategory);
router.get("/:slug", getMiniCategoryBySlug);
router.delete("/:id", deleteMiniCategory);

export default router;

import { Router } from "express";
const router = Router();
import { createMiniCategory, deleteMiniCategory, getAllMiniCategory, updateMiniCategory } from "../controllers/miniCategory.controller.js";

router.post("/", createMiniCategory);
router.put("/:id", updateMiniCategory);
router.get("/", getAllMiniCategory);
router.delete("/:id", deleteMiniCategory);

export default router;

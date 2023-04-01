import { Router } from "express";
const router = Router();
import { createBanner, deleteBanner, getAllBanner, updateBanner } from "../controllers/banner.controller.js";
import { uploadFile } from "../utils/uploadFile.js";

router.post("/", uploadFile("file"), createBanner);
router.put("/:id", updateBanner);
router.get("/", getAllBanner);
router.delete("/:id", deleteBanner);

export default router;

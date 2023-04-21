import { Router } from "express";
const router = Router();
import { createBanner, deleteBanner, getAllBanner, updateBanner } from "../controllers/banner.controller.js";
import upload from "../middlewares/multer.js";
import validate from "../validation/validation-middleware.js";
import banner from "../validation/banner.validation.js";

router.post("/", upload.single("image"), createBanner);
router.put("/:id", updateBanner);
router.get("/", getAllBanner);
router.delete("/:id", deleteBanner);

export default router;

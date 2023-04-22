import { Router } from "express";
const router = Router();
import { createBanner, deleteBanner, getAllBanner, getSingleBanner, updateBanner } from "../controllers/banner.controller.js";
import upload from "../middlewares/multer.js";
import validate from "../validation/validation-middleware.js";
import banner from "../validation/banner.validation.js";

router.post("/", upload.single("image"), createBanner);
router.patch("/:id", upload.single("image"), updateBanner);
router.get("/", getAllBanner);
router.get("/:id", getSingleBanner);
router.delete("/:id", deleteBanner);

export default router;

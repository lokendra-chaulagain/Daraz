import cloudinary from "../config/cloudinaryConfig.js";
import { uploadSingleFile } from "../middlewares/uploadSingleFile.js";
import Banner from "../models/Banner.js";
import createError from "../utils/error.js";

const createBanner = async (req, res, next) => {
  try {
    const image = req.file;
    const imageUrl = await uploadSingleFile(image);
    const banner = new Banner({ ...req.body, image: imageUrl });
    const savedBanner = await banner.save();
    res.status(201).json(savedBanner);
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const updateBanner = async (req, res, next) => {
  try {
    const updatedBanner = await Banner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBanner);
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const deleteBanner = async (req, res, next) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ msg: "Banner not found" });
    }
    const imageUrl = banner.image;
    const publicId = imageUrl.split("/").slice(-2).join("/").split(".")[0];
    const result = await cloudinary.uploader.destroy(publicId);
    console.log(result);
    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Deleted Successfully",
      file_deleted_from_cloudinary_status: result.result,
      success: true,
      deletedBanner,
    });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const getAllBanner = async (req, res, next) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

export { createBanner, updateBanner, deleteBanner, getAllBanner };

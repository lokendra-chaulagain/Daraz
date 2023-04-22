import cloudinary from "../config/cloudinaryConfig.js";
import { uploadSingleFile } from "../middlewares/uploadSingleFile.js";
import Banner from "../models/Banner.js";
import multer from "multer";

export const createBanner = async (req, res) => {
  try {
    const image = req.file;
    const imageUrl = await uploadSingleFile(image);

    const banner = new Banner({ ...req.body, image: imageUrl });
    const savedBanner = await banner.save();

    res.status(201).json({
      msg: "Create success",
      success: true,
      file_upload: imageUrl && "ok",
      data: savedBanner,
    });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      // Handle Multer errors
      res.status(400).json({
        success: false,
        message: "Invalid file uploaded",
        error: error.message,
      });
    } else if (error.name === "ValidationError") {
      // Handle validation errors
      res.status(400).json({
        success: false,
        message: "Validation error occurred",
        error: error.message,
      });
    } else {
      // Handle all other errors
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  }
};

export const updateBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ success: false, msg: "Banner not found" });
    }

    const previousImageUrl = banner.image;
    const publicId = previousImageUrl.split("/").slice(-2).join("/").split(".")[0];

    let previousImageDeleted;
    try {
      previousImageDeleted = await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: "Something went wrong while deleting previous image from Cloudinary",
      });
    }

    const imageUrl = await uploadSingleFile(req.file);

    const updatedBanner = await Banner.findByIdAndUpdate(req.params.id, { ...req.body, image: imageUrl }, { new: true });
    res.status(200).json({
      msg: "Update success",
      success: true,
      previous_file_delete: previousImageDeleted.result,
      current_file_upload: imageUrl && "ok",
      data: updatedBanner,
    });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      // Handle Multer errors
      res.status(400).json({
        success: false,
        message: "Invalid file uploaded",
        error: error.message,
      });
    } else {
      return res.status(500).json({
        success: false,
        msg: "Something went wrong",
      });
    }
  }
};

export const deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ success: false, msg: "Banner not found" });
    }

    const imageUrl = banner.image;
    const publicId = imageUrl.split("/").slice(-2).join("/").split(".")[0];

    let result;
    try {
      result = await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: "Something went wrong while deleting image from Cloudinary",
      });
    }

    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      msg: "Deleted success",
      file_delete: result.result,
      data: deletedBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
    });
  }
};

export const getSingleBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ success: false, msg: "Banner not found" });
    }

    return res.status(200).json({ success: true, msg: "Get success", data: banner });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

export const getAllBanner = async (req, res) => {
  try {
    const banners = await Banner.find();
    return res.status(200).json({ success: true, msg: "Get success", data: banners });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

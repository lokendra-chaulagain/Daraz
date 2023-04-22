import { uploadSingleFile } from "../middlewares/uploadSingleFile.js";
import generateSlug from "../utils/generateSlug.js";
import MiniCategory from "../models/MiniCategory.js";
import cloudinary from "../config/cloudinaryConfig.js";
import multer from "multer";

export const createMiniCategory = async (req, res) => {
  try {
    const slug = generateSlug(req.body.name);
    const imageUrl = await uploadSingleFile(req.file);

    const miniCategory = new MiniCategory({ ...req.body, slug: slug, image: imageUrl });
    const savedMiniCategory = await miniCategory.save();
    res.status(201).json({
      msg: "Create Success",
      success: true,
      file_upload: imageUrl && "ok",
      data: savedMiniCategory,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        msg: "Duplicate name or slug",
        success: false,
        error: error.message,
      });
    } else if (error instanceof multer.MulterError) {
      // Handle Multer errors
      res.status(400).json({
        success: false,
        message: "Invalid file uploaded",
        error: error.message,
      });
    } else {
      res.status(500).json({
        msg: "Something went wrong",
        success: false,
        error: error.message,
      });
    }
  }
};

export const updateMiniCategory = async (req, res) => {
  try {
    const miniCategory = await MiniCategory.findById(req.params.id);
    if (!miniCategory) {
      return res.status(404).json({ success: false, msg: "MiniCategory not found" });
    }

    const previousImageUrl = miniCategory.image;
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

    let slug = miniCategory.slug;
    if (req.body.name) {
      slug = generateSlug(req.body.name);
    }

    const updatedMiniCategory = await MiniCategory.findByIdAndUpdate(req.params.id, { ...req.body, slug: slug, image: imageUrl }, { new: true });
    res.status(200).json({
      msg: "Update success",
      success: true,
      previous_file_delete: previousImageDeleted.result,
      current_file_upload: imageUrl && "ok",
      data: updatedMiniCategory,
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

export const deleteMiniCategory = async (req, res) => {
  try {
    const miniCategory = await MiniCategory.findById(req.params.id);
    if (!miniCategory) {
      return res.status(404).json({ success: false, msg: "MiniCategory not found" });
    }

    const imageUrl = miniCategory.image;
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

    const deletedMiniCategory = await MiniCategory.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      msg: "Deleted success",
      file_delete: result.result,
      data: deletedMiniCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
    });
  }
};

export const getMiniCategoryBySlug = async (req, res) => {
  try {
    const miniCategory = await MiniCategory.findOne({ slug: req.params.slug });
    if (!miniCategory) {
      return res.status(404).json({ success: false, msg: "MiniCategory not found" });
    }
    return res.status(200).json({ success: true, msg: "Get success", data: miniCategory });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

export const getAllMiniCategory = async (req, res) => {
  try {
    const miniCategories = await MiniCategory.find()
      .populate({
        path: "category",
        model: "Category",
      })
      .populate({
        path: "subCategory",
        model: "SubCategory",
      });
    return res.status(200).json({ success: true, msg: "Get success", data: miniCategories });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

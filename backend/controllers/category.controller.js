import cloudinary from "../config/cloudinaryConfig.js";
import { uploadSingleFile } from "../middlewares/uploadSingleFile.js";
import Category from "../models/Category.js";
import generateSlug from "../utils/generateSlug.js";
import multer from "multer";

export const createCategory = async (req, res) => {
  try {
    const slug = generateSlug(req.body.name);
    const imageUrl = await uploadSingleFile(req.file);

    const category = new Category({ ...req.body, slug: slug, image: imageUrl });
    const savedCategory = await category.save();

    res.status(201).json({
      msg: "Create success",
      success: true,
      file_upload: imageUrl && "ok",
      savedCategory,
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

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, msg: "Category not found" });
    }

    const previousImageUrl = category.image;
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

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { ...req.body, image: imageUrl }, { new: true });
    res.status(200).json({
      msg: "Update success",
      success: true,
      previous_file_delete: previousImageDeleted.result,
      current_file_upload: imageUrl && "ok",
      data: updatedCategory,
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

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, msg: "Category not found" });
    }

    const imageUrl = category.image;
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

    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      msg: "Deleted success",
      file_delete: result.result,
      data: deletedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
    });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ success: true, msg: "Get success", data: categories });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

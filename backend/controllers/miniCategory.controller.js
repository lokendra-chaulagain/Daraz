import { uploadSingleFile } from "../middlewares/uploadSingleFile.js";
import createError from "../utils/error.js";
import generateSlug from "../utils/generateSlug.js";
import MiniCategory from "../models/MiniCategory.js";

export const createMiniCategory = async (req, res) => {
  try {
    const slug = generateSlug(req.body.name);
    const imageUrl = await uploadSingleFile(req.file);

    const miniCategory = new MiniCategory({ ...req.body, slug: slug, image: imageUrl });
    const savedMiniCategory = await miniCategory.save();
    res.status(201).json({
      msg: "Create Success",
      success: true,
      savedMiniCategory,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        msg: "Duplicate Name or Slug",
        success: false,
        error: error.message,
      });
    } else {
      res.status(500).json({
        msg: "Something Went Wrong",
        success: false,
        error: error.message,
      });
    }
  }
};

export const updateMiniCategory = async (req, res, next) => {
  try {
    const updatedMiniCategory = await miniCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedMiniCategory);
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

export const deleteMiniCategory = async (req, res, next) => {
  try {
    const deletedMiniCategory = await MiniCategory.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Deleted Successfully",
      success: true,
      deletedMiniCategory,
    });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

export const getAllMiniCategory = async (req, res, next) => {
  try {
    const miniCategories = await MiniCategory.find();
    const totalMiniCategories = await MiniCategory.countDocuments();
    res.status(200).json({ msg: "Fetched Success", success: true, totalMiniCategories, miniCategories });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

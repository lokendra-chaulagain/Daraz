import MiniCategory from "../models/MiniCategory.js";
import createError from "../utils/error.js";

const createMiniCategory = async (req, res, next) => {
  try {
    const miniCategory = new MiniCategory(req.body);
    const savedMiniCategory = await miniCategory.save();
    res.status(201).json({
      msg: "Create Success",
      success: true,
      savedMiniCategory,
    });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const updateMiniCategory = async (req, res, next) => {
  try {
    const updatedMiniCategory = await miniCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedMiniCategory);
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const deleteMiniCategory = async (req, res, next) => {
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

const getAllMiniCategory = async (req, res, next) => {
  try {
    const miniCategories = await MiniCategory.find();
    const totalMiniCategories = await MiniCategory.countDocuments();
    res.status(200).json({ msg: "Fetched Success", success: true, totalMiniCategories, miniCategories });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

export { createMiniCategory, updateMiniCategory, deleteMiniCategory, getAllMiniCategory };

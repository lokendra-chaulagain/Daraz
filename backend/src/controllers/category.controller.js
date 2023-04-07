import Category from "../models/Category.js";
import createError from "../utils/error.js";

const createCategory = async (req, res, next) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.status(201).json({
      msg: "Create Success",
      success: true,
      savedCategory,
    });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Deleted Successfully",
      success: true,
      deletedCategory,
    });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    const totalCategories = await Category.countDocuments();
    res.status(200).json({ msg: "Fetched Success", success: true, totalCategories, categories });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

export { createCategory, updateCategory, deleteCategory, getAllCategory };

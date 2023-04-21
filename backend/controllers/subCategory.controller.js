import SubCategory from "../models/SubCategory.js";
import createError from "../utils/error.js";

const createSubCategory = async (req, res, next) => {
  try {
    const subCategory = new SubCategory(req.body);
    const savedSubCategory = await subCategory.save();
    res.status(201).json({
      msg: "Create Success",
      success: true,
      savedSubCategory,
    });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const updateSubCategory = async (req, res, next) => {
  try {
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedSubCategory);
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const deleteSubCategory = async (req, res, next) => {
  try {
    const deletedSubCategory = await SubCategory.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Deleted Successfully",
      success: true,
      deletedSubCategory,
    });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

const getAllSubCategory = async (req, res, next) => {
  try {
    const categoryId = req.query.categoryId;
    console.log(categoryId);
    // const subCategories = await SubCategory.find({categoryId:categoryId});

    const subCategories = await SubCategory.find();
    const totalSubCategories = await SubCategory.countDocuments();
    res.status(200).json({ msg: "Fetched Success", success: true, subCategories });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

export { createSubCategory, updateSubCategory, deleteSubCategory, getAllSubCategory };

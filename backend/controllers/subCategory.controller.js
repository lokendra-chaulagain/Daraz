import mongoose from "mongoose";
import SubCategory from "../models/SubCategory.js";
import createError from "../utils/error.js";
import slugify from "slugify";
import generateSlug from "../utils/generateSlug.js";

const createSubCategory = async (req, res, next) => {
  try {
    const slug = generateSlug(req.body.name);

    const subCategory = new SubCategory({ ...req.body, slug: slug });
    const savedSubCategory = await subCategory.save();
    res.status(201).json({
      msg: "Create Success",
      success: true,
      savedSubCategory,
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
    const subCategories = await SubCategory.find();
    res.status(200).json({ msg: "Fetched Success", success: true, subCategories });
  } catch (error) {
    return next(createError(500, "Something Went Wrong"));
  }
};

export { createSubCategory, updateSubCategory, deleteSubCategory, getAllSubCategory };

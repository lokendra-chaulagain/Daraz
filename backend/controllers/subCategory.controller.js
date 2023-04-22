import SubCategory from "../models/SubCategory.js";
import generateSlug from "../utils/generateSlug.js";

export const createSubCategory = async (req, res, next) => {
  try {
    const slug = generateSlug(req.body.name);

    const subCategory = new SubCategory({ ...req.body, slug: slug });
    const savedSubCategory = await subCategory.save();

    res.status(201).json({
      msg: "Create Success",
      success: true,
      data: savedSubCategory,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        msg: "Duplicate name or slug",
        success: false,
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

export const updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) {
      return res.status(404).json({ success: false, msg: "SubCategory not found" });
    }

    const slug = generateSlug(req.body.name);

    const updatedSubCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      { ...req.body, slug: slug },
      {
        new: true,
      }
    );

    return res.status(200).json({
      msg: "Update success",
      success: true,
      data: updatedSubCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
    });
  }
};

export const deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) {
      return res.status(404).json({ success: false, msg: "SubCategory not found" });
    }

    const deletedSubCategory = await SubCategory.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      msg: "Deleted success",
      success: true,
      data: deletedSubCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
    });
  }
};

export const getAllSubCategory = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    return res.status(200).json({ success: true, msg: "Get success", data: subCategories });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

import Banner from "../models/Banner.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createBanner = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }

    const banner = new Banner(data);
    const savedBanner = await banner.save();
    res.status(201).json({
      msg: "Create Success",
      success: true,
      savedBanner,
    });
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
    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Deleted Successfully",
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

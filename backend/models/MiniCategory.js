import mongoose from "mongoose";

const activeStatusEnum = ["active", "inActive"];
const miniCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },

    activeStatus: {
      type: String,
      enum: activeStatusEnum,
      default: "inActive",
    },
  },
  { timestamps: true }
);

export default mongoose.model("MiniCategory", miniCategorySchema);

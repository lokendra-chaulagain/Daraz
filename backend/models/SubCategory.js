import mongoose from "mongoose";

const activeStatusEnum = ["active", "inActive"];
const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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

    activeStatus: {
      type: String,
      enum: activeStatusEnum,
      default: "inActive",
    },
  },
  { timestamps: true }
);

export default mongoose.model("SubCategory", subCategorySchema);

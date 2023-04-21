import mongoose from "mongoose";

const miniCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("MiniCategory", miniCategorySchema);

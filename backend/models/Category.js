import mongoose from "mongoose";

const activeStatusEnum = ["active", "inActive"];
const categorySchema = new mongoose.Schema(
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

    image: {
      type: String,
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

export default mongoose.model("Category", categorySchema);

import mongoose from "mongoose";

const activeStatusEnum = ["active", "inActive"];
const bannerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    activeStatus: {
      type: String,
      enum: activeStatusEnum,
      default: "inActive",
    },

    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Banner", bannerSchema);

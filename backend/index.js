import express from "express";
const app = express();
import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import cors from "cors";
import bannerRoute from "./routes/banner.route.js";
import categoryRoute from "./routes/category.route.js";
import subCategoryRoute from "./routes/subCategory.route.js";
import miniCategoryRoute from "./routes/miniCategory.route.js";
import validate from "./validation/validation-middleware.js";

const port = process.env.PORT;
app.use(express.json());
app.use(cors());

//DbConnection
mongoose
  .connect(process.env.MONGO_DB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("MongoDb connected successfully !");
  })
  .catch((error) => {
    console.log("MondoDb Disconnected !!!", error);
  });

//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the server" });
});


app.use("/api/banner", bannerRoute);
app.use("/api/category", categoryRoute);
app.use("/api/subCategory", subCategoryRoute);
app.use("/api/miniCategory", miniCategoryRoute);


//portListening
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});

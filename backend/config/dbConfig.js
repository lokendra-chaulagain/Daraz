import dotenv from "dotenv";
dotenv.config();

// Configure db
db.config({
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  PORT: process.env.PORT,
});

export default db;

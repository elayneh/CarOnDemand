import mongoose from "mongoose";
require("dotenv").config();

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/MernBoilerPlateDatabase";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Cannot connect to MongoDB:", error);
  }
};

export const mongoConnection = connectToMongoDB();

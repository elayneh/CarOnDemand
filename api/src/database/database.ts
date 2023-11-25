import mongoose from "mongoose";

export const mongoConnection = mongoose.connect(
  process.env.MONGODB_URI ||
    "MernBoilerPlate:MernBoilerPlatePassword@cluster0.wko3ywv.mongodb.net/?retryWrites=true&w=majority"
);

import express from "express";
import dotenv from "dotenv";
import { mongoConnection } from "./database/database";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const cookieParser = require("cookie-parser");
const router = require("./routes/userRoutes");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(router);

// mongoConnection;
mongoose.connect(
  // process.env.MONGODB_URI ||
  "mongodb://localhost:27017/MernBoilerPlateDatabase"
  // {
  //   // useNewUrlParser: true,
  //   // useUnifiedTopology: true,
  // }
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

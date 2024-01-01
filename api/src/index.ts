import express from "express";
import { mongoConnection } from "./database/database";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
const cookieParser = require("cookie-parser");
const router = require("./routes/userRoutes");
require("dotenv").config();

const PORT = process.env.PORT ?? null;
const BASE_URL = process.env.BASE_URL ?? "";
app.use(
  cors({
    origin: "*",
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(router);

mongoConnection;
app.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}:${PORT}`);
});

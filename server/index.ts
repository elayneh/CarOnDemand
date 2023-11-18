import express, { Express, Request, Response, Application } from "express";
const { graphqlHTTP } = require("express-graphql");
import { connectToDatabase } from "./database/database";
const schema = require("./graphql/schema");
const cors = require("cors");
const dotenv = require("dotenv");
//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/graphql`);
  connectToDatabase();
});

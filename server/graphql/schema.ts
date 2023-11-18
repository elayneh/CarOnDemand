const { makeExecutableSchema } = require("@graphql-tools/schema");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const fs = require("fs");
const path = require("path");

// Read type definitions from files
const userTypeDefs = fs.readFileSync(
  path.join(__dirname, "/schemas/userTypeDefs.graphql"),
  "utf-8"
);

// const rootTypeDefs = fs.readFileSync(
//   path.join(__dirname, "/schemas/rootTypeDefs.graphql"),
//   "utf-8"
// );
const userResolvers = require("./resolvers/userResolvers");

// Merge type definitions
const mergedTypeDefs = mergeTypeDefs([userTypeDefs]);

// Merge resolvers
const mergedResolvers = mergeResolvers([userResolvers]);

// Create executable schema
const schema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

module.exports = schema;

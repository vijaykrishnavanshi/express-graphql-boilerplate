const dotenv = require("dotenv");
dotenv.config();

const logger = require("./utils/logger");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
console.log("typeDefs: ", typeDefs);
const server = new ApolloServer({ typeDefs, resolvers });

const app = require("./app");

server.applyMiddleware({ app });

// Here you set the PORT and IP of the server
const port = process.env.PORT || 8001;
const ip = process.env.IP || "127.0.0.1";

app.listen({ port, ip }, () =>
  logger.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

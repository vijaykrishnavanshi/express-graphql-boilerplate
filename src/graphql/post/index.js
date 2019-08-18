const Query = require("./Query");
const Mutation = require("./Mutation");

const typeDefs = [Query.typeDefs, Mutation.typeDefs].join("\n");

const resolvers = {
  Query: Query.resolvers,
  Mutation: Mutation.resolvers
};

module.exports = {
  typeDefs,
  resolvers
};

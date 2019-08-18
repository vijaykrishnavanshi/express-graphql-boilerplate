const Query = require('./Query');

const typeDefs = [Query.typeDefs].join('\n');

const resolvers = {
  Query: Query.resolvers
};

module.exports = {
  typeDefs,
  resolvers
};

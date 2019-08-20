// Construct a schema, using GraphQL schema language
const typeDefs = `
  extend type Mutation {
    user_update: String!
  }
`;

const resolvers = {
  user_update: require('./user_update'),
};

module.exports = {
  typeName: 'Mutation',
  typeDefs,
  resolvers,
};

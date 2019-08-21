// Construct a schema, using GraphQL schema language
const typeDefs = `
  type User {
    name: String!
    email: String!
  }
`;

const resolvers = {};

module.exports = {
  typeName: 'User',
  typeDefs,
  resolvers,
};

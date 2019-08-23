// Construct a schema, using GraphQL schema language
const typeDefs = `
  type AuthPayload {
    token: String!
  }
`;

const resolvers = {};

module.exports = {
  typeName: 'AuthPayload',
  typeDefs,
  resolvers,
};

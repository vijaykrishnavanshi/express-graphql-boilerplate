// Construct a schema, using GraphQL schema language
const typeDefs = `
  extend type Query {
    user_hello: String!
  }
`;

module.exports = typeDefs;

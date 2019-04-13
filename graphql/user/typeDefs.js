const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    user_hello: String!
  }
`;

module.exports = typeDefs;

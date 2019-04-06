const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    user: String!
  }
`;

module.exports = typeDefs;

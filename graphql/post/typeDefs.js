const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    post_hello: String!
  }
`;

module.exports = typeDefs;

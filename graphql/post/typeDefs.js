// Construct a schema, using GraphQL schema language
const typeDefs = `
  extend type Query {
    post_hello: String!
  }
  extend type Mutation {
    post_update: String!
  }
`;

module.exports = typeDefs;

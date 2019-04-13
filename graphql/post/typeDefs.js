// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    post_hello: String!
  }
  type Mutation {
    post_update: String!
  }
`;

module.exports = typeDefs;

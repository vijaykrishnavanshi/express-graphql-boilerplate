// Construct a schema, using GraphQL schema language
const typeDefs = `
  extend type Mutation {
    post_update: String!
  }
`;

const resolvers = {
  post_update: require('./post_update'),
};

module.exports = {
  typeName: 'Mutation',
  typeDefs,
  resolvers,
};

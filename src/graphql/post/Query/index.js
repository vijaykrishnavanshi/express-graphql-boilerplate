const typeDefs = `
  extend type Query {
    post_hello: String!
  }
`;

const resolvers = {
  post_hello: require('./post_hello')
};

module.exports = {
  typeDefs,
  resolvers
};

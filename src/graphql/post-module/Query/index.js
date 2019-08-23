const typeDefs = `
  extend type Query {
    post_list: [Post!]!
    post_get(postId: String!): Post!
  }
`;

const resolvers = {
  post_list: require('./post_list'),
  post_get: require('./post_get'),
};

module.exports = {
  typeName: 'Query',
  typeDefs,
  resolvers,
};

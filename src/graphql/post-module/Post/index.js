// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Post {
    title: String!
    body: String!
    createdAt: Int!
    createdBy: User!
    updatedAt: Int!
  }
`;

const resolvers = {
  createdBy: require('./createdBy'),
};

module.exports = {
  typeName: 'Post',
  typeDefs,
  resolvers,
};

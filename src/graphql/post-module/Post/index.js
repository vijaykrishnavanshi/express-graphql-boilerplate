// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Post {
    _id: String!
    title: String!
    body: String!
    createdAt: Int!
    createdBy: User! @authenticated
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

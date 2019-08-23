// Construct a schema, using GraphQL schema language
const typeDefs = `
  input PostForm {
    title: String!
    body: String!
  }

  extend type Mutation {
    post_create(postForm: PostForm!): Post!
    post_update: String!
  }
`;

const resolvers = {
  post_create: require('./post_create'),
  post_update: require('./post_update'),
};

module.exports = {
  typeName: 'Mutation',
  typeDefs,
  resolvers,
};

// Construct a schema, using GraphQL schema language
const typeDefs = `
  input SignupForm {
    name: String!
    email: String!
    password: String!
  }
  extend type Mutation {
    user_signup(signupForm: SignupForm!): User!
  }
`;

const resolvers = {
  user_signup: require('./user_signup'),
};

module.exports = {
  typeName: 'Mutation',
  typeDefs,
  resolvers,
};

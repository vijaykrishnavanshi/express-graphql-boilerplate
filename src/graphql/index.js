const { merge } = require('lodash');
const baseModule = {};
baseModule.typeDefs = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;
baseModule.resolvers = {};

const modules = [
  baseModule,
  require('./user'),
  require('./post'),
  // Modules
];

const typeDefs = modules.map(internalModule => internalModule.typeDefs);
const resolvers = modules.map(internalModule => internalModule.resolvers);

module.exports = {
  typeDefs: typeDefs,
  resolvers: merge(...resolvers),
};

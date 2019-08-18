const { merge } = require('lodash');
const userModule = require('./user');
const postModule = require('./post');
const baseTypeDefs = `
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

module.exports = {
  typeDefs: [baseTypeDefs, postModule.typeDefs, userModule.typeDefs],
  resolvers: merge(postModule.resolvers, userModule.resolvers),
};

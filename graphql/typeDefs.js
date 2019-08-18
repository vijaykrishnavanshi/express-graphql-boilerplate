const baseSchema = `
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

const post_typeDefs = require("./post/typeDefs");
const user_typeDefs = require("./user/typeDefs");

module.exports = [baseSchema, post_typeDefs, user_typeDefs];

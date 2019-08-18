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

const postSchema = require("./post/typeDefs");
const userSchema = require("./user/schema");

module.exports = [baseSchema, postSchema, userSchema];

const { mergeTypes } = require("merge-graphql-schemas");
const post_typeDefs = require("./post/typeDefs");
const user_typeDefs = require("./user/typeDefs");
module.exports = mergeTypes([post_typeDefs, user_typeDefs]);

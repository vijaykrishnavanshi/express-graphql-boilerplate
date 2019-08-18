const { merge } = require("lodash");
const post_resolvers = require("./post/resolver");
const user_resolvers = require("./user/resolver");

module.exports = merge(post_resolvers, user_resolvers);

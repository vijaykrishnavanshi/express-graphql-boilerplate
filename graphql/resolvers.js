const { merge } = require('lodash'); 
const post_resolvers = require('./post/resolvers');
const user_resolvers = require('./user/resolvers');

module.exports = merge(post_resolvers, user_resolvers);

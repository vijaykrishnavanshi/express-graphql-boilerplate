const user = require('./query/user');

const Resolvers = {
    Query: {
        user: user
    },
};

module.exports = Resolvers;

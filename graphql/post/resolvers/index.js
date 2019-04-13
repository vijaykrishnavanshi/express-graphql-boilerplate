const hello = require('./query/hello');

const Resolvers = {
    Query: {
        post_hello: hello
    },
};

module.exports = Resolvers;

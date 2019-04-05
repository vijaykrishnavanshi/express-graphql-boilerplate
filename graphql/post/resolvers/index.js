const hello = require('./query/hello');

const Resolvers = {
    Query: {
        hello: hello
    },
};

module.exports = Resolvers;

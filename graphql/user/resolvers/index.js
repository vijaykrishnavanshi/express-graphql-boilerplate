const hello = require("./query/hello");

const Resolvers = {
  Query: {
    user_hello: hello
  }
};

module.exports = Resolvers;

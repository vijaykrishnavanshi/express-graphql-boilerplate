const hello = require("./query/hello");
const update = require("./mutation/update");

const Resolvers = {
  Query: {
    post_hello: hello
  },
  Mutation: {
    post_update: update
  }
};

module.exports = Resolvers;

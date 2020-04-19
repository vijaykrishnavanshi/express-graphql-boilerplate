const queryGenerator = require('./queryGenerator');
const mutationGenerator = require('./mutationGenerator');
const subscriptionGenerator = require('./subscriptionGenerator');
const typeGenerator = require('./typeGenerator');

module.exports = function (plop) {
  queryGenerator(plop);
  mutationGenerator(plop);
  subscriptionGenerator(plop);
  typeGenerator(plop);
};

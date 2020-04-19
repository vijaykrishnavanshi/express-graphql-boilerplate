const queryGenerator = require('./queryGenerator');
const mutationGenerator = require('./mutationGenerator');
const subscriptionGenerator = require('./subscriptionGenerator');
const typeGenerator = require('./typeGenerator');
const scalarGenerator = require('./scalarGenerator');
const directiveGenerator = require('./directiveGenerator');

module.exports = function (plop) {
  queryGenerator(plop);
  mutationGenerator(plop);
  subscriptionGenerator(plop);
  typeGenerator(plop);
  scalarGenerator(plop);
  directiveGenerator(plop);
};

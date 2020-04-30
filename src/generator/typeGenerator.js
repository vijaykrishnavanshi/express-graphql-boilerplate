const { delayLog } = require('./helpers/utils');

module.exports = function (plop) {
  // type generator
  plop.setGenerator('Type', {
    description: 'GraphQL Type Logic',
    prompts: [
      {
        type: 'checkbox',
        name: 'toppings',
        message: 'What pizza toppings do you like?',
        choices: [
          { name: 'Cheese', value: 'cheese', checked: true },
          { name: 'Pepperoni', value: 'pepperoni' },
          { name: 'Pineapple', value: 'pineapple' },
          { name: 'Mushroom', value: 'mushroom' },
          { name: 'Bacon', value: 'bacon', checked: true },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Module Name please: ',
      },
    ],
    actions: [
      'this is another comment',
      delayLog('delayed thing'),
      delayLog('another delayed thing'),
      delayLog('this was also delayed'),
      //   {
      //     type: 'add',
      //     path: 'src/{{name}}.js',
      //     templateFile: 'src/generator/plop-templates/controller.hbs',
      //   },
    ],
  });
};

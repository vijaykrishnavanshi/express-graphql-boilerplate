module.exports = function (plop) {
  const delayLog = (msg) => () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(msg), 1000);
    });
  // query generator
  plop.setGenerator('Query', {
    description: 'GraphQL Query Logic',
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

  // query generator
  plop.setGenerator('Mutation', {
    description: 'GraphQL Mutation Logic',
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
    ],
  });
};

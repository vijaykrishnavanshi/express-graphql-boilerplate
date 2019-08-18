const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'template-service',
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      type: 'rotating-file',
      level: 'info',
      path: 'log/boilerplate-debug.log',
      period: '1d', // daily rotation
      count: 10 // keep 10 back copies
    },
    {
      type: 'rotating-file',
      level: 'error',
      path: 'log/boilerplate-error.log',
      period: '1d', // daily rotation
      count: 10 // keep 10 back copies
    }
  ]
});

module.exports = logger;

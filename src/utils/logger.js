const bunyan = require('bunyan');
const config = require('../../config');

const logger = bunyan.createLogger({
  name: config.serviceName,
  streams: [
    {
      level: 'debug',
      stream: process.stdout,
    },
    {
      type: 'rotating-file',
      level: 'info',
      path: `logs/${config.serviceName}-debug.log`,
      period: '1d', // daily rotation
      count: 10, // keep 10 back copies
    },
    {
      type: 'rotating-file',
      level: 'error',
      path: `logs/${config.serviceName}-error.log`,
      period: '1d', // daily rotation
      count: 10, // keep 10 back copies
    },
  ],
});

module.exports = logger;

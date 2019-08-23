const dotenv = require('dotenv');
dotenv.config();
const config = process.env;
config.serviceName = config.serviceName || 'template-service';
module.exports = config;

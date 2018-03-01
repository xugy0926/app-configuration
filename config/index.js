const isProduction = process.env.NODE_ENV === 'production' ? true : false;
let config = isProduction ? require('./config.pro') : require('./config.dev');
config.isProduction = isProduction;

module.exports = config;
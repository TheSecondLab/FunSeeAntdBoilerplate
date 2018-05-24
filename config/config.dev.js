const baseConfig = require('./config.base');

export default {
  ...baseConfig,
  log4js: {
    appenders: {
      errorLogger: {
        type: 'console',
        level: 'ERROR'
      },
      resLogger: {
        type: 'console'
      }
    },
    categories: {
      default: {appenders:['errorLogger', 'resLogger'], level: 'ALL'}
    }
  }
};
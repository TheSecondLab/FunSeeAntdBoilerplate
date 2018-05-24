// determine which global config should be use due to NODE_ENV
module.exports = process.env.DEPLOY_ENV !== 'dev'
  ? require('./config.prd')
  : require('./config.dev');

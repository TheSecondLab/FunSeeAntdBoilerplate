const path = require('path');
const serviceConfig = require('./serviceConfig');

const LOCAL_HOST = '127.0.0.1';
const LOCAL_PORT = process.env.port || 8080;

export default {
  // node env
  Local: {
    host: LOCAL_HOST,
    port: LOCAL_PORT,
    domain: `http://${LOCAL_HOST}:${LOCAL_PORT}`
  },

  // service env
  // Service: serviceConfig,

  // cached data
  cache: [
    {
      name: 'all staff',
      path: '/api/user/findAllStaff',
      serviceUrl: 'flyingPhoenixApi',
      servicePath: '/api/security/user/findAllStaff',
      method: 'post'
    }, {
      name: 'allCity',
      path: '/api/dynamicDetailQuery/getCity',
      serviceUrl: 'zaAutoPricing',
      servicePath: '/za-eva/flightDomesticInfo/find/citySearch',
      method: 'post',
      data: { isInter: 'N' }
    }],

  // login related
  login: {
    sso: {
      host: 'nsso.zhonganonline.com',
      loginUrl: '/login',
      logoutUrl: '/logout',
      validateUrl: '/validate',
      service: 'flying-phoenix'
    },
    cookie: {
      cookie4user: '_sso_user',
      cookie4userNameCN: 'sso_user_name_cn',
      cookie4userName: 'sso_user_name',
      expireTime: 360000000,
      email: 'sso_user_email'
    },
    excludePath4LoginCheck: [/^\/error/, '/health', '/env', '/api/logout', '/favicon.ico', '/__webpack_hmr', /\.js$/, /\.css$/, /hot-update\.json$/],
    excludePath4AuthorityCheck: ['/', /^\/error/, /^\/api\//, '/health', '/env', '/favicon.ico', '/__webpack_hmr', /\.js$/, /\.css$/, /hot-update\.json$/]
  },

  // aes加密信息
  aes: {
    encodeKey: 'dEfAu1tS3cretKeY',
    ivs: '2624750004598718'
  }
};

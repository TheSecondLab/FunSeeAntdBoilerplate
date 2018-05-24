/**
 * ------------------------------------------------------------------
 * funsee-smart server router config
 *
 * @fixed format
 * {
 *    moduleName: {
 *      serviceName: service anme,
 *      operationMode:  service path
 *    }
 * }
 *
 * ------------------------------------------------------------------
 */

module.exports = {
  // 赔案查询
  subClaimSearch: {
    serviceName: 'zaNina',
    path: {
      select: '/za-nina/tac/tacClaimWeb/queryClaimPage',
      update: '',
      insert: '',
      delete: ''
    }
  }
};



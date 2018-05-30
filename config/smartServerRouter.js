/**
 * ------------------------------------------------------------------
 * funsee-smart server router config
 *
 * @fixed format
 * {
 *    moduleName: {
 *      serviceName: service anme,
 *      path: {
 *         requestType: path
 *      }
 *    }
 * }
 *
 * ------------------------------------------------------------------
 */

module.exports = {
  subClaimSearch: {
    serviceName: 'default',
    path: {
      select: '/test',
      update: '/update',
      insert: '/insert',
      delete: '/delete'
    }
  }
};


module.exports = {
  responseFormatter: (response) => {
    const { totalCount, pageSize, pageNum } = response;
    response.extraInfo = {
      totalCount,
      pageNum,
      pageSize
    };
    delete response.totalCount;
    delete response.pageNum;
    delete response.pageSize;

    return response;
  },
  // 赔案查询
  serverRouter: {
    requireTask: {
      serviceName: 'default',
      path: {
        select: '/task/findPage',
        update: '/task/updateByPrimaryKey',
        insert: '/task/create',
        delete: '/task/deleteByPrimaryKey'
      }
    }
  }

};

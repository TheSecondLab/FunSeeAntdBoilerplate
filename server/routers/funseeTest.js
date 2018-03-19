
/**
 * 函数功能简述
 *
 * 定义页面路由
 *
 * @param    {Object}  router     router
 * @param    {String}  prefix     前置路由名称（实为此文件文件名）
 * @returns  {Array}
 *
 * @date     2018-2-28
 * @author   zhaoxing<jiyiwohanxing@gmail.com>
 */
const testRouter = router => ([
  router.post('/wf'),
  router.get('/good', 'test.test1')
]);

module.exports = testRouter;

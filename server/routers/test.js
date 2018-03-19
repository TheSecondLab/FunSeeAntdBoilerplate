const testRouter = router => ([
  router.post('/zx', 'test.test1', { sd: '1' }),
  router.post('/god')
]);

module.exports = testRouter;

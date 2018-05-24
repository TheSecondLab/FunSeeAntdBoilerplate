import smartServerRouter from '../../config/smartServerRouter';

const smartRouterGenerator = router => Object.keys(smartServerRouter).map(moduleName => router.post(`/${moduleName}/:mode`, 'smartController.postSmart'));

const smartRouter = router => (smartRouterGenerator(router));

module.exports = smartRouter;

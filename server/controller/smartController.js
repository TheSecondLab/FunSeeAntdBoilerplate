/**
 * ------------------------------------------------------------------
 * 模块描述说明   funsee-smart Contollers
 * ------------------------------------------------------------------
 */
import smartServerRouter from '../../config/smartServerRouter';
import { funseeGet } from './commonController';

const postSmart = async (ctx, next) => {
  const { params: { mode } } = ctx;
  const { request: { path } } = ctx;
  const moduleName = path.split('/')[3];
  const routerConfig = smartServerRouter[moduleName];
  await funseeGet(routerConfig.path[mode], {}, routerConfig.serviceName)(ctx, next);
};

export default {
  postSmart
};


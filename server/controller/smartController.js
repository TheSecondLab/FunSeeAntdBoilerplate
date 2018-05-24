/**
 * ------------------------------------------------------------------
 * 模块描述说明   funsee-smart Contollers
 * ------------------------------------------------------------------
 */
import smartServerRouter from '../../config/smartServerRouter';
// import { postZa } from './commonController';

export const postSmart = async (ctx, next) => {
  const { params: { mode } } = ctx;
  const { request: { path } } = ctx;
  const moduleName = path.split('/')[3];
  const routerConfig = smartServerRouter[moduleName];
  // await postZa(routerConfig.path[mode], routerConfig.serviceName)(ctx, next);
};

export const smart = {};


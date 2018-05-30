/**
 * ------------------------------------------------------------------
 * 模块描述说明 Common  Controller
 * ------------------------------------------------------------------
 */
const funseePost = (path, options = {}, serviceName) => async (ctx, next) => {
  const funseeAjax = serviceName ? ctx.ajax.use(serviceName) : ctx.ajax;
  const result = await funseeAjax.post(path, options);
  ctx.status = 200;
  ctx.body = result;
  return next();
};

const funseeGet = (path, options = {}, serviceName) => async (ctx, next) => {
  const funseeAjax = serviceName ? ctx.ajax.use(serviceName) : ctx.ajax;
  const result = await funseeAjax.get(path, options);
  ctx.status = 200;
  ctx.body = result;
  return next();
};


export default {
  funseePost,
  funseeGet
};

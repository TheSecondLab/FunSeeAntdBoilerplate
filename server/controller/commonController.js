import config from '../../config';
import { commonService } from '../utils/service';
import { setSuccessRes, setErrorRes } from '../utils';
/**
 * ------------------------------------------------------------------
 * 模块描述说明 Common  Controller
 * ------------------------------------------------------------------
 */
const getPath = (path, ctx) => {
  if (typeof path !== 'string' || path === '') {
    return ctx.selfUrl;
  }
  return path;
};


const postZa = (path, domain = 'zaEval', attr) => async (ctx, next) => {
  const _path = getPath(path, ctx);
  const _userFromBE = ctx.cookies.get(config.login.cookie.cookie4userName);
  const data = ctx.request.body;

  const options = {
    domain,
    path: _path,
    data: {
      ...data,
      operator: _userFromBE
    },
    type: 'post',
    operator: _userFromBE
  };

  try {
    const result = await commonService(options);
    if (result.success) {
      if (!attr) {
        setSuccessRes(ctx, result.value, result);
      } else {
        ctx[attr] = result;
      }
    } else {
      setErrorRes(ctx, result.errorMsg, 200, result.errorCode, result.value);
    }

    return next();
  } catch (e) {
    console.log(e);
    ctx.status = 500;
    ctx.body = e;
  }
};

const req2Java = (path, domain, reqBody, attr) => async (ctx, next) => {
  const _path = getPath(path, ctx);
  const _userFromBE = ctx.cookies.get(config.login.cookie.cookie4userName);

  const options = {
    domain,
    path: _path,
    data: {
      ...reqBody,
      operator: _userFromBE
    },
    type: 'post',
    operator: _userFromBE
  };
  try {
    const result = await commonService(options);
    if (result.success) {
      if (!attr) {
        setSuccessRes(ctx, result.value, result);
      } else {
        ctx[attr] = result;
      }
    } else {
      setErrorRes(ctx, result.errorMsg, 200, result.errorCode, result.value);
    }

    return next();
  } catch (e) {
    console.log(e);
    ctx.status = 500;
    ctx.body = e;
  }
};

// 所有员工信息
const getAllStaffInfo = async (ctx) => {
  const options = {
    domain: config.cache[0].serviceUrl,
    path: config.cache[0].servicePath,
    data: ctx.request.body || {},
    type: config.cache[0].method
  };

  try {
    const result = await commonService(options);
    let tmp = [];

    if (options.data.userName) {
      result.value.forEach((item) => {
        if (item.userName.startsWith(options.data.userName.toLowerCase())) {
          tmp.push(item);
        }
      });
    } else {
      tmp = result.value;
    }
    ctx.status = 200;
    ctx.body = { success: true, value: tmp };
  } catch (e) {
    console.log(e);
    ctx.status = 500;
    ctx.body = e;
  }
};

export default {
  postZa, getAllStaffInfo, getPath, req2Java
};

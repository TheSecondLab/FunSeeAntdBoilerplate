import createRequestTypes from '../utils/actionCreator';

export const LOAD_ENV = createRequestTypes('LOAD_ENV');

export const loadEnv = () => ({ type: LOAD_ENV.REQUEST });
export const loadEnvSuccess = env => ({ type: LOAD_ENV.SUCCESS, payload: { env } });

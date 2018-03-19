import { LOAD_ENV } from './action';

export default function (state = {}, action) {
  switch (action.type) {
    case LOAD_ENV.SUCCESS:
      return {
        ...state,
        env: action.payload.env
      };
    default:
      return state;
  }
}

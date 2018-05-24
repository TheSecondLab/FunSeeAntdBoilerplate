import { smartReducer } from 'funsee-smart';
import { LOAD_ENV, LOGIN_SUCCESS, COM_SET_UI_PARAM, HIDE_LOADING, SHOW_LOADING, GET_MENU, MENU_TOGGLE, SHOW_MESSAGE } from './action';

export default {
  smart: smartReducer,
  common: function common(state = {
    menuInfo: [],
    menuMap: {},
    isFold: false
  }, action) {
    switch (action.type) {
      case LOAD_ENV.SUCCESS:
        return {
          ...state,
          env: action.payload.env
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          userName: action.payload.userName,
          userCName: action.payload.userCName
        };
      case COM_SET_UI_PARAM:
        return {
          ...state,
          [action.payload.key]: action.payload.value
        };
      case SHOW_LOADING:
        return {
          ...state,
          isFetching: true
        };
      case HIDE_LOADING:
        return {
          ...state,
          isFetching: false
        };
      case MENU_TOGGLE:
        return {
          ...state,
          isFold: !state.isFold
        };
      case SHOW_MESSAGE:
        return {
          ...state,
          msg: action.payload
        };
      default:
        return state;
    }
  }
};

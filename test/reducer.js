import { ADD_TODO } from './action';

export default function (state = { text: 'test text' }, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        // ...state,
        text: action.payload
      };
    default:
      return state;
  }
}

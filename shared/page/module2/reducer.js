import { ADD_TODO2 } from './action';

export default function (state = { text: 'test text2' }, action) {
  switch (action.type) {
    case ADD_TODO2:
      return {
        // ...state,
        text: action.payload
      };
    default:
      return state;
  }
}

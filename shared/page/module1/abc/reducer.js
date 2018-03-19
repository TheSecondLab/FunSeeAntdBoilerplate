import { ADD_TODO3 } from './action';

export default function (state = { text: 'test text3' }, action) {
  switch (action.type) {
    case ADD_TODO3:
      return {
        // ...state,
        text: action.payload
      };
    default:
      return state;
  }
}

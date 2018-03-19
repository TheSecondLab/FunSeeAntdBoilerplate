import React from 'react';
// import connect from '../../../../FunSee/lib/tool/connector';
// import {connector} from 'funsee';
import { TODO_ACTION3 } from './action';

const fn = () => {
  console.log('fn');
  TODO_ACTION3();
};

const Module1 = props => (
  <div>
    hellow 1112223
    <button onClick={props.TODO_ACTION3}>{props.test}</button>
  </div>
);

// export default connector((state) => {
//   console.log(state);
//   return {
//     test: state.module.module1_abc.text
//   };
// }, {
//   TODO_ACTION3
// })(Module1);
export default Module1;
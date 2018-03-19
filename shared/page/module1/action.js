export const ADD_TODO = 'ADD_TODO';
export const COMPONENT_ZX_ACTION = 'COMPONENT_ZX_ACTION';
export const COMPONENT_ZX_ACTION_SUCCESS = 'COMPONENT_ZX_ACTION_SUCCESS';

export const TODO_ACTION = { type: ADD_TODO, payload: 'test1' };
export const zxAction = () => ({ type: COMPONENT_ZX_ACTION });
export const zxActionSuccess = data => ({ type: COMPONENT_ZX_ACTION_SUCCESS, payload: data });

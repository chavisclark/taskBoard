// All of the action types used in the reducers defined as constants.
// Combining them all in an index.js file allows me to easily import and organize my actions  

export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const MOVE_TO_LIST = 'MOVE_TO_LIST';
export const MOVE_TO_DONE = 'MOVE_TO_DONE';
export const DESTROY_LIST = 'DESTROY_LIST';

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const DESTROY_TASK = 'DESTROY_TASK';
export const TYPING = 'TYPING';

export default { NOTE: 'note'}; 
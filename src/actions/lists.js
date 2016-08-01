/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import * as types from '../types';
import uuid from 'uuid';

polyfill();

export function destroy(index) {
  return { type: types.DESTROY_TASK, index };
}

export function addNewListSuccess(data) {
  return {
    type: types.ADD_LIST_SUCCESS,
    data: data
  };
}

export function addNewList(name) {
  return dispatch => {
    const id = uuid.v4()
    const list = {
      id,
      name
    };
	dispatch(addNewListSuccess(list))
  };
}

export function destroyTask(id, index) {
  return dispatch => {
    return makeTaskRequest('delete', id)
      .then(() => dispatch(destroy(index)))
      .catch(() => dispatch(addNewListFailure({id,
        error: 'Oops! Something went wrong and we couldn\'t add your vote'})));
  };
}

/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import * as types from '../types';
import uuid from 'uuid';

polyfill();

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
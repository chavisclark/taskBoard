/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import * as types from '../types';
import uuid from 'uuid';

polyfill();

export function destroy(index) {
  return { type: types.DESTROY_TASK, index };
}

export function typing(text) {
  return {
    type: types.TYPING,
    newTask: text
  };
}

//Returns a simple object
export function createTaskSuccess(id, listId, task) {
  return {
    type: types.CREATE_TASK_SUCCESS,
    id: id,
    listId: listId,
    task: task,
    date: new Date().toISOString().slice(0,10)
  };
}

export function moveToDoneList(taskO, taskTags) {
  return {
    type: types.MOVE_TO_DONE,
    taskO,
    taskTags
  };
}

export function moveToNewList(taskO, taskTags) {
  return {
    type: types.MOVE_TO_LIST,
    taskO,
    taskTags
  };
}

export function getState() {
  return (dispatch, getState) => {
    const { task } = getState();
    return task.tasks
  }
}


//The action that controls which list the task belongs to
//This is where I collect the listId from the target and 
//create a new object with the updated credentials
export function attachToList(taskO, listO) {
  return (dispatch, getState) => {
//dispatching actions and getting state
    const { task } = getState();
//Defining constants
    const tasks = task.tasks;
    const taskTags = task.taskTags;
    const listId = listO.id;
    taskO.listId = listId;
//Just some logic to identify if the list the task is changing to
//is the Completed one. If it is I'll put my party hat on
    if (listO.name === 'Completed') {
      taskO.done = true;
      dispatch(moveToDoneList(taskO, taskTags));
    } else {
      dispatch(moveToNewList(taskO, taskTags));
        return;
    }
  }
}

// This action creator returns a function
// Generating the new task
export function createTask(lId, task) {
  return (dispatch, getState) => {
// Send alert if the text box is empty
    if (!task) {
//Nothing fancy here
      alert('Please enter a new task.')
        return;
    } else {
        const id = uuid.v4();
        const listId = lId;
          return dispatch(createTaskSuccess(id, listId, task));     
    }
  };
}

///Destroying the task is easy, I handle that in the reducers though
export function destroyTask(id, index) {
  return dispatch => {
    return dispatch(destroy(index))
  };
}

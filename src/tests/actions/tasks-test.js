/* eslint no-unused-vars: 0 */ // since fetch is needed but not used
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import uuid from 'uuid';
import { polyfill } from 'es6-promise';
import expect from 'expect';
import * as actions from 'actions/tasks';
import * as types from 'types';

polyfill();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Task Actions', () => {
  describe('Asynchronous actions', () => {
    let sandbox;

    const index = 0;
    const task = 'A time machine';
    const id = uuid.v4();
    const data = {
      id,
      task: task
    };

    const initialState = {
      tasks: {
        tasks: [],
        newtasks: ''
      }
    };

    beforeEach(() => {
      sandbox = sinon.sandbox.create(); // eslint-disable-line
    });

    afterEach(() => {
      sandbox.restore();
    });

  });
  describe('Action creator unit tests', () => {
    const index = 0;
    const task = 'A time machine';
    const id = uuid.v4();
    const listId ='';
    const data = {
      id,
      task: task,
      date: Date.now(),

    }
    it('should create a new object', () => {
      return {
        type: types.CREATE_TASK_SUCCESS,
        id: id,
        listId: listId,
        task: task,
        date: new Date().toISOString().slice(0,10)
      };
    })
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.sandbox.create(); // eslint-disable-line
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should create an action object to destroy a task', () => {
      const expectedAction = {
        type: types.DESTROY_TASK,
        index
      };
      expect(actions.destroy(index)).toEqual(expectedAction);
    });

    it('should create an action object with a new task', () => {
      const expectedAction = {
        type: types.TYPING,
        newTask: data.task
      };
      expect(actions.typing(data.task)).toEqual(expectedAction);
    });

  });
});

it('should add new listId to object', () => {
  return (dispatch, getState) => {
    const { task } = getState();
    const tasks = task.tasks;
    const taskTags = task.taskTags;
    const listId = listO.id;
    taskO.listId = listId;
    if (listO.name === 'Completed') {
      taskO.done = true;
      expect(actions.moveToDoneList(taskO, taskTags)),toEqual(expectedAction);
    } else {
      taskO.done = false;
      expect(actions.moveToNewList(taskO, taskTags)).toEqual(expectedAction);
        return;
    }
  }
})

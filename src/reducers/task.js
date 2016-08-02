import update from 'react/lib/update';
import {
  TYPING,
  CREATE_TASK_SUCCESS,
  DESTROY_TASK,
  MOVE_TO_LIST,
  MOVE_TO_DONE
} from '../types';

export default function task(state = {
  tasks: [],
  newTask: ''
}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newTask: action.newTask }
      );
    case CREATE_TASK_SUCCESS:
      return {
        tasks: [...state.tasks, { id: action.id, listId: action.listId, task: action.task, date: action.date }],
        newTask: state.newTask,
        taskTags: state.taskTags
      };
    case DESTROY_TASK:
      return {
        tasks: [...state.tasks.filter((tp, i) => i !== action.index)],
        newTask: state.newTask
      };
    case MOVE_TO_LIST:
      return {
        tasks: [...state.tasks.filter((t) => t.id !== action.taskO.id), action.taskO],
      };
    case MOVE_TO_DONE:
      return {
        tasks: [...state.tasks.filter((t) => t.id !== action.taskO.id), action.taskO],
      }
    default:
      return state;
  }
}

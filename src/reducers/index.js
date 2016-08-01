import { combineReducers } from 'redux';
import task from '../reducers/task';
import list from '../reducers/list';

// Combining reducers to effecttively keep up with what's ahppeing in the app
const rootReducer = combineReducers({
  task,
  list
});

export default rootReducer;

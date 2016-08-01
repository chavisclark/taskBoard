//Importing the types
import {
  ADD_LIST_SUCCESS,
  DESTROY_LIST,
} from '../types';

export default function list(state = {
//I decided to set the default lists right here
  lists: [ 
          { id: 7, name: 'To-do', tasks:[] },
          { id: 2, name: 'In Progress', tasks:[] },
          { id: 5, name: 'Completed', tasks:[] }
         ],
  newList: ''
}, action) {
  switch (action.type) {
    case ADD_LIST_SUCCESS:
      return {
        lists: [...state.lists],
        newList: action.data
      };
    case DESTROY_LIST:
      return {
        lists: [...state.lists.filter((tp, i) => i !== action.index)],
        newList: state.newList
      };
    default:
      return state;
  }
}

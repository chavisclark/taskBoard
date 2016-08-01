import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/lists'
import ListBoxes from '../containers/ListBoxes';

//The Board the contains the lists.
const Board = ({tasks, lists, dispatch}) => {
  return (
    <div>
      <ListBoxes tasks={tasks} lists={lists}/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.task.tasks,
    lists: state.list.lists,
  };
}

export default connect(mapStateToProps)(Board);
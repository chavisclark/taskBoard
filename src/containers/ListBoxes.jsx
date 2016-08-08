import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import ListBox from '../components/ListBox';
import TodoListBox from '../components/TodoListBox';
import classNames from 'classnames/bind';
import styles from '../sass/app';
import { createTask, typing,
 destroyTask } from '../actions/tasks';
import { addNewList } from '../actions/lists'

const cx = classNames.bind(styles);
const time = Date.now();

//Specifies that HTML5 is being used
@DragDropContext(HTML5Backend)
class ListBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droppedTasks: []
    };
  }

  render() {
    //Defining constants for state
    const { droppedTasks, lastDroppedItem } = this.state;

    //Defining mapped props
    const { lists, tasks, newTask, typing, createTask, destroyTask, addNewList} = this.props;

    //Normally I would create a map from component, but because of the nature of the board,
    //only alowing a single input, I chose to filter out the "To-do" List and display them seperately
    const todoOnly = lists ? lists.filter(t => t.name == ['To-do']) : [];
    const listsFiltered = lists ? lists.filter(t => t.name != ['To-do']) : [];
    return (
      <div className={cx('row')}>
        <div className={cx("large-12", "columns")}>
          <div className={cx("large-12", "columns")}>
            <h1 className={cx("title")}>Kaban Task Manager</h1>
          </div>
          { todoOnly.map((list, index) =>
            <TodoListBox onDrop={(item) => this.handleDrop(index, item, list)}
                     key={index}
                     droppedTasks={droppedTasks}
                     boxName={list.name}
                     onDrop={(item) => this.handleDrop(item)}
                     list={list}
                     newTask={newTask}
                     typing={typing}
                     createTask={createTask}
                     tasks={tasks}
                     />
          )}
          { listsFiltered.map((list, index) =>
            <ListBox onDrop={(item) => this.handleDrop(item)}
                     key={index}
                     droppedTasks={droppedTasks}
                     boxName={list.name}
                     tasks={tasks}
                     list={list}
                     />
          )}
        </div>
      </div>
    );
  }

 //This function will be handled by the ListBoxes and will fed back
 handleDrop(item) {
    const { task } = item;
    this.setState(update(this.state, {
      droppedTasks: task ? {
        $push: [task]
      } : {}
    }));
  }
}

ListBoxes.propTypes = {
  lists: PropTypes.array,
  createTask: PropTypes.func,
  droppedTasks: PropTypes.any,
};

function mapStateToProps(state) {
  return {
    tasks: state.task.tasks,
    lists: state.list.lists,
    newTask: state.task.newTask,
    droppedTasks: state.droppedTasks,
  };
}

//Using Connect which is a part of the Redux Store protocol
//This maps our state to props to be passed down to the components
export default connect(mapStateToProps, { createTask, typing, destroyTask })(ListBoxes);

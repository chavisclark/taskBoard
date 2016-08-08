import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import update from 'react/lib/update';
import types from '../types';
import TaskItem from '../components/TaskItem';
import InputBox from '../components/InputBox';
import classNames from 'classnames/bind';
import styles from '../sass/app';
import * as actions from '../actions/tasks'

const cx = classNames.bind(styles);

//This function monitors when a component is dropped
const listTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
    let item = monitor.getItem();
    let dropResult = props.list;
    props.dispatch(actions.attachToList(item, dropResult));
  }
};

//In this function I'm going to connect my drop 
//target node and monitor whether the pointer is hovering over the TodoListBox
//For docs on react-dnd see https://gaearon.github.io/react-dnd/docs-drop-target.html
@DropTarget(types.NOTE, listTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))

//This is the begining of the List Box Component
class TodoListBox extends Component {
  constructor(props) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.state = {
      tasks: this.props.tasks
    };
  }

  //Here I'm using the static method to list my props
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    onDrop: PropTypes.func.isRequired,
    droppedTasks: PropTypes.any
  };

  //This function allows the TaskItem to move
  //It will be passed through as one of its props
  //For docs on react-dnd see https://gaearon.github.io/react-dnd/docs-drop-target.html
  moveItem(dragIndex, hoverIndex) {
    const { tasks } = this.props;
    const dragItem = tasks[dragIndex];
    this.setState(update(this.state, {
      tasks: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragItem]
        ]        
      }

    }));
  }

  //This function is checking to see whether the TaskItem has dropped
  //It will also be getting passed through as a prop
  isDropped(taskText) {
    return this.props.droppedTasks.indexOf(taskText) > -1;
  }

  render() {
    const { boxName, attachToList, newTask, typing, createTask, 
      tasks, isOver, canDrop, list, connectDropTarget } = this.props;
    const taskList = tasks.filter(task => task.listId == list.id);
    const isActive = isOver && canDrop;
    let taskDropStyle = 'cc-target-bg';
    if (isActive) {
      taskDropStyle = 'cc-target-drop';
    } else if (canDrop) {
      taskDropStyle = 'cc-target-hover';
    }
    
    //I'm returning the ListBox rendered as a drop target
    return connectDropTarget(
      <div className={cx("large-4", "medium-12", "columns", "cc-spacer")}>
        <div className={cx("cc-panel", `${taskDropStyle}`)}>
          <h5>{boxName}</h5>
          <i className={cx("pointer")}></i>
          <small className={cx("cc-small-line", "cc-small-font")}>Drag task <b>between</b> list and/or <b>down</b> to reorder</small>
          <InputBox task={newTask}
            onInputChange={typing}
            onInputSave={createTask}
            list={list}
             />
          <hr />
            {isActive ?
              'Release to drop' : ''
            }
            {
              taskList.map((task, i) => {
                return (
                  <TaskItem key={task.id}
                        index={i}
                        id={task.id}
                        task={task.task}
                        listId={list.id}
                        Otask={task}
                        moveItem={this.moveItem} 
                        isDropped={this.isDropped(task)}
                        taskColor={task.taskColor}
                        taskTags={task.taskTags} 
                        date={task.date} 
                        />
                );
              })
            }
        </div>
      </div>
    );
  }

}

// mapStateToProps is here for a placeholder. 
// I'm using connect here in order to access the dispatch function
// Because that's where I'm handling my functionality for switching lists
function mapStateToProps(state) {
  return {
    null
  };
}
export default connect(mapStateToProps)(TodoListBox);


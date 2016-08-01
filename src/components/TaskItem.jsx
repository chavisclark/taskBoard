import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import types from '../types';
import Utilities from '../components/Utilities';
import TaskModal from '../components/TaskModal';
import { DragSource, DropTarget } from 'react-dnd';
import styles from '../sass/app';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const style = {
  cursor: 'move',
};

//This is the drag source specification used to identify
//the draggable component
const itemSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      task: props.task,
      date: props.date
    };
  },
};

//This is the target specification identifying the drag source destination
const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveItem(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

//These functions let the app know when drag actions are occuring
@DropTarget(types.NOTE, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(types.NOTE, itemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))

//This is the beginning of the Task component
export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    	taskColor: 'blue',
    	taskTags: []  
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    isDropped: PropTypes.bool,
    id: PropTypes.any.isRequired,
    task: PropTypes.string.isRequired,
    Otask: PropTypes.object,
    date: PropTypes.any,
    moveItem: PropTypes.func,
    taskColor: PropTypes.any,
    listId: PropTypes.any,
  };
	onChange(event) {
		console.log('You changed the color to: ', event.target.value)
	  this.setState({taskColor: event.target.value});
	}
	onBlur(event) {
		console.log('You added '+event.target.value+' to your tags')
	  this.setState({taskTags: this.state.taskTags.concat(event.target.value)});
    event.target.value = '';
	}
  render() {
  	const { taskColor, taskTags } = this.state;
    const { date, task, Otask, isDragging, isDropped, 
      connectDragSource, connectDropTarget } = this.props;
    const { done } = Otask;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(connectDropTarget(
	    <div className={cx("callout", "cc-task", `cc-border-${taskColor}`)} style={{ ...style, opacity }}>
        {isDropped ? 
        	<s>{task}</s> :
        	task 
        }
        <TaskModal task={task}
        		addTags={this.onBlur} 
        		changeColor={this.onChange}
            taskTags={taskTags} />
        <Utilities done={done} 
            taskTags={taskTags} 
            date={date} />
      </div>
    ));
  }
}

function mapStateToProps(state) {
  return {
    taskColor: state.task.taskColor,
    taskTags: state.task.taskTags
  };
}

export default connect(mapStateToProps)(TaskItem);

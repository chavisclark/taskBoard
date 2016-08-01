import React, { Component, PropTypes } from 'react';
import Modal from '../Components/Modal/Modal';
import Update from '../Components/Modal/Update';
import styles from '../sass/app';
import classNames from 'classnames/bind';
import Tags from '../components/Tags';

const cx = classNames.bind(styles);

export default class TaskModal extends Component {
    constructor(props) {
      super(props);
      this.state = { isModalOpen: false };
    }
  static propTypes = {
    changeColor: PropTypes.func
  };
    render() {
//Colors used in task edit modal
    const colors = ['red', 'green', 'yellow', 'blue', 'purple', 'indigo']
      return (
        <div className={cx('row')}>
          <button className={cx('button', 'cc-modal-btn')} onClick={() => this.openModal()}>Edit</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <p>{this.props.task}</p>
	          <select onChange={this.props.changeColor} className={cx('input')}>
	            <option value="---" >Color...</option>
	            {colors.map(colorOption => <option name="color" value={colorOption} key={colorOption}>{colorOption}</option>)}
	          </select>
	          <input placeholder="Enter tags here." onBlur={this.props.addTags} />
            <p className={cx('cc-top-break')}><button className={cx('button', 'alert')} onClick={() => this.closeModal()}>Close</button></p>
            <Tags taskTags={this.props.taskTags} />
          </Modal>
        </div>
      )
    }
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.handleOnClick();
      event.target.value = '';
    }
  }
    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
}


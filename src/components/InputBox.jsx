import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from '../sass/app';

const cx = classNames.bind(styles);

const ENTER_KEY_CODE = 13;

export default class InputBox extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  /*
   * Invokes the callback passed in as handleOnClick, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  handleOnClick() {
		let add = ReactDOM.findDOMNode(this.refs.add).value;
    const { onInputSave, list } = this.props;
    onInputSave(list.id, add);
  }

  onChange(event) {
    const { onInputChange } = this.props;
    onInputChange(event.target.value);
  }

//Pressing enter can submit the form as well
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.handleOnClick();
      event.target.value = '';
    }
  }

  render() {
    const { onInputSave } = this.props;
    return (
      <div className={cx("cc-text-input-wrap")}>
        <input className={cx("cc-row-cell", "cc-text-input", "input")}
          placeholder="Add new task."
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          ref="add"
          value={this.value}
          autoFocus />
        <button onClick={this.handleOnClick} className={cx("button", "cc-row-cell", "cc-text-input-btn")}>Add task</button>
      </div>
    );
  }
}

InputBox.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onInputSave: PropTypes.func,
  onInputChange: PropTypes.func
};

import React, { PropTypes } from 'react';
import styles from '../sass/app';
import classNames from 'classnames/bind';
import Tags from '../components/Tags';
const cx = classNames.bind(styles);

//All of these will be loacte at the bottom of the task
const Utilities = ({date, taskTags, done}) => {
  return (
    <div className={cx("cc-modal-footer", 'cc-row')}>
      <span className={cx("cc-row-cell", "cc-right")}>
        <i className={cx("clock")}></i>
        <span className={cx("cc-date")}>{date}</span>
      </span>
        { !done || false ? 
          <Tags taskTags={taskTags} /> :
          <span className={cx("cc-done")}>Done</span> 
        }
    </div>
  );
};

Utilities.propTypes = {
  date: PropTypes.any,
};

export default Utilities
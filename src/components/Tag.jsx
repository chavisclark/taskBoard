import React, { PropTypes } from 'react';
import styles from '../sass/app';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Tag = ({tag}) => {
  return (
      <span className={cx('cc-pad')}>
      	<a href="#" className={cx("cc-row-cell", "cc-right", "cc-btn", "small", "button", "secondary")}>{tag}</a>
      </span>
  );
};

Tag.propTypes = {
  tag: PropTypes.any,
};

export default Tag
import React, { PropTypes } from 'react';
import styles from '../sass/app';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Tag = ({tag}) => {
  return (
      <a href="#" className={cx("cc-row-cell", "cc-right", "cc-btn", "small", "button", "secondary")}>{tag}</a>
  );
};

Tag.propTypes = {
  tag: PropTypes.any,
};

export default Tag
import React, { PropTypes } from 'react';
import styles from '../../sass/app';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Update = () => {
  return (
      <button className={cx('button')} onClick={() => editModal()}>Edit</button>
  );
};

export default Update
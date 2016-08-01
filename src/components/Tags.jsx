import React, { PropTypes } from 'react';
import styles from '../sass/app';
import classNames from 'classnames/bind';
import Tag from '../components/Tag';
const cx = classNames.bind(styles);

const Tags = ({taskTags}) => {
  let tagStyle = {
    display: 'block',
    width: '100%',
    textAlign: 'center',
  }
  return (
    <div style={tagStyle}>
      {
        taskTags.map((tag, i) => {
          return (
            <Tag key={i} tag={tag} />
          );
        })
      }
    </div>
  );
};

Tags.propTypes = {
  date: PropTypes.any,
};

export default Tags
import React, { Component, PropTypes } from 'react';
import styles from '../../sass/app';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


export default class Modal extends Component{
    render() {
    
      //This is the logic for displaying the modal and hiding it
      if (this.props.isOpen === false)
        return null;
      
      //This is the barebones of the modal
      return (
        <div>
          <div className={cx('cc-modal')}>
            {this.props.children}
          </div>
          <div className={cx('cc-modal-backdrop')}
                   onClick={e => this.close(e)}/>
        </div>
      )
    }
    
    //The close event for the modal
    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }


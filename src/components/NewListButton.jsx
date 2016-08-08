import React, { Component, PropTypes } from 'react';

export default class NewListButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.addNewList('New List');
  }

  render() {
    return (
      <button onClick={this.onClick}>+ Add New List</button>
    );
  }
}

NewListButton.propTypes = {
  addNewList: PropTypes.func,
};

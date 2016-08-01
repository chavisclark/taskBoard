import React, { Component, PropTypes } from 'react';

export default class NewListButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /*
   * Invokes the onClick event, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onClick(event) {
  	// console.log(this.props)
   //  const { addNewList } = this.props;
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

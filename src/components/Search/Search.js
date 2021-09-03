import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    const { handleSearchFood } = this.props;
    return (
      <div>
        <input
          onChange={handleSearchFood}
          className="input is-rounded input is-danger"
          type="text"
          placeholder="Search a food here"
        />
      </div>
    )
  }
}
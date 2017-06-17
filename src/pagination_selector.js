import React, { Component } from 'react';

class PaginationSelector extends Component {

  handleEvent(e) {
    this.props.updateItemsPerPage(parseInt(e.target.value, 10));
  }

  render() {
    return (
      <div>
        <select
          value={this.props.value}
          onChange={this.handleEvent.bind(this)}
          >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </div>
    );
  }
}

export default PaginationSelector;

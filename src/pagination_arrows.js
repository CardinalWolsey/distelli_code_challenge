import React, { Component } from 'react';

class PaginationArrows extends Component {

  handleLeftClick() {
    this.props.updateCurrentPage(-1);
  }

  handleRightClick() {
    this.props.updateCurrentPage(1);
  }

  render() {
    return (
      <div>
        <span>showing {(this.props.currentPage * this.props.itemsPerPage) - (this.props.itemsPerPage - 1)} - {this.props.currentPage * this.props.itemsPerPage} </span>
        <a
          onClick={this.handleLeftClick.bind(this)}>previous</a>
        <span> </span>
        <a
          onClick={this.handleRightClick.bind(this)}>next</a>
      </div>
    );
  }
}

export default PaginationArrows;

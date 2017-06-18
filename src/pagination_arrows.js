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
        <span className="Pagination Range">{(this.props.currentPage * this.props.itemsPerPage) - (this.props.itemsPerPage - 1)}-{this.props.currentPage * this.props.itemsPerPage}</span>
        <span className="Pagination Of"> of </span>
        <span className="Pagination">{this.props.dataLength}</span>
        <a
          className="Pagination PaginationArrows"
          onClick={this.handleLeftClick.bind(this)}>&#60;</a>
        <span> </span>
        <a
          className="Pagination PaginationArrows"
          onClick={this.handleRightClick.bind(this)}>&#62;</a>
      </div>
    );
  }
}

export default PaginationArrows;

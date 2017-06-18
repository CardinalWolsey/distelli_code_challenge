import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td
          key={this.props.FirstName.toString()}>
          {this.props.FirstName}</td>
        <td
          key={this.props.LastName.toString()}>
          {this.props.LastName}</td>
        <td
          key={this.props.Country.toString()}>
          {this.props.Country}</td>
        <td
          key={this.props.Street.toString()}>
          {this.props.Street}</td>
        <td
          key={this.props.City.toString()}>
          {this.props.City}</td>
        <td
          key={this.props.State.toString()}>
          {this.props.State}</td>
        <td
          key={this.props.Zip.toString()}>
          {this.props.Zip}</td>
        <td
          key={this.props.Phone.toString()}>
          {this.props.Phone}</td>
      </tr>
    )
  }
}

export default TableRow;

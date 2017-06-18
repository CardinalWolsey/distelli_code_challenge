import React, { Component } from 'react';
import TableRow from './table_row'

class Table extends Component {
  render() {
    var rows = [];
    this.props.dataSource.forEach(function(row) {
      rows.push(<TableRow key={row.id}FirstName={row.FirstName} LastName={row.LastName} Country={row.Country} Street={row.Street} City={row.City} State={row.State} Zip={row.Zip} Phone={row.Phone} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default Table;

import React, { Component } from 'react';
import TableRow from './table_row'

class Table extends Component {

  handleChange(e) {
    this.props.sortItems(e.target.value);
  }

  render() {
    var rows = [];
    this.props.dataSource.forEach(function(row) {
      rows.push(<TableRow key={row.id}FirstName={row.FirstName} LastName={row.LastName} Country={row.Country} Street={row.Street} City={row.City} State={row.State} Zip={row.Zip} Phone={row.Phone} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>
              <button value="FirstName" onClick={this.handleChange.bind(this)}>
                First Name
              </button>
            </th>
            <th>
              <button value="LastName" onClick={this.handleChange.bind(this)}>
                Last Name
              </button>
            </th>
            <th>
              <button value="Country" onClick={this.handleChange.bind(this)}>
                Country
              </button>
            </th>
            <th>
              <button value="Street" onClick={this.handleChange.bind(this)}>
                Address
              </button>
            </th>
            <th>
              <button value="City" onClick={this.handleChange.bind(this)}>
                City
              </button>
            </th>
            <th>
              <button value="State" onClick={this.handleChange.bind(this)}>
                State
              </button>
            </th>
            <th>
              <button value="Zip" onClick={this.handleChange.bind(this)}>
                Zip
              </button>
            </th>
            <th>
              <button value="Phone" onClick={this.handleChange.bind(this)}>
                Phone
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default Table;

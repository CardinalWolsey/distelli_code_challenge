import React, { Component } from 'react';

class SortSelector extends Component {

  handleChange(e) {
    this.props.sortItems(e.target.value);
  }

  render() {
    return (
      <div>
        <select
          className="DropdownSelector"
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
          >
          <option value="FirstName">First Name</option>
          <option value="LastName">Last Name</option>
          <option value="Country">Country</option>
          <option value="Street">Address</option>
          <option value="City">City</option>
          <option value="State">State</option>
          <option value="Zip">Zip</option>
          <option value="Phone">Phone</option>
        </select>
      </div>
    );
  }
}

export default SortSelector;

import React, { Component } from 'react';
import './App.css';
import Table from './table'

// const data = [
//   {'FirstName': 'Zachary', 'LastName': 'Borgetti', 'Country': 'USA', 'Street': '2234 3rd Ave Ste 3', 'City': 'Seattle', 'State': 'WA', 'Zip': '98101', 'Phone': '123-778-5741'},
//   {'FirstName': 'Spencer', 'LastName': 'Willings', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '206-555-8888'},
//   {'FirstName': 'Roger', 'LastName': 'Caldwell', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '206-955-8888'},
//   {'FirstName': 'Alfred', 'LastName': 'Lu', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '206-555-8228'},
// ];

class SortSelector extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectValue: 'FirstName',
    };
    // console.log('state');
    // console.log(this.state);
    // console.log('end state');
  }

  sortItems(column) {
    // var sorted = data.sort(function (a, b) {
    //   return a.column - b.column;
    // });
    var sorted = this.props.dataSource.sort(function(a, b) {
      var nameA = a[column].toUpperCase();
      var nameB = b[column].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
    });
    this.props.updateDataSource(sorted);
    console.log(sorted);
  }

  handleChange(e) {
    this.setState({selectValue:e.target.value});
    this.sortItems(e.target.value);
  }

  render() {
    var message = 'you selected ' + this.state.selectValue;

    return (
      <div>
        <select
          value={this.state.selectValue}
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
        <p>{message}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: [
        {'FirstName': 'Zachary', 'LastName': 'Borgetti', 'Country': 'USA', 'Street': '2234 3rd Ave Ste 3', 'City': 'Seattle', 'State': 'WA', 'Zip': '98101', 'Phone': '206-555-8228'},
        {'FirstName': 'Spencer', 'LastName': 'Willings', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '206-555-8888'},
        {'FirstName': 'Roger', 'LastName': 'Caldwell', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '206-955-8888'},
        {'FirstName': 'Alfred', 'LastName': 'Lu', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '123-778-5741'},
      ],
    };
    console.log(this.state);
  }

  updateDataSource(data) {
    this.setState({
      data: Object.assign([], this.state, data)
    })
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <div className="Nav"></div>
        <div className="Container">
          <div className="Controls">

          </div>
          <div className="Table">
            <div className="Head"></div>
            <div className="Contents">
              <SortSelector
                dataSource={this.state.data}
                updateDataSource={this.updateDataSource.bind(this)}>
              </SortSelector>
              <Table
                dataSource={this.state.data}
                />

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

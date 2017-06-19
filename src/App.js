import React, { Component } from 'react';

import './App.css';

import PaginationArrows from './pagination_arrows';
import PaginationSelector from './pagination_selector';
import SortSelector from './sort_selector';
import Table from './table';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: [
        {'id': '0', 'FirstName': 'Zachary', 'LastName': 'Borgetti', 'Country': 'USA', 'Street': '2234 3rd Ave Ste 3', 'City': 'Seattle', 'State': 'WA', 'Zip': '98101', 'Phone': '206-555-8228'},
        {'id': '1', 'FirstName': 'Spencer', 'LastName': 'Willings', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '206-555-8888'},
        {'id': '2', 'FirstName': 'Roger', 'LastName': 'Caldwell', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '206-955-8888'},
        {'id': '3', 'FirstName': 'Alfred', 'LastName': 'Lu', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '123-778-5741'},
        {'id': '4', 'FirstName': 'Ron', 'LastName': 'Patrick', 'Country': 'UK', 'Street': '10 Downing Street', 'City': 'London', 'State': 'Stratford', 'Zip': 'Avon', 'Phone': '+44 20 7123 4567'},
        {'id': '5', 'FirstName': 'John', 'LastName': 'Smith', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'Seattle', 'State': 'WA', 'Zip': '98105', 'Phone': '777-555-1111'},
        {'id': '6', 'FirstName': 'Chris', 'LastName': 'Cacciapaglia', 'Country': 'USA', 'Street': '112 NE 57th St', 'City': 'San Francisco', 'State': 'CA', 'Zip': '98105', 'Phone': '987-654-3210'},
      ],
      sortValue: 'FirstName',
      currentPage: 1,
      itemsPerPage: 5,
      renderData: [],
    };
  }

  componentWillMount() {
    this.sortItems(this.state.sortValue);
    this.populateRenderData(this.state.itemsPerPage, this.state.currentPage);
  }

  updateSortValue(value) {
    this.setState({
      sortValue: String(value),
      currentPage: 1
    }, function() {
      this.sortItems(this.state.sortValue);
      this.populateRenderData(this.state.itemsPerPage, this.state.currentPage);
    });
  }

  updateItemsPerPage(value) {
    this.setState({
      itemsPerPage: value,
      currentPage: 1
    }, function() {
      this.populateRenderData(this.state.itemsPerPage, this.state.currentPage);
    });
  }

  sortItems(column) {
    var sorted = this.state.data.sort(function(a, b) {
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

    this.updateDataSource(sorted);
  }

  updateDataSource(data) {
    this.setState({
      data: Object.assign([], this.state, data)
    });
  }

  populateRenderData(count, page) {
    const indexOfLastRow = count * page;
    const indexOfFirstRow = indexOfLastRow - count;

    this.setState({
      renderData: Object.assign([], this.state.data.slice(indexOfFirstRow, indexOfLastRow))
    });
  }

  updateCurrentPage(value) {
    if(value < 0) {
      if(this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage + value
        }, function() {
          this.populateRenderData(this.state.itemsPerPage, this.state.currentPage)
        });
      }
    } else if(value > 0) {
      if(this.state.currentPage * this.state.itemsPerPage < this.state.data.length) {
        this.setState({
          currentPage: this.state.currentPage + value
        }, function() {
          this.populateRenderData(this.state.itemsPerPage, this.state.currentPage)
        });
      }
    }
  }

  render() {
    return (
      <div className="Table">
        <div className="Controls">
          <div className="ControlsLeft">
            <p className="ListHeader">List of Awesome</p>
            <p className="DropdownLabel">Sort by:</p>
            <SortSelector
              sortItems={this.updateSortValue.bind(this)}
              value={this.state.sortValue}
              />
            <p className="Arrow">&#9660;</p>
          </div>
          <div className="ControlsRight">
            <p className="DropdownLabel">items per page:</p>
            <PaginationSelector
              updateItemsPerPage={this.updateItemsPerPage.bind(this)}
              value={this.state.itemsPerPage}
              />
            <p className="Arrow">&#9660;</p>
            <PaginationArrows
              dataLength={this.state.data.length}
              currentPage={this.state.currentPage}
              itemsPerPage={this.state.itemsPerPage}
              updateCurrentPage={this.updateCurrentPage.bind(this)}
              />
          </div>
        </div>
        <div className="Contents">
          <Table
            dataSource={this.state.renderData}
            sortItems={this.updateSortValue.bind(this)}
            />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Item from './item'

class App extends Component {
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
              <Item />

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

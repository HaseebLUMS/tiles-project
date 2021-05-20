import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../css/App.css';
class App extends Component {
  render() {
    const options = [
      {value: 1, className: "image1"},
      {value: 2, className: "image2"},
      {value: 3, className: "image3"}
    ];
    const defaultOption = "Choose Room";

    return (
      <div className="App">
        <div className="SideBySide">
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        </div>
      </div>
    );
  }
}
export default App;

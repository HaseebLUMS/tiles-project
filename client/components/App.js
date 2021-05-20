import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import RoomOptions from './RoomOptions';
import TilesOtions from './TilesOptions';
import Results from './Results';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomOptions />
        <TilesOtions />
        <Results/>
      </div>
    );
  }
}
export default App;

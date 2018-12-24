import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './SimpleAppBar';
import Drawer from '@material-ui/core/Drawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <Drawer />
      </div>
    );
  }
}

export default App;

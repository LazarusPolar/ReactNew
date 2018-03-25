import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocacionClima from './LocacionClima/index'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocacionClima> </LocacionClima>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

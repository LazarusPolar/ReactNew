import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ListaLocacion from './components/ListaLocacion'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <ListaLocacion> </ListaLocacion>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

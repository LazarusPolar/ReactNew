import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ListaLocacion from './components/ListaLocacion'

import './App.css';

const ciudades = ['Buenos Aires,AR', 'Mexico,MX', 'Madrid,ES'];
class App extends Component {
  handleSeleccionLocacion = ciudad => {
    console.log("Handle Seleccion Locacion Appjs")
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <ListaLocacion ciudades = {ciudades} enLocacionSeleccionada = {this.handleSeleccionLocacion}> </ListaLocacion>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

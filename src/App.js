import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import ListaLocacion from './components/ListaLocacion'
import ClimaExtendido from './components/ClimaExtendido'

import './App.css';

const ciudades = ['Buenos Aires,AR', 'Mexico,MX', 'Madrid,ES'];
class App extends Component {

  constructor() {
    super()
    this.state = {ciudad: "Nueva Ciudad"};

  }

  handleSeleccionLocacion = ciudad => {
    this.setState({ciudad: ciudad})
    console.log("Handle Seleccion Locacion Appjs" + ciudad)
  }

  render() {
    const {ciudad} = this.state

    return (
      <MuiThemeProvider>
        <div className="App">
          <ListaLocacion ciudades = {ciudades} enLocacionSeleccionada = {this.handleSeleccionLocacion}> </ListaLocacion>
          <Paper><div><ClimaExtendido ciudad = {ciudad}/></div></Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

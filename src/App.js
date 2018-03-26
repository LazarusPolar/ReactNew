import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import ListaLocacionContainer from './containers/ListaLocacionContainer'
import ClimaExtendido from './components/ClimaExtendido'
import './App.css';

const ciudades = ['Buenos Aires,AR', 'Mexico,MX', 'Madrid,ES'];

class App extends Component {
  constructor() {
    super()
    this.state = {ciudad: null};
  }

  render() {
    const {ciudad} = this.state

    return (
      <MuiThemeProvider>
        <div className="App">
          <ListaLocacionContainer ciudades = {ciudades} enLocacionSeleccionada = {this.handleSeleccionLocacion}> </ListaLocacionContainer>
          <Paper>
              <div>
                {ciudad ? 
                  <ClimaExtendido ciudad = {ciudad}/>: 
                  <h1> Ciudad no seleccionada </h1>}
              </div>
            </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

//const appConectado = connect(null, mapDispatchToPropsActions)(App);

export default App;
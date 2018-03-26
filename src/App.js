import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import ListaLocacionContainer from './containers/ListaLocacionContainer'
import ClimaExtendidoContainer from './containers/ClimaExtendidoContainer'
import './App.css';

const ciudades = ['Buenos Aires,AR', 'Mexico,MX', 'Madrid,ES'];

class App extends Component {

  render() {

    return (
      <MuiThemeProvider>
        <div className="App">
          <ListaLocacionContainer ciudades = {ciudades} enLocacionSeleccionada = {this.handleSeleccionLocacion}> </ListaLocacionContainer>
          <Paper>
              <div>
                  <ClimaExtendidoContainer />
              </div>
            </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

//const appConectado = connect(null, mapDispatchToPropsActions)(App);

export default App;
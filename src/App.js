import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import ListaLocacion from './components/ListaLocacion'
import ClimaExtendido from './components/ClimaExtendido'
import {createStore} from 'redux'
import {setCiudad} from './actions/index'
import './App.css';

const ciudades = ['Buenos Aires,AR', 'Mexico,MX', 'Madrid,ES'];
const store = createStore(() => {}, window. __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {

  constructor() {
    super()
    this.state = {ciudad: null};

  }

  handleSeleccionLocacion = ciudad => {
    this.setState({ciudad: ciudad})
    console.log("Handle Seleccion Locacion Appjs" + ciudad)
    
    //const accion = {type: 'setCiudad', value: ciudad}
    
    store.dispatch(setCiudad(ciudad));
  }

  render() {
    const {ciudad} = this.state

    return (
      <MuiThemeProvider>
        <div className="App">
          <ListaLocacion ciudades = {ciudades} enLocacionSeleccionada = {this.handleSeleccionLocacion}> </ListaLocacion>
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

export default App;

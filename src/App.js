import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import ListaLocacion from './components/ListaLocacion'
import ClimaExtendido from './components/ClimaExtendido'
import {setCiudad} from './actions/index'
import './App.css';

const ciudades = ['Buenos Aires,AR', 'Mexico,MX', 'Madrid,ES'];

class App extends Component {
  constructor() {
    super()
    this.state = {ciudad: null};
  }

  handleSeleccionLocacion = ciudad => {
    this.setState({ciudad: ciudad})
    console.log("Handle Seleccion Locacion Appjs" + ciudad)
    
    //const accion = {type: 'setCiudad', value: ciudad}
    
    this.props.setCiudad(ciudad);
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

const mapDispatchToPropsActions = dispatch => ({
  setCiudad: value => dispatch(setCiudad(value))
})
const appConectado = connect(null, mapDispatchToPropsActions)(App);

export default appConectado;
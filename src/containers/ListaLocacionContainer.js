import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {setCiudad} from './../actions/index'
import ListaLocacion from './../components/ListaLocacion'

class ListaLocacionContainer extends Component {
    handleSeleccionLocacion = ciudad => {        
        //const accion = {type: 'setCiudad', value: ciudad}
        // Inyecta elemento en el props en lugar de recuperarlo directamente del store
        this.props.setCiudad(ciudad);
    }

    render() {
        return (
            <div>
                <ListaLocacion ciudades = {this.props.ciudades} enLocacionSeleccionada = {this.handleSeleccionLocacion}> </ListaLocacion>
            </div>
        );
    }
}

ListaLocacionContainer.propTypes = {
    setCiudad: PropTypes.func.isRequired,
    ciudades: PropTypes.array.isRequired
}

const mapDispatchToPropsActions = dispatch => ({
    setCiudad: value => dispatch(setCiudad(value))
})
  
  //const appConectado = connect(null, mapDispatchToPropsActions)(App);
  
export default connect(null, mapDispatchToPropsActions)(ListaLocacionContainer);
import React from 'react';
import PropTypes from 'prop-types';
import LocacionClima from './LocacionClima/index'

const strToComponent = (ciudades) => (
     ciudades.map( ciudad => (<LocacionClima key = {ciudad} ciudad = {ciudad} />))
)

const ListaLocacion = ({ ciudades }) => (
        <div>
            {strToComponent(ciudades)}
        </div>
)

ListaLocacion.propTypes = {
    ciudades: PropTypes.array.isRequired
}

export default ListaLocacion;
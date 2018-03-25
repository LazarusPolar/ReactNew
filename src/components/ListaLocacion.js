import React from 'react';
import PropTypes from 'prop-types';
import LocacionClima from './LocacionClima/index'


const ListaLocacion = ({ ciudades, enLocacionSeleccionada}) => {
    const handleLocacionClimaClick = ciudad => {
        console.log("Se ejecuta handle")
        enLocacionSeleccionada(ciudad);
    }

    const strToComponent = (ciudades) => (
        ciudades.map( ciudad => (<LocacionClima key = {ciudad} ciudad = {ciudad} locacionClimaClick = {() => handleLocacionClimaClick(ciudad)}/>))
    )

        return (<div>
            {strToComponent(ciudades)}
        </div>)
}

ListaLocacion.propTypes = {
    ciudades: PropTypes.array.isRequired,
    enLocacionSeleccionada: PropTypes.func
}

export default ListaLocacion;
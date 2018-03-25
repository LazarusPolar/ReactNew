import React from 'react'
import PropTypes from 'prop-types'
import DatosClima from './../LocacionClima/DatosClima/index'

const ClimaItem = ({ diaSemana, hora, datos }) => (
    <div>
         <div>{ diaSemana } Hora: {hora}</div>
         <DatosClima datos = {datos}> </DatosClima>
    </div>
)

ClimaItem.propTypes = {
    diaSemana: PropTypes.string.isRequired,
    datos: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoClima: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired
    })
}

export default ClimaItem;
import React from 'react'
import ClimaTemperatura from './ClimaTemperatura'
import ClimaInfoExtra from './ClimaInfoExtra'
import PropTypes from 'prop-types'
import {
    CLOUD,
    CLOUDY,
    SUN, 
    RAIN, 
    SNOW, 
    WINDY
 } from './../../constants/climas'
import './styles.css'

const datosClima = ({ datos }) => {
    const {temperatura, estadoClima, humedad, viento} = datos;
    return (
        <div className = 'datosClimaCont'> 
            <ClimaTemperatura temperatura = {temperatura} estadoClima = {CLOUD}> </ClimaTemperatura>
            <ClimaInfoExtra humedad = {humedad} viento = {viento}> </ClimaInfoExtra>
        </div>
    )
}

datosClima.propTypes = {
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoClima: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired
    })
}

export default datosClima;
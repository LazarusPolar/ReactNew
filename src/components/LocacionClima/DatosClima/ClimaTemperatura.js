import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
   CLOUD,
   CLOUDY,
   SUN, 
   RAIN, 
   SNOW, 
   WINDY
} from './../../../constants/climas'
import './styles.css'

const obtieneIconoNombre = (estadoClima) => {

    switch (estadoClima) {
        case CLOUD:
            return 'cloud'
            break;
        
        case CLOUDY:
            return 'snowy'
            break;
    
        default:
            return 'sleet'
            break;
    }

}

const obtieneIconoClima = (estadoClima) => {
    return <WeatherIcons name = {obtieneIconoNombre(estadoClima)} size = "2x" />
}

const climaTemperatura = ({temperatura, estadoClima}) => {
    return (
        <div className = 'climaTemperaturaCont'>
            {obtieneIconoClima(estadoClima)}
            <span>{`${temperatura} ºC`}</span>
        </div>
    )
}

// Manda errores para variaciones en las variables. 
// Ayuda a que las variables enviadas en los props sean de un tipo especifico
climaTemperatura.propTypes = {
    temperatura: PropTypes.number.isRequired,
    estadoClima: PropTypes.string
};

export default climaTemperatura
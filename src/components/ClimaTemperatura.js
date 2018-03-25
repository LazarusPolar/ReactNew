import React from 'react'
import WeatherIcons from 'react-weathericons'
import {
   CLOUD,
   CLOUDY,
   SUN, 
   RAIN, 
   SNOW, 
   WINDY
} from './../constants/climas'

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
        <div>
            {obtieneIconoClima(estadoClima)}
            <span>{`${temperatura} ºC`}</span>
        </div>
    )
}

export default climaTemperatura
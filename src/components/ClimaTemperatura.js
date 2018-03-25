import React from 'react'
import WeatherIcons from 'react-weathericons'

const getWeatherIcon = (estadoClima) => {
    switch (estadoClima) {
        case 'cloud':
            return <WeatherIcons name = "cloud" size = "2x" />
            break;
    
        default:
            return <WeatherIcons name = "sleet" size = "2x" />
            break;
    }
}

const climaTemperatura = ({temperatura, estadoClima}) => {
    return (
        <div>
            {getWeatherIcon(estadoClima)}
            <span>{`${temperatura} ºC`}</span>
        </div>
    )
}

export default climaTemperatura
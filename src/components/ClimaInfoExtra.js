import React from 'react'
import WeatherIcons from 'react-weathericons'

const climaInfoExtra = ({humedad, viento}) => {
    //Uso de Template strings para formato de cadenas 
    return (
        <div>
            <span>{`${humedad} % |  `}</span>
            <span>{`${viento} de viento`}</span>
        </div>
    )
}

export default climaInfoExtra;
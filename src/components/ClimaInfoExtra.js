import React from 'react'

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
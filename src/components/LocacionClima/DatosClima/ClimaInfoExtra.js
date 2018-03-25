import React from 'react'
import PropTypes from 'prop-types'

const climaInfoExtra = ({humedad, viento}) => {
    //Uso de Template strings para formato de cadenas 
    return (
        <div>
            <span>{`${humedad} % |  `}</span>
            <span>{`${viento} de viento`}</span>
        </div>
    )
}

climaInfoExtra.propTypes = {
    humedad: PropTypes.number,
    viento: PropTypes.string
}

export default climaInfoExtra;
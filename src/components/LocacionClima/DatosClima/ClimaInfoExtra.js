import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const climaInfoExtra = ({humedad, viento}) => {
    //Uso de Template strings para formato de cadenas 
    return (
        <div className = 'climaExtraInfoCont'>
            <span className = 'climaExtraInfoTexto'>{`${humedad} % |  `}</span>
            <span className = 'climaExtraInfoTexto'>{`${viento} de viento`}</span>
        </div>
    )
}

climaInfoExtra.propTypes = {
    humedad: PropTypes.number,
    viento: PropTypes.string
}

export default climaInfoExtra;
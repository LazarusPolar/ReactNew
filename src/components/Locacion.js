import React from 'react'
import PropTypes from 'prop-types'

const locacion = (props) => {   // En lugar de props podria ir ({ciudad})
    const { ciudad } = props; //Deconstruccion

    return (
        <div>  
            <h1> {ciudad} </h1>
        </div>
    )

    // ó
    /*
    (
        <div>  
            <h1> {ciudad} </h1>
        </div>
    )
    */
}

locacion.propTypes = {
    ciudad: PropTypes.string
}

export default locacion;
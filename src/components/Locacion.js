import React from 'react'

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

export default locacion;
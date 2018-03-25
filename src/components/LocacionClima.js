import React from 'react';
import DatosClima from './DatosClima'
import Locacion from './Locacion'

const locacionClima = () => {
    return (
        <div>
            <Locacion ciudad = {'Ciudad de Mexico'}> </Locacion>
            <DatosClima> </DatosClima>
        </div>   
    )
}

export default locacionClima;
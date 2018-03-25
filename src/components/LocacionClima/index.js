import React from 'react';
import DatosClima from './DatosClima/index'
import Locacion from './Locacion'
import {
    CLOUD,
    CLOUDY,
    SUN, 
    RAIN, 
    SNOW, 
    WINDY
 } from './../../constants/climas'

const datos = {
    temperatura: 20, 
    estadoClima: SUN,
    humedad: 10, 
    viento: '10 m/s'
}

const locacionClima = () => {
    return (
        <div>
            <Locacion ciudad = {'Ciudad de Mexico'}> </Locacion>
            <DatosClima datos = {datos} /> 
        </div>   
    )
}

export default locacionClima;
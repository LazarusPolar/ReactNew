import React, {Component} from 'react';
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

class locacionClima extends Component {
    render = () => { 
            <div>
                <Locacion ciudad = {'Ciudad de Mexico'}> </Locacion>
                <DatosClima datos = {datos} /> 
            </div>   
    }
}

export default locacionClima;
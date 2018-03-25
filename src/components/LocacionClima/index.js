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

const datos2 = {
    temperatura: 231, 
    estadoClima: SUN,
    humedad: 5, 
    viento: '10 m/s'
}

class locacionClima extends Component {
    constructor() {
        super();
        this.state = {
           ciudad: "Argentina", 
           datos: datos
        }
    }

    handlerActualizaClick = () => {
        this.setState ({
            ciudad: 'Ciudad de Mexico',
            datos: datos2
        }) 
    }

    render = () => {
        const {ciudad, datos} = this.state;
            return( 
                <div>
                    <Locacion ciudad = {ciudad}> </Locacion>
                    <DatosClima datos = {datos} /> 
                    <button onClick = {this.handlerActualizaClick}>Actualizar></button>
                </div>   
            )
    }
}

export default locacionClima;
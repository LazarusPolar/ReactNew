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
 const locacion = "Mexico,mx"
 const apiKey = "6b41a862b6575b8f8466d87b4388d99c"
 const apiClima = 'http://api.openweathermap.org/data/2.5/weather?q=' + locacion + '&appid=' + apiKey

const datos = {
    temperatura: 20, 
    estadoClima: SUN,
    humedad: 10, 
    viento: '10 m/s'
}

class locacionClima extends Component {

    //Estado inicial del renderizado
    constructor() {
        super();
        this.state = {
           ciudad: "Argentina", 
           datos: datos
        }
    }

    obtieneEstadoClima = clima => {
        return SUN;
    }

    obtieneDatos = (datosDeClima) => {
       const {humidity, temp} = datosDeClima.main;
       const {speed} = datosDeClima.wind;
       const weatherState = this.obtieneEstadoClima(this.clima)

       const data = {
           humedad: humidity, 
           temperatura: temp,
           estadoClima: weatherState,
           viento: speed + "m/s"
       }

       return data;
    }
    //Actualiza el estado una vez con el click del boton 
    handlerActualizaClick = () => {
        fetch(apiClima).then( data => {
            return data.json()
        }).then( datosDeClima => {
            const datos =  this.obtieneDatos(datosDeClima);
            this.setState({ datos })
            console.log(datosDeClima)
        })
        /*
        this.setState ({
            ciudad: 'Ciudad de Mexico',
            datos: datos2
        }) */
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
import convert from 'convert-units'
import {
    CLOUD,
    CLOUDY,
    SUN, 
    RAIN, 
    SNOW, 
    WINDY
 } from './../constants/climas'

const obtieneTemperatura = kelvin => {
    return convert(kelvin).from('K').to('C').toFixed(2);
}

const obtieneEstadoClima = (weather) => {
    const {id} = weather[0];

    if(id < 300){
        return CLOUD;
    } else {
        return CLOUDY;
    }

    return SUN;
}

const transformacionClima = (datosDeClima) => {
    const {weather} = datosDeClima;
    const {humidity, temp} = datosDeClima.main;
    const {speed} = datosDeClima.wind;
    const weatherState = obtieneEstadoClima(weather)
    const temperatura = obtieneTemperatura(temp); 

    const data = {
        humedad: humidity, 
        temperatura: temperatura,
        estadoClima: weatherState,
        viento: speed + "m/s"
    }

    return data;
 }

 export default transformacionClima;
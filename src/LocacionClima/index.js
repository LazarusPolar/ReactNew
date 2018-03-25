import React, {Component} from 'react';
import DatosClima from './DatosClima/index'
import Locacion from './Locacion'
import TransformacionClima from '../services/transformacionClima'

 const locacion = "Mexico,mx"
 const apiKey = "6b41a862b6575b8f8466d87b4388d99c"
 const apiClima = 'http://api.openweathermap.org/data/2.5/weather?q=' + locacion + '&appid=' + apiKey

class locacionClima extends Component {

    componentWillMount() {
        console.log("Hola")
        this.handlerActualizaClick();
    }

    //Estado inicial del renderizado
    constructor() {
        super();
        this.state = {
           ciudad: "Argentina", 
           datos: null
        }
    }
    
    //Actualiza el estado una vez con el click del boton 
    handlerActualizaClick = () => {
        fetch(apiClima).then( data => {
            return data.json()
        }).then( datosDeClima => {
            const datos =  TransformacionClima(datosDeClima);
            this.setState({ datos })
            console.log(datosDeClima)
        })
        /*
        this.setState ({
            ciudad: 'Ciudad de Mexico',
            datos: datos2
        }) */
    }

/*
    componentDidMount() {
        console.log('componentwillmount')
    }

    componentWillUpdate() {
        console.log('componentwillupdate')
    }

    componentDidUpdate() {
        console.log('componentdidupdate')
    }*/
    
    render = () => {
        console.log('render')
        const {ciudad, datos} = this.state;
            return( 
                <div>
                    <Locacion ciudad = {ciudad}> </Locacion>
                    {datos ? <DatosClima datos = {datos} /> : 'Cargando'}
                    <button onClick = {this.handlerActualizaClick}>Actualizar></button>
                </div>   
            )
    }
}

export default locacionClima;
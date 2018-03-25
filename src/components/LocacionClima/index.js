import React, {Component} from 'react';
import PropTypes from 'prop-types'
import DatosClima from './DatosClima/index'
import Locacion from './Locacion'
import CircularProgress from 'material-ui/CircularProgress'
import TransformacionClima from '../../services/transformacionClima'

 const apiKey = "6b41a862b6575b8f8466d87b4388d99c"

class LocacionClima extends Component {

    componentWillMount() {
        this.handlerActualizaClick();
    }

    //Estado inicial del renderizado
    constructor({ ciudad }) {
        console.log("Constructor")
        super();
        this.state = {
           ciudad: ciudad, 
           datos: null
        }
    }
    
    //Actualiza el estado una vez con el click del boton 
    handlerActualizaClick = () => {
        const apiClima = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.ciudad + '&appid=' + apiKey
        fetch(apiClima).then( data => {
            return data.json()
        }).then( datosDeClima => {
            const datos =  TransformacionClima(datosDeClima);
            this.setState({ datos })
            //console.log(datosDeClima)
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
                    {datos ? <DatosClima datos = {datos} /> : <CircularProgress />}
                    <button onClick = {this.handlerActualizaClick}>Actualizar></button>
                </div>   
            )
    }
}

LocacionClima.propTypes = {
   ciudad: PropTypes.string
}

export default LocacionClima;
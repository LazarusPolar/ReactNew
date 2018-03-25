import React, {Component} from 'react';
import PropTypes from 'prop-types'
import climaInfoExtra from './LocacionClima/DatosClima/ClimaInfoExtra';
import ClimaItem from './ClimaItem/index'
/*
const dias = [
    'Lunes', 
    'Martes', 
    'Miercoles',
    'Jueves',
    'Viernes', 
    'Sabado',
    'Domingo'
]

const datos = {
    temperatura: 10, 
    humedad: 10,
    estadoClima: 'CLOUD',
    viento: 10
}
*/

const apiKey = "6b41a862b6575b8f8466d87b4388d99c"
const apiClima = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.ciudad + '&appid=' + apiKey

class ClimaExtendido extends Component {

    constructor () {
        super ();
        this.state = {
            climaDatos: null
        }
    }

    renderDiasSemana = () => {
        return "Render Items"
        //return dias.map(dia => <ClimaItem diaSemana = {dia} hora = {"12"} datos = {datos}></ClimaItem>)
    }

    renderProgreso = () => {
       return "Cargando"
    }

    render() {
        const {ciudad} = this.props;
        const {climaDatos} = this.state;

        return (
            <div>
                Pronostico extendido para {ciudad}
                {climaDatos ?
                    this.renderDiasSemana():
                    this.renderProgreso()}
            </div>
        )
    }

    componentDidMount () {

    }
}

ClimaExtendido.propTypes = {
    ciudad: PropTypes.string.isRequired
}

export default ClimaExtendido;
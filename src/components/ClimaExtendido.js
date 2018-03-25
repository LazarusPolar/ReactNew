import React, {Component} from 'react';
import PropTypes from 'prop-types'
import climaInfoExtra from './LocacionClima/DatosClima/ClimaInfoExtra';
import ClimaItem from './ClimaItem/index'

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

class ClimaExtendido extends Component {
    renderDiasSemana = () => {
        return dias.map(dia => <ClimaItem diaSemana = {dia} hora = {"12"} datos = {datos}></ClimaItem>)
    }

    render() {
        const {ciudad} = this.props;

        return (
            <div>
                Pronostico extendido para {ciudad}
                {this.renderDiasSemana()}
            </div>
        )
    }
}

ClimaExtendido.propTypes = {
    ciudad: PropTypes.string.isRequired
}

export default ClimaExtendido;
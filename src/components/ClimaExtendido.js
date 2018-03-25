import React, {Component} from 'react';
import PropTypes from 'prop-types'
import climaInfoExtra from './LocacionClima/DatosClima/ClimaInfoExtra';
import ClimaItem from './ClimaItem/index'

class ClimaExtendido extends Component {
    render() {
        const {ciudad} = this.props;

        return (
            <div>
                Pronostico extendido para {ciudad}
                <ClimaItem></ClimaItem>
            </div>
        )
    }
}

ClimaExtendido.propTypes = {
    ciudad: PropTypes.string.isRequired
}

export default ClimaExtendido;
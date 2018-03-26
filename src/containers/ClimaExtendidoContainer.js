import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import ClimaExtendido from './../components/ClimaExtendido'

class ClimaExtendidoContainer extends Component {
    render() {
        return (
                this.props.ciudad &&
                <ClimaExtendido ciudad = {this.props.ciudad} />
        );
    }
}

ClimaExtendidoContainer.propTypes = {
    ciudad: PropTypes.string.isRequired
};

const mapStateToProps = ({ciudad}) => ({ ciudad: ciudad })

export default connect(mapStateToProps, null)(ClimaExtendidoContainer);
import React from 'react'
import PropTypes from 'prop-types'

const ClimaItem = ({ diaSemana }) => (
    <div>{ diaSemana }</div>
)

ClimaItem.propTypes = {
    diaSemana: PropTypes.string.isRequired
}

export default ClimaItem;
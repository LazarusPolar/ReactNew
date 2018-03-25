import React from 'react'
import moment from 'moment'
import 'moment/locale/es'
import transformacionClima from './../services/transformacionClima'

const TransformaForecast = datos => (
    datos.list.filter(
        item => (
            moment.unix(item.dt).hour() === 6 ||
            moment.unix(item.dt).hour() === 12 ||
            moment.unix(item.dt).hour() === 18
        )
    ).map(item => (
        {
        diaSemana: moment.unix(item.dt).format('ddd'),
        hora: moment.unix(item.dt).hour(),
        datos: transformacionClima(item)
    }))
)

export default TransformaForecast
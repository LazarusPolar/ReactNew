import React from 'react'
import moment from 'moment'

const TransformaForecast = datos => (
    datos.list.filter(
        item => (
            moment.unix(item.dt).hour() === 6 ||
            moment.unix(item.dt).hour() === 12 ||
            moment.unix(item.dt).hour() === 18
        )
    )
)

export default TransformaForecast
import React from 'react'
import ClimaTemperatura from './ClimaTemperatura'
import ClimaInfoExtra from './ClimaInfoExtra'

const datosClima = () => {
    return (
        <div> 
            <ClimaTemperatura> </ClimaTemperatura>
            <ClimaInfoExtra humedad = {80} viento = {'10 m/s'}> </ClimaInfoExtra>
        </div>
    )
}

export default datosClima;
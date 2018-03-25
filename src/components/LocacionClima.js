import React from 'react';
import DatosClima from './DatosClima'
import Locacion from './Locacion'
import ClimaTemperatura from './ClimaTemperatura'
import ClimaInfoExtra from './ClimaInfoExtra'

const locacionClima = () => {
    return (
        <div>
            <Locacion ciudad = {'Ciudad de Mexico'}> </Locacion>
            <DatosClima> </DatosClima>
            <ClimaTemperatura> </ClimaTemperatura>
            <ClimaInfoExtra> </ClimaInfoExtra>
        </div>   
    )
}

export default locacionClima;
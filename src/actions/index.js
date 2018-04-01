export const SET_CIUDAD = 'SET_CIUDAD'

export const setCiudad = payload => ({
    type: SET_CIUDAD,
    payload
  })

export const fetchClima = payload => {
  return dispatch => {
        const apiKey = "6b41a862b6575b8f8466d87b4388d99c"
        const apiClima = 'http://api.openweathermap.org/data/2.5/forecast?q=' + ciudad + '&appid=' + apiKey

        // Activar indicador de busqueda
        fetch(apiClima).then(
            data => (data.json())
        ).then(
            datosClima => {
                const climaDatos = transformaForecasts(datosClima)
                console.log(climaDatos)

                // Modifica estado con el resultado de promise
            }
        )
        return;
  };
};
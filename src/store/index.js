import {createStore} from 'redux'
import { ciudad } from './../reducers/ciudad'

const estadoInicial = {
    ciudad: 'Mexico,MX'
}

export const store = createStore(ciudad, estadoInicial, window. __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

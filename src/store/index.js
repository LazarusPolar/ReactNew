import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { ciudad } from './../reducers/ciudad'

const estadoInicial = {
    ciudad: 'Mexico,MX'
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(ciudad, estadoInicial, composeEnhancers(applyMiddleware(thunk)));

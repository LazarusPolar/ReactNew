import { SET_CIUDAD } from './../actions/index'

export const ciudad = (state = {}, action) => {
    switch (action.type) {
        case SET_CIUDAD:
            return {...state, ciudad: action.payload}

        default: 
            return state
    }
}

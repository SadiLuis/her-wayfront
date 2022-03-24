import {GET_PERFILC } from "../actions/index"
const initialState = {
    
    perfilConductora: {}
}


export default function perfilConductoraReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PERFILC:
            return {
                ...state,
                perfilConductora: action.payload
            }
            default:
                return state;
    }
}


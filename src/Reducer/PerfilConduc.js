
import {GET_PERFILC } from "../actions/index"
const initialState = {
    //request:[],
    perfilConductora: [],
    aux: []

}


export default function perfilConductoraReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PERFILC:
            return {
                ...state,
                perfilConductora: action.payload,
                //request: action.payload
                    
            }

            case "CONECTA_CONDUCTORA":
                return {
                    ...state,
                    aux: action.payload
                }
                case "DESCONECTA_CONDUCTORA":
                    return {
                        ...state,
                        aux: action.payload
                    }    
            
            default:
                return state;

    }

}


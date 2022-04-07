import { PEDIR_CONDUCTORA } from "../actions";

const initialState = {
    
    viajesConductora: {},
    viajeRequeridoConductora: false,
    viajeRequeridoConductoraDetalle: [],
    viajePorId: [],
    viajeReqPasajera: []


}


export default function viajesReducer(state = initialState, action) {
    switch (action.type) {
            case "VIAJE_REQUERIDO":
                return {
                    ...state,
                    viajeRequeridoConductora: action.payload
                } 
            case PEDIR_CONDUCTORA:
                return{
                ...state,
                viajeRequeridoConductoraDetalle: action.payload
                }
                case "VIAJE_POR_IDVIAJE":
                    return {
                        ...state,
                        viajePorId: action.payload
                    }
                case "VIAJE_REQUERIDO_PASAJERA":
                    return {
                        ...state,
                        viajeReqPasajera: action.payload
                    }                  

            default:
                return state;
    }
}


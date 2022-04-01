import { MIS_VIAJES_PASAJERA, VIAJES_POR_PASAJERA } from "../actions";

const initialState={
    misViajesPasajera:[],
    viajesPorPasajera:[]
}
export default function misViajesPasajeraReducer(state=initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case MIS_VIAJES_PASAJERA:
            return {
                ...state,
                
                misViajesPasajera:payload
            }

            case VIAJES_POR_PASAJERA:
                return {
                    ...state,
                    viajesPorPasajera:payload
                }
            


            default:
                return {
                    ...state
                }

    }
}
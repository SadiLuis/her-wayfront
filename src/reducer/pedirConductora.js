import { FILTRAR_CONDUCTORA_SEGUN_AUTO, PEDIR_CONDUCTORA } from "../actions/actionsTypes";

const initialState={
    todasLasConductoras:[],
    conductora:[],
    filtros: []
}

export default function pedirConductoraReducer(state=initialState, action){
    switch(action.type){
        case PEDIR_CONDUCTORA:
            return {
                ...state,
                todasLasConductoras: action.payload,
                filtros: action.payload
            }

        case FILTRAR_CONDUCTORA_SEGUN_AUTO:
            const filtroConductoras = action.payload === 'Todas las Gamas'
            ? state.todasLasConductoras
            : state.todasLasConductoras.filter((conductora) => conductora.tipo_auto === action.payload)
            return {
                ...state,
                filtros: filtroConductoras
            }   
             
        default:
            return state;
    }
}